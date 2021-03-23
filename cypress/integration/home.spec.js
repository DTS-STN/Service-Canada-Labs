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
})