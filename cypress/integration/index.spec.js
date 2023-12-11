describe("Index Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe()
  });

  it("has no a11y violations",()=>{
    cy.checkA11y()
  })

  it("index page loaded", () => {
    cy.url().should('equal',Cypress.config().baseUrl+'/')
  });

  it("navigates to english homepage",() => {
    cy.get('#english-button').click()
    cy.url().should('equal',Cypress.config().baseUrl+'/en/home')
  })

  it("navigates to french homepage",() => {
    cy.get('#french-button').click()
    cy.url().should('equal',Cypress.config().baseUrl+'/fr/accueil')
  })
});
