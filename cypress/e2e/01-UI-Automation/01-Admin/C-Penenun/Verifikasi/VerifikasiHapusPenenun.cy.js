import {
    LoginAndGoToPenenunPage
} from "../../PreCondition";
describe('Fungsionalitas Menghapus Penenun - Admin', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
    });

    it.only('Admin menghapus data penenun dari tabel penenun', () => {
        cy.get('#table-search').type('nama');
        cy.contains('tr', 'nama').should('be.visible');
        cy.get('table tr')
            .eq(1) // Select the 3rd row (index 2)
            .find('.bg-danger_surface') // Replace 'button.delete-button' with the actual selector for your delete button
            .click();
        cy.get('#btn-hapus-confirm').click()
        //cy.contains('tr', 'nama').should('not.exist');
        cy.contains('data sudah berhasil dihapus').should('be.visible');

    });

});