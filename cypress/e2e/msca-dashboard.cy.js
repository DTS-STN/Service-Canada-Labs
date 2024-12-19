describe("MSCA Dashboard Page", () => {
    beforeEach(() => {
      cy.visit("/en/projects/dashboard");
      cy.injectAxe();
    });
  
    // it("has no a11y violations", () => {
    //   cy.checkA11y();
    // });

    it("loads page",()=>{
        cy.url().should('equal',Cypress.config().baseUrl+'/en/projects/dashboard')
        cy.get('button.info').click()
        cy.get('h2.modal-title').should('have.text','beta')
    })
  
  });
  