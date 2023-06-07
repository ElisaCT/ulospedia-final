// API ini digunakan untuk mengakses data produk yang berkaitan dengan data ulos. }

describe('Pengujian API: Invalid', () => {
    const invalidAuthToken = 'INVALID_TOKEN';

    describe('Pengujian API: Ulos Product dengan Invalid Case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });


        it('PUT: Memperbaharui Ketersediaan Produk yang Berkaitan dengan Ulos berdasarkan ulos ID yang tidak tersedia', () => {
            const ulosId = 1011;
            const state = true;
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'PUT',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('POST: Mengatur Ketersediaan Produk yang Berkaitan dengan Ulos dengan ulos id yang tidak tersedia', () => {
            const ulosId = 1011;
            const state = true;
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('POST: Menambahkan Data Produk Baru dengan ulosId yang tidak tersedia', () => {
            const authToken = Cypress.env('authToken');
            const ulosId = 1011;
            const requestBody = {
                name: "Ragi Hotang",
                price: 200000,
                url: "https://ditenun.com/"
            };

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: requestBody
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('POST: Menambahkan Gambar/Image Produk Baru', () => {
            const authToken = Cypress.env('authToken');
            const ulosId = 1011;
            const productId = 6;
            const imagePath = 'potonganUlos1.jpeg';

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                let res;
                const formData = new FormData();
                formData.append('product-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'accept': '*/*',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(404);
                });
            });
        });

        it('GET: Mendapatkan Gambar/Image dari Produk', () => {
            const authToken = Cypress.env('authToken');
            const ulosId = 1011;
            const productId = 6;

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });


    })

    describe('Pengujian API: Ulos Product dengan Invalid Credentials', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });


        it('PUT: Memperbaharui Ketersediaan Produk yang Berkaitan dengan Ulos berdasarkan ulos ID dengan invalid credentials', () => {
            const ulosId = 1011;
            const state = true;

            cy.request({
                method: 'PUT',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

        it('POST: Mengatur Ketersediaan Produk yang Berkaitan dengan Ulos dengan ulos id  dengan invalid credentials', () => {
            const ulosId = 1011;
            const state = true;

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

        it('POST: Menambahkan Data Produk Baru dengan ulosId yang tidak tersedia  dengan invalid credentials', () => {
            const ulosId = 1011;
            const requestBody = {
                name: "Ragi Hotang",
                price: 200000,
                url: "https://ditenun.com/"
            };

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: requestBody
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

        it('POST: Menambahkan Gambar/Image Produk Baru  dengan invalid credentials', () => {
            const ulosId = 1011;
            const productId = 6;
            const imagePath = 'potonganUlos1.jpeg';

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                let res;
                const formData = new FormData();
                formData.append('product-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                    headers: {
                        'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                        'accept': '*/*',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(403);
                });
            });
        });

        it('GET: Mendapatkan Gambar/Image dari Produk  dengan invalid credentials', () => {
            const ulosId = 1011;
            const productId = 6;

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

    })

})