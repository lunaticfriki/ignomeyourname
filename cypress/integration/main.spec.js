describe('Main info suite', () => {
  context('Select gnome', () => {
    it('Should select a gnome from select', () => {
      cy.visitHome()
      cy.wait(2000)
      cy.get('.c-use-gnome').find('select').select('Tobus Quickwhistle')
      cy.get('button').click()
      cy.get('.c-info-card').find('h4').contains('Tobus Quickwhistle')
    })
  })
})
