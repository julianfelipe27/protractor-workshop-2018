import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';


export const config: Config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  SELENIUM_PROMISE_MANAGER:false,
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
};
