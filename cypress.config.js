const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "aicu3k",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
