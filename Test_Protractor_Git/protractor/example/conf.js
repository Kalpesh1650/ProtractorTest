// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
//Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  onPrepare: function() {

      return global.browser.getProcessedConfig().then(function (config) {
          var Jasmine2HtmlReporter = require('D:/Languages/Eclipse Oxygen WS/Test_Protractor/protractor-jasmine2-html-reporter/index.js');

          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
              savePath:'D:/Languages/Eclipse Oxygen WS/Test_Protractor/protractor-jasmine2-html-reporter/test/reports/'
          }));
      });


  },


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors: true,
    defaultTimeoutInterval: 30000
  }
  
};



