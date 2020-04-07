Cypress.Commands.add('visitHome', () => {
  cy.visit('http://localhost:3000/')
  cy.get('.App', { timeout: 180000 }).should('exist')
})
