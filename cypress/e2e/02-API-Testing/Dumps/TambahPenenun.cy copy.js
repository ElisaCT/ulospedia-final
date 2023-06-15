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
        cy.get('#btn-submit').click();
        cy.wait(1000);
        cy.get('#ulospedia-logo').should('be.visible');
        cy.get('#sidebar-penenun').click();
        cy.wait(1000);
    });

    describe('Fungsionalitas  Menambahkan Penenun- Admin', () => {
        it.only('Admin menambahkan data penenun dengan inputan yang valid', () => {
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
            cy.wait(4000)
            cy.contains('Tabel Data Penenun').should('exist');
        });
    })

    describe('Fungsionalitas Mengedit Penenun - Admin', () => {
        it('Admin menambahkan data penenun dengan inputan yang valid', () => {
            cy.get('#btn-edit-penenun').click();
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

    describe('Fungsionalitas Menghapus Penenun - Admin', () => {
        it.only('Admin mencari data penenun', () => {
            cy.get('#table-search').type('Hanna');
            cy.contains('tr', 'Hanna').should('be.visible');
        })

        it('Admin mencari data invalid penenun', () => {
            cy.get('#table-search').type('Hannadsds');
            cy.contains('p', 'Data Penenun belum ada');
        })

        it('admin memastikan sorting nama tabel penenun', () => {
            //cy.get('#btn-sort-nama-penenun').click();

            //cy.get('#btn-sort-alat-tenun').click();
            //cy.get('#btn-sort-teknik-tenun').click();

            cy.get('#btn-sort-suku-penenun').click()
            cy.get('tr').each((row, index) => {
                if (index >= 2 && index <= 11) {
                    const currentName = Cypress.$(row).find('td').eq(1).text();
                    const previousName = Cypress.$(row).prev().find('td').eq(0).text();

                    expect(currentName <= previousName).to.be.true,
                        `Names are not sorted correctly. Expected "${currentName}" to be greater than or equal to "${previousName}".`;
                }
            });



        })

        it('Admin menghapus data penenun dengan inputan yang valid', () => {
            cy.get('#table-search').type('nama');
            cy.contains('tr', 'nama').should('be.visible');
            cy.xpath('//*[@id="baris-daftar-penenun"]/td[5]/div/div/button').click();
            cy.xpath("//button[contains(text(),'Batal')]").click()
            // cy.xpath("//button[contains(text(),'Hapus')]").click();
            // cy.contains('tr', 'nama').should('not.exist');
            // cy.contains('data sudah berhasil dihapus').should('be.visible');
            
            // cy.xpath("//button[contains(text(),'Hapus')]")
        });
    })
})