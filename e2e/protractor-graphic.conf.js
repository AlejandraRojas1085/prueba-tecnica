// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { config } = require('./generalConfig');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions':{
      'args': ['--disable-gpu', '--log-level=3', '--disable-dev-shm-usage', '--no-sandbox']
    }
  },
  ...config
};
