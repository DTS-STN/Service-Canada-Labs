import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("signup page", () => {
  beforeEach(() => {
    cy.visit("/signup");
    cy.injectAxe();
  });

  // it("signup page loaded", () => {
  //   cy.url().should("contains", "/signup");
  // });

  // it("Has no detectable a11y violations on load", () => {
  //   cy.checkA11y(null, null, terminalLog);
  // });

  // it("Adds subpath for french pages", () => {
  //   cy.get('[data-cy="toggle-language-link"]').click();
  //   cy.url().should("eq", "http://localhost:3000/fr/inscription");
  // });

  // it("Menu appears on the page", () => {
  //   cy.get('[data-cy="menu"]').should("be.visible");
  // });

  // it("Fails to submit with no input", () => {
  //   cy.get('[data-cy="signup-submit"]').click();
  //   cy.url().should("contains", "/signup");
  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box-items"').children().should("have.length", 4);
  // });

  // it("Validates that an email is entered in the email field", () => {
  //   cy.get('[id="email"]').type("not an email");
  //   cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
  //   cy.get('[id="languageEn"]').click();
  //   cy.get('[id="agreeToConditions"]').click();
  //   cy.get('[data-cy="signup-submit"]').click();

  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  // });

  // it("Validates age of user is greater or equal to 18", () => {
  //   cy.get('[id="email"]').type("some@email.com");
  //   cy.get('[id="yearOfBirthRange-choice"]').select("after2003");
  //   cy.get('[id="languageEn"]').click();
  //   cy.get('[id="agreeToConditions"]').click();
  //   cy.get('[data-cy="signup-submit"]').click();

  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  // });

  // it("Validates disability field is required if yes is selected", () => {
  //   cy.get('[id="email"]').type("some@email.com");
  //   cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
  //   cy.get('[id="languageEn"]').click();
  //   cy.get('[id="agreeToConditions"]').click();
  //   cy.get('[data-cy="btn-disability-yes"').click();
  //   cy.get('[data-cy="text-disability-yes"]').type("   ");
  //   cy.get('[data-cy="signup-submit"]').click();

  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box-items"').children().should("have.length", 1);
  // });

  // it("Validates disability field is not required after yes has been unselected (selected no)", () => {
  //   cy.get('[id="email"]').type("some@email.com");
  //   cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
  //   cy.get('[data-cy="btn-disability-yes"').click();
  //   cy.get('[data-cy="btn-disability-no"').click();
  //   cy.get('[data-cy="signup-submit"]').click();

  //   // errors: agree to conditions and language selection
  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box-items"').children().should("have.length", 2);
  // });

  // it("Validates error clicking scrolls to the desired error", () => {
  //   cy.get('[data-cy="signup-submit"]').click();
  //   cy.get('[data-cy="error-box"').should("exist");
  //   cy.get('[data-cy="error-box"').scrollIntoView().should("be.visible");

  //   cy.get('[data-cy="error-item-email"]').should("be.visible");
  //   cy.get('[data-cy="error-item-email"]').click();
  //   cy.get('[data-cy="error-item-email"]').click();
  //   cy.get('[data-cy="error-item-email"').scrollIntoView().should("be.visible");
  // });

  it("Test signup on successful submit", () => {
    cy.intercept("/api/**", {
      fixture: "signup",
    }).as("response");

    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

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

  it("Test 400 bad resquest", () => {
    cy.intercept("/api/**", { statusCode: 400 }).as("response");

    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

    cy.wait("@response").then((xhr) => {
      cy.log(xhr);
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.response.statusCode).to.equal(400);
    });
  });

  it("Server return 500 bad response", () => {
    cy.intercept("/api/**", { statusCode: 500 }).as("response");

    cy.get('[id="email"]').type("some@email.com");
    cy.get('[id="yearOfBirthRange-choice"]').select("before1936");
    cy.get('[id="languageEn"]').click();
    cy.get('[id="agreeToConditions"]').click();
    cy.get('[data-cy="signup-submit"]').click();

    cy.wait("@response").then((xhr) => {
      cy.log(xhr);
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.response.statusCode).to.equal(500);
    });
  });
});
