
describe('end user testing', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/')
        cy.get('.bg-\[\#D6DDF0\] > .flex > .hover\:text-primary_hover').click()
    })

    it('apa itu ulos', () => {
        cy.get('.bg-\[\#D6DDF0\] > .flex > .hover\:text-primary_hover').click()
    })

})