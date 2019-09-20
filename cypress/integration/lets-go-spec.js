const test = require('../support/lets-go')

describe('Lets Begin', function() {

    it('Open browser to speedtest.net', function() {
      tests.beginTests() {
          cy.visit('https://www.speedtest.net')
      })
    })
describe("Testing Login Functionality", function() {
  it("Login ", function() {
  cy.Contains('Log In').click()
      cy.url().should('include', '/Register')
      cy.Contains('Register').click()
  });
});
    
 describe("Registering New User", function() {
  it("Register ", function() {
 cy.get('email').type('Vish.Vageesh@gmail.com')
 cy.get('email-confirm').type('Vish.Vageesh@gmail.com')
 cy.get('password').type('Welcome123!')
 cy.get('password-confirm').type('Welcome123!')
      cy.scrollTo(0,500)
      cy.contains(' not a robot')
      cy.get('.recaptcha-checkbox-border').contain('not a robot').check()
      cy.get('Register').click()
  });
});
    // Performs a speed test

    // Verifies navigation etc...

})
