describe('Fungsionalitas Halaman Ulos - Admin', () => {
    //pre condition
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false;
            }
        });
        cy.visit('http://127.0.0.1:1753/admin/login');
        cy.get('#username-address-icon').type('rewina123');
        cy.get('#password').type('12345');
        cy.get('#btn-login').click();
        cy.wait(1000);
        cy.get('#ulospedia-logo').should('be.visible');
    });

    describe('Fungsionalitas Halaman Menambahkan ulos - Admin', () => {
        it('Admin menambahkan data ulos dengan inputan yang valid', () => {
            cy.get('#sidebar-ulos').click();
            cy.wait(1000);
            cy.get('#btn-tambah-ulos').click();
            cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
            cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
            cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');
            cy.get('#btn-selanjutnya').click()
            cy.get('#ulos-name').type('Ulos Harungguan')
            cy.get('#dropdown-suku-ulos').select('Batak Toba')
            // Select the "Tradisional" radio button
            cy.get('#jenis-ulos-tradisional').check();

            // Select the "Pengembangan" radio button
            cy.get('#jenis-ulos-pengembangan').check();
            cy.get('#ulos-location').type('Samosir')
            cy.get('#ulos-legth').type('122')
            cy.get('#ulos-width').type('89')
            // Select the "Teknik Ikat Lungsi" option
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');

            // // Select the "Teknik Ikat Pakan" option
            // cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Pakan');

            // // Select the "Teknik Ikat Ganda" option
            // cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Ganda');

            cy.get('#ulos-meaning').type('Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang')

            cy.get('#ulos-function').type('Ulos berarti kain dalam bahasa Batak Toba.   ')

            cy.get('#btn-selanjutnya').click()

            cy.get('#status-togel-eccommerce').click()

            //gambar produk


            // cy.fixture('ulosUtuh2.jpg').then((fileContent) => {
            //     cy.get('input#dropzone-file').attachFile({
            //         fileContent: fileContent,
            //         fileName: 'ulosUtuh2.jpg',
            //         mimeType: 'image/jpeg'
            //     });
            // });
            cy.get('input#ulos-name-produk').type('Ulos Harungguan')
            cy.get('#ulos-price').type('Rp.200.000')
            cy.get('#ulos-url').type('https://ditenun.com/')
            cy.get('#btn-simpan').click()

        });


    })


    // it('', () => {

    // })

    // it('', () => {

    // })

    // it('', () => {

    // })
});