describe('Verifikasi Galeri Ulos - End User', () => {
    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/');
        cy.getById('navbar-GaleriUlos').click()
    });


    it('Verfikasi Informasi Detail Ulos ada', () => {
        cy.getById('field-cariUlos').type('ragi pakko')
        cy.wait(2000)
        cy.getById('icon-produk-available').should('be.visible')
        cy.getById('ulos-nama').click()

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
    })

    
    it('Verifikasi Slider Gambar bisa digunakan', () => {
        cy.getById('field-cariUlos').type('ragi pakko')
        cy.wait(2000)
        cy.getById('icon-produk-available').should('be.visible')
        cy.getById('ulos-nama').click()
        // memastika tombol next slider bisa digunakan
        cy.get('#btn-next-slider').should('be.enabled')
    })

    it('Verifikasi ikon belanja ada pada card Ulos', () => {
        cy.getById('field-cariUlos').type('ragi pakko')
        cy.wait(2000)
        cy.getById('icon-produk-available').should('be.visible');
    })

    it('Verifikasi Section ketersediaan di Eccomerce', () => {
        cy.getById('field-cariUlos').type('ragi pakko')
        cy.wait(2000)
        cy.getById('icon-produk-available').should('be.visible')
        cy.getById('ulos-nama').click()

        //memastikan card ketersediaan visible
        cy.get('#card-ketersediaan-ulos').should('be.visible');
        //memastikan elemen gambar produk ulos ada
        cy.get('#gambar-produk-ulos').should('be.visible');
        //memastikan elemen harga produk ulos ada
        cy.get('#harga-produk-ulos').should('be.visible');
        //memastikan elemen nama produk ulos ada
        cy.get('#nama-produk-ulos').should('be.visible');
        //memastikan tombol beli sekarang clickable 
        cy.get('#btn-beli-sekarang').should('be.enabled');
    })

    // it('', () => {

    // })

})