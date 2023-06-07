//{ API ini digunakan untuk mengakses gambar utama atau main image dari data ulos. }

describe('Pengujian API - Ulos utuh', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang valid(tersedia)', () => { // Test title
        const ulosId = 10;
        const authToken = Cypress.env('authToken');
        // console.log('authToken:', authToken);

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}/main-image/public`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it.only('PUT: Memperbarui gambar utama ulos dengan ID ulos yang valid (Invalid Credentials)', () => {
        const ulosId = 10;
        const authToken = 'invalid_token';

        cy.fixture('ulosUtuh1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((mainImage) => {
                const formData = new FormData();
                formData.append('main-image', mainImage, 'ulosUtuh1.jpeg');

                cy.request({
                    method: 'PUT',
                    url: `ulospedia/ulos/${ulosId}/main-image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'multipart/form-data',
                        'accept': '*/*'
                    },
                    body: formData,
                    failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status code
                }).then((response) => {
                    expect(response.status).to.eq(403);
                    expect(response.body).to.have.property('code', 403);
                    expect(response.body).to.have.property('status', 'error');
                    expect(response.body).to.have.property('message', 'Invalid credentials');
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
    });


    // it('POST: Membuat atau mengupload gambar ulos utuh yang baru berdasarkan ulosId yang valid(tersedia)', () => {
    //     const ulosId = 10;
    //     const imagePath = 'ulosUtuh1.jpeg';
    //      const authToken = Cypress.env('authToken');

    //     cy.fixture(imagePath, 'binary').then((fileContent) => {
    //         const formData = new FormData();
    //         formData.append('main-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

    //         cy.request({
    //             method: 'POST',
    //             url: `ulospedia/ulos/${ulosId}/main-image`,
    //             headers: {
    //                 'Authorization': `Bearer ${authToken}`,
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //             body: formData
    //         }).then((response) => {
    //             expect(response.status).to.eq(201);
    //             // expect(response.body.status).to.eq('success');
    //             // expect(response.body.data.ulos).to.have.property('id', ulosId);
    //             // expect(response.body.data.ulos).to.have.property('mainImageReference');
    //             cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //         });
    //     });
    // });

    // it('DELETE: Menghapus gambar ulos utuh', () => {
    //     const ulosId = 9;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/ulos/${ulosId}/main-image`,
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