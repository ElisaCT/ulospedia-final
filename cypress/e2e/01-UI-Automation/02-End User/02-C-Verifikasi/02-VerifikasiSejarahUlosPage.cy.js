describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/');
        cy.get('#navbar-SejarahUlos').click()
    });

    it('Verifikasi Tab Sejarah Ulos', () => {
        cy.getByTestDataId('tab-btn-sejarah-ulos').should('be.visible').should('exist');
        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');

        // Memastikan ada gambar pada elemen
        cy.get('#gambar-sejarah-ulos').should('exist');

    })

    it('Verifikasi Tab Arti Ulos', () => {
        cy.getByTestDataId('tab-btn-arti-ulos').should('be.visible').should('exist').click();

        // Memastikan ada gambar pada elemen
        cy.get('#gambar-arti-ulos').should('be.visible');
        // Memastikan teks ada
        cy.getById('text-artiUlos').should('be.visible').should('contain', 'Arti Ulos');
    })

    it('Verifikasi Ulos di zaman modern', () => {

        cy.getByTestDataId('tab-btn-ulos-zaman-modern').should('be.visible').should('exist').click();

        // Memastikan ada gambar pada elemen
        cy.get('#gambar-ulos-modern').should('exist');

        // Memastikan teks judul ada dan sesuai
        cy.get('#text-ulosModern').should('contain', 'Ulos di zaman modern');

    })
});