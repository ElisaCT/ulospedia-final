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
        cy.get('#sidebar-penenun').click();
        cy.wait(1000);
    });

    describe('Admin menambahkan data penenun', () => {
        // ...
        // const validTestData = [{
        //         testName: 'Admin menambahkan data penenun dengan valid input pada semua field',
        //         image: 'testgambar.jpg',
        //         name: 'Anri',
        //         birthYear: '1998',
        //         ethnicity: 'Batak Toba',
        //         domicile: 'Samosir',
        //         weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
        //         weavingTechnique: 'Teknik Ikat Lungsi',
        //         story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
        //         expectedMessage: 'Data berhasil disimpan',
        //     },
        //     // Tambahkan data test valid lainnya sesuai kebutuhan
        // ];


        const TestData = [
            //valid data
            {
                testName: 'Admin menambahkan data penenun dengan valid input pada semua field',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                expectedMessage: 'Data penenun berhasil ditambahkan',
            },

            // ...
            {
                testName: 'Admin menambahkan data penenun dengan gambar penenun yang merupakan pdf file dan input lainnya dimasukkan valid input',
                image: 'testgambar.pdf',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'File gambar harus berupa gambar dengan format JPG, JPEG, atau PNG.',
            },
            // {
            //     testName: 'Admin menambahkan data penenun dengan gambar penenun yang memiliki ukuran >5000 kb dan input lainnya dimasukkan valid input',
            //     image: 'testgambar_large.jpg',
            //     name: 'Anri',
            //     birthYear: '1998',
            //     ethnicity: 'Batak Toba',
            //     domicile: 'Samosir',
            //     weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
            //     weavingTechnique: 'Teknik Ikat Lungsi',
            //     story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
            //     errorMessage: 'Ukuran gambar tidak boleh melebihi 5000 KB.',
            // },
            {
                testName: 'Admin menambahkan data penenun dengan gambar penenun yang kosong dan input lainnya dimasukkan valid input',
                image: '',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Gambar penenun harus diisi',
            },
            {
                testName: 'Admin menambahkan data penenun dengan panjang nama penenun > 100 karakter dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Nama Penenun yang sangat sangat panjang sekali melebihi 100 karakter',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Panjang nama penenun tidak boleh melebihi 100 karakter.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan nama penenun yang kosong dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: '',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Nama penenun harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan tahun lahir penenun tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Tahun lahir penenun harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan suku penenun tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: '',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Suku penenun harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan panjang domisili penenun > 100 char dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir merupakan tempat tinggal yang sangat jauh dari perkotaan dengan pemandangan alam yang indah dan dikelilingi oleh pegunungan yang hijau dan indah sekali',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Panjang domisili penenun tidak boleh melebihi 100 karakter.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan domisili penenun tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: '',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Domisili penenun harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan alat tenun yang digunakan tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: '',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Alat tenun yang digunakan harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan teknik tenun yang digunakan tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: '',
                story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
                errorMessage: 'Teknik tenun yang digunakan harus diisi.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan cerita penenun kurang dari 50 char dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: 'Cerita',
                errorMessage: 'Cerita penenun harus memiliki setidaknya 50 karakter.',
            },
            {
                testName: 'Admin menambahkan data penenun dengan cerita penenun tidak diisi dan input lainnya dimasukkan valid input',
                image: 'testgambar.jpg',
                name: 'Anri',
                birthYear: '1998',
                ethnicity: 'Batak Toba',
                domicile: 'Samosir',
                weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
                weavingTechnique: 'Teknik Ikat Lungsi',
                story: '',
                errorMessage: 'Cerita penenun harus diisi.',
            },
        ];

        // validTestData.forEach((data) => {
        //     it(data.testName, () => {
        //         //cy.get('#btn-edit-penenun').click();
        //         cy.get('#btn-tambah-penenun').click()
        //         cy.get('input#dropzone-file').attachFile(data.image);
        //         cy.get('#penenun-name').type(data.name);
        //         cy.get('#dropdown-pilih-tahun-lahir-penenun').select(data.birthYear);
        //         cy.get('#dropdown-suku-penenun').select(data.ethnicity);
        //         cy.get('#domicile').type(data.domicile);
        //         cy.get('#dropdown-alat-tenun').select(data.weavingTool);
        //         cy.get('#dropdown-teknik-tenun').select(data.weavingTechnique);
        //         cy.get('#penenun-story').type(data.story);
        //         cy.get('#btn-simpan').click();
        //         cy.contains(data.expectedMessage).should('be.visible');
        //     });
        // });

        TestData.forEach((data) => {
            it(data.testName, () => {
                cy.get('#btn-tambah-penenun').click()
                if (data.image) {
                    cy.get('input#dropzone-file').attachFile(data.image);
                }

                if (data.name) {
                    cy.get('#penenun-name').type(data.name);
                }

                if (data.birthYear) {
                    cy.get('#dropdown-pilih-tahun-lahir-penenun').select(data.birthYear);
                }

                if (data.ethnicity) {
                    cy.get('#dropdown-suku-penenun').select(data.ethnicity);
                }

                if (data.domicile) {
                    cy.get('#domicile').type(data.domicile);
                }

                if (data.weavingTool) {
                    cy.get('#dropdown-alat-tenun').select(data.weavingTool);
                }

                if (data.weavingTechnique) {
                    cy.get('#dropdown-teknik-tenun').select(data.weavingTechnique);
                }

                if (data.story) {
                    cy.get('#penenun-story').type(data.story);
                }

                cy.get('#btn-simpan').click();

                if (data.errorMessage) {
                    cy.contains(data.errorMessage).should('exist');
                } else {
                    // Tambahkan assertion untuk tindakan yang diharapkan ketika input valid
                    cy.contains('Data penenun berhasil ditambahkan').should('exist');
                }
            });
        });
    });
    // Ini akan menambahkan skenario uji yang tidak valid ke dalam pengujian Anda.Setiap skenario akan mencoba menambahkan data penenun dengan input yang tidak valid dan memastikan pesan kesalahan yang sesuai ditampilkan.

    // Pastikan untuk menyesuaikan kode ini dengan framework pengujian atau lingkungan pengembangan Anda.







});