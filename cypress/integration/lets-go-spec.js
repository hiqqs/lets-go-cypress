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
  });
});
    
 describe("Registering New User", function() {
  it("Register ", function() {
  cy.contains('Register'.click()
      cy.url().should('include', '/Register')
  });
});
    // Performs a speed test

    // Verifies navigation etc...

})
