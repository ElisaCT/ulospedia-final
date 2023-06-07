describe('Fungsionalitas Mencari Penenun - Metode Random Testing', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
    });

    it('Admin mencari data penenun dengan inputan yang valid', () => {
        cy.get('#table-search').type('Hanna');
        cy.contains('tr', 'Hanna').should('be.visible');
    })

    it('Admin mencari data penenun dengan inputan yang tidak valid', () => {
        cy.get('#table-search').type('Hannadsds');
        cy.contains('p', 'Data Penenun belum ada');
    })
});