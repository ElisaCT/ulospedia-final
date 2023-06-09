import {LoginAndGoToGenerateMotifPage} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar Ulos', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToGenerateMotifPage()
    });

    it('Verifikasi admin bisa menghapus/menyunting gambar ulos pada fitur generate Ulos', () => {
        cy.get('#field-cari-ulos').type('semoga bisa')
        cy.get('#btn-sunting-or-simpan').click()
        cy.get('#btn-hapus').click()
        cy.get('#btn-hapus-alert').click()  
        cy.get('#ulos-name')
        .contains('semoga bisa')
        .should('not.exist');
    })

    
    it('Verifikasi admin bisa menghapus/menyunting gambar motif ulos pada fitur generate Ulos', () => {
        cy.get('#field-cari-ulos').type('semoga bisa')
        cy.get('#ulos-name').click()
        cy.get('#btn-sunting-or-simpan').click()
        cy.get('#btn-hapus').click()
        cy.get('#btn-hapus-alert').click()  
    })


    
    it.only('Verifikasi admin bisa menghapus/menyunting gambar generate ulos pada fitur generate Ulos', () => {
        cy.get('#field-cari-ulos').type('semoga bisa')
        cy.get('#ulos-name').click()
        cy.get('#hasil-gambar-motif-ulos').click()
        cy.get('#btn-sunting-or-simpan').click()
        cy.get('#btn-hapus').click()
        // cy.get('#btn-hapus-alert').click()  
    })



});