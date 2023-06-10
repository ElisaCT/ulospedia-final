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
        // cy.wait(1000);
        // cy.get('#table-search').type('Hanna');
        // cy.contains('tr', 'Hanna').should('be.visible');
    });

    const TestData = [
        //valid data
        {
            testName: 'Admin mengedit data penenun dengan valid input pada semua field',
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
            testName: 'Admin mengedit salah satu data penenun yang diinginkan dengan gambar penenun yang merupakan pdf file',
            image: 'testgambar.pdf',
            errorMessage: 'File gambar harus berupa gambar dengan format JPG, JPEG, atau PNG.',
        },
        // {
        //     testName: 'Admin mengedit mengedit salah satu data penenun yang diinginkan dengan gambar penenun yang memiliki ukuran >5000 kb',
        //     image: 'testgambar_large.jpg',
        //     errorMessage: 'Ukuran gambar tidak boleh melebihi 5000 KB.',
        // },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan gambar penenun yang kosong ',
            image: '',
            errorMessage: 'Gambar penenun harus diisi',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan panjang nama penenun > 100 karakter ',
            name: 'Nama Penenun yang sangat sangat panjang sekali melebihi 100 karakter',
            errorMessage: 'Panjang nama penenun tidak boleh melebihi 100 karakter.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan nama penenun yang kosong ',
            name: '',
            errorMessage: 'Nama penenun harus diisi.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan tahun lahir penenun tidak diisi',
            birthYear: '',
            errorMessage: 'Tahun lahir penenun harus diisi.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan suku penenun tidak diisi',
            ethnicity: '',
            errorMessage: 'Suku penenun harus diisi.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan panjang domisili penenun > 100 char ',
            domicile: 'Samosir merupakan tempat tinggal yang sangat jauh dari perkotaan dengan pemandangan alam yang indah dan dikelilingi oleh pegunungan yang hijau dan indah sekali',
            errorMessage: 'Panjang domisili penenun tidak boleh melebihi 100 karakter.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan dengan domisili penenun tidak diisi',
            domicile: '',
            errorMessage: 'Domisili penenun harus diisi.',
        },
        {
            testName: 'Admin  mengedit salah satu data penenun yang diinginkan dengan alat tenun yang digunakan tidak diisi',
            weavingTool: '',
            errorMessage: 'Alat tenun yang digunakan harus diisi.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan dengan teknik tenun yang digunakan tidak diisi',
            weavingTechnique: '',
            errorMessage: 'Teknik tenun yang digunakan harus diisi.',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan cerita penenun kurang dari 50 char',
            story: 'Cerita',
            errorMessage: 'Cerita penenun harus memiliki setidaknya 50 karakter.',
        },
        {
            testName: 'Admin  mengedit salah satu data penenun yang diinginkan dengan cerita penenun tidak diisi ',
            story: '',
            errorMessage: 'Cerita penenun harus diisi.',
        },
    ];

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#btn-edit-penenun').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
                
            }else if (data.image = ''){
                cy.get('#dropzone-file').clear({ force: true })
            }
            // cy.get('input#dropzone-file').attachFile(data.image);
            // cy.get('#dropzone-file').clear({ force: true })
            // //.attachFile(data.image, { force: true });

            // .attachFile(data.image); // Menghapus input sebelumnya pada gambar dan memasukkan gambar yang baru


            if (data.name) {
                cy.get('#ulos-name').clear().type(data.name);
            }else if(data.name=''){
                cy.get('#ulos-name').clear() // Menghapus input sebelumnya pada field nama
            }

            if (data.birthYear) {
                cy.get('#dropdown-pilih-tahun-lahir-penenun').select(data.birthYear);
            }else if(data.birthYear=''){
                cy.get('#dropdown-pilih-tahun-lahir-penenun').select([])
            }

            if (data.ethnicity) {
                cy.get('#dropdown-suku-penenun').select(data.ethnicity);
            }else if (data.ethnicity =''){
                cy.get('#dropdown-suku-penenun').select([])
            }

            if (data.domicile) {
                cy.get('#domicile').clear().type(data.domicile);
            }else if(data.domicile=''){
                cy.get('#domicile').clear() // Menghapus input sebelumnya pada field domisili penenun
            }

            if (data.weavingTool) {
                cy.get('#dropdown-alat-tenun').select(data.weavingTool);
            }else if (data.weavingTool= '') {
                cy.get('#dropdown-alat-tenun').select([])
            }

            if (data.weavingTechnique) {
                cy.get('#dropdown-teknik-tenun').select(data.weavingTechnique);
            }else if(data.weavingTechnique=''){
                cy.get('#dropdown-teknik-tenun').select([])
            }

            if (data.story) {
                cy.get('#ulos-meaning').clear().type(data.story);
            }else if (data.story='') {
                cy.get('#penenun-story').clear()// Menghapus input sebelumnya pada field cerita penenun
            }
            cy.get('#btn-update').click();

            if (data.errorMessage) {
                cy.contains(data.errorMessage).should('exist');
            } else {
                // Tambahkan assertion untuk tindakan yang diharapkan ketika input valid
                cy.contains('Data penenun berhasil ditambahkan').should('exist');
            }
        });
    });
});