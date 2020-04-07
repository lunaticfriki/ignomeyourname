describe('Gallery info suite', () => {
  context('Go to gallery', () => {
    it('Should go to gallery page', () => {
      cy.visitHome()
      cy.wait(2000)
      cy.get('li').eq(1).click()
      cy.get('.c-gallery-menu').should('exist')
    })
  })
  context('Select a gnome from gallery', () => {
    it('Should open modal with info', () => {
      cy.visitHome()
      cy.wait(2000)
      cy.get('li').eq(1).click()
      cy.get('article').eq(1).click()
      cy.get('.c-info-card').should('exist')
    })
  })
})
