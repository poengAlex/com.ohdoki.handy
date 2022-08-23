/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Possible HSSP states: <ul> <li>NEED_SYNC(1) - The device need to synchronize with the server. Only returned from devices with firmware version <= 3.1.x</li> <li>NEED_SETUP(2) - No script have yet been setup on the device.</li> <li>STOPPED(3) - The script execution is stopped.</li> <li>PLAYING(4) - The device is executing the script.</li> </ul>
 */
export enum HSSPState {
    /**
     * NEED_SYNC
     */
    NEED_SYNC = 1,
    /**
     * NEED_SETUP
     */
    NEED_SETUP = 2,
    /**
     * STOPPED
     */
    STOPPED = 3,
    /**
     * PLAYING
     */
    PLAYING = 4,
}
