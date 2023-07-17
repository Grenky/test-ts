import { defineConfig } from "cypress";

export default defineConfig({
  
  e2e: {
      "reporter": "mochawesome",
      "reporterOptions": {
        "charts": true,
        "overwrite": false,
        "html": false,
        "json": true,
        "reportDir": "cypress/reports/mochawesome-report",
    "watchForFileChanges": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}});
