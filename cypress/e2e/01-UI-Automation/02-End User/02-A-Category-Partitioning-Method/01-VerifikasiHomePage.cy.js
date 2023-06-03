describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/');
    });


    it('Verfikasi button Eksplor ulos dapat digunakan', () => {
        cy.getById('btn-exploreUlos').click() //menekan tombol explore ulos
        cy.getById('field-cariUlos').should('exist') //verifikasi sudah dihalaman galeri ulos
    })

    it('Verfikasi section jelajahi Ulos', () => {
        cy.getById('span-btn-jelajahiUlos').click()
        cy.getByTestDataId('tab-btn-sejarah-ulos').should('be.visible').should('exist');
        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');

    })

    it('Verifikasi section Apa itu Ulos', () => {
        // Memastikan teks judul ada dan sesuai
        cy.get('#card-apa-itu-ulos h4').should('have.text', 'Apa itu ulos?');

        // Memastikan tombol jelajahi ulos mengarahkan ke router dan halaman yang benar
        cy.get('#span-btn-jelajahiUlos').click();
        cy.url().should('eq', 'http://127.0.0.1:1753/galeri-ulos');

        cy.get('#field-cariUlos').should('be.visible');
    })

    it('Verifikasi section Lahir hidup dan Mati', () => {
        // Memastikan konten pada elemen "Lahir, hidup, dan mati" sesuai dengan yang diharapkan
        cy.get('#card-lahir-hidup-mati')
            .find('h4')
            .should('have.text', 'Lahir, hidup, dan mati');
        cy.get('#span-btn-sejarahUlos').click();
        cy.url().should('eq', 'http://127.0.0.1:1753/sejarah-ulos');

        // Memastikan tombol sejarah ulos aktif atau terlihat oleh pengguna
        cy.get('[data-test-id="btn-sejarahUlos"]').should('be.visible');

        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');
        // Memastikan ada gambar pada elemen
        cy.get('#gambar-sejarah-ulos').should('exist');
    })

    it('Verifikasi section Fakta Menarik Ulos', () => {
        // Click on the "next-button"
        cy.get('#text-fakta-menarik').should('have.text', 'Temukan Fakta Menarik Ulos');
        cy.get('#next-button').should('be.enabled')
        cy.get('#prev-button').should('be.enabled')
    })

    it.only('Verifikasi section Ragam ulos: Batak Toba', () => {
        //cy.get('#btn-ragamUlos-BatakToba').click()
        cy.get('#btn-ragamUlos-BatakSimalungun').click( )
        // cy.get('#navbar-GaleriUlos').click() 
        cy.get('.text-sm').should('have.text', 'Batak Toba');
    })

    it('Verifikasi section Ragam ulos: Batak Simalungun', () => {

    })

    it('Verifikasi section Ragam ulos: Batak Mandailing', () => {

    })

    it('Verifikasi section Ragam ulos: Batak Karo', () => {

    })

    it('Verifikasi section Ragam ulos: Batak Angokola', () => {

    })

    it('Verifikasi section video dapat dimainkan oleh pengguna', () => {

    })

    it('Verifikasi section Ulos Tradisional', () => {

    })

    it('Verifikasi section Ulos Pengembangan', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })

    it('', () => {

    })
})