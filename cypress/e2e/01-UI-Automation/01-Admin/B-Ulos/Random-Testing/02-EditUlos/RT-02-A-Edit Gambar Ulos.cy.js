import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";

describe('Fungsionalitas Mengedit Gambar Ulos - Metode Random Testing', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });


    const testCases = [
        {
            testCase: 'Admin mengedit data ulos menjadi seluruh inputan terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
        },
        {
            testCase: 'Admin mengedit data ulos utuh menjadi format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh.pdf', // File format .pdf
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi gambar motif ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: '',
            expectedErrorMessage: 'Gambar motif ulos tidak boleh kosong',
        },
        {
            testCase: 'Admin mengedit data ulos gambar motif ulos menjadi size > 5MB dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'largeMotifUlos.jpg', // File size > 5MB
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB',
        }
    ];


    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            cy.get('#btn-edit-ulos').click();

            if (testCase.imageUlosUtuh) {
                cy.get('form').find('input[type="file"]').eq(0).attachFile(testCase.imageUlosUtuh);
            } else {
                cy.get('form').find('input[type="file"]').eq(0).clear({
                    force: true
                });
            }

            if (testCase.imagePotonganUlos) {
                cy.get('form').find('input[type="file"]').eq(1).attachFile(testCase.imagePotonganUlos);
            } else {
                cy.get('form').find('input[type="file"]').eq(1).clear({
                    force: true
                });
            }

            if (testCase.imageMotifUlos) {
                cy.get('form').find('input[type="file"]').eq(2).attachFile(testCase.imageMotifUlos);
            } else {
                cy.get('form').find('input[type="file"]').eq(2).clear({
                    force: true
                });
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