describe("Benefits Finder Page", () => {
  beforeEach(() => {
    cy.visit("/en/projects/benefits-finder");
    cy.injectAxe();
  });

  it("has no a11y violations", () => {
    cy.checkA11y();
  });

  it("loads page",()=>{
      cy.url().should('equal',Cypress.config().baseUrl+'/en/projects/benefits-finder')
      cy.get('button.info').click()
      cy.get('h2.modal-title').should('have.text','beta')
  })
});
