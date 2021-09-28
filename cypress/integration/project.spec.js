import terminalLog from "../plugins/terminalLog";

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("project page", () => {
  beforeEach(() => {
    cy.visit("/projects");
    cy.injectAxe();
  });

  it("projects page loaded", () => {
    cy.url().should("contains", "/projects");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("The filter menu appears on the homepage", () => {
    cy.get('[ data-cy="filter-projects"]').should("be.visible");
  });

  it("Adds subpath for french pages", () => {
    cy.get('[data-cy="toggle-language-link"]').click();
    cy.url().should("eq", "http://localhost:3000/fr/projets");
  });

  it("Menu appears on the projects page", () => {
    cy.get('[data-cy="menu"]').should("be.visible");
  });

  it("Filter projects: All", () => {
    cy.get('[data-cy="all"]').click();
    cy.get('[data-cy="projects-list"]>li').should("have.length", 5); // 5 needs to be changed when more or less experiments are added/removed.
  });

  it("Filter projects: Upcoming projects", () => {
    cy.get('[data-cy="upcoming_projects"]').click();
    cy.get('[data-cy="projects-list"]>li>div>span').each(($el) => {
      expect($el.text()).to.eq("Upcoming projects");
    });
  });

  it("Filter projects: Current projects", () => {
    cy.get('[data-cy="current_projects"]').click();
    cy.get('[data-cy="projects-list"]>li>div>span').each(($el) => {
      expect($el.text()).to.eq("Current projects");
    });
  });
});
