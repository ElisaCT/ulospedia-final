import {
    LoginAndGoToGenerateMotifPage, cariGambarUlos
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar Ulos', () => {
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
            }else{
                cy.reload();
                cy.get('img').should('exist');
            }
        })
    })
})