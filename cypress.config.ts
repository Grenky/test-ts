import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report",

    e2e: {
      watchForFileChanges: true,
      setupNodeEvents() {
        // implement node event listeners here
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
