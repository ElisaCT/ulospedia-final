import {
    LoginAndGoToUlosPage,
    addUlosInformation,
    uploadUlosImage
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
        uploadUlosImage()
        addUlosInformation()
    });

    const testCases = [
        // Test case 1: Admin menambahkan gambar produk dengan size > 5MB dan input lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan gambar produk dengan size > 5MB dan input lain terisi dengan valid input',
            image: 'largeUlosUtuh.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'Ukuran gambar tidak boleh melebihi 5000 KB.'
        },

        // Test case 2: Admin menambahkan gambar produk kosong dan input lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan gambar produk kosong dan input lain terisi dengan valid input',
            image: '',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'Gambar produk harus diisi'
        },

        // Test case 3: Admin menambahkan gambar produk dengan format .pdf dan input lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan gambar produk dengan format .pdf dan input lain terisi dengan valid input',
            image: 'testgambar.pdf',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'File gambar harus berupa gambar dengan format JPG, JPEG, atau PNG.'
        },

        // Test case 4: Admin menambahkan nama produk dengan inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan nama produk dengan inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input',
            image: 'ulosUtuh2.jpg',
            productName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis euismod pulvinar.',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'Nama Produk tidak boleh lebih dari 100 karakter'
        },

        // Test case 5: Admin menambahkan nama produk dengan inputan nama ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan nama produk dengan inputan nama ulos kosong dan inputan lain terisi dengan valid input',
            image: 'ulosUtuh2.jpg',
            productName: '',
            productPrice: '500000',
            productUrl: 'https://example.com/product/1',
            expectedErrorMessage: 'Nama Produk tidak boleh kosong'
        },

        // Test case 6: Admin menambahkan link produk dengan inputan nama ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: 'Admin menambahkan link produk dengan inputan nama ulos kosong dan inputan lain terisi dengan valid input',
            image: 'ulosUtuh2.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: '',
            expectedErrorMessage: 'URL Produk tidak boleh kosong'
        },

        // Test case 7: Admin menambahkan link produk dengan format bukan link
        {
            testCase: 'Admin menambahkan link produk dengan format bukan link',
            image: 'ulosUtuh2.jpg',
            productName: 'Ulos Harungguan',
            productPrice: '500000',
            productUrl: 'invalid-url',
            expectedErrorMessage: 'URL Produk tidak valid'
        },

        // Test case 8: Admin menon-aktifkan toggle pada ketersedian Ulos pada E-commerce
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