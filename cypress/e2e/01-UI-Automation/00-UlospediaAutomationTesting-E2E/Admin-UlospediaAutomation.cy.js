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
            cy.get('#penenun-story').clear().type('Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.');
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
            cy.get('#table-search').type('Mama Jadi')
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
            cy.get('#field-cari-ulos').type('Ulos hitam')
            cy.get('#ulos-name').click()
            cy.get('#btn-tambah-gambar-motif-ulos').click()
            cy.get('input#dropzone-file').attachFile('motifUlos1.jpeg');
            cy.get('#dropdown-ukuran-motif').select('Sedang');
            cy.get('#btn-simpan').click()
            cy.reload();
            cy.get('img').should('exist');
        })

        it('Admin menambahkan gambar hasil generate motif ulos', () => {
            cy.get('#field-cari-ulos').type('Ulos hitam')
            cy.wait(3000)
            cy.get('#ulos-name').click()
            cy.get('#hasil-gambar-motif-ulos').wait(3000).click({ force: true });
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
    

    // it('Admin keluar dari website', () =>{
    //     cy.get('#btn-logout').click();
    //     cy.wait(5000)
    //     cy.reload()
    //     cy.get('#username-address-icon').should('be.visible');
    // })
})