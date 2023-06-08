import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";
import {
    uploadUlosImage
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
        uploadUlosImage()
    });

    const testCases = [
        // Test case 1: Admin menambahkan data ulos dengan seluruh inputan terisi dengan valid input
        {
            testCase: 'Admin menambahkan data ulos dengan seluruh inputan terisi dengan valid input',
            ulosName: 'Ulos Harungguan',
            sukuUlos: 'Batak Toba',
            ulosLocation: 'Samosir',
            ulosLength: '122',
            ulosWidth: '89',
            teknikTenun: 'Teknik Ikat Lungsi',
            ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
            ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
        },
        {
            testCase: "Admin menambahkan data ulos dengan inputan nama ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Nama ulos tidak boleh kosong",
        },
        // Test case 2: Admin menambahkan data ulos dengan inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Nama ulos tidak boleh lebih dari 100 karakter",
        },
        // Test case 3: Admin menambahkan data ulos dengan inputan warna ulos lebih dari satu dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan warna ulos lebih dari satu dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
        },
        // Test case 4: Admin menambahkan data ulos dengan inputan warna ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan warna ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Warna ulos harus diisi minimal satu",
        },
        // Test case 5: Admin menambahkan data ulos dengan inputan Asal suku ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan Asal suku ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Asal suku ulos tidak boleh kosong",
        },
        // Test case 6: Admin menambahkan data ulos dengan inputan lokasi ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan lokasi ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Lokasi ulos tidak boleh kosong",
        },
        // Test case 7: Admin menambahkan data ulos dengan inputan lokasi ulos lebih dari 100 char dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan lokasi ulos lebih dari 100 char dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque ac dolor tristique, id efficitur urna gravida. Vestibulum eu mi ac erat laoreet lacinia id ut ex. Quisque aliquam tellus justo",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Lokasi ulos tidak boleh lebih dari 100 karakter",
        },
        // Test case 8: Admin menambahkan data ulos dengan ukuran panjang ulos kosong, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan ukuran panjang ulos kosong, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "",
            ulosWidth: "",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Panjang ulos dan lebar ulos harus diisi",
        },
        // Test case 9: Admin menambahkan data ulos dengan ukuran panjang ulos diinput number, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan ukuran panjang ulos diinput number, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "abc",
            ulosWidth: "",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Panjang ulos harus diisi dengan angka",
        },
        // Test case 10: Admin menambahkan data ulos dengan ukuran panjang ulos kosong, ukuran lebar ulos diinput number, dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan ukuran panjang ulos kosong, ukuran lebar ulos diinput number, dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "",
            ulosWidth: "123",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Panjang ulos harus diisi",
        },
        // Test case 11: Admin menambahkan data ulos dengan inputan teknik tenun kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan teknik tenun kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Teknik tenun tidak boleh kosong",
        },
        // Test case 12: Admin menambahkan data ulos dengan inputan Makna ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan Makna ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Makna ulos tidak boleh kosong",
        },
        // Test case 13: Admin menambahkan data ulos dengan inputan Makna ulos lebih dari 500 char dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan Makna ulos lebih dari 500 char dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque ac dolor tristique, id efficitur urna gravida. Vestibulum eu mi ac erat laoreet lacinia id ut ex. Quisque aliquam tellus justo",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Makna ulos tidak boleh lebih dari 500 karakter",
        },
        // Test case 14: Admin menambahkan data ulos dengan inputan Fungsi ulos kosong dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan Fungsi ulos kosong dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "",
            expectedErrorMessage: "Fungsi ulos tidak boleh kosong",
        },
        // Test case 15: Admin menambahkan data ulos dengan inputan Fungsi ulos lebih dari 500 char dan inputan lain terisi dengan valid input
        {
            testCase: "Admin menambahkan data ulos dengan inputan Fungsi ulos lebih dari 500 char dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "122",
            ulosWidth: "89",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia neque ac dolor tristique, id efficitur urna gravida. Vestibulum eu mi ac erat laoreet lacinia id ut ex. Quisque aliquam tellus justo",
            expectedErrorMessage: "Fungsi ulos tidak boleh lebih dari 500 karakter",
        },
    ]

    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            if (testCase.ulosName) {
                cy.get('#ulos-name').type(testCase.ulosName)
            }
            if (testCase.sukuUlos) {
                cy.get('#dropdown-suku-ulos').select(testCase.sukuUlos)
            }
            cy.get('#checkbox-merah').check(); // Tekan checkbox Merah
            cy.get('#jenis-ulos-pengembangan').check();
            if (testCase.ulosLocation) {
                cy.get('#ulos-location').type(testCase.ulosLocation)
            }
            if (testCase.ulosLength) {
                cy.get('#ulos-legth').type(testCase.ulosLength)
            }
            if (testCase.ulosWidth) {
                cy.get('#ulos-width').type('89')
            }
            if (testCase.teknikTenun) {
                cy.get('#dropdown-teknik-tenun').select(testCase.teknikTenun);
            }
            if (testCase.ulosMeaning) {
                cy.get('#ulos-meaning').type(testCase.ulosMeaning)
            }
            cy.get('#btn-selanjutnya').click()

            if (testCase.expectedErrorMessage) {
                cy.contains(testCase.expectedErrorMessage).should('exist');
            } else {
                cy.get('#status-togel-eccommerce').should('be.visible');
            }

        });
    });

});