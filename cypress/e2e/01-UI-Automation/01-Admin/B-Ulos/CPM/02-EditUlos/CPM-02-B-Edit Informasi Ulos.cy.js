import {
    LoginAndGoToUlosPage
} from "../../../PreCondition";
import {
    uploadUlosImage
} from "../../../PreCondition";

describe('Fungsionalitas Mengedit Informasi Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });

    const testCases = [{
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
            testCase: 'Admin mengedit data ulos menjadi inputan nama ulos kosong dan inputan lain terisi dengan valid input',
            ulosName: '',
            expectedErrorMessage: 'Nama ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan nama ulos lebih dari 100 char dan inputan lain terisi dengan valid input',
            ulosName: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida ante vel blandit feugiat.',
            expectedErrorMessage: 'Nama ulos tidak boleh lebih dari 100 karakter',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan warna ulos lebih dari satu dan inputan lain terisi dengan valid input',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan warna ulos kosong dan inputan lain terisi dengan valid input',
            expectedErrorMessage: 'Warna ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan Asal suku ulos kosong dan inputan lain terisi dengan valid input',
            sukuUlos: '',
            expectedErrorMessage: 'Asal suku ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan lokasi ulos kosong dan inputan lain terisi dengan valid input',
            ulosLocation: '',
            expectedErrorMessage: 'Lokasi ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan lokasi ulos lebih dari 100 char dan inputan lain terisi dengan valid input',
            ulosLocation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida ante vel blandit feugiat.',
            expectedErrorMessage: 'Lokasi ulos tidak boleh lebih dari 100 karakter',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi ukuran panjang ulos kosong, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input',
            ulosLength: '',
            ulosWidth: '',
            expectedErrorMessage: 'Ukuran panjang ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi ukuran panjang ulos diinput number, ukuran lebar ulos kosong, dan inputan lain terisi dengan valid input',
            ulosWidth: '',
            expectedErrorMessage: 'Ukuran lebar ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi ukuran panjang ulos kosong, ukuran lebar ulos diinput number, dan inputan lain terisi dengan valid input',
            ulosLength: '',
            expectedErrorMessage: 'Ukuran panjang ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan teknik tenun kosong dan inputan lain terisi dengan valid input',
            teknikTenun: '',
            expectedErrorMessage: 'Teknik tenun harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan Makna ulos kosong dan inputan lain terisi dengan valid input',
            ulosMeaning: '',
            expectedErrorMessage: 'Makna ulos harus diisi',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan Makna ulos lebih dari 500 char dan inputan lain terisi dengan valid input',
            ulosMeaning: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida ante vel blandit feugiat. Donec a dui at justo efficitur pellentesque. Nunc efficitur velit vitae velit hendrerit tincidunt. Proin porta dolor at venenatis malesuada. Sed vitae feugiat massa. Vestibulum id volutpat lorem, eget posuere risus. Mauris ullamcorper justo id orci fermentum ultrices. Fusce fringilla eu nisl vel laoreet. Integer id sem vel risus placerat viverra. Mauris bibendum diam sit amet purus maximus rutrum. Aenean rutrum risus mi, a volutpat turpis porttitor sed. Mauris viverra metus eu mauris vestibulum, eget facilisis arcu tincidunt. Nam sed odio vel magna faucibus vulputate nec nec elit. Integer vehicula magna at tellus efficitur, in dignissim quam tincidunt. Sed nec neque a nulla rhoncus mattis. Integer ultricies sem sed congue commodo. In hac habitasse platea dictumst. Nullam vulputate elementum lacus id scelerisque. ',
            expectedErrorMessage: 'Makna ulos tidak boleh lebih dari 500 karakter',
        },
        {
            testCase: 'Admin mengedit data ulos menjadi inputan Fungsi ulos kosong dan inputan lain terisi dengan valid input',
            ulosFunction: '',
            expectedErrorMessage: 'Fungsi ulos harus diisi',
        }
    ];

    testCases.forEach((testCase) => {
        it(testCase.testCase, () => {
            cy.get('#btn-edit-ulos').click();
            // cy.get('#btn-tambah-ulos').click();
            cy.get('#btn-selanjutnya').click();

            if (testCase.ulosName) {
                cy.get('#ulos-name').clear().type(testCase.ulosName)
            } else if (testCase.ulosName == '') {
                cy.get('#ulos-name').clear();
            }
            if (testCase.sukuUlos) {
                cy.get('#dropdown-suku-ulos').clear().select(testCase.sukuUlos)
            } else if (testCase.sukuUlos == '') {
                cy.get('#dropdown-suku-ulos').select([]);
            }
            //warna ulos
            // if(testCase.testCase == 'Admin mengedit data ulos menjadi inputan warna ulos kosong dan inputan lain terisi dengan valid input'){
            //     cy.get('#checkbox-merah').uncheck()
            // }else if(testCase.testCase == 'Admin mengedit data ulos menjadi inputan warna ulos lebih dari satu dan inputan lain terisi dengan valid input'){
            //     cy.get('#checkbox-merah').click()
            //     cy.get('#checkbox-hijau').click()
            // }else{
            //     cy.get('#checkbox-merah').click()
            // }

            cy.get('#jenis-ulos-pengembangan').check();

            if (testCase.ulosLocation) {
                cy.get('#ulos-location').clear().type(testCase.ulosLocation)
            } else if (testCase.ulosLocation == '') {
                cy.get('#ulos-location').clear()
            }
            if (testCase.ulosLength) {
                cy.get('#ulos-legth').clear().type(testCase.ulosLength)
            } else if (testCase.ulosLength == '') {
                cy.get('#ulos-legth').clear()
            }
            if (testCase.ulosWidth) {
                cy.get('#ulos-width').clear().type('89')
            } else if (testCase.ulosWidth == '') {
                cy.get('#ulos-width').clear()
            }
            if (testCase.teknikTenun) {
                cy.get('#dropdown-teknik-tenun').clear().select(testCase.teknikTenun);
            } else if (testCase.teknikTenun == '') {
                cy.get('#dropdown-teknik-tenun').select([]);
            }
            if (testCase.ulosMeaning) {
                cy.get('#ulos-meaning').clear().type(testCase.ulosMeaning)
            } else if (testCase.ulosMeaning == '') {
                cy.get('#ulos-meaning').clear()
            }
            if (testCase.ulosFunction) {
                cy.get('#ulos-function').clear().type(testCase.ulosFunction)
            } else if (testCase.ulosFunction == '') {
                cy.get('#ulos-function').clear()
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