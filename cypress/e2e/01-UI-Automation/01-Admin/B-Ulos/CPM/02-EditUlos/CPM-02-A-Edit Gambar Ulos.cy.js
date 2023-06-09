import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";

describe('Fungsionalitas Mengedit Gambar Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });


    const testCases = [
        // Test case 1: Admin mengedit data ulos menjadi seluruh inputan terisi dengan valid input
        {
            testCase: '1. Admin mengedit data ulos menjadi seluruh inputan terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
        },
        // Test case 2: Admin mengedit data ulos menjadi gambar ulos utuh yang kosong dan input lain terisi dengan valid input
        {
            testCase: '2. Admin mengedit data ulos menjadi gambar ulos utuh yang kosong dan gambar lain terisi dengan valid input',
            imageUlosUtuh: '',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Gambar ulos utuh tidak boleh kosong',
        },
        // Test case 3: Admin mengedit data ulos utuh menjadi size > 5MB dan input lain terisi dengan valid input
        {
            testCase: '3. Admin mengedit data ulos utuh menjadi size > 5MB dan gambar lain terisi dengan valid input',
            imageUlosUtuh: 'largeUlosUtuh.jpg', // File size > 5MB
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB',
        },
        // Test case 4: Admin mengedit data ulos utuh menjadi format .pdf dan input lain terisi dengan valid input
        {
            testCase: '4. Admin mengedit data ulos utuh menjadi format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh.pdf', // File format .pdf
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg',
        },
        // Test case 5: Admin mengedit data ulos menjadi gambar potongan ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '5. Admin mengedit data ulos menjadi gambar potongan ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: '',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Gambar potongan ulos tidak boleh kosong',
        },
        // Test case 6: Admin mengedit data ulos gambar potongan ulos menjadi size > 5MB dan input lain terisi dengan valid input
        {
            testCase: '6. Admin mengedit data ulos gambar potongan ulos menjadi size > 5MB dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'largePotonganUlos.jpg', // File size > 5MB
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB',
        },
        // Test case 7: Admin mengedit data gambar potongan ulos menjadi format .pdf dan input lain terisi dengan valid input
        {
            testCase: '7. Admin mengedit data gambar potongan ulos menjadi format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos.pdf', // File format .pdf
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg',
        },
        // Test case 8: Admin mengedit data ulos menjadi gambar motif ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '8. Admin mengedit data ulos menjadi gambar motif ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: '',
            expectedErrorMessage: 'Gambar motif ulos tidak boleh kosong',
        },
        // Test case 9: Admin mengedit data ulos gambar motif ulos menjadi size > 5MB dan input lain terisi dengan valid input
        {
            testCase: '9. Admin mengedit data ulos gambar motif ulos menjadi size > 5MB dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'largeMotifUlos.jpg', // File size > 5MB
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB',
        },
        // Test case 10: Admin mengedit data gambar motif ulos menjadi format .pdf dan input lain terisi dengan valid input
        {
            testCase: '10. Admin mengedit data gambar motif ulos menjadi format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.pdf',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg',
        },
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