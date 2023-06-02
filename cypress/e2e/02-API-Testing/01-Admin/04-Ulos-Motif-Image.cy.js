// { API ini digunakan untuk mengakses data motif ulos. }

describe('Pengujian API - Gambar motif Ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('POST:Membuat/mengupload gambar motif dari ulos utuh yang baru berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 10;
        const imagePath = 'motifUlos1.jpeg';
        const authToken = Cypress.env('authToken');

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('ulos-motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `ulospedia/ulos/${ulosId}/motif-images`,
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

    it('GET:Mendapatkan Gambar motif ulos berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 10;
        const motifImageId = 2;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
            cy.log('Response Body:', response.body);
        });
    });

    // it('DELETE: Menghapus gambar motif ulos berdasarkan ulosId yang valid(Tersedia)', () => {
    //     const ulosId = 9;
    //     const motifImageId = 2;
    //     const authToken = Cypress.env('authToken'); 

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         // Perform additional assertions if needed
    //         cy.log('Response Body:', response.body);
    //     });
    // });

});