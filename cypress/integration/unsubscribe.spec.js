import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("unsubscribe page", () => {
  beforeEach(() => {
    cy.visit("/unsubscribe");
    cy.injectAxe();
  });

  it("unsubscribe page loaded", () => {
    cy.url().should("contains", "/unsubscribe");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Adds subpath for french pages", () => {
    cy.get('[data-cy="toggle-language-link"]').click();
    cy.url().should("eq", "http://localhost:3000/fr/desabonnement");
  });

  it("Fails to submit with no input", () => {
    cy.get('[data-cy="unsubscribe-submit"]').click();
    cy.url().should("contains", "/unsubscribe");
    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  it("Validates that an email is entered in the email field", () => {
    cy.get('[id="email"]').type("not an email");

    cy.get('[data-cy="unsubscribe-submit"]').click();
    cy.get('[data-cy="error-box"').should("exist");
    cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  });

  it("Test unsubscribe on successful submit", () => {
    cy.intercept("/api/**", { fixture: "signup" }).as("response");

    cy.get('[id="email"]').type("some@email.com");
    cy.get('[data-cy="unsubscribe-submit"]').click();
    cy.url().should("contains", "/thankyou?e=s***%40****l.***&ref=unsubscribe");

    cy.wait("@response").then((xhr) => {
      cy.log(xhr);
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.response.statusCode).to.equal(200);

      // redirect to thankyou page on successful submit and confirm email
      cy.url().should(
        "contains",
        "/thankyou?e=s***%40****l.***&ref=unsubscribe"
      );
      expect(xhr.response.body.email).to.equal("some@email.com");
      cy.visit("/confirmation?ref=unsubscribe");
    });
  });
});
