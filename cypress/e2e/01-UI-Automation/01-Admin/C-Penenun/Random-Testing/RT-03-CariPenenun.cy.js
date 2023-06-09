import {
    LoginAndGoToPenenunPage
} from "../../PreCondition";

describe('Fungsionalitas Mencari Penenun - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
    });


    it('Admin mencari data penenun dengan inputan yang valid', () => {
        cy.get('#table-search').type('Grace');
        cy.wait(2000)
        cy.contains('tr', 'Grace').should('be.visible');
    })

    it('Admin mencari data penenun dengan inputan yang tidak valid', () => {
        cy.get('#table-search').type('Hannadsds');
        cy.contains('p', 'Data Penenun belum ada');
    })
});