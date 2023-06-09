import {
    LoginAndGoToUlosPage,
    addUlosInformation,
    uploadUlosImage
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos pada Tahap 3. Ketersediaan Ulos - Metode Random Testing', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
        uploadUlosImage()
        addUlosInformation()
    });

    const testCases = [
        {
            testCase: 'Admin menambahkan ketersediaan ulos produk dengan valid input',
            image: 'ulosUtuh1.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
        },
        {
            testCase: 'Admin menambahkan gambar produk dengan size > 5MB dan input lain terisi dengan valid input',
            image: 'largeUlosUtuh.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'Ukuran gambar tidak boleh melebihi 5000 KB.'
        },
        {
            testCase: 'Admin menambahkan link produk dengan format bukan link',
            image: 'ulosUtuh2.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'invalid-url',
            expectedErrorMessage: 'URL Produk tidak valid'
        },
    ];

    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            cy.get('.w-11').click()
            if (testCase.image) {
                cy.get('input#dropzone-file').attachFile(testCase.image);
            }
            if (testCase.productName) {
                cy.get('input#ulos-name-produk').type(testCase.productName)
            }
            if (testCase.productPrice) {
                cy.get('#ulos-price').type(testCase.productPrice)
            }
            if (testCase.productUrl) {
                cy.get('#ulos-url').type(testCase.productUrl)
            }
            cy.get('#btn-simpan-perubahan').click()
            // Check for expected error message or successful submission
            if (testCase.expectedErrorMessage) {
                cy.contains(testCase.expectedErrorMessage).should('exist');
            } else {
                // Tambahkan assertion untuk tindakan yang diharapkan ketika input valid
                cy.contains('Data ulos berhasil ditambahkan').should('exist');
            }
        });
    });
});