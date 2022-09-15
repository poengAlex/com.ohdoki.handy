import Homey from 'homey';
import PairSession from 'homey/lib/PairSession';
// import { PairSession } from 'homey/lib/Driver';
import Handy from '../../logic/handy';

class MyDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  handy: Handy | undefined;
  connected = false;
  offlineFlow!: Homey.FlowCardTriggerDevice;
  onlineFlow!: Homey.FlowCardTriggerDevice;

  triggerOffline(device: any, tokens: any, state: any) {
    this.offlineFlow
      .trigger(device, tokens, state)
      .then(this.log)
      .catch(this.error);
  }

  triggerOnline(device: any, tokens: any, state: any) {
    this.onlineFlow
      .trigger(device, tokens, state)
      .then(this.log)
      .catch(this.error);
  }

  async onInit() {
    this.log('MyDriver has been initialized');
    // const hampStart = this.homey.flow.getActionCard("hamp-start");

    this.offlineFlow = this.homey.flow.getDeviceTriggerCard("handy-offline");
    this.onlineFlow = this.homey.flow.getDeviceTriggerCard("handy-online");

    const hampStart = this.homey.flow.getActionCard("hamp-start");
    hampStart.registerRunListener(async (args, state) => {
      //
      this.log("args:", args);
      this.log("state:", state);
      // this.log("handy:", args.device.handy); //The Handy object

      let { start } = args;
      start = start === "start";
      await args.device.handy?.hampStart(start);
    })

    const hampVelocity = this.homey.flow.getActionCard("hamp-velocity");
    hampVelocity.registerRunListener(async (args, state) => {
      this.log(args);
      const { velocity } = args;
      await args.device.handy?.hampVelocity(velocity);
    });

    const strokeZone = this.homey.flow.getActionCard("stroke-zone");
    strokeZone.registerRunListener(async (args, state) => {
      this.log(args);
      const { min, max } = args;
      await args.device.handy?.setStrokeZone(min, max);
    })

    const setPosition = this.homey.flow.getActionCard("set-position");
    setPosition.registerRunListener(async (args, state) => {
      this.log(args);
      const { duration, position } = args;
      await args.device.handy?.goToPosition(duration, position);
    })

    const playScript = this.homey.flow.getActionCard("play-script");
    playScript.registerRunListener(async (args, state) => {
      this.log(args);
      const { url } = args;
      await args.device.handy?.playScript(url);
    })
    //
    const playScriptPreset = this.homey.flow.getActionCard("play-script-preset");
    playScriptPreset.registerRunListener(async (args, state) => {
      this.log(args);
      const { preset } = args;
      await args.device.handy?.playScriptPrest(preset);
    })

    const conditionConnected = this.homey.flow.getConditionCard("handy-connected");
    conditionConnected.registerRunListener(async (args, state) => {
      const connected = await args.device.handy?.getConnected();
      this.log("Connected:", connected);
      return connected;
    });
  }

  onPair(session: any) {
    session.setHandler("connect", async (data: any) => {
      this.log('data:', data);
      this.handy = new Handy(data.key, this);
      const connected = await this.handy?.getConnected();
      this.log("connected:", connected);
      return connected;
    });
  }
}

module.exports = MyDriver;
