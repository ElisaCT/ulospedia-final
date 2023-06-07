import {
    LoginAndGoToUlosPage
} from "../../PreCondition";
describe('Fungsionalitas Menambahkan Ulos - Metode Category Partitioning', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });

    describe('Fungsionalitas Halaman Menambahkan ulos - Admin', () => {
        const testCases = [
            // Test case 1: Admin menambahkan data ulos dengan seluruh inputan terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan seluruh inputan terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 2: Admin menambahkan data ulos dengan gambar ulos utuh yang kosong dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan gambar ulos utuh yang kosong dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: '',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 3: Admin menambahkan data ulos utuh dengan size > 5MB dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos utuh dengan size > 5MB dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'largeUlosUtuh.jpg', // File size > 5MB
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 4: Admin menambahkan data ulos utuh dengan format .pdf dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos utuh dengan format .pdf dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh.pdf', // File format .pdf
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 5: Admin menambahkan data ulos dengan gambar potongan ulos yang kosong dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan gambar potongan ulos yang kosong dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: '',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 6: Admin menambahkan data ulos gambar potongan ulos dengan size > 5MB dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos gambar potongan ulos dengan size > 5MB dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'largePotonganUlos.jpg', // File size > 5MB
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 7: Admin menambahkan data gambar potongan ulos dengan format .pdf dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data gambar potongan ulos dengan format .pdf dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos.pdf', // File format .pdf
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 8: Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan gambar motif ulos yang kosong dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: '',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 9: Admin menambahkan data ulos dengan ulos name yang kosong dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan ulos name yang kosong dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: '',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 10: Admin menambahkan data ulos dengan harga ulos yang kosong dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan harga ulos yang kosong dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: '',
                    ulosURL: 'https://ditenun.com/'
                }
            },
            // Test case 11: Admin menambahkan data ulos dengan URL ulos yang tidak valid dan input lain terisi dengan valid input
            {
                testCase: 'Admin menambahkan data ulos dengan URL ulos yang tidak valid dan input lain terisi dengan valid input',
                data: {
                    imageUlosUtuh: 'ulosUtuh1.jpeg',
                    imagePotonganUlos: 'potonganUlos1.jpeg',
                    imageMotifUlos: 'motifUlos1.jpeg',
                    ulosName: 'Ulos Harungguan',
                    sukuUlos: 'Batak Toba',
                    ulosLocation: 'Samosir',
                    ulosLength: '122',
                    ulosWidth: '89',
                    teknikTenun: 'Teknik Ikat Lungsi',
                    ulosMeaning: 'Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang',
                    ulosFunction: 'Ulos berarti kain dalam bahasa Batak Toba.',
                    ulosProductName: 'Ulos Harungguan',
                    ulosPrice: 'Rp.200.000',
                    ulosURL: 'invalidURL'
                }
            }
        ];

        it.only('Admin menambahkan data ulos dengan inputan yang valid', () => {
            cy.get('#btn-tambah-ulos').click();
            //stepper 1: menambahkan data gambar ulos
            cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
            cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
            cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');

            //stepper 2: menambahkan data informasi (teks) ulos
            cy.get('#btn-selanjutnya').click()
            cy.get('#ulos-name').type('Ulos Harungguan')
            cy.get('#dropdown-suku-ulos').select('Batak Toba')
            cy.get('#jenis-ulos-tradisional').check();
            cy.get('#jenis-ulos-pengembangan').check();
            cy.get('#ulos-location').type('Samosir')
            cy.get('#ulos-legth').type('122')
            cy.get('#ulos-width').type('89')
            cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');
            cy.get('#ulos-meaning').type('Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang')
            cy.get('#ulos-function').type('Ulos berarti kain dalam bahasa Batak Toba.   ')

            //stepper 3: menambahkan data ketersediaan produk ulos pada eccomerce
            cy.get('#btn-selanjutnya').click()
            cy.get('#status-togel-eccommerce').click()
            //gambar produk
            // cy.fixture('ulosUtuh2.jpg').then((fileContent) => {
            //     cy.get('input#dropzone-file').attachFile({
            //         fileContent: fileContent,
            //         fileName: 'ulosUtuh2.jpg',
            //         mimeType: 'image/jpeg'
            //     });
            // });
            cy.get('input#ulos-name-produk').type('Ulos Harungguan')
            cy.get('#ulos-price').type('Rp.200.000')
            cy.get('#ulos-url').type('https://ditenun.com/')
            cy.get('#btn-simpan').click()
        });

        it('Memastikan fitur pagination berfungsi dengan benar', () => {
            cy.get('#sidebar-ulos').click();
            cy.wait(1000);
            // Mendapatkan info halaman saat ini
            cy.get('#info-pagination').invoke('text').then((infoText) => {
                const currentPageInfo = infoText.split('dari')[0].trim().split('sampai');
                const currentPageStart = parseInt(currentPageInfo[0].trim());
                const currentPageEnd = parseInt(currentPageInfo[1].trim());

                // Mengklik tombol Next
                cy.get('#btn-next-pagination').click();

                // Memastikan halaman berubah dengan memeriksa info halaman saat ini
                cy.get('#info-pagination').invoke('text').then((newInfoText) => {
                    const newPageInfo = newInfoText.split('dari')[1].trim().split('data')[0].trim().split('sampai');
                    const newPageStart = parseInt(newPageInfo[0].trim());
                    const newPageEnd = parseInt(newPageInfo[1].trim());

                    // Memastikan data yang ditampilkan berbeda
                    expect(newPageStart).to.be.above(currentPageEnd);

                    // Mengklik tombol Prev
                    cy.get('#btn-prev-pagination').click();

                    // Memastikan halaman berubah dengan memeriksa info halaman saat ini
                    cy.get('#info-pagination').invoke('text').then((prevInfoText) => {
                        const prevPageInfo = prevInfoText.split('dari')[1].trim().split('data')[0].trim().split('sampai');
                        const prevPageStart = parseInt(prevPageInfo[0].trim());
                        const prevPageEnd = parseInt(prevPageInfo[1].trim());

                        // Memastikan data yang ditampilkan kembali ke halaman sebelumnya
                        expect(prevPageStart).to.equal(currentPageStart);
                        expect(prevPageEnd).to.equal(currentPageEnd);
                    });
                });
            });
        });



    })


    // it('', () => {

    // })

    // it('', () => {

    // })

    // it('', () => {

    // })
});