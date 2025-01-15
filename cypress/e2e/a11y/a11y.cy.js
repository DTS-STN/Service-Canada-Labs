describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  it('Splash page should have no accessibility violations', () => {
    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious']
    })
  })

  // Separate error pages from regular pages
  const regularPages = [
    '/home',
    '/updates',
    '/projects'
  ]

  // const errorPages = [
  //   '/test404',
  //   '/500',
  //   '/notsupported',
  //   '/error'
  // ]

  regularPages.forEach(path => {
    it(`${path} should have no accessibility violations`, () => {
      cy.visit(path)
      cy.injectAxe()
      cy.checkA11y(null, {
        includedImpacts: ['critical', 'serious', 'moderate']
      })
    })
  })

  // errorPages.forEach(path => {
  //   it(`${path} should have no accessibility violations`, () => {
  //     cy.visit(path, { failOnStatusCode: false })
  //     cy.injectAxe()
  //     cy.checkA11y(null, {
  //       includedImpacts: ['critical', 'serious', 'moderate']
  //     })
  //   })
  // })
}) 