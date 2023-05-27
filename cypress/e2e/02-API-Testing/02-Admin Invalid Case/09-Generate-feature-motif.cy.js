// { API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

describe('Pengujian API - Fitur Generate untuk motif ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });


    it('GET: Mendapatkan semua motif untuk dashboard', () => {
        const ulosId = 10;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });


    it('POST: Menambahkan/membuat sebuah data teks baru berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 11;
        const size = 'Sedang';
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'POST',
            url: `generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                "size": size
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });


    it('POST: Membuat/mengupload gambar motif baru berdasarkan ulos id dan motif id yang valid(tersedia)', () => {
        const ulosId = 11;
        const motifId = 15;
        const imagePath = 'motifUlos1.jpeg';
        const authToken = Cypress.env('authToken');

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
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

    it('GET: Mendapatkan gambar motif berdasarkan ulosId dan motifId yang valid(tersedia)', () => {
        const ulosId = 10;
        const motifId = 11;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            encoding: 'binary'
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    // it('DELETE: Menhapus motif yang ada berdasarkan ulosId dan motifId yang valid(tersedia)', () => {
    //     const ulosId = 9;
    //     const motifId = 10;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'DELETE',
    //         url: `generate/ulos/${ulosId}/motifs/${motifId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.status).to.eq('success');
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //     });
    // });

});