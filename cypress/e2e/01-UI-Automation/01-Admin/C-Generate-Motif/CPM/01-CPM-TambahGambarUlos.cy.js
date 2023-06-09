import {
    LoginAndGoToGenerateMotifPage
} from "../../PreCondition";

describe('Fungsionalitas Menambahkan Gambar Ulos', () => {
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