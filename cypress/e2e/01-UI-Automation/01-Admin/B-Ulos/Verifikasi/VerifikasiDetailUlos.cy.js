import {
    LoginAndGoToUlosPage
} from "../../PreCondition";

describe('Verifikasi Halaman detail penenun', () => {
    // pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage();
    });

    it('Verifikasi Admin bisa melihat detail ulos dari tabel daftar ulos', () => {
        cy.contains('td.px-6.py-4', 'Sumatera Utara').click();

        // Memastikan elemen nama ulos ditampilkan
        cy.get('#nama-ulos').should('be.visible');

        // Memastikan elemen suku ulos ditampilkan
        cy.get('#suku-ulos').should('be.visible');

        // Memastikan elemen lokasi ulos ditampilkan
        cy.get('#lokasi-ulos').should('be.visible');

        // Memastikan elemen teknik tenun ulos ditampilkan
        cy.get('#teknik-tenun-ulos').should('be.visible');

        // Memastikan elemen ukuran ulos ditampilkan
        cy.get('#ukuran-ulos').should('be.visible');

        // Memastikan elemen makna ulos ditampilkan
        cy.get('#makna-ulos').should('be.visible');

        // Memastikan elemen fungsi ulos ditampilkan
        cy.get('#fungsi-ulos').should('be.visible');

        // Memastikan slider gambar ulos ditampilka
        cy.get('#btn-next').should('be.visible');
        cy.get('#btn-prev').should('be.visible');
    });
});