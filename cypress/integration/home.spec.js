import terminalLog from '../plugins/terminalLog'

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe();
    });

    it("landing page loaded", () =>{
        cy.url().should("contains", "/");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y(null, null, terminalLog)
    })

    it("The search bar appears on the homepage", () => {
        cy.get('[ data-cy="search-bar"]').should('be.visible')
    });

    xit("Toggles content language when language button is clicked", () => {
        cy.get('[data-cy="social-media-link"]').then(($link) => {
            const txt = $link.text()
            cy.get('[data-cy="toggle-language-link"]').click()
            cy.get('[data-cy="social-media-link"]').should(($link2) => {
                expect($link2.text()).not.to.eq(txt)
            })
        })
    });

    it("Adds subpath for french pages", () => {
        cy.get('[data-cy="toggle-language-link"]').click()
        cy.url().should('eq', 'http://localhost:3000/fr')
    });

    it("See experiments button goes to experiments page", () => {
        cy.get('[data-cy-button="ExperimentsButton"]').click()
        cy.url().should('include', '/experiments')
    });

    it("Menu appears on the homepage", () => {
        cy.get('[data-cy="menu"]').should('be.visible')
    });

    it("Menu Service Canada Labs links to home page", () => {
        cy.get('[data-cy="menu"]').contains('Service Canada Labs').click()
        cy.url().should('include', '/')
    });

    it("Menu Experiments links to experiment page", () => {
        cy.get('[data-cy="menu"]').contains('Experiments').click()
        cy.url().should('include', '/experiments')
    });

    it("Menu About links to about page", () => {
        cy.get('[data-cy="menu"]').contains('About').click()
        cy.url().should('include', '/about')
    });
})