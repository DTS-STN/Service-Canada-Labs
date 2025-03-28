xdescribe("500 Error Page", () => {
    beforeEach(() => {
      cy.visit("/500", { failOnStatusCode: false });
      cy.injectAxe();
    });
  
    it("has no a11y violations", () => {
      cy.checkA11y();
    });
  
    it("page loaded", () => {
      cy.url().should("equal", Cypress.config().baseUrl + "/en/500");
    });
  
    it("navigates to english homepage", () => {
      cy.get('a[href*="/en/home"]').click();
      cy.url().should("equal", Cypress.config().baseUrl + "/en/home");
    });
  
    it("navigates to french homepage", () => {
      cy.get('a[href*="fr/accueil"]').click();
      cy.url().should("equal", Cypress.config().baseUrl + "/fr/accueil");
    });
  });
  