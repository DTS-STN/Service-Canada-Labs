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
    cy.get("a[href*=benefits-navigator]").click();
    cy.url().should(
      "equal",
      Cypress.config().baseUrl + "/en/projects/benefits-navigator"
    );
  });
});
