var exports = module.exports = {};

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    strftime = require('strftime'),
    mkdirp = require('mkdirp');

mkdirp.sync('c:/inswave/s-tester/logs');
var service = new chrome.ServiceBuilder()
     .loggingTo('c:/inswave/s-tester/logs/w-browser-' + strftime('%Y%m%d.%H%M%S') + '.txt')
     .enableVerboseLogging()
     .build();

// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html
// http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Options.html

var options = new chrome.Options()
     .setChromeBinaryPath("c:/inswave/w-browser/w-browser.exe");
//     .setPerfLoggingPrefs({bufferUsageReportingInterval: number, enableNetwork: boolean, enablePage: boolean, enableTimeline: boolean, tracingCategories: string});

var driver = new chrome.Driver(options, service);

exports.driver = driver;
exports.webdriver = webdriver;
