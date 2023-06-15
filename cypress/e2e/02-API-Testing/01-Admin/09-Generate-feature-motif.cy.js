// { API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

describe('Pengujian API - Fitur Generate untuk motif ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });


    it('GET: Mendapatkan semua motif untuk dashboard', () => {
        const ulosId = 12;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('GET: Mendapatkan gambar motif berdasarkan ulosId dan motifId yang valid(tersedia)', () => {
        const ulosId = 12;
        const motifId = 29;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/image/public`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            encoding: 'binary'
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('POST: Menambahkan/membuat sebuah data teks baru berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 12;
        const size = 'Sedang';
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'POST',
            url: `generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                "size": size
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('POST: Membuat/mengupload gambar motif baru berdasarkan ulos id dan motif id yang valid(tersedia)', () => {
        const ulosId = 12;
        const motifId = 29;
        const imagePath = 'motifUlos1.jpeg';
        const authToken = Cypress.env('authToken');

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then((response) => {
                expect(response.status).to.eq(201);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });
    });

    it('PUT: Memperbarui data text motif berdasarkan ulos ID dan motif ID', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 12;
        const motifId = 29;

        cy.request({
            method: 'PUT',
            url: `generate/ulos/${ulosId}/motifs/${motifId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
                'Accept': '*/*',
            },
            body: {
                "size": "Kecil"
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.motif.size).to.eq('Kecil');
            expect(response.body.message).to.eq('data text motif berhasil diubah');
        });
    });

    it('PUT: Memperbarui gambar motif berdasarkan ulos ID dan motif ID', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 12;
        const motifId = 29;

        cy.fixture('motifUlos1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((motifImage) => {
                const formData = new FormData();
                formData.append('motif-image', motifImage, 'motifUlos1.jpeg');

                cy.request({
                    method: 'PUT',
                    url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data',
                        'Accept': '*/*',
                    },
                    body: formData,
                    failOnStatusCode: false,
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    });

    // it('DELETE: Menghapus gambar motif berdasarkan ulos ID dan motif ID', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 57;
    //     const motifId = 40;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*',
    //         },
    //         failOnStatusCode: false,
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         // Additional assertions if needed
    //     });
    // });


    // it('DELETE: Menghapus Data Motif', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 12;
    //     const motifId = 29;
    //     cy.request({
    //         method: 'DELETE',
    //         url: `/api/v1/generate/ulos/${ulosId}/motifs/${motifId}`,
    //         headers: {
    //             'Accept': '*/*',
    //             'Authorization': `Bearer ${authToken}`,
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.code).to.eq(200);
    //         expect(response.body.status).to.eq('success');
    //         // Assert any additional validations as needed
    //     });
    // });
});