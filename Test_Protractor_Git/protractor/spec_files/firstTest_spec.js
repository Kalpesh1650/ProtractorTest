describe('Login functionality for Stingray Application', function() {
  it('should login successfully to Stingray', function() {
	  
	browser.waitForAngularEnabled(false);
    browser.get('http://206.142.241.41/stingray/web/login.jsp');
    browser.manage().window().maximize();
    var userName = 'Test Underwriter HHaz 1';
    var passCode = 'pas5wordA';
    
    element(by.name('username')).sendKeys(userName);
    element(by.name('password')).sendKeys(passCode);
    
    element(by.linkText('Login')).click();
    
    var newQuoteLink = element(by.linkText('+ New Quote'));
    expect(newQuoteLink.isDisplayed()).toBe(true);
    browser.driver.sleep(1000);
  });

  });
