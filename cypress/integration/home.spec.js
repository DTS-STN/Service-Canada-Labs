import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/home");
    cy.injectAxe();
  });

  it("landing page loaded", () => {
    cy.url().should("contains", "/home");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Toggles content language when language button is clicked", () => {
    cy.get('[data-cy="social-media-link"]').then(($link) => {
      const txt = $link.text();
      cy.get('[data-cy="toggle-language-link"]').click();
      cy.get('[data-cy="social-media-link"]').should(($link2) => {
        expect($link2.text()).not.to.eq(txt);
      });
    });
  });

  it("Adds subpath for french pages", () => {
    cy.get('[data-cy="toggle-language-link"]').click();
    cy.url().should("eq", "http://localhost:3000/fr/accueil");
  });

  it("See projects button goes to projects page (button at the bottom of the content)", () => {
    cy.get('[data-cy="ProjectsButton"]').click();
    cy.url().should("include", "/projects");
  });

  it("See about button goes to about page (button at the bottom of the content)", () => {
    cy.get('[data-cy="AboutButton"]').click();
    cy.url().should("include", "/about");
  });

  it("See signup button (not in the nav menu) goes to signup page", () => {
    cy.get('[data-cy="signup-home-page"]').click();
    cy.url().should("include", "/signup");
  });

  it("Menu appears on the homepage", () => {
    cy.get('[data-cy="menu"]').should("be.visible");
  });

  it("Menu Projects links to project page", () => {
    cy.get('[data-cy="menu"]').contains("Explore our projects").click();
    cy.url().should("include", "/projects");
  });

  it("Menu About links to about page", () => {
    cy.get('[data-cy="menu"]').contains("About these labs").click();
    cy.url().should("include", "/about");
  });
});
