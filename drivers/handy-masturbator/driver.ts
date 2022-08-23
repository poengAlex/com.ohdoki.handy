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

  async onInit() {
    this.log('MyDriver has been initialized');
    const hampStart = this.homey.flow.getActionCard("hamp-start");
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
