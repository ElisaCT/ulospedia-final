// {API ini digunakan untuk Mendapatkan Semua Motif Hasil Generate Motif }
describe('Pengujian API: Generate-Feature-Motif-Ulos', () => {
    const ulosId = 12;
    const motifId = 29;
    const motifResultId = 20;
    // Precondition: Login and set authentication token
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('GET: Mendapatkan semua hasil motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            //expect(response.body).to.have.property('message', 'data motif hasil generate belum tersedia')
            // Lakukan asserstion pada body response
        });
    });

    // GET: Mendapatkan gambar hasil motif
    it('GET: Mendapatkan gambar hasil motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}/image/public`,
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

    // POST: Menambahkan hasil motif baru
    it('POST: Menambahkan hasil motif baru', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'POST',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: {
                'size': 'Kecil'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            // Lakukan assertion pada body response
        });
    });

    // POST: Menambahkan gambar hasil motif baru
    it('POST: Menambahkan gambar hasil motif baru', () => {

        cy.fixture('motifUlos1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((motifImage) => {
                const formData = new FormData();
                formData.append('motif-result-image', motifImage, 'motifUlos1.jpeg');

                cy.request({
                    method: 'POST',
                    url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}/image`,
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
    })

    //tambah mulai dari sini
    it('PUT: Memperbaharui data hasil motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'PUT',
            url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}`,
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "size": "Kecil"
            })
        }).then((response) => {
            // Assertions on the response
            expect(response.status).to.equal(200);
            expect(response.body.code).to.equal(200);
            expect(response.body.status).to.equal('success');
            // Add more assertions as needed
        });
    });

    it.only('PUT: Memperbaharui gambar hasil motif', () => {
        cy.fixture('motifUlos1.jpeg', 'base64').then(fileContent => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
            const formData = new FormData();
            formData.append('motif-result-image', blob, 'motifUlos1.jpeg');

            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'PUT',
                url: `generate/ulos/${ulosId}/motifs/${motifId}/motif-results/${motifResultId}/image`,
                headers: {
                    'accept': '*/*',
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData,
            }).then((response) => {
                // Assertions on the response
                expect(response.status).to.equal(200);
            });
        });
    });



    // it('DELETE: Menghapus hasil motif', () => {
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

    // it('DELETE:Menghapus data dan gambar hasil generate motif', () => {
    //     const authToken = Cypress.env('authToken');
    //     const delUlosId = 122;
    //     const delMotifId = 29;
    //     const delMotifResultId = 20;
    //     cy.request({
    //         method: 'DELETE',
    //         url: `generate/ulos/${delUlosId}/motifs/${delMotifId}/motif-results/${delMotifResultId}`,
    //         headers: {
    //             'accept': '*/*',
    //             'Authorization': `Bearer ${authToken}`,
    //         },
    //         path: {
    //             'ulos-id': 'ulos-id-value',
    //             'motif-id': 'motif-id-value',
    //             'motif-result-id': 'motif-result-id-value'
    //         }
    //     }).then((response) => {
    //         // Assertions on the response
    //         expect(response.status).to.equal(200);
    //         expect(response.body.code).to.equal(0);
    //         expect(response.body.status).to.equal('string');
    //         // Add more assertions as needed
    //     });
    // });

})