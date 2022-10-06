import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Virtual concierge page", () => {
  beforeEach(() => {
    cy.visit("/projects/virtual-assistant");
    cy.injectAxe();
  });

  it("VC page loaded", () => {
    cy.url().should("contains", "/projects/virtual-assistant");
  });

  // it("Has no detectable a11y violations on load", () => {
  //   cy.checkA11y(null, null, terminalLog);
  // });
});
