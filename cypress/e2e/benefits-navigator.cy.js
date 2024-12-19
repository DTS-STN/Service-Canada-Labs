describe("Benefits Navigator Page", () => {
    beforeEach(() => {
      cy.visit("/en/projects/benefits-navigator");
      cy.injectAxe();
    });
  
    // it("has no a11y violations", () => {
    //   cy.checkA11y();
    // });

    it("loads page",()=>{
        cy.url().should('equal',Cypress.config().baseUrl+'/en/projects/benefits-navigator')
        cy.get('button.info').click()
        cy.get('h2.modal-title').should('have.text','alpha')
    })
  
    it("navigates to an article page", () => {
      cy.get("a[href*=difficulties-community]").click();
      cy.url().should(
        "equal",
        Cypress.config().baseUrl + "/en/projects/benefits-navigator/difficulties-community-workers-help-people-benefits"
      );
    });
  });
  