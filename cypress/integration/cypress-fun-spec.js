describe('Cypress fun', function() {

    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })

    it('finds the content "type"', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type')
    })

    it('clicking "type" navigates to a new url', function() {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
    })
  })