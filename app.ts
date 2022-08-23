import Homey from 'homey';
import { handyApi, OpenAPIConfig } from './API';
import Handy from './logic/handy';

class MyApp extends Homey.App {

  handy: Handy | undefined;
  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('The Handy app has been initialized');
    const onlineIntervalTime = this.homey.settings.get('interval-time');
    this.log("onlineIntervalTime:", onlineIntervalTime);
    if (onlineIntervalTime == null) {
      this.homey.settings.set('interval-time', 10000);
    }



    if (false) {
      const hampStart = this.homey.flow.getActionCard("hamp-start");
      hampStart.registerRunListener(async (args) => {
        //
        this.log(args);
        const { start } = args;
        await this.handy?.hampStart(start);
      })

      const hampVelocity = this.homey.flow.getActionCard("hamp-velocity");
      hampVelocity.registerRunListener(async (args) => {
        this.log(args);
        const { velocity } = args;
        await this.handy?.hampVelocity(velocity);
      });

      const strokeZone = this.homey.flow.getActionCard("stroke-zone");
      strokeZone.registerRunListener(async (args) => {
        this.log(args);
        const { min, max } = args;
        await this.handy?.setStrokeZone(min, max);
      })

      const setPosition = this.homey.flow.getActionCard("set-position");
      setPosition.registerRunListener(async (args) => {
        this.log(args);
        const { duration, position } = args;
        await this.handy?.goToPosition(duration, position);
      })

      const playScript = this.homey.flow.getActionCard("play-script");
      playScript.registerRunListener(async (args) => {
        this.log(args);
        const { url } = args;
        await this.handy?.playScript(url);
      })
      //
      const playScriptPreset = this.homey.flow.getActionCard("play-script-preset");
      playScriptPreset.registerRunListener(async (args) => {
        this.log(args);
        const { preset } = args;
        await this.handy?.playScriptPrest(preset);
      })

      const conditionConnected = this.homey.flow.getConditionCard("handy-connected");
      conditionConnected.registerRunListener(async () => {
        const connected = await this.handy?.getConnected();
        this.log("Connected:", connected);
        return connected;
      });

      const triggerOnline = this.homey.flow.getTriggerCard("handy-online");
      const triggerOffline = this.homey.flow.getTriggerCard("handy-offline");



      if (onlineIntervalTime) {
        let connected = await this.handy?.getConnected();
        //TODO: Move to driver and set timer on homey
        // setInterval(() => {
        //   this.handy?.getConnected().then(_connected => {
        //     if (_connected !== connected) {
        //       connected = _connected;
        //       if (_connected) {
        //         triggerOnline.trigger();
        //       } else {
        //         triggerOffline.trigger();
        //       }
        //     }
        //   })
        // }, onlineIntervalTime)
      }
    }

  }

}

module.exports = MyApp;
