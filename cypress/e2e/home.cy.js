describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/en/home");
    cy.injectAxe();
  });

  it("has no a11y violations", () => {
    cy.checkA11y();
  });

  it("toggles language",()=>{
    cy.get("a:contains('Français')").click()
    cy.url().should('equal',Cypress.config().baseUrl+'/fr/accueil')
  })

  it("navigates to a project page", () => {
    cy.get("a[href*=making-easier-get-benefits]").click();
    cy.url().should(
      "equal",
      Cypress.config().baseUrl + "/en/projects/making-easier-get-benefits"
    );
  });
});
