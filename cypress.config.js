const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    return
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com/",
    chromeWebSecurity: false,
    expirentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    viewportHeight: 1440,
    viewportWidth: 2560,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com/" //possible workaround for more than 1 URL needed
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json"
    },
    retries: {
      runMode: 0,
      openMode: 1
    }
  }
});
