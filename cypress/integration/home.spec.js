/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("home page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("landing page loaded", () =>{
        cy.url().should("contains", "/");
    })
})