import {
    LoginAndGoToPenenunPage
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Penenun - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
    });


    const TestData = [
        //valid data
        {
            testName: 'Admin menambahkan data penenun dengan valid input pada semua field',
            image: 'testgambar.jpg',
            name: 'Rew_Tambah_Penenun',
            birthYear: '1998',
            ethnicity: 'Batak Toba',
            domicile: 'Samosir',
            weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
            weavingTechnique: 'Teknik Ikat Lungsi',
            story: 'Akrab disapa Opung',
            messageValidation: 'Tabel Data Penenun',
        },

        // Invalid Test Data
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
            messageValidation: 'File gambar harus berupa gambar dengan format JPG, JPEG, atau PNG.',
        },
        {
            testName: 'Admin menambahkan data penenun dengan gambar penenun yang memiliki ukuran >5000 kb dan input lainnya dimasukkan valid input',
            image: 'largePenenun.jpg',
            name: 'Anri',
            birthYear: '1998',
            ethnicity: 'Batak Toba',
            domicile: 'Samosir',
            weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
            weavingTechnique: 'Teknik Ikat Lungsi',
            story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
            messageValidation: 'Ukuran gambar tidak boleh melebihi 5000 KB.',
        },
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
        },
        {
            testName: 'Admin menambahkan data penenun dengan panjang nama penenun > 100 karakter dan input lainnya dimasukkan valid input',
            image: 'testgambar.jpg',
            name: 'Nama Penenun yang sangat sangat panjang sekali melebihi 100 karakter Nama Penenun yang sangat sangat panjang',
            birthYear: '1998',
            ethnicity: 'Batak Toba',
            domicile: 'Samosir',
            weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
            weavingTechnique: 'Teknik Ikat Lungsi',
            story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
            messageValidation: 'Nama penenun tidak boleh lebih dari 100 karakter',
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
            messageValidation: 'Nama penenun harus diisi',
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
            messageValidation: 'Suku penenun harus diisi',
        },
        {
            testName: 'Admin menambahkan data penenun dengan panjang domisili penenun > 50 char dan input lainnya dimasukkan valid input',
            image: 'testgambar.jpg',
            name: 'Anri',
            birthYear: '1998',
            ethnicity: 'Batak Toba',
            domicile: 'Samosir merupakan tempat tinggal yang sangat jauh dari perkotaan dengan pemandangan alam yang indah dan dikelilingi oleh pegunungan yang hijau dan indah sekali',
            weavingTool: 'Alat Tenun Bukan Mesin (ATBM)',
            weavingTechnique: 'Teknik Ikat Lungsi',
            story: 'Akrab disapa Opung, Nurhaeda Siregar adalah penenun ulos senior dari Desa Hutanagodang, Muara, Tapanuli Utara.',
            messageValidation: 'Domisili penenun tidak boleh lebih dari 50 karakter',
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
            messageValidation: 'Domisili penenun harus diisi',
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
            messageValidation: 'Alat tenun penenun harus diisi',
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
            messageValidation: 'Teknik tenun penenun harus diisi',
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
            messageValidation: 'Cerita penenun harus diisi',
        },
    ];

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#btn-tambah-penenun').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
            }

            if (data.name) {
                cy.get('#penenun-name').type(data.name);
            }


            cy.get('#dropdown-pilih-tahun-lahir-penenun').select('1999');
            

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

            if (data.messageValidation) {
                cy.contains(data.messageValidation).should('exist');
            }
        });
    });

});