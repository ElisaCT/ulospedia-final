import {
    loginAsAdmin
} from "../././01-Admin/PreCondition";


describe('End To End Testing - Admin', () => {
    //precondition login as and admin
    beforeEach(() => {
        loginAsAdmin()
    });


    describe('Verifikasi Fitur Dashboard', () => {
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
            cy.get('#nama-ulos').should('be.visible')
            cy.get('#suku-ulos').should('be.visible');
            cy.get('#lokasi-ulos').should('be.visible');
            cy.get('#teknik-tenun-ulos').should('be.visible');
            cy.get('#ukuran-ulos').should('be.visible');
            cy.get('#makna-ulos').should('be.visible');
            cy.get('#fungsi-ulos').should('be.visible');
            cy.get('#btn-next').should('be.visible');
            cy.get('#btn-prev').should('be.visible');
        });

        it('Verifikasi Admin bisa melihat detail penenun dari dashboard', () => {
            cy.get('#nama-penenun-dashboard').click()
            cy.get('#nama-penenun').should('be.visible');
            cy.get('#teknik-tenun-penenun').should('be.visible');
            cy.get('#suku-penenun').should('be.visible');
            cy.get('#usia-penenun').should('be.visible');
            cy.get('#domisili-penenun').should('be.visible');
            cy.get('#gambar-penenun').should('be.visible');
            cy.get('#cerita-penenun').should('be.visible');
        });
    })

    describe('Verifikasi Fitur Ulos', () => {
        //precondition pergi ke halaman ulos
        beforeEach(() => {
            cy.get('#sidebar-ulos').click();
        });

        it('Admin menambahkan ulos baru dengan input yang valid', () => {
            cy.get('#btn-tambah-ulos').click();
            cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
            cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
            cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');
            cy.get('#btn-selanjutnya').click();
            cy.get('#ulos-name').type('Ulos Harungguan test')
            cy.get('#dropdown-suku-ulos').select('Batak Toba')
            cy.get('#checkbox-merah').check(); // Tekan checkbox Merah
            cy.get('#jenis-ulos-pengembangan').check();
            cy.get('#ulos-location').type('Samosir')
            cy.get('#ulos-legth').type('122')
            cy.get('#ulos-width').type('189')
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');
            cy.get('#ulos-meaning').type('Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang')
            cy.get('#ulos-function').clear().type('Ulos berarti kain dalam bahasa Batak Toba.')
            cy.get('#btn-selanjutnya').click()
            cy.get('.w-11').click()
            cy.get('input#dropzone-file').attachFile('ulosUtuh1.jpeg');
            cy.get('input#ulos-name-produk').type('Ulos Harungguan Produk Test')
            cy.get('#ulos-price').type('500.000')
            cy.get('#ulos-url').type('https://example.com/product/1')
            cy.get('#btn-simpan-perubahan').click()
            //masukkan assertion disini
        })

        it('Admin mengedit data salah satu ulos dengan input yang valid', () => {
            cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
            cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
            cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');
            cy.get('#btn-selanjutnya').click();
            cy.get('#ulos-name').clear().type('Ulos Harungguan test')
            cy.get('#dropdown-suku-ulos').clear().select('Batak Toba')
            cy.get('#jenis-ulos-pengembangan').check();
            cy.get('#ulos-location').clear().type('Samosir')
            cy.get('#ulos-legth').clear().type('122')
            cy.get('#ulos-width').clear().type('189')
            cy.get('#dropdown-teknik-tenun').clear().select('Teknik Ikat Lungsi');
            cy.get('#ulos-meaning').clear().type('Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang')
            cy.get('#ulos-function').clear().type('Ulos berarti kain dalam bahasa Batak Toba.')
            cy.get('#btn-selanjutnya').click()
            cy.get('.w-11').click()
            cy.get('input#dropzone-file').attachFile('ulosUtuh1.jpeg');
            cy.get('input#ulos-name-produk').clear().type('Ulos Harungguan Produk Test')
            cy.get('#ulos-price').clear().type('500.000')
            cy.get('#ulos-url').clear().type('https://example.com/product/1')
            cy.get('#btn-simpan-perubahan').click()
            //masukkan assertion disini
        })

        // it('Admin menghapus data ulos dari tabel ulos', () => {
        //     cy.get('table tr')
        //         .eq(2) // Select the 3rd row (index 2)
        //         .find('#delete-button') // Replace 'button.delete-button' with the actual selector for your delete button
        //         .click();
        //     cy.get('#btn-hapus').click()
        //     //cy.contains('Data Ulos berhasil dihapus').should('be.visible');
        // });


        it('Verifikasi Admin bisa melihat detail ulos dari tabel daftar ulos', () => {
            cy.contains('td.px-6.py-4', 'Sumatera Utara').click();
            cy.get('#nama-ulos').should('be.visible');
            cy.get('#suku-ulos').should('be.visible');
            cy.get('#lokasi-ulos').should('be.visible');
            cy.get('#teknik-tenun-ulos').should('be.visible');
            cy.get('#ukuran-ulos').should('be.visible');
            cy.get('#makna-ulos').should('be.visible');
            cy.get('#fungsi-ulos').should('be.visible');
            cy.get('#btn-next').should('be.visible');
            cy.get('#btn-prev').should('be.visible');
        });
    })

    describe('Verifikasi Fitur Penenun', () => {
        //precondition: admi berada pada halaman penenun
        beforeEach(() => {
            cy.get('#sidebar-penenun').click();
        });

        it('Admin menambahkan data penenun yang baru dengan input yang valid', () => {
            cy.get('#btn-tambah-penenun').click()
            cy.get('input#dropzone-file').attachFile('testgambar.jpg');
            cy.get('#penenun-name').type('Anri');
            cy.get('#dropdown-pilih-tahun-lahir-penenun').select('1999');
            cy.get('#dropdown-suku-penenun').select('Batak Toba');
            cy.get('#domicile').type('Samosir');
            cy.get('#dropdown-alat-tenun').select('Alat Tenun Bukan Mesin (ATBM)');
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');
            cy.get('#penenun-story').type('Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.');
            cy.get('#btn-simpan').click();
            //cy.contains('Data penenun berhasil ditambahkan').should('exist');
        })

        it('Admin mengedit data penenun  dengan input yang valid', () => {
            cy.get('#btn-edit-penenun').click()
            cy.get('input#dropzone-file').attachFile('testgambar.jpg');
            cy.get('#ulos-name').clear().type('penenunTest1');
            cy.get('#dropdown-pilih-tahun-lahir-penenun').select('1995');
            cy.get('#dropdown-suku-penenun').select("Batak Angkola");
            cy.get('#domicile').clear().type('Samosir');
            cy.get('#dropdown-alat-tenun').select('Alat Tenun Bukan Mesin (ATBM)');
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');
            cy.get('#ulos-meaning').clear().type('Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.');
            cy.get('#btn-update').click();
            //cy.contains('Data penenun berhasil diedit').should('exist');
        })

        // it('Admin menghapus data penenun', () => {
        //     cy.get('#table-search').type('nama');
        //     cy.contains('tr', 'nama').should('be.visible');
        //     cy.get('table tr')
        //         .eq(1) // Select the 3rd row (index 2)
        //         .find('.bg-danger_surface') // Replace 'button.delete-button' with the actual selector for your delete button
        //         .click();
        //     cy.get('#btn-hapus-confirm').click()
        //     //cy.contains('tr', 'nama').should('not.exist');
        //     //cy.contains('data sudah berhasil dihapus').should('be.visible');
        // })

        it('Verifikasi Admin bisa melihat data detail penenun dari tabel daftar penenun ', () => {
            cy.get('#table-search').type('Hanna')
            cy.get('#baris-daftar-penenun').click()
            cy.get('#nama-penenun').should('be.visible');
            cy.get('#teknik-tenun-penenun').should('be.visible');
            cy.get('#suku-penenun').should('be.visible');
            cy.get('#usia-penenun').should('be.visible');
            cy.get('#domisili-penenun').should('be.visible');
            cy.get('#gambar-penenun').should('be.visible');
            cy.get('#cerita-penenun').should('be.visible');
        })
    })

    describe('Verifikasi Fitur Generate Motif', () => {
        //precondition: admi berada pada halaman penenun
        beforeEach(() => {
            cy.get('#sidebar-generate-motif').click();
        });

        it('Admin menambahkan gambar ulos utuh', () => {
            cy.get('#btn-tambah-gambar-ulos').click()
            cy.get('input#dropzone-file').attachFile('ulosUtuh1.jpeg');
            cy.get('#ulos-name').type('Ulos utuh testing1');
            cy.get('#dropdown-suku-ulos').select('Batak Angkola')
            cy.get('#btn-simpan').click()
        })

        it('Admin menambahkan gambar Motif ulos', () => {
            cy.get('#field-cari-ulos').type('test_Ulos Harungguan')
            cy.get('#ulos-name').click()
            cy.get('#btn-tambah-gambar-motif-ulos').click()
            cy.get('input#dropzone-file').attachFile('motifUlos1.jpeg');
            cy.get('#dropdown-ukuran-motif').select('Sedang');
            cy.get('#btn-simpan').click()
            cy.reload();
            cy.get('img').should('exist');
        })

        it('Admin menambahkan gambar hasil generate motif ulos', () => {
            cy.get('#field-cari-ulos').type('test_Ulos Harungguan')
            cy.get('#ulos-name').click()
            cy.get('#hasil-gambar-motif-ulos').click()
            cy.get('#btn-tambah-gambar-motif-ulos').click()
            cy.get('input#dropzone-file').attachFile('motifUlos1.jpeg');
            cy.get('#dropdown-ukuran-motif').select('Besar');
            cy.get('#btn-simpan').click()
            cy.wait(3000)
            cy.reload();
            cy.get('#gambar-generate').should('exist');
        })

        // it('Verifikasi admin bisa menghapus gambar pada fitur generate motif', () => {
        //     cy.get('#field-cari-ulos').type('semoga bisa')
        //     cy.get('#btn-sunting-or-simpan').click()
        //     cy.get('#btn-hapus').click()
        //     cy.get('#btn-hapus-alert').click()
        //     cy.get('#ulos-name')
        //         .contains('semoga bisa')
        //         .should('not.exist');
        // })
    })
    

    it('Admin keluar dari website', () =>{
        cy.get('#btn-logout').click();
        cy.wait(5000)
        cy.reload()
        cy.get('#username-address-icon').should('be.visible');
    })
})