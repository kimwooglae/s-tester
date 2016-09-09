/*
var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until;
var fs = require('fs');
var strftime = require('strftime');

var service = new chrome.ServiceBuilder()
     .loggingTo('c:/inswave/s-tester/logs/file.txt')
     .enableVerboseLogging()
     .build();

// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html
// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Options.html

var options = new chrome.Options()
     .setChromeBinaryPath("c:/inswave/w-browser/w-browser.exe")
//     .setPerfLoggingPrefs({bufferUsageReportingInterval: number, enableNetwork: boolean, enablePage: boolean, enableTimeline: boolean, tracingCategories: string});

var driver = new chrome.Driver(options, service);

*/
/*

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
*/

var w_browser = require('./setup/w-browser.js');
var util = require('./util.js');
var driver = w_browser.driver,
    until = webdriver.until,
  webdriver = w_browser.webdriver,
  takeScreenshot = util.takeScreenshot;

driver.get('http://demo:7080/websquare/websquare.html?w2xPath=/SWING/AAT/xml/main_fv.xml')
.then(function() {
    return driver.findElement(By.id('btn_findPop'));
}).then(function() {
    return takeScreenshot(driver,"load_complete");
}).then(function() {
    return driver.findElement(By.id('btn_findPop')).click();
}).then(function() {
    return driver.findElement(By.id('edt_keyword')).click();
}).then(function() {
    return driver.findElement(By.id('edt_keyword')).sendKeys("샘플");
}).then(function() {
    return driver.sleep(100);
}).then(function() {
    return driver.findElement(By.id('edt_keyword')).sendKeys(webdriver.Key.ENTER);
}).then(function() {
    //mdi01_subWindow0_iframe
    //mdi01_subWindow1_iframe
    return driver.switchTo().frame('mdi01_subWindow1_iframe');
}).then(function() {
    //return driver.findElement(By.id('edt_cond')).sendKeys("promise", webdriver.Key.ENTER);
    return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys("prom", webdriver.Key.ENTER);
}).then(function() {
    return takeScreenshot(driver,"sample_page");
}).then(function() {
    return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys(webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, "초기화", webdriver.Key.ENTER);
//    return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, "a"), "초기화", webdriver.Key.ENTER);
}).then(function() {
    return driver.findElement(By.id('btn_clearAll')).click();        // 동작 안함
}).then(function() {
    return driver.sleep(1000);
}).then(function() {
    return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys(webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, webdriver.Key.BACK_SPACE, "화면", webdriver.Key.ENTER);
}).then(function() {
    return driver.switchTo().defaultContent();
}).then(function() {
//http://localhost:7080/websquare/websquare.html?w2xPath=/SWING/AAT/xml/../../EDU/xml/testSimulation/ZORDSS01S0010_T.xml&w2xHome=/SWING/AAT/xml/&w2xDocumentRoot=
    return driver.executeScript('ngmf.newWindow("ORD", "ZORDSS01S0010");');
}).then(function() {
    return takeScreenshot(driver,"ZORDSS01S0010");
}).then(function() {
    return driver.sleep(3000);
}).then(function() {
    return driver.executeScript('ngmf.closeWindow("ZORDSS01S0010");');
//}).then(function() {
//    return driver.findElement(By.id('btn_clearAll')).click();        // 동작 안함
}).then(function() {
    return takeScreenshot(driver,"finished");
}).then(function() {
    return driver.sleep(3000);
}).then(function() {
    driver.quit();
});

