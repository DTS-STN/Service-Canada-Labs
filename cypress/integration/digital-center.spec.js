import terminalLog from '../plugins/terminalLog'

describe("Digital Center page", () => {
  beforeEach(() => {
    cy.visit("/projects/digital-center");
    cy.injectAxe();
  });

  it("Digital Center page loaded", () => {
    cy.url().should("contains", "/digital-center");
  });

  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y(null, null, terminalLog);
  });
});
