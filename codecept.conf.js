const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/*.js",
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      restart:false,
      show: true,
      windowSize: '1200x900',
      keepCookies: true,  // Memastikan cookie disimpan di antara skenario
      keepBrowserState: true  // Memastikan keadaan browser tetap terjaga (misalnya, login tetap ada)
    }
  },
  include: {
    // I: './steps_file.js'
  },
  bootstrap:null,
  mocha: {},
  name: 'SauceDemo_CodeceptJS'
}