import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("signup page", () => {
  beforeEach(() => {
    cy.visit("/signup");
    cy.injectAxe();
  });

  it("signup page loaded", () => {
    cy.url().should("contains", "/signup");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Adds subpath for french pages", () => {
    cy.get('[data-cy="toggle-language-link"]').click();
    cy.url().should("eq", "http://localhost:3000/fr/signup");
  });

  it("Menu appears on the experiments page", () => {
    cy.get('[data-cy="menu"]').should("be.visible");
  });

  it("Menu Service Canada Labs links to home page", () => {
    cy.get('[data-cy="menu"]').contains("Service Canada Labs").click();
    cy.url().should("include", "/");
  });

  it("Fails to submit with no input", () => {
    cy.get('[data-cy="signup-submit"]').click();
    cy.url().should("contains", "/signup");
    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 4);
  });

  it("Validates that an email is entered in the email field", () => {
    cy.get('[id="email"]').type("not an email");
    cy.get('[id="yearOfBirth"]').type("1990");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  it("Validates year of birth is a number", () => {
    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirth"]').type("abc");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  it("Validates age of user is greater or equal to 18", () => {
    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirth"]').type(
      (new Date().getFullYear() - 10).toString()
    );
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  // skipping for now until thank you page is available
  it.skip("Redirects to thank you page on successful submit", () => {
    cy.intercept("POST", "/api/**", {
      statusCode: 201,
      body: {
        data: "test success",
      },
    });

    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirth"]').type("1990");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();
    cy.url().should("contains", "/thankyou");
  });
});
