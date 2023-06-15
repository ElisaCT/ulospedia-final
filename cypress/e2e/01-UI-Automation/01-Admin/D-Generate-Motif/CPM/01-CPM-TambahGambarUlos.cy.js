import {
    LoginAndGoToGenerateMotifPage
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar Ulos pada fitur Generate motif - Metode Category Partitioning Method', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToGenerateMotifPage()
    });


    const TestData = [
        //valid data
        {
            testName: 'Admin menambahkan gambar ulos dengan valid input pada semua field',
            image: 'ulosUtuh2.jpg',
            ulosName: 'test_Ulos Harungguan',
            asalSukuUlos: 'Batak Simalungun',
            messageValidation: 'test_Ulos Harungguan',
        },

        //invalid data
        // Gambar kosong
        {
            testName: 'Admin menambahkan gambar ulos dengan gambar kosong',
            image: '',
            ulosName: 'Ulos Harungguan',
            asalSukuUlos: 'Batak Toba',
            messageValidation: 'Gambar tidak boleh kosong',
        },

        // Gambar PDF
        {
            testName: 'Admin menambahkan gambar ulos dengan gambar PDF',
            image: 'potonganUlos.pdf',
            ulosName: 'Ulos Harungguan',
            asalSukuUlos: 'Batak Karo',
            messageValidation: 'Format gambar tidak valid',
        },

        // Gambar >5MB
        {
            testName: 'Admin menambahkan gambar ulos dengan gambar >5MB',
            image: 'largeUlosUtuh.jpg',
            ulosName: 'largePotonganUlos.jpg',
            asalSukuUlos: 'Batak Angkola',
            messageValidation: 'Ukuran gambar melebihi batas maksimum',
        },

        // Validasi nama ulos (lebih dari 100 karakter)
        {
            testName: 'Admin menambahkan gambar ulos dengan nama ulos lebih dari 100 karakter',
            image: 'ulosUtuh1.jpeg',
            ulosName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut convallis justo.',
            asalSukuUlos: 'Batak Mandailing',
            messageValidation: 'Nama ulos tidak boleh lebih dari 100 karakter',
        },

        // Validasi dropdown (pilihan kosong)
        {
            testName: 'Admin menambahkan gambar ulos dengan pilihan dropdown kosong',
            image: 'ulosUtuh1.jpeg',
            ulosName: 'test_Ulos Dropdown',
            asalSukuUlos: '',
            messageValidation: 'Pilihan suku ulos tidak boleh kosong',
        },
    ]

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#btn-tambah-gambar-ulos').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
            }
            if (data.ulosName) {
                cy.get('#ulos-name').type(data.ulosName);
            }
            if (data.asalSukuUlos) {
                cy.get('#dropdown-suku-ulos').select(data.asalSukuUlos)
            }

            cy.get('#btn-simpan').click()
            if (data.messageValidation) {
                cy.contains(data.messageValidation).should('exist');
            }
        })
    })
})