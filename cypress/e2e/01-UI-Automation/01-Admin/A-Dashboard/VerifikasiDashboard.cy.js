import {
    Login
} from ".././PreCondition";

describe('Verifikasi Halaman Dashboard Admin', () => {
    // pre condition
    beforeEach(() => {
        Login();
    });

    it('Verifikasi Admin bisa melihat tabel daftar ulos dari tombol selanjutnya pada Dashboard section Ulos', () => {
        cy.get('#span-btn-ulosSelengkapnya').click();
        cy.contains('Tabel Data Ulos').should('be.visible');
        cy.get('table tr').should('exist');
        cy.get('table td').should('exist');
    });

    it('Verifikasi Admin bisa melihat tabel daftar penenun dari tombol selanjutnya pada Dashboard section Penenun', () => {
        cy.get('#span-btn-penenunSelengkapnya').click();
        cy.contains('Tabel Data Penenun').should('be.visible');
        cy.get('table tr').should('exist');
        cy.get('table td').should('exist');
    });

    it('Verifikasi Admin bisa melihat detail ulos dari dashboard', () => {
        cy.get('#nama-ulos-dashboard').click()
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

    it('Verifikasi Admin bisa melihat detail penenun dari dashboard', () => {
        // Test case implementation
        cy.get('#nama-penenun-dashboard').click()

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
    });
});