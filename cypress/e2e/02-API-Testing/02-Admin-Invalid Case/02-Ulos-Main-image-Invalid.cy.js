// //{ API ini digunakan untuk mengakses gambar utama atau main image dari data ulos. }
describe('Pengujian API: Invalid', () => {
    const ulosId = 1011;
    const invalidAuthToken = 'INVALID_TOKEN';
    const imagePath = 'ulosUtuh1.jpeg';

    describe('Pengujian API - Ulos utuh dengan invalid case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');


            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/main-image/public`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                expect(response.status).to.eq(404);
            });
        });

        it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang tidak valid (tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/main-image/public`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('code', 404);
                expect(response.body).to.have.property('status', 'error');
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                expect(response.status).to.eq(404);
            });
        });


        it('POST: Membuat atau mengupload gambar ulos utuh yang baru berdasarkan ulosId yang tidak valid(tidak tersedia)', () => {
            // const imagePath = 'ulosUtuh1.jpeg';
            const authToken = Cypress.env('authToken');

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('main-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${ulosId}/main-image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2))
                    expect(response.status).to.eq(404);
                });
            });

        });


        it('DELETE: Menghapus gambar ulos utuh', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'DELETE',
                url: `ulospedia/ulos/${ulosId}/main-image`,
                failOnStatusCode: false,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.body).to.have.property('code', 404);
                expect(response.body).to.have.property('status', 'error');
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');

                cy.log('Response Body:', JSON.stringify(response.body, null, 2))
            });
        });
    });


    describe('Pengujian API - Ulos utuh dengan invalid credentials', () => {
        const validUlosId = 10;

        it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${validUlosId}/main-image`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });

        it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang valid (tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${validUlosId}/main-image`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });


        it('POST: Membuat atau mengupload gambar ulos utuh yang baru berdasarkan ulosId yang valid(tersedia) dengan invalid credential', () => {
            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('main-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${validUlosId}/main-image`,
                    headers: {
                        'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2))
                    expect(response.status).to.eq(401);
                });
            });

        });

        it('PUT: Memperbarui gambar utama ulos dengan ID ulos yang valid dan menggunakan invalid credentials', () => {
            const ulosId = 10;

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((mainImage) => {
                    const formData = new FormData();
                    formData.append('main-image', mainImage, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'PUT',
                        url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`,
                        headers: {
                            'Authorization': `Bearer ${invalidAuthToken}`,
                            'Content-Type': 'multipart/form-data',
                            'accept': '*/*'
                        },
                        body: formData,
                        failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status code
                    }).then((response) => {
                        expect(response.status).to.eq(401);
                    });
                });
        });


        it('DELETE: Menghapus gambar ulos utuh dengan invalid credentials', () => {
            cy.request({
                method: 'DELETE',
                url: `ulospedia/ulos/${validUlosId}/main-image`,
                failOnStatusCode: false,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });


})