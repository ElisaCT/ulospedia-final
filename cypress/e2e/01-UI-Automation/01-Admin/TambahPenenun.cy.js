describe('Fungsionalitas Halaman Penenun - Admin', () => {
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
        it('Admin menambahkan data penenun dengan inputan yang valid', () => {
            cy.get('#sidebar-penenun').click();
            cy.wait(1000);
            cy.get('#btn-tambah-penenun').click();
            cy.get('input#dropzone-file').attachFile('testgambar.jpg');
            cy.get('#penenun-name').type('Anri')
            cy.get('#dropdown-pilih-tahun-lahir-penenun').select('1998')
            cy.get('#dropdown-suku-penenun').select('Batak Toba')
            cy.get('#domicile').type('Samosir')
            cy.get('#dropdown-alat-tenun').select('Alat Tenun Bukan Mesin (ATBM)')
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi')
            cy.get('#penenun-story').type('Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara. Meski makin senja, namun produktivitas Opung tetap juara. Bersama penenun lain di lingkungannya, ia bisa membuat 1-2 setel pakaian ulos dalam waktu satu bulan. Termasuk membuat motif langsung di benang, telah jadi urusan sehari-harinya.')
            cy.get('#btn-simpan').click()

        });


    })

})