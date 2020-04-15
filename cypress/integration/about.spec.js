describe('About info suite', () => {
  context('Go to about', () => {
    it('Should go to about page', () => {
      cy.visitHome()
      cy.wait(2000)
      cy.get('li').eq(2).click()
      cy.get('.c-about').should('exist')
    })
  })
})
