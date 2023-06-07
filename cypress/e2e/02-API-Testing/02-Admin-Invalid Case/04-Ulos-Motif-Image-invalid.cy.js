// { API ini digunakan untuk mengakses data motif ulos. }

describe('Pengujian API: Invalid', () => {
    const invalidUlosId = 1011;
    const ulosId = 10;
    const imagePath = 'motifUlos1.jpeg';
    const motifImageId = 2;
    const invalidMotifImageId = 12;
    const invalidAuthToken = 'INVALID_TOKEN';

    describe('Pengujian API - Gambar motif Ulos dengan invalid case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('POST:Membuat/mengupload gambar motif dari ulos utuh yang baru berdasarkan invalidUlosId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('ulos-motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${invalidUlosId}/motif-images`,
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

        it('GET:Mendapatkan Gambar motif ulos berdasarkan invalidUlosId yang valid(tidak tersedia) dan invalidmotifImageId', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${invalidUlosId}/motif-images/${invalidMotifImageId}/public`,
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

        it.only('PUT: Memperbarui Gambar Motif Ulos Baru - Invalid ID', () => {
            const authToken = Cypress.env('authToken');
            const ulosId = 1011; // ID ulos yang tidak valid

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((blob) => {
                    const formData = new FormData();
                    formData.append('ulos-motif-image', blob, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'PUT',
                        url: `ulospedia/ulos/${ulosId}/motif-images`,
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formData,
                        failOnStatusCode: false,
                    }).then((response) => {
                        expect(response.status).to.eq(404); // Memastikan respons memiliki status code 404
                    });
                });
        });

        it('DELETE: Menghapus gambar motif ulos berdasarkan invalidUlosId yang tidal valid(tidak Tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${invalidUlosId}/motif-images/${invalidMotifImageId}`,
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


    describe('Pengujian API: Gambar motif Ulos dengan invalid credentials', () => {
        it('POST:Membuat/mengupload gambar motif dari ulos utuh yang baru berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('ulos-motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${ulosId}/motif-images`,
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

        it('GET:Mendapatkan Gambar motif ulos berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
                // Perform additional assertions if needed
            });
        });

        it.only('PUT: Memperbarui Gambar Motif Ulos Baru - Invalid Credentials', () => {
            const ulosId = 10;

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((blob) => {
                    const formData = new FormData();
                    formData.append('ulos-motif-image', blob, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'PUT',
                        url: `ulospedia/ulos/${ulosId}/motif-images`,
                        headers: {
                            'Authorization': `Bearer ${invalidAuthToken}`, // Menggunakan token otentikasi yang tidak valid
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formData,
                        failOnStatusCode: false,
                    }).then((response) => {
                        expect(response.status).to.eq(401); // Memastikan respons memiliki status code 401 (Unauthorized)
                    });
                });
        });


        it('DELETE: Menghapus gambar motif ulos berdasarkan ulosId yang valid(Tersedia) dengan invalid credentials', () => {

            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
                // Perform additional assertions if needed
            });
        });

    });
})