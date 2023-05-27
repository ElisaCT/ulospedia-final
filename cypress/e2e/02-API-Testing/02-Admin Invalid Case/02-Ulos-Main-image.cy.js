//{ API ini digunakan untuk mengakses gambar utama atau main image dari data ulos. }

describe('Pengujian API - Ulos utuh', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('GET: Mendapatkan Gambar Utama Ulos berdasarkan ulosID yang valid(tersedia)', () => {
        const ulosId = 10;
        const authToken = Cypress.env('authToken');
        // console.log('authToken:', authToken);

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}/main-image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    // it('POST: Membuat atau mengupload gambar ulos utuh yang baru berdasarkan ulosId yang valid(tersedia)', () => {
    //     const ulosId = 10;
    //     const imagePath = 'ulosUtuh1.jpeg';

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