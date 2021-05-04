import terminalLog from '../plugins/terminalLog'

/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("splash page", () => {
    beforeEach(() => {
        cy.visit("/splash");
        cy.injectAxe();
    });

    it("splash page loaded", () =>{
        cy.url().should("contains", "/splash");
    })

    it('Has no detectable a11y violations on load', () => {
        cy.checkA11y(null, null, terminalLog)
    })

})