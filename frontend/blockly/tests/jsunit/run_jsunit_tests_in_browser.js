/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Node.js script to run JsUnit tests in Chrome, via webdriver.
 */
var webdriverio = require('webdriverio');

module.exports = runJsUnitTestsInBrowser;

/**
 * Runs the JsUnit tests in this directory in Chrome. It uses webdriverio to
 * launch Chrome and load index.html. Outputs a summary of the test results
 * to the console.
 * @return 0 on success, 1 on failure.
 */
async function runJsUnitTestsInBrowser() {
  var options = {
      capabilities: {
          browserName: 'chrome'
      }
  };
  // Run in headless mode on Travis.
  if (process.env.TRAVIS_CI) {
    options.capabilities['goog:chromeOptions'] = {
      args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
    };
  }

  var url = 'file://' + __dirname + '/index.html';
  console.log('Starting webdriverio...');
  const browser = await webdriverio.remote(options);
  console.log('Initialized.\nLoading url: ' + url);
  await browser.url(url);

  await browser.waitUntil(async () => {
    var elem = await browser.$('#failureCount');
    var text = await elem.getAttribute('tests_failed');
    return text != 'unset';
  }, 6000);

  const elem = await browser.$('#failureCount');
  const numOfFailure = await elem.getAttribute('tests_failed');

  console.log('============Blockly Unit Test Summary=================');
  console.log(numOfFailure);
  console.log(numOfFailure + ' tests failed');
  console.log('============Blockly Unit Test Summary=================');
  if (parseInt(numOfFailure) !== 0) {
    await browser.deleteSession();
    return 1;
  }
  await browser.deleteSession();
  return 0;
}

if (require.main === module) {
  runJsUnitTestsInBrowser().catch(e => {
    console.error(e);
    process.exit(1);
  }).then(function(result) {
    if (result) {
      console.log('JSUnit tests failed');
      process.exit(1);
    } else {
      console.log('JSUnit tests passed');
      process.exit(0);
    }
  });
}
