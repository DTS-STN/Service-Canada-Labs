describe("Digital Standards Playbook Page", () => {
    beforeEach(() => {
      cy.visit("/en/projects/digital-standards-playbook");
      cy.injectAxe();
    });
  
    it("has no a11y violations", () => {
      cy.checkA11y();
    });

    it("loads page",()=>{
        cy.url().should('equal',Cypress.config().baseUrl+'/en/projects/digital-standards-playbook')
        cy.get('button.info').click()
        cy.get('h2.modal-title').should('have.text','live')
    })
  
    it("finds 'Read and comment on guidance' button", () => {
      cy.get("a:contains('Read and comment on the new guidance')").should('be.visible');
    });
  });
  