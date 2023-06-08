import {
    LoginAndGoToUlosPage,
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });

    const testCases = [{
            testCase: 'Admin mengedit gambar produk pada ketersedian Ulos pada E-commerce menjadi size > 5MB dan input lain terisi dengan valid input',
            image: 'largeUlosUtuh.jpg', // Nama file gambar dengan ukuran > 5MB
            expectedErrorMessage: 'Ukuran gambar tidak boleh lebih dari 5MB',
        },
        {
            testCase: 'Admin mengedit gambar pada produk pada ketersedian Ulos pada E-commerce kosong dan input lain terisi dengan valid input',
            image: '', // Nama file gambar kosong
            expectedErrorMessage: "Gambar ulos produk harus diisi"
        },
        {
            testCase: 'Admin mengedit gambar pada produk pada ketersedian Ulos pada E-commerce menjadi format .pdf dan input lain terisi dengan valid input',
            image: 'ulosUtuh.pdf', // Nama file gambar dengan format .pdf
            expectedErrorMessage: 'Format gambar harus berupa file gambar (bukan .pdf)',
        },
        {
            testCase: 'Admin mengedit nama produk pada ketersedian Ulos pada E-commerce menjadi inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input',
            productName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida ante vel blandit feugiat.',
            expectedErrorMessage: 'Nama produk tidak boleh lebih dari 100 karakter',
        },
        {
            testCase: 'Admin mengedit nama produk pada ketersedian Ulos pada E-commerce menjadi inputan nama ulos kosong dan inputan lain terisi dengan valid input',
            productName: '',
            expectedErrorMessage: 'Nama produk harus diisi',
        },
        {
            testCase: 'Admin mengedit link produk pada ketersedian Ulos pada E-commerce menjadi inputan nama ulos kosong dan inputan lain terisi dengan valid input',
            productUrl: '',
            expectedErrorMessage: 'Link produk harus diisi',
        },
        {
            testCase: 'Admin mengedit link produk pada ketersedian Ulos pada E-commerce menjadi format bukan link',
            productUrl: 'bukanlink',
            expectedErrorMessage: 'Link produk tidak valid',
        },
    ];

    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            cy.get('#btn-edit-ulos').click();
            cy.get('#btn-selanjutnya').click();
            cy.get('#btn-selanjutnya').click();
            cy.get('.w-11').click()

            if (testCase.image) {
                cy.get('input#dropzone-file').attachFile(testCase.image);
            } else if(testCase.image == ''){
                cy.get('input#dropzone-file').clear({
                    force: true
                });
            }
            if (testCase.productName) {
                cy.get('#nama-produk-ulos').clear().type(testCase.productName)
            } else if (testCase.productName == '') {
                cy.get('#nama-produk-ulos').clear()
            }
            if (testCase.productPrice) {
                cy.get('#harga-produk-ulos').clear().type(testCase.productPrice)
            } else if (testCase.productPrice == '') {
                cy.get('#harga-produk-ulos').clear()
            }
            if (testCase.productUrl) {
                cy.get('#url-produk-ulos').clear().type(testCase.productUrl)
            } else if (testCase.productUrl) {
                cy.get('#url-produk-ulos').clear()
            }
            cy.get('#btn-simpan-perubahan').click()
            // Check for expected error message or successful submission
            if (testCase.expectedErrorMessage) {
                cy.contains(testCase.expectedErrorMessage).should('exist');
            } else {
                // Tambahkan assertion untuk tindakan yang diharapkan ketika input valid
                cy.contains('Data ulos berhasil diedit').should('exist');
            }
        });
    });
});