// An example configuration file.
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  Capabilities: {
    browserName: 'chrome'
  },

   specs: ['angular_Calc_test_spec.js'],
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  onPrepare: function() {

      return global.browser.getProcessedConfig().then(function (config) {
          var Jasmine2HtmlReporter = require('D:/Languages/Eclipse Oxygen WS/Test_Protractor/protractor-jasmine2-html-reporter/index.js');

          jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
              savePath:'D:/Languages/Eclipse Oxygen WS/Test_Protractor/protractor-jasmine2-html-reporter/test/reports/',
            }));
          
          var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

          jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
              dest: 'D:/Languages/Eclipse Oxygen WS/Test_Protractor/protractor-jasmine2-html-reporter/test/reports/screenshots',
              //filename: 'my-report.html'
            })
          );
      });


  },
  
  


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	  showColors: true,
    defaultTimeoutInterval: 30000
  }
  
};



