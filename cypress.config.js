const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://portal.fixpay.com.br:9443',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
