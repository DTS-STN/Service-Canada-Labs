import terminalLog from '../plugins/terminalLog'

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("experiment page", () => {
    beforeEach(() => {
        cy.visit("/experiments");
        cy.injectAxe();
    });

    it("experiments page loaded", () =>{
        cy.url().should("contains", "/experiments");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y(null, null, terminalLog)
    })

    it("The filter menu appears on the homepage", () => {
        cy.get('[ data-cy="filter-experiments"]').should('be.visible')
    });

    it("Adds subpath for french pages", () => {
        cy.get('[data-cy="toggle-language-link"]').click()
        cy.url().should('eq', 'http://localhost:3000/fr/experiments')
    });

    it("Menu appears on the experiments page", () => {
        cy.get('[data-cy="menu"]').should('be.visible')
    });

    it("Menu Service Canada Labs links to home page", () => {
        cy.get('[data-cy="menu"]').contains('Service Canada Labs').click()
        cy.url().should('include', '/')
    });

    it("Filter experiments: All", () => {
        cy.get('[data-cy="all"]').click()
        cy.get('[data-cy="experiments-list"]>li').should('have.length', 5); // 5 needs to be changed when more or less experiments are added/removed.
    });

    it("Filter experiments: Active", () => {
        cy.get('[data-cy="active"]').click()
        cy.get('[data-cy="experiments-list"]>li>a>span').each(($el) => {
            expect($el.text()).to.eq("Active")
        });
    });

    it("Filter experiments: Coming soon", () => {
        cy.get('[data-cy="coming_soon"]').click()
        cy.get('[data-cy="experiments-list"]>li>a>span').each(($el) => {
            expect($el.text()).to.eq("Coming Soon")
        });
    });
})