// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands";

Cypress.Commands.add("setLanguage", () => cy.setLocalStorage("lang", "en"))

Cypress.Commands.add('checkA11y', (context, options) => {
  cy.checkA11y(context, options, violations => {
    // Save violations to a JSON file
    cy.writeFile(
      `cypress/a11y-results/${context || 'page'}-violations.json`,
      violations
    )
  })
})
