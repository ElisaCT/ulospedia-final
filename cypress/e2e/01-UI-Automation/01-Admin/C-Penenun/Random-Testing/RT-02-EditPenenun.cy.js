import { LoginAndGoToPenenunPage } from "../../PreCondition";
describe('Fungsionalitas Edit Penenun - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
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
            expectedMessage: 'Tabel Data Penenun',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan  dengan gambar penenun yang kosong ',
            image: '',
            errorMessage: 'Gambar penenun harus diisi',
        },
        {
            testName: 'Admin mengedit salah satu data penenun yang diinginkan dengan teknik tenun yang digunakan tidak diisi',
            weavingTechnique: '',
            errorMessage: 'Teknik tenun yang digunakan harus diisi',
        }
    ];

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#btn-edit-penenun').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
            }else if (data.image = ''){
                cy.get('#dropzone-file').clear({ force: true })
            }

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