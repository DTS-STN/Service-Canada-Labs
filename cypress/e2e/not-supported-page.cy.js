describe("Not Supported Page", () => {
  beforeEach(() => {
    cy.visit("/notsupported", { failOnStatusCode: false });
    cy.injectAxe();
  });

  it("has no a11y violations", () => {
    cy.checkA11y();
  });

  it("page loaded", () => {
    cy.url().should("equal", Cypress.config().baseUrl + "/en/notsupported");
  });
});
