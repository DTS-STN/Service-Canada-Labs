import terminalLog from "../plugins/terminalLog";
import signupData from "../fixtures/signup.json"

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("signup review page", () => {
  beforeEach(() => {
    cy.visit("/signup-review");
    cy.injectAxe();
  });

  it("signup review page loaded", () => {
    cy.url().should("contains", "/signup-review");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Adds subpath for french pages", () => {
    cy.get('[data-cy="toggle-language-link"]').click();
    cy.url().should("eq", "http://localhost:3000/fr/signup-review");
  });

  it("Fails to submit with no values", () => {
    cy.get('[data-cy="signup-review-submit"]').click();
    cy.url().should("contains", "/signup-review");
  });

  it("Test signup on successful submit", () => {
    cy.intercept("/api/**", {
      fixture: "signup",
    }).as("response");

    window.localStorage.setItem("formData", signupData)
    cy.get('[data-cy="signup-review-submit"]').click();

    cy.wait("@response").then((xhr) => {
      cy.log(xhr);
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.response.statusCode).to.equal(200);
      expect(xhr.response).to.have.property("headers");
      expect(xhr.response).to.have.property("body");

      // redirect to thankyou page on successful submit and confirm email
      cy.url().should("contains", "/thankyou?e=s***%40****l.***&ref=signup");

      // confirm email
      expect(xhr.response.body.email).to.equal("some@email.com");
    });
  });
});
