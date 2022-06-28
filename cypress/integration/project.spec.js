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


  it("Filter projects: All", () => {
    cy.get('[data-cy="all"]').click();
    // list is actually pretty annoying since the pages are pre-rendered using the dev strapi api
    // meaning we can't intercept the api link and use our fixtures
    cy.get('[data-cy="projects-list"]>li').should("have.length", 4);
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
