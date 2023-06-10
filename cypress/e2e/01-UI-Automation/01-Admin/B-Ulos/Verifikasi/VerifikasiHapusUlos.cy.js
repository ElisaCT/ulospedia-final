import {
    LoginAndGoToUlosPage
} from "../../PreCondition";
describe('Fungsionalitas Menghapus data Ulos - Admin', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });

    it.only('Admin menghapus data ulos dari tabel ulos', () => {
        cy.get('table tr')
            .eq(2) // Select the 3rd row (index 2)
            .find('#delete-button') // Replace 'button.delete-button' with the actual selector for your delete button
            .click();
        cy.get('#btn-hapus').click()
        cy.contains('Data Ulos berhasil dihapus').should('be.visible');
    });

});