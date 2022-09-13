import Homey from 'homey';
import Handy, { State } from '../../logic/handy';


class MyDevice extends Homey.Device {
  handy: Handy | undefined;
  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('MyDevice (handy) has been initialized');
    this.unsetWarning();
    const onlineIntervalTime = this.homey.settings.get('interval-time');
    this.log("onlineIntervalTime:", onlineIntervalTime);

    const key = this.getSettings().key;
    this.log("key:", key);

    this.handy = new Handy(key, this, (state: State) => {
      this.log("On state change", state);
      this.setCapabilityValue("state_online", state.connected);
      this.setCapabilityValue("state_mode", state.mode);
    });

    this.setCapabilityValue("hamp", false);
    this.registerCapabilityListener("hamp", async (start: boolean, listner: Homey.Device.CapabilityCallback) => {
      this.log("onHamp. value:", start);
      this.log("listner:", listner);

      await this.handy?.hampStart(start);
      this.setCapabilityValue("hamp", start);
      this.setCapabilityValue("hamp_velocity", 0);
    });

    this.setCapabilityValue("hamp_velocity", 0);
    this.registerCapabilityListener("hamp_velocity", async (velocity) => {
      this.log("hamp_velocity. value:", velocity);
      await this.handy?.hampVelocity(velocity)
    });


    this.setCapabilityValue("set_position", 0);
    this.registerCapabilityListener("set_position", async (position) => {
      this.log("set_position. value:", position);
      await this.handy?.goToPosition(position, 500);
      this.setCapabilityValue("set_position", position);
    });

    // this.setCapabilityValue("stroke_zone", "full");
    this.registerCapabilityListener("stroke_zone", async (stroke) => {
      this.log("set_position. value:", stroke);
      let min = 0;
      let max = 100;
      if (stroke === "full") {
        min = 0;
        max = 100;
      } else if (stroke === "tip") {
        min = 67;
        max = 100;
      }
      else if (stroke === "base") {
        min = 0;
        max = 33;
      }
      else if (stroke === "base-md") {
        min = 0;
        max = 50;
      }
      else if (stroke === "base-lg") {
        min = 0;
        max = 67;
      }
      else if (stroke === "middle") {
        min = 33;
        max = 67;
      }
      await this.handy?.setStrokeZone(min, max);
      // this.setCapabilityValue("set_position", stroke);
    });

    this.setCapabilityValue("set_position", 0);
    this.registerCapabilityListener("set_position", async (position) => {
      this.log("set_position. value:", position);
      // this.setWarning("Not online!")
      await this.handy?.goToPosition(position, 500);
    });

    //TODO: Add play script and play script presset

    // this.setCapabilityValue("play_sc", 0);
    this.registerCapabilityListener("play_script_preset", async (preset) => {
      this.log("play_script_preset. value:", preset);
      await this.handy?.playScriptPrest(preset);
    });

    this.registerCapabilityListener("play_script", async (url) => {
      this.log("play_script. value:", url);
      await this.handy?.playScript(url);
    });

    //TODO: Add more states


    let device = this; // We're in a Device instance
    let tokens = {};
    let state = {};

    await this.handy?.getConnected();

    let connected = this.handy.state.connected;
    this.homey.setInterval(async () => { //Set the timer on Homey so the interval is cleared correctly
      try {
        const con = await this.handy?.getConnected() as boolean;
        if (typeof con === 'boolean' && con !== connected) {
          this.log("Triger connected change. from,to:", connected, con);
          connected = con;
          if (connected) {
            (this.driver as any).triggerOnline(device, tokens, state);
          } else {
            (this.driver as any).triggerOffline(device, tokens, state);
          }
          this.handy!.state.connected = connected;
        }
      } catch (error) {

      }

    }, onlineIntervalTime)
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('MyDevice has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({ oldSettings: { }, newSettings: { }, changedKeys: { } }): Promise<string | void> {
    this.log('MyDevice settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name: string) {
    this.log('MyDevice was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('MyDevice has been deleted');
  }

}

module.exports = MyDevice;
