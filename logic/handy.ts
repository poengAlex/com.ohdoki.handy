import Homey from 'homey';
import { handyApi, Mode, ModeUpdateResponse, OpenAPIConfig, RPCResult } from '../API';

/**
 * TODO: Add this class to a driver so you can add multiple Handys
 */

export type State = {
    version: 0, //for backward compability
    syncedTime: number,
    connected: boolean,
    mode: number,
}
type StateCb = (state: State) => void
const STATE_STORAGE_KEY = 'state';

export default class Handy {
    connetionKey: string;
    #device: Homey.Device | Homey.Driver;
    api: handyApi;
    #state!: State;
    #stateChangeCb!: StateCb

    constructor(connetionKey: string, app: Homey.Device | Homey.Driver, stateChangeCb: StateCb | undefined = undefined) {
        app.log("Createing a new Handy instance");
        this.connetionKey = connetionKey;
        this.#device = app;
        const config: Partial<OpenAPIConfig> = {
            // HEADERS: {
            //   // Authorization: "Bearer " + connectionKey
            // },
            BASE: "https://www.handyfeeling.com/api/handy/v2"
        }
        this.api = new handyApi(config);
        this.setStateToUnknow();
        if (stateChangeCb) this.#stateChangeCb = stateChangeCb;

    }

    setStateToUnknow() {
        this.#state = {
            version: 0,
            syncedTime: 0,
            connected: false,
            mode: -1 as Mode
        }
    }

    async getStoredState() {
        const storedState = this.#device.homey.settings.get(STATE_STORAGE_KEY) as State | null;
        let needsSync = true;
        if (storedState !== null) {
            this.#device.log("Got stored state:", storedState);

            if (storedState.version === this.#state.version) {
                const deltaTime = Date.now() - storedState.syncedTime;
                if (deltaTime < 10 * 60 * 1000) {
                    this.#device.log("State in sync");
                    needsSync = false;
                } else {
                    this.#device.log("State sync is old. Needs sync")
                }
            } else {
                this.#device.log("Incompatible stored state version");
            }
        } else {
            this.#device.log("No stored state")
        }
        if (needsSync) {
            try {
                const ok = await this.syncState();
            } catch (err) { this.#device.log(err) }

        }
    }

    async hampStart(start: boolean) {
        try {
            if (this.#state.mode !== Mode.HAMP) {
                await this.setMode(Mode.HAMP);
            }
            if (start) {
                const res = await this.api.hamp.start(this.connetionKey);
                this.#device.log(res);
            } else {
                const res = await this.api.hamp.hampStop(this.connetionKey);
                this.#device.log(res);
            }

        } catch (err) { this.#device.log(err); this.setStateToUnknow(); throw (err) }
    }

    async hampVelocity(velocity: number) {
        try {
            const res = await this.api.hamp.setHampVelocityPercent(this.connetionKey, { velocity });
            this.#device.log(res);
        } catch (err) { this.#device.log(err); this.setStateToUnknow(); throw (err) }

    }

    async getConnected() {
        try {
            const connected = (await this.api.base.isConnected(this.connetionKey)).connected;
            return connected;
        } catch (err) { this.#device.log(err) }
        return false;
    }

    async setStrokeZone(min: number, max: number) {
        try {
            const res = await this.api.slide.setSlide(this.connetionKey, { min, max });
            this.#device.log(res);
        } catch (err) { this.#device.log(err); this.setStateToUnknow(); throw (err) }

    }

    async goToPosition(duration: number, position: number) {
        try {
            if (this.#state.mode !== Mode.HDSP) {
                await this.setMode(Mode.HDSP);
            }
            const res = await this.api.hdsp.nextPositionAbsInTime(this.connetionKey, { position, duration })
            this.#device.log(res);
        } catch (err) { this.#device.log(err); this.setStateToUnknow(); throw (err) }

    }

    async getEstimatedServerTime() {
        let start = Date.now();
        let serverTime = (await this.api.timesync.getServerTime()).serverTime;
        let rtd = Date.now() - start;
        serverTime = Math.round(serverTime + rtd / 2);
        return { rtd, serverTime }
    }

    async playScriptPrest(preset: string) {
        const url = "https://sweettecheu.s3.eu-central-1.amazonaws.com/preset/" + preset + ".csv";
        await this.playScript(url);
    }

    async playScript(url: string) {
        try {
            if (this.#state.mode !== Mode.HSSP) {
                await this.setMode(Mode.HSSP);
            }
            const scriptSetupRes = await this.api.hssp.setup(this.connetionKey, { url });
            this.#device.log(scriptSetupRes);
            const { rtd, serverTime } = await this.getEstimatedServerTime();
            const serverTimeAltered = Math.round(serverTime - rtd / 2); //Try to play the script from start
            const hsspPlayRes = await this.api.hssp.play(this.connetionKey, { startTime: 0, estimatedServerTime: serverTimeAltered });
            this.#device.log(hsspPlayRes);
        } catch (err) { this.#device.log(err); this.setStateToUnknow(); throw (err) }

    }

    async setMode(mode: Mode) {
        try {
            let modeRes = (await this.api.base.setMode(this.connetionKey, { mode: mode })) as ModeUpdateResponse;
            if (modeRes.result === 0 || modeRes.result === 1) {
                this.#state.mode = mode;
                this.updateState();
            }
        } catch (err) { this.#device.log(err) }
    }

    updateState() {
        this.#device.homey.settings.set(STATE_STORAGE_KEY, this.#state);
        if (this.#stateChangeCb !== undefined) {
            this.#stateChangeCb(this.#state);
        }
    }

    async syncState() {
        this.#device.log("Syncing state");
        try {
            this.#state.connected = (await this.api.base.isConnected(this.connetionKey)).connected;
            if (this.#state.connected) {
                const modeRes = (await this.api.base.getMode(this.connetionKey)) as (RPCResult & { mode: Mode; })
                if (modeRes.result === 0) {
                    this.#state.mode = modeRes.mode;
                } else {
                    return false;
                }
                this.#state.syncedTime = Date.now();
                this.#device.log("State synced", this.#state);
                this.updateState();
                return true;
            }
        } catch (err) { this.#device.log(err) }
        return false
    }
}