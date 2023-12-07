// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Import cypress-axe
import "cypress-axe";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Set default language for all tests that do not test the Splash page
before(() => {
  // Set language in cypress instance localstorage to skip the splash page
  cy.setLanguage();
  // Save localstorage
  cy.saveLocalStorage();
});

beforeEach(() => {
  // Restore localstorage to initial state before each test
  cy.restoreLocalStorage();
});
