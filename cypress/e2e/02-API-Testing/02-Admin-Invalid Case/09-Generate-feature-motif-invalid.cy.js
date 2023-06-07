// { API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

describe('Pengujian API: Invalid Feature Generate Motif', () => {
    const ulosId = 10;
    const invalidId = 1011;
    const motifId = 15;
    const invalidMotifId = 115;
    const invalidAuthToken = 'INVALID_TOKEN';
    const imagePath = 'motifUlos1.jpeg';

    describe('Pengujian API - Fitur Generate untuk motif ulos invalid case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('POST: Menambahkan/membuat sebuah data teks baru berdasarkan ulosId yang tidak valid(tidak tersedia)', () => {
            const size = 'Sedang';
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidId}/motifs`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json'
                },
                body: {
                    "size": size
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });


        it('POST: Membuat/mengupload gambar motif baru berdasarkan ulos id dan motif id yang tidak valid(tidak tersedia)', () => {
            const imagePath = 'motifUlos1.jpeg';
            const authToken = Cypress.env('authToken');

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `generate/ulos/${invalidId}/motifs/${invalidMotifId}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(404);
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
        });

        it('GET: Mendapatkan gambar motif berdasarkan ulosId dan motifId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidId}/motifs/${invalidMotifId}/image/public`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                },
                encoding: 'binary'
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('DELETE: Menghapus motif yang ada berdasarkan ulosId dan motifId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'DELETE',
                failOnStatusCode: false, //         
                url: `generate/ulos/${invalidId}/motifs/${invalidMotifId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

    });

    describe('Pengujian API - Fitur Generate untuk motif ulos dengan invalid credentials', () => {
        it('GET: Mendapatkan semua motif untuk dashboard', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });


        it('POST: Menambahkan/membuat sebuah data teks baru berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            const size = 'Sedang';

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Content-Type': 'application/json'
                },
                body: {
                    "size": size
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });


        it('POST: Membuat/mengupload gambar motif baru berdasarkan ulos id dan motif id yang valid(tersedia) dengan invalid credentials', () => {
            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
                    headers: {
                        'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(401);
                });
            });
        });

        it('GET: Mendapatkan gambar motif berdasarkan ulosId dan motifId yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                },
                encoding: 'binary'
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });

        // it('DELETE: Menhapus motif yang ada berdasarkan ulosId dan motifId yang valid(tersedia) dengan invalid credentials', () => {

        //     cy.request({
        //         method: 'DELETE',
        //failOnStatusCode: false,       
        //url: `generate/ulos/${ulosId}/motifs/${motifId}`,
        //         headers: {
        //                'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
        //             'Accept': '*/*'
        //         }
        //     }).then((response) => {
        //         expect(response.status).to.eq(401);
        //     });
        // });

    });
})