import {
    LoginAndGoToGenerateMotifPage,
    cariGambarUlos
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar motif Ulos pada fitur Generate motif - Metode Random Testing', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToGenerateMotifPage()
        cariGambarUlos()
    });


    const TestData = [
        //valid data
        {
            testName: 'Admin menambahkan gambar motif ulos dengan valid input pada semua field',
            image: 'motifUlos1.jpeg',
            ukuranMotifUlos: 'Besar',
        },
        // Invalid data - Gambar kosong
        {
            testName: 'Admin menambahkan gambar motif ulos dengan gambar kosong',
            image: '',
            ukuranMotifUlos: 'Kecil',
            messageValidation: 'Gambar motif ulos harus diunggah',
        },
    
        // Invalid data - Dropdown tidak dipilih
        {
            testName: 'Admin menambahkan gambar motif ulos tanpa memilih ukuran motif',
            image: 'motifUlos1.jpeg',
            ukuranMotifUlos: '',
            messageValidation: 'Ukuran motif ulos harus dipilih',
        },
    ]

    TestData.forEach((data) => {
        it(data.testName, () => {
            cy.get('#btn-tambah-gambar-motif-ulos').click()
            if (data.image) {
                cy.get('input#dropzone-file').attachFile(data.image);
            }
            if (data.ukuranMotifUlos) {
                cy.get('#dropdown-ukuran-motif').select(data.ukuranMotifUlos);
            }
            cy.get('#btn-simpan').click()
            if (data.messageValidation) {
                cy.contains(data.messageValidation).should('exist');
            } else {
                cy.reload();
                cy.get('img').should('exist');
            }
        })
    })
})