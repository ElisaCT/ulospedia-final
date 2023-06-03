describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/');
    });


    it('Verfikasi button Eksplor ulos dapat digunakan', () => {
        cy.getById('btn-exploreUlos').click()      //menekan tombol explore ulos
        cy.getById('field-cariUlos').should('exist')  //verifikasi sudah dihalaman galeri ulos
    })

    it.only('Verfikasi section jelajahi Ulos', () => {
        cy.getById('span-btn-jelajahiUlos').click()
        cy.getByTestDataId('tab-btn-sejarah-ulos').should('be.visible').should('exist');
        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');

    })

    it('Verifikasi section Apa itu Ulos', () => {

    })

    it('Verifikasi section Lahir hidup dan Mati', () => {

    })

    it('Verifikasi section Fakta Menarik Ulos', () => {

    })

    it('Verifikasi section Ragam ulos: Batak Toba', () => {

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