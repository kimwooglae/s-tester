
/*
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

*/

var w_browser = require('./setup/w-browser.js'),
  util = require('./util.js'),
  driver = w_browser.driver,
  webdriver = w_browser.webdriver,
  By = webdriver.By,
  Key = webdriver.Key,
  until = webdriver.until,
  takeScreenshot = util.takeScreenshot;

var url = 'http://172.31.196.21:8060/websquare/websquare.html?w2xPath=/SWING/AAT/xml/main_fv_b.xml';
// var url = 'http://tst.sktelecom.com:8601/websquare/websquare.html?w2xPath=/SWING/AAT/xml/main_fv_t.xml';

var testData =  ['01052353237','01040371411','01008244495','01025888121','01022094433','01038413638','01028982301','01071501827','01064861827','01034594019','01099702874','01004630151','01075033389','01082435030','01024229578','01093070761'];

var promise = connect();

for(var i = 0; i < 100 ; i++) {
  promise = promise.then(function() {
      return load1();
  }).then(function() {
      return moveFrame("ZINBSCNS00110");
  }).then(function() {
      return retrieve1();
  }).then(function() {
      return closeFrame();
  });
}



function getTestData() {
  var idx = Math.round(Math.random() * testData.length * 2)%testData.length;
  console.log("TestData : " + idx + " " + testData[idx]);
  return testData[idx];
}

function connect() {
  return driver.get(url);
}

function load1() {
 var start = new Date().getTime();
  return Promise.resolve().then(function() {
      return driver.wait(until.elementLocated(By.id('btn_findPop')), 30000).click();
  }).then(function() {
      return takeScreenshot(driver,"load_complete");
  }).then(function() {
    return driver.executeScript( 'cob_findType.setSelectedIndex(1)');
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).click();
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).sendKeys("ZINBSCNS00110");  // 고객상담
  }).then(function() {
      return driver.sleep(100);
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).sendKeys(Key.ENTER);  // 고객상담
  }).then(function() {
     console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
  }).then(function() {
    return takeScreenshot(driver,"ZINBSCNS00110_load");
  });
}

function moveFrame(scrID) {
  return Promise.resolve().then(function() {
    return driver.switchTo().defaultContent();
  }).then(function() {
    return driver.executeScript( 'return mdi01.getWindow("' + scrID + '").frameElement.id');
  }).then(function(ret) {
    console.log("iframe name : " + ret);
    return driver.switchTo().frame(ret);
  });
}

function retrieve1() {
 var start = null;
  return Promise.resolve().then(function() {// ___processbar2
      return driver.wait(until.elementLocated(By.id('___processbar2')), 10000);
  }).then(function() {
//      return driver.sleep(10000);
      return driver.wait(until.elementIsNotVisible({'id':'___processbar2'}), 10000);
  }).then(function() {
      return driver.wait(until.elementLocated(By.id('input_udc_edt_svc_num')), 10000).click();
  }, 
  function() {  // catch
      return driver.wait(until.elementLocated(By.id('input_udc_edt_svc_num')), 10000).click();
  }).then(function() {
      start = new Date().getTime();
      return driver.findElement(By.id('input_udc_edt_svc_num')).sendKeys(getTestData());
  }).then(function() {
      return driver.sleep(100);
  }).then(function() {
      return driver.findElement(By.id('input_udc_edt_svc_num')).sendKeys(Key.ENTER);
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_retrieve");
  }).then(function() {
    return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(1)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab1");
  }).then(function() {
    return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(2)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab2");
  }).then(function() {
    return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(3)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab3");
  }).then(function() {
    return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(4)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab4");
  }).then(function() {
      return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(5)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab5");
  }).then(function() {
      return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(6)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab6");
  }).then(function() {
      return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(7)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab7");
  }).then(function() {
      return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(8)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab8");
  }).then(function() {
      return driver.executeScript( 'div_cnslHst_tc_ZINBSCNS00650.setSelectedTabIndex(9)');
  }).then(function() {
//      return driver.wait(until.elementIsNotVisible(By.id('___processbar2')), 5000);
      return driver.sleep(5000);
  }).then(function() {
      return takeScreenshot(driver,"ZINBSCNS00110_tab9");
  }).then(function() {
     console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
  });
}

function closeFrame() {
  return Promise.resolve().then(function() {
    return driver.switchTo().defaultContent();
  }).then(function() {
    return driver.executeScript( 'ngmf.close()');
  });
}

function load2() {
 var start = new Date().getTime();
  return Promise.resolve().then(function() {
      return driver.wait(until.elementLocated(By.id('btn_findPop')), 10000).click();
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).click();
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).sendKeys("B2C 신규가입 Main 조회");
  }).then(function() {
      return driver.sleep(100);
  }).then(function() {
      return driver.findElement(By.id('edt_keyword')).sendKeys(Key.ENTER);
  }).then(function() {
     console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');
  }).then(function() {
    return takeScreenshot(driver,"load_B2C");
  });
}

  
function  test() {
  return Promise.resolve().then(function() {
      //return driver.findElement(By.id('edt_cond')).sendKeys("promise", Key.ENTER);
      // return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys("prom", Key.ENTER);
  }).then(function() {
      return driver.sleep(1000);
  }).then(function() {
      return driver.wait(until.elementLocated(By.id('edt_cond')), 10000).sendKeys(Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, "초기화", Key.ENTER);
  //    return driver.wait(until.elementLocated(By.id('edt_cond')), 5000).sendKeys(Key.chord(Key.CONTROL, "a"), "초기화", Key.ENTER);
  }).then(function() {
      return driver.findElement(By.id('btn_clearAll')).click();        // 동작 안함
  }).then(function() {
      return driver.sleep(1000);
  }).then(function() {
      return driver.wait(until.elementLocated(By.id('edt_cond')), 10000).sendKeys(Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, Key.BACK_SPACE, "화면", Key.ENTER);
  }).then(function() {
      return driver.switchTo().defaultContent();
  }).then(function() {
  //http://localhost:7080/websquare/websquare.html?w2xPath=/SWING/AAT/xml/../../EDU/xml/testSimulation/ZORDSS01S0010_T.xml&w2xHome=/SWING/AAT/xml/&w2xDocumentRoot=
      return driver.executeScript('ngmf.newWindow("ORD", "ZORDSS01S0010");');
  }).then(function() {
      return driver.sleep(3000);
  }).then(function() {
      return driver.executeScript('ngmf.closeWindow("ZORDSS01S0010");');
  }).then(function() {
      return driver.findElement(By.id('btn_clearAll')).click();        // 동작 안함
  });

}




//driver.quit();
