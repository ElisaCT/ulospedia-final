// {API ini digunakan untuk Mendapatkan Semua Motif Hasil Generate Motif }
describe('Pengujian API: Generate-Feature-Motif-Ulos', () => {
    const ulosId = 10;
    const motifId = 13;
    const motifResultId = 12;
    // Precondition: Login and set authentication token
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it.only('GET: Mendapatkan semua hasil motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            },
            qs: {
                'size': 'size'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            //expect(response.body).to.have.property('message', 'data motif hasil generate belum tersedia')
            // Lakukan asserstion pada body response
        });
    });

    // POST: Menambahkan hasil motif baru
    it('POST: Menambahkan hasil motif baru', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'POST',
            url: `generate/ulos/${ulosId}/motifs/${motifId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: {
                'size': 'Kecil'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Lakukan assertion pada body response
        });
    });

    // POST: Menambahkan gambar hasil motif baru
    it('POST: Menambahkan gambar hasil motif baru', () => {
        const authToken = Cypress.env('authToken');
        cy.fixture('motifUlos1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((motifImage) => {
                const formData = new FormData();
                formData.append('motif-result-image', motifImage, 'motifUlos1.jpeg');

                cy.request({
                    method: 'POST',
                    url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'accept': '*/*',
                    },
                    body: formData,
                }).then((response) => {
                    expect(response.status).to.eq(201);
                    // cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
    });

    // it.only('DELETE: Menghapus hasil motif', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 101;
    //     const motifId = 131;
    //     const motifResultId = 12;
    //     cy.request({
    //         method: 'DELETE',
    //         failOnStatusCode: false,
    //         url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'accept': '*/*'
    //         },
    //     }).then((response) => {
    //        // expect(response.status).to.eq(200);
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //         // Lakukan assertion pada body response
    //     });
    // });

    // GET: Mendapatkan gambar hasil motif
    it.only('GET: Mendapatkan gambar hasil motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}/image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            //cy.log('Response Body:', JSON.stringify(response.body, null, 2)); //menampilkan gambar motif
            // Lakukan assertion pada body response
        });
    });


})