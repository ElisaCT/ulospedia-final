// API ini digunakan untuk mengakses data ulos utuh lainnya yang mungkin ditambahkan.}

describe('Pengujian API - Gambar Ulos lainnya', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });


    it('POST: Membuat/mengupload gambar ulos lainnya berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 40;
        const imagePath = 'ulosLainnya1.jpeg';
        const authToken = Cypress.env('authToken');

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('other-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `ulospedia/ulos/${ulosId}/other-images`,
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

    // it('GET: Mendapatkan gambar ulos lainnya berdasarkan ulosId yang valid(tersedia)', () => {
    //     const ulosId = 40;
    //     const imageId = 1;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'GET',
    //         url: `ulospedia/ulos/${ulosId}/other-images/${imageId}/public`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         },
    //         encoding: 'binary'
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         cy.writeFile(`ulosLainnya${imageId}.jpeg`, response.body, 'binary');
    //         cy.log('Response Body:', response.body);
    //     });
    // });

    it.only('PUT: Memperbarui Gambar Ulos Lainnya', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 40;

        cy.fixture('ulosLainnya1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((blob) => {
                const formData = new FormData();
                formData.append('other-image', blob, 'ulosLainnya1.jpeg');

                cy.request({
                    method: 'PUT',
                    url: `ulospedia/ulos/${ulosId}/other-images`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData,
                    failOnStatusCode: false,
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    });


    // it('DELETE: Menghapus gambar ulos lainnya berdasarkan ulosId yang valid(tersedia)', () => {
    //     const ulosId = 9;
    //     const imageId = 1;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/ulos/${ulosId}/other-images/${imageId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         cy.log('Response Body:', response.body);
    //     });
    // });

});