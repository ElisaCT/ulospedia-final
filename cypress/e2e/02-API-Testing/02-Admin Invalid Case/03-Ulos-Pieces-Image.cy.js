// { API ini digunakan untuk mengakses data potongan ulos. }

describe('Pengujian API - Gambar Potongan Ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('POST-Membuat data potongan ulos yang baru berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 10;
        const authToken = Cypress.env('authToken');
        const imagePath = 'potonganUlos1.jpeg';

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('ulos-pieces-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `ulospedia/ulos/${ulosId}/pieces-images`,
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

    it('GET: Mendapatkan gambar potongan ulos berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 10;
        const piecesImageId = 2;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}/pieces-images/${piecesImageId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
        });
    });

    //   it('DELETE: Menghapus gambar potongan ulos berdasarkan ulosId yang valid(tersedia)', () => {
    //     const ulosId = 9;
    //     const piecesImageId = 2;
    //     const authToken = Cypress.env('authToken');


    //     cy.request({
    //       method: 'DELETE',
    //       url: `ulospedia/ulos/${ulosId}/pieces-images/${piecesImageId}`,
    //       headers: {
    //         'Authorization': `Bearer ${authToken}`,
    //         'Accept': '*/*'
    //       }
    //     }).then((response) => {
    //       expect(response.status).to.eq(200);
    //       // Perform additional assertions if needed
    //       cy.log('Response Body:', response.body);
    //     });
    //   });
});