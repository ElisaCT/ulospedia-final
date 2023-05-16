describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:1753/__cypress/src/')
    cy.get('[href="/"]').click()
    cy.get('[href="/sejarah-ulos"]').click()
    cy.get('#segment-item-2').click()
  })
})