// API ini digunakan untuk mengakses data ulos utuh lainnya yang mungkin ditambahkan.}

describe('Pengujian API: Invalid', () => {

    const invalidUlosId = 1011;
    const ulosId = 10;
    const imagePath = 'ulosLainnya1.jpeg';
    const imageId = 1;
    const invalidImageId = 121;
    const invalidAuthToken = 'INVALID_TOKEN';


    describe('Pengujian API: Invalid', () => {

        describe('Pengujian API - Gambar Ulos lainnya dengan invalid case', () => {
            //precondition mengisi token dengan fungsi loginandserauthtoken
            before(() => {
                cy.loginAndSetAuthToken();
            });


            it('POST: Membuat/mengupload gambar ulos lainnya berdasarkan ulosId yang tidak valid(tidak tersedia)', () => {
                const authToken = Cypress.env('authToken');

                cy.fixture(imagePath, 'binary').then((fileContent) => {
                    const formData = new FormData();
                    formData.append('other-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                    cy.request({
                        method: 'POST',
                        failOnStatusCode: false,
                        url: `ulospedia/ulos/${invalidUlosId}/other-images`,
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Content-Type': 'multipart/form-data'
                        },
                        body: formData
                    }).then((response) => {
                        expect(response.status).to.eq(404);
                    });
                });
            });

            it('GET: Mendapatkan gambar ulos lainnya berdasarkan ulosId dan imageid yang tidak valid(tidak tersedia)', () => {
                const authToken = Cypress.env('authToken');

                cy.request({
                    method: 'GET',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${invalidUlosId}/other-images/${invalidImageId}`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Accept': '*/*'
                    },
                    encoding: 'binary'
                }).then((response) => {
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                    expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                    expect(response.status).to.eq(404);;
                });
            });


            it('DELETE: Menghapus gambar ulos lainnya berdasarkan ulosId dan image id yang tidak valid(tidak tersedia)', () => {
                const authToken = Cypress.env('authToken');

                cy.request({
                    method: 'DELETE',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${invalidUlosId}/other-images/${invalidImageId}`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Accept': '*/*'
                    }
                }).then((response) => {
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                    expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                    expect(response.status).to.eq(404);
                });
            });

        });

    })

    describe('Pengujian API: Gambar Ulos lainnya dengan invalid credentials', () => {
        it('POST: Membuat/mengupload gambar ulos lainnya berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('other-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${ulosId}/other-images`,
                    headers: {
                        'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(403);
                });
            });
        });

        it('GET: Mendapatkan gambar ulos lainnya berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/other-images/${imageId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                },
                encoding: 'binary'
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });


        it('DELETE: Menghapus gambar ulos lainnya berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}/other-images/${imageId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

    });
})