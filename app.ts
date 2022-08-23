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
  }

}

module.exports = MyApp;
