// { API ini digunakan untuk mengakses data potongan ulos. }


describe('Pengujian API: Invalid', () => {
    const validUlosId = 10;
    const invalidUlosId = 1011;
    const invalidPiecesImageId = 299;
    const piecesImageId = 23;
    const invalidAuthToken = 'INVALID_TOKEN';
    const imagePath = 'ulosUtuh1.jpeg';

    describe('Pengujian API - Gambar Potongan Ulos dengan invalid case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('POST-Membuat gambar potongan ulos yang baru berdasarkan invalidUlosId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('ulos-pieces-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${invalidUlosId}/pieces-images`,
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

        it('GET: Mendapatkan gambar potongan ulos berdasarkan invalidUlosId dan piecesImageId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${invalidUlosId}/pieces-images/${invalidPiecesImageId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('DELETE: Menghapus gambar potongan ulos berdasarkan invalidUlosId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${invalidUlosId}/pieces-images/${piecesImageId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id {1011} tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });
    });


    describe('Pengujian API - Gambar Potongan Ulos dengan invalid Credentials', () => {

        it('POST-Membuat gambar potongan ulos yang baru berdasarkan ulosId yang valid(tersedia) dengan invalid Credentials', () => {

            cy.fixture(imagePath, 'binary').then((fileContent) => {
                const formData = new FormData();
                formData.append('ulos-pieces-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

                cy.request({
                    method: 'POST',
                    failOnStatusCode: false,
                    url: `ulospedia/ulos/${validUlosId}/pieces-images`,
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

        it('GET: Mendapatkan gambar potongan ulos berdasarkan validUlosId dan piecesimageId yang valid(tersedia) dengan invalid Credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${validUlosId}/pieces-images/${piecesImageId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

        it('DELETE: Menghapus gambar potongan ulos berdasarkan validUlosId yang valid(tersedia) dengan invalid Credentials', () => {
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${validUlosId}/pieces-images/${piecesImageId}`,
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