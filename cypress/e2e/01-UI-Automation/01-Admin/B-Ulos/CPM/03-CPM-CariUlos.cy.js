import {
    LoginAndGoToUlosPage,
} from "../../PreCondition";

describe('Fungsionalitas Mencari Ulos - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });


    it('Admin mencari data Ulos dengan inputan yang valid', () => {
        const searchText = 'Ragi Huting';

        cy.get('#table-search').type(searchText);
        cy.wait(2000)
        cy.contains('tr', searchText).should('be.visible');
    })

    it('Admin mencari data Ulos dengan inputan yang tidak valid', () => {
        cy.get('#table-search').type('ulosinvalid');
        cy.contains('p', 'Data Ulos belum ada')
        
    })
});