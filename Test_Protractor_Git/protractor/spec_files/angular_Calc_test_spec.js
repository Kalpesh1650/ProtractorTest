var SelectWrapper  = require('../spec_files/select_option_wrapper.js');
var operatorySelectlist = new SelectWrapper(by.model('operator'));

beforeEach(function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.manage().window().maximize();
})

describe('Calculator Application', function() {
    it('Should perform addition of two numbers', function() {
        
      element(by.model('first')).sendKeys("1");
      element(by.model('second')).sendKeys("2");

      element(by.id('gobutton')).click();
      
      expect(element(by.binding('latest')).getText()).
      toEqual('3'); 


      browser.driver.sleep(1000);
    });

    it('Should perform multiplication of two numbers', function() {
        
        element(by.model('first')).sendKeys("10");
                
        operatorySelectlist.selectByText('*');

        element(by.model('second')).sendKeys("5");
  
        element(by.id('gobutton')).click();
        
        expect(element(by.binding('latest')).getText()).
        toEqual('50'); 
  
  
        browser.driver.sleep(1000);
      });
    
  
  
    });
  