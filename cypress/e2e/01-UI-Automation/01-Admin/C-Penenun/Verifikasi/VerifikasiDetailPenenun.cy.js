import {
    LoginAndGoToPenenunPage
} from "../../PreCondition";

describe('Verifikasi Halaman detail penenun - Admin', () => {
    // pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage();
    });

    it('Verifikasi Admin bisa melihat detail penenun dari tabel daftar penenun  ', () => {
        cy.get('#table-search').type('Hanna')
        cy.get('#baris-daftar-penenun').click()
        // Memastikan elemen nama penenun ditampilkan
        cy.get('#nama-penenun').should('be.visible');

        // Memastikan elemen teknik tenun penenun ditampilkan
        cy.get('#teknik-tenun-penenun').should('be.visible');

        // Memastikan elemen suku penenun ditampilkan
        cy.get('#suku-penenun').should('be.visible');

        // Memastikan elemen usia penenun ditampilkan
        cy.get('#usia-penenun').should('be.visible');

        // Memastikan elemen domisili penenun ditampilkan
        cy.get('#domisili-penenun').should('be.visible');

        // Memastikan elemen gambar penenun ditampilkan
        cy.get('#gambar-penenun').should('be.visible');

        // Memastikan elemen cerita penenun ditampilkan
        cy.get('#cerita-penenun').should('be.visible');
    })

    it('Verifikasi Admin bisa menghapus data penenun dari halaman detail penenun ', () => {
        cy.get('#table-search').type('nama');
        cy.get('#baris-daftar-penenun').click()
        cy.get('#btn-hapus-penenun').click()
        cy.get('#btn-hapus-confirm').should('be.visible');
    })

    it('Verifikasi Admin bisa mengedit data penenun dari halaman detail penenun ', () => {
        cy.get('#table-search').type('Hanna')
        cy.get('#baris-daftar-penenun').click()
        cy.get('#btn-edit-penenun').click()
        cy.contains('Ubah Data Penenun').should('be.visible')
    })

});