

const { SpecReporter } = require('jasmine-spec-reporter');
const { config } = require('./generalConfig');
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions':{
      'args': ['--headless', '--disable-gpu', '--log-level=3', '--disable-dev-shm-usage', '--no-sandbox']
    }
  },
  ...config
};
