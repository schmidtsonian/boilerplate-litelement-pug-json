var browserstack = require('browserstack-local');
var secrets      = require('./secrets.json');

nightwatch_config = {
  src_folders: ["tests/js/acceptance"],

  selenium: {
    "start_process": false,
    "host": "hub-cloud.browserstack.com",
    "port": 80
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'build': 'nightwatch-browserstack',
        'browserstack.user': secrets.user,
        'browserstack.key': secrets.key,
        'browserstack.debug': true,
        'browserstack.local': true,
        'browser': 'chrome'
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for (var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
