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
    cy.url().should("eq", "http://localhost:3000/fr/inscription");
  });

  it("Menu appears on the page", () => {
    cy.get('[data-cy="menu"]').should("be.visible");
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

  it("Validates disability field is required if yes is selected", () => {
    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirth"]').type("1990");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="btn-disability-yes"').click();
    cy.get('[data-cy="text-disability-yes"]').type("   ");
    cy.get('[data-cy="signup-submit"]').click();

    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  it("Validates disability field is not required after yes has been unselected (selected no)", () => {
    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirth"]').type("1990");
    cy.get('[data-cy="btn-disability-yes"').click();
    cy.get('[data-cy="btn-disability-no"').click();
    cy.get('[data-cy="signup-submit"]').click();

    // errors: agree to conditions and language selection
    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 2);
  });

  it("Validates error clicking scrolls to the desired error", () => {
    cy.get('[data-cy="signup-submit"]').click();
    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box"').scrollIntoView().should("be.visible");

    cy.get('[data-cy="error-item-email"]').should("be.visible");
    cy.get('[data-cy="error-item-email"]').click();
    cy.get('[data-cy="error-item-email"]').click();
    cy.get('[data-cy="error-item-email"').scrollIntoView().should("be.visible");
  });

  // skipping for now until thank you page is available
  it("Redirects to thank you page on successful submit", () => {
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
    cy.url().should("contains", "/thankyou?e=s***%40****l.***&ref=signup");
  });
});
