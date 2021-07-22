import terminalLog from '../plugins/terminalLog'

describe("Life Journeys Prototype Page", () => {
  beforeEach(() => {
    cy.visit("/projects/life-journeys");
    cy.injectAxe();
  });

  it("life journeys page loaded", () => {
    cy.url().should("contains", "/life-journeys");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });
});
