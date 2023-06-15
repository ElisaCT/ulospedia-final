// API ini digunakan untuk mengakses data produk yang berkaitan dengan data ulos. }

describe('Pengujian API: Ulos Product', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('GET: Mendapatkan Gambar/Image dari Produk', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 19;
        const productId = 6;

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}/products/${productId}/image/public`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Do assertions with the response body as needed
        });
    });

    it('PUT: Memperbaharui Ketersediaan Produk yang Berkaitan dengan Ulos', () => {
        const ulosId = 40;
        const state = false;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'PUT',
            url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulosProductData.id).to.eq(ulosId);
            expect(response.body.data.ulosProductData.availableInEcommerce).to.eq(state);
            expect(response.body.message).to.eq('state availability of ulos products successfully updated');
        });
    });

    it('POST: Mengatur Ketersediaan Produk yang Berkaitan dengan Ulos', () => {
        const ulosId = 19;
        const state = true;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'POST',
            url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.code).to.eq(201);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulos.id).to.eq(ulosId);
            expect(response.body.data.ulos.availableInEcommerce).to.eq(state);
            expect(response.body.message).to.eq('state untuk kondisi apakah produk yang menggunakan ulos berhasil diset');
        });
    });

    it('POST: Menambahkan Data Produk Baru', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 40;
        const requestBody = {
            name: "Ragi Hotang",
            price: 200000,
            url: "https://ditenun.com/"
        };

        cy.request({
            method: 'POST',
            url: `ulospedia/ulos/${ulosId}/products`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.code).to.eq(201);
            expect(response.body.status).to.eq('success');
            expect(response.body.message).to.eq('data product berhasil dibuat');
        });
    });

    it('POST: Menambahkan Gambar/Image Produk Baru', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 19;
        const productId = 6;
        const imagePath = 'potonganUlos1.jpeg';

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            let res;
            const formData = new FormData();
            formData.append('product-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*',
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then((response) => {
                expect(response.status).to.eq(201);
            });
        });
    });

    //dari sini request yang nambah
    it('PUT: Update Gambar/Image Produk Baru', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 19;
        const productId = 6;
        const imageFilePath = 'potonganUlos1.jpeg';

        cy.fixture(imageFilePath, 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((imageBlob) => {
                const formData = new FormData();
                formData.append('product-image', imageBlob, imageFilePath);

                cy.request({
                    method: 'PUT',
                    url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    });

    it('PUT: Memperbaharui Data Produk Baru', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 19;
        const productId = 6;
        const updatedProductData = {
            name: 'Ulos ragi hotang',
            price: 0,
            url: 'https://ditenun.com/'
        };

        cy.request({
            method: 'PUT',
            url: `ulospedia/ulos/${ulosId}/products/${productId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProductData)
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.product.id).to.eq(productId);
            expect(response.body.data.product.ulosId).to.eq(ulosId);
            expect(response.body.data.product.name).to.eq(updatedProductData.name);
            expect(response.body.data.product.price).to.eq(updatedProductData.price);
            expect(response.body.data.product.productUrl).to.eq(updatedProductData.url);
        });
    });

    // it('DELETE: Menghapus Gambar Ulos Lainnya', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 10;
    //     const imageId = 23;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/ulos/${ulosId}/other-images/${imageId}`,
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

    // it('DELETE: Menghapus Gambar Produk', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 10;
    //     const productId = 23;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/ulos/${ulosId}/products/${productId}/image`,
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




})