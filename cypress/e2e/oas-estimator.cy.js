describe("OAS Estimator Page", () => {
    beforeEach(() => {
      cy.visit("/en/projects/oas-benefits-estimator");
      cy.injectAxe();
    });
  
    it("has no a11y violations", () => {
      cy.checkA11y();
    });

    it("loads page",()=>{
        cy.url().should('equal',Cypress.config().baseUrl+'/en/projects/oas-benefits-estimator')
        cy.get('button.info').click()
        cy.get('h2.modal-title').should('have.text','beta')
    })
  
    it("navigates to a project page", () => {
      cy.get("a[href*=what-we-learned]").click();
      cy.url().should(
        "equal",
        Cypress.config().baseUrl + "/en/projects/oas-benefits-estimator/what-we-learned"
      );
    });
  });
  