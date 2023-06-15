import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";
import {
    uploadUlosImage
} from "../../../PreCondition";

describe('Fungsionalitas Menambahkan Ulos pada Tahap 2. Informasi Ulos - Metode Random Testing', () => {
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
            testCase: "Admin menambahkan data ulos dengan ukuran panjang ulos kosong, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input",
            ulosName: "Ulos Harungguan",
            sukuUlos: "Batak Toba",
            ulosLocation: "Samosir",
            ulosLength: "43",
            ulosWidth: "",
            teknikTenun: "Teknik Ikat Lungsi",
            ulosMeaning: "Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang",
            ulosFunction: "Ulos berarti kain dalam bahasa Batak Toba.",
            expectedErrorMessage: "Panjang ulos dan lebar ulos harus diisi",
        },
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