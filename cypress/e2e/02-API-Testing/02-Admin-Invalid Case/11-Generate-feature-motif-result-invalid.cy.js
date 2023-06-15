// {API ini digunakan untuk Mendapatkan Semua Motif Hasil Generate Motif }
describe('Pengujian API: Generate-Feature-Motif-Ulos- invalid', () => {
    const invalidUlosId = 1011;
    const invalidMotifId = 131;
    const motifResultId = 12;
    const ulosId = 10;
    const motifId = 13;
    const invalidAuthToken = 'INVALID_TOKEN';
    // Precondition: Login and set authentication token
    // before(() => {
    //     cy.loginAndSetAuthToken();
    // });

    describe('Pengujian API: Generate-Feature-Motif-Ulos- invalid credentials', () => {

        it('GET: Mendapatkan semua hasil motif dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${invalidMotifId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                },
                qs: {
                    'size': 'size'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
            });
        });

        // POST: Menambahkan hasil motif baru
        it('POST: Menambahkan hasil motif baru dengan invalid credentials', () => {
            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${invalidMotifId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: {
                    'size': 'Kecil'
                }
            }).then((response) => {
                expect(response.status).to.eq(403);
                // Lakukan assertion pada body response
            });
        });

        // POST: Menambahkan gambar hasil motif baru
        it('POST: Menambahkan gambar hasil motif baru dengan invalid credentials', () => {
            cy.fixture('motifUlos1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((motifImage) => {
                    const formData = new FormData();
                    formData.append('motif-result-image', motifImage, 'motifUlos1.jpeg');

                    cy.request({
                        method: 'POST',
                        failOnStatusCode: false,
                        url: `generate/ulos/${invalidUlosId}/motifs/${invalidMotifId}/motif-results/${motifResultId}`,
                        headers: {
                            'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                            'accept': '*/*',
                        },
                        body: formData,
                    }).then((response) => {
                        expect(response.status).to.eq(403);
                        // cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                    });
                });
        });

        it('DELETE: Menghapus hasil motif dengan invalid credentials', () => {

            const invalidUlosId = 101;
            const invalidMotifId = 131;
            const motifResultId = 12;
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${invalidMotifId}/motif-results/${motifResultId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                },
            }).then((response) => {
                expect(response.status).to.eq(403);
                // cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                // Lakukan assertion pada body response
            });
        });

        // GET: Mendapatkan gambar hasil motif
        it('GET: Mendapatkan gambar hasil motif dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${invalidMotifId}/motif-results/${motifResultId}/image`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*'
                },
            }).then((response) => {
                expect(response.status).to.eq(403);
                //cy.log('Response Body:', JSON.stringify(response.body, null, 2)); //menampilkan gambar motif
                // Lakukan assertion pada body response
            });
        });
    })

    describe('Pengujian API: Generate-Feature-Motif-Ulos- Invalid case', () => {
        // Precondition: Login and set authentication token
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('GET: Mendapatkan semua hasil motif dengan invalidUlosId', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'GET',
                url: `generate/ulos/${invalidUlosId}/motifs/${motifId}`,
                failOnStatusCode: false,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
                qs: {
                    'size': 'size'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
                // expect(response.body).to.have.property('message', 'data motif hasil generate belum tersedia')
                // Lakukan asserstion pada body response
            });
        });

        it('GET: Mendapatkan semua hasil motif dengan invalidmotifId', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'GET',
                url: `generate/ulos/${ulosId}/motifs/${invalidMotifId}`,
                failOnStatusCode: false,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
                qs: {
                    'size': 'size'
                }
            }).then((response) => {
                //expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', `ulos dengan id ${ulosId} (valid) | motif digital dengan id ${invalidMotifId} tidak ditemukan`);

                // Lakukan asserstion pada body response
            });
        });
        // POST: Menambahkan hasil motif baru
        it('POST: Menambahkan hasil motif baru dengan invalid ulos ID', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${motifId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: {
                    'size': 'Kecil'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
                // Lakukan assertion pada body response
            });
        });

        // POST: Menambahkan hasil motif baru
        it.only('POST: Menambahkan hasil motif baru dengan invalid motif ID', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs/${invalidMotifId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: {
                    'size': 'Kecil'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', `ulos dengan id ${ulosId} (valid) | motif-digital dengan id ${invalidMotifId} tidak ditemukan`);
                // Lakukan assertion pada body response
            });
        });

        // POST: Menambahkan gambar hasil motif baru
        it('POST: Menambahkan gambar hasil motif baru dengan invalid motif ID', () => {
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
                        expect(response.status).to.eq(404);
                        cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                        expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
                        expect(response.body).to.have.property('message', 'data motif hasil generate belum tersedia')
                    });
                });
        });


        it('DELETE: Menghapus hasil motif denga invalid ulos ID', () => {
            const authToken = Cypress.env('authToken');
            const motifResultId = 12;
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${motifId}/motif-results/${motifResultId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                // Lakukan assertion pada body response
            });
        });

        it('DELETE: Menghapus hasil motif denga invalid motif ID', () => {
            const authToken = Cypress.env('authToken');
            const motifResultId = 12;
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs/${invalidMotifId}/motif-results/${motifResultId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
            }).then((response) => {
                // expect(response.status).to.eq(200);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', `ulos dengan id ${ulosId} (valid) | motif digital dengan id ${invalidMotifId} tidak ditemukan`);
                // Lakukan assertion pada body response
            });
        });

        // GET: Mendapatkan gambar hasil motif
        it('GET: Mendapatkan gambar hasil motif ulos ID yang tidak valid', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidUlosId}/motifs/${motifId}/motif-results/${motifResultId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2)); //menampilkan gambar motif
                // Lakukan assertion pada body response
            });
        });

        // GET: Mendapatkan gambar hasil motif
        it('GET: Mendapatkan gambar hasil motif dengan motif ID yang tidak valid', () => {
            const authToken = Cypress.env('authToken');
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${ulosId}/motifs/${invalidMotifId}/motif-results/${motifResultId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*'
                },
            }).then((response) => {
                expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2)); //menampilkan gambar motif
                expect(response.body).to.have.property('message', `ulos dengan id ${ulosId} (valid) | motif digital dengan id ${invalidMotifId} tidak ditemukan`);
                // Lakukan assertion pada body response
            });
        });


    })


})