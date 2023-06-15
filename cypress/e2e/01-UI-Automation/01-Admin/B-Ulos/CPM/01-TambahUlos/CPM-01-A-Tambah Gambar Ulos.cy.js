import {LoginAndGoToUlosPage} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos pada Tahap 1. Gambar Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });


    const testCases = [
        // Test case 1: Admin menambahkan data ulos dengan seluruh inputan terisi dengan valid input
        {
            testCase: '1. Admin menambahkan data gambar ulos dengan seluruh inputan gambar terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
        },
        // Test case 2: Admin menambahkan data ulos dengan gambar ulos utuh yang kosong dan input lain terisi dengan valid input
        {
            testCase: '2. Admin menambahkan data gambar ulos dengan gambar ulos utuh yang kosong dan gambar lain terisi dengan valid input',
            imageUlosUtuh: '',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Gambar ulos utuh tidak boleh kosong'
        },
        // Test case 3: Admin menambahkan data ulos utuh dengan size > 5MB dan input lain terisi dengan valid input
        {
            testCase: '3. Admin menambahkan data gambar ulos utuh dengan size > 5MB dan gambar lain terisi dengan valid input',
            imageUlosUtuh: 'largeUlosUtuh.jpg', // File size > 5MB
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB'
        },
        // Test case 4: Admin menambahkan data ulos utuh dengan format .pdf dan input lain terisi dengan valid input
        {
            testCase: '4. Admin menambahkan data ulos utuh dengan format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh.pdf', // File format .pdf
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg'
        },
        // Test case 5: Admin menambahkan data ulos dengan gambar potongan ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '5. Admin menambahkan data ulos dengan gambar potongan ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: '',
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Gambar potongan ulos tidak boleh kosong'
        },
        // Test case 6: Admin menambahkan data ulos gambar potongan ulos dengan size > 5MB dan input lain terisi dengan valid input
        {
            testCase: '6. Admin menambahkan data ulos gambar potongan ulos dengan size > 5MB dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'largePotonganUlos.jpg', // File size > 5MB
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB'
        },
        // Test case 7: Admin menambahkan data gambar potongan ulos dengan format .pdf dan input lain terisi dengan valid input
        {
            testCase: '7. Admin menambahkan data gambar potongan ulos dengan format .pdf dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos.pdf', // File format .pdf
            imageMotifUlos: 'motifUlos1.jpeg',
            expectedErrorMessage: 'Format gambar hanya boleh png/jpg/jpeg'
        },
        // Test case 8: Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '8. Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: '',
            expectedErrorMessage: 'Gambar motif ulos tidak boleh kosong'
        },

        // Test case 9: Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '9. Admin menambahkan data ulos dengan gambar motif ulos > 5 mb dan input lain terisi dengan valid input',
            imageUlosUtuh: 'ulosUtuh1.jpeg',
            imagePotonganUlos: 'potonganUlos1.jpeg',
            imageMotifUlos: 'largeMotifUlos.jpg', // File size > 5MB
            expectedErrorMessage: 'Ukuran gambar ulos utuh tidak boleh > 5 MB'
        },

        // Test case 10: Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input
        {
            testCase: '10. Admin menambahkan data ulos dengan gambar motif ulos dengan format pdf dan input lain terisi dengan valid input',
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
            
            if (testCase.imageUlosUtuh){
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