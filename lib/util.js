var strftime = require('strftime'),
  mkdirp = require('mkdirp'),
  fs = require('fs');

function takeScreenshot(driver, name) {
  return new Promise(function(resolve, reject) {
    driver.takeScreenshot().then(function(base64str) {
      var png = new Buffer(base64str, 'base64');
      var filename = strftime('%Y%m%d.%H%M%S.%L');    // https://github.com/samsonjs/strftime
      mkdirp.sync('c:/inswave/s-tester/screenshot');
      filename = name ? filename + '_' + name + '.png' : filename + '.png';
      fs.writeFile('c:/inswave/s-tester/screenshot/' + filename, png, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('The file[' + filename + '] was saved!');
        }
        resolve();
      }); 
    });
  });
}

module.exports.takeScreenshot = takeScreenshot;