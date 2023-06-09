import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos pada Tahap 1. Gambar Ulos - Metode Random Testing', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });


    const testCases = [
        {
            testCase: 'Admin menambahkan data gambar ulos dengan seluruh inputan gambar terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
        },
        {
            testCase: 'Admin menambahkan data ulos dengan gambar potongan ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: '',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Gambar potongan ulos tidak boleh kosong'
        },
        {
            testCase: 'Admin menambahkan data ulos dengan gambar motif ulos dengan format pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.pdf',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg'
        },
    ];

    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            // Test steps for each test case
            cy.get('#btn-tambah-ulos').click();

            if (testCase.imageUlosUtuh) {
                cy.get('form').find('input[type="file"]').eq(0).attachFile(testCase.imageUlosUtuh);
            }
            if (testCase.imagePotonganUlos) {
                cy.get('form').find('input[type="file"]').eq(1).attachFile(testCase.imagePotonganUlos);
            }
            if (testCase.imageMotifUlos) {
                cy.get('form').find('input[type="file"]').eq(2).attachFile(testCase.imageMotifUlos);
            }
            cy.get('#btn-selanjutnya').click();

            if (testCase.expectedErrorMessage) {
                cy.contains(testCase.expectedErrorMessage).should('exist');
            } else {
                cy.get('#ulos-name').should('be.visible');
            }
        });
    });
});