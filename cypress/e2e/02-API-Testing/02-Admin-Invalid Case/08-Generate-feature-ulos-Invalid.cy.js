//{ API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

describe('Pengujian API: Invalid Fitur Generate motif', () => {
    const invalidId = 1011;
    const id = 10;
    const invalidAuthToken = 'INVALID_TOKEN';

    describe('Pengujian API - Fitur Generate Ulos Invalid case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });

        it('POST: Menambahkan gambar ulos utuh pada generate motif berdasarkan id uloa yang tidak valid(tidak tersedia) ', () => {
            const authToken = Cypress.env('authToken');

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((ulosImage) => {
                    const formData = new FormData();
                    formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'POST',
                        failOnStatusCode: false,
                        url: `generate/ulos/${invalidId}/image`,
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Accept': '*/*'
                        },
                        body: formData
                    }).then((response) => {
                        expect(response.status).to.eq(404);
                        cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                    });
                });
        });

        it('GET: Menampilkan data ulos pada fitur generate motif berdasarkan Id ulos yang tidak valid(tidak tersedia', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidId}/image/public`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                expect(response.status).to.eq(404);
            });
        });

        it('DELETE: Mengahapus gambar ulos utuh pada generate motif berdasarkan yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `generate/ulos/${invalidId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(404);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
            });
        });

        it('PUT: Memperbarui Gambar generate ulos berdasarkan ulos ID - Invalid ID', () => {
            const authToken = Cypress.env('authToken');
            const ulosId = 1011; // ID yang tidak valid

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((ulosImage) => {
                    const formData = new FormData();
                    formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'PUT',
                        url: `generate/ulos/${ulosId}/image`,
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Content-Type': 'multipart/form-data',
                            'Accept': '*/*',
                        },
                        body: formData,
                        failOnStatusCode: false,
                    }).then((response) => {
                        expect(response.status).to.eq(404); // Harap sesuaikan dengan status kode yang diharapkan
                        // Tambahkan asserstions tambahan sesuai kebutuhan
                    });
                });
        });

        // it('POST: Membuat/mengupload data teks ulos pada fitur generate motif', () => {
        //     const authToken = Cypress.env('authToken');
        //     const ulosData = {
        //         name: 'Ulos Ragi Hotang',
        //         ethnic: 'Batak Toba'
        //     };

        //     cy.request({
        //         method: 'POST',
        //         failOnStatusCode: false,
        //         url: 'generate/ulos',
        //         headers: {
        //             'Authorization': `Bearer ${authToken}`,
        //             'Accept': '*/*',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(ulosData)
        //     }).then((response) => {
        //         expect(response.status).to.eq(201);
        //         expect(response.body.code).to.eq(201);
        //         expect(response.body.status).to.eq('success');
        //         expect(response.body.data.ulosData.name).to.eq(ulosData.name);
        //         expect(response.body.data.ulosData.ethnic).to.eq(ulosData.ethnic);
        //     });
        // });

    });

    describe('Pengujian API - Fitur Generate Ulos dengan invalid credentials', () => {
        it('PUT: Memperbarui Gambar generate ulos berdasarkan ulos ID - Invalid Credentials', () => {
            const authToken = 'invalidAuthToken'; // Token otentikasi yang tidak valid
            const ulosId = 66; // ID yang tidak valid

            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((ulosImage) => {
                    const formData = new FormData();
                    formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'PUT',
                        url: `generate/ulos/${ulosId}/image`,
                        headers: {
                            'Authorization': `Bearer ${authToken}`,
                            'Content-Type': 'multipart/form-data',
                            'Accept': '*/*',
                        },
                        body: formData,
                        failOnStatusCode: false,
                    }).then((response) => {
                        expect(response.status).to.eq(401); // Harap sesuaikan dengan status kode yang diharapkan
                        // Tambahkan assertions tambahan sesuai kebutuhan
                    });
                });
        });


        it('PUT: Memperbarui data teks generate ulos berdasarkan ID - Invalid Credentials', () => {
            const authToken = 'invalidAuthToken'; // Token otentikasi yang tidak valid
            const ulosId = 66;

            cy.request({
                method: 'PUT',
                url: `generate/ulos/${ulosId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                body: {
                    name: 'Ulos Ragi Hotang',
                    ethnic: 'Batak Toba',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401); // Harap sesuaikan dengan status kode yang diharapkan
                // Tambahkan asserstions tambahan sesuai kebutuhan
            });
        });

        it('DELETE: Menghapus Gambar Generate Ulos - Invalid Credentials', () => {
            const authToken = 'invalidAuthToken'; // Token otentikasi yang tidak valid
            const ulosId = 64;

            cy.request({
                method: 'DELETE',
                url: `generate/ulos/${ulosId}/image`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401); // Harap sesuaikan dengan status kode yang diharapkan
                // Tambahkan asserstions tambahan sesuai kebutuhan
            });
        });

        it('DELETE: Menghapus Data Ulos & Semua Data Motif Terkait dengan invalid credentials', () => {
            const authToken = 'invalidAuthToken'; // Token otentikasi yang tidak valid
            const ulosId = 64; // ID ulos yang ingin dihapus
    
            cy.request({
                method: 'DELETE',
                url: `generate/ulos/${ulosId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401);
                // Tambahkan assertions tambahan sesuai kebutuhan
            });
        });

        it('GET: Mendapatkan semua data ulos untuk dashboard generate motif dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: 'generate/ulos',
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                },
                qs: {
                    'search-data': 'a',
                    'ethnic': 'batak toba'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('POST: Menambahkan gambar ulos utuh pada generate motif berdasarkan id yang valid(tersedia) dengan invalid credentials', () => {
            cy.fixture('ulosUtuh1.jpeg', 'binary')
                .then(Cypress.Blob.binaryStringToBlob)
                .then((ulosImage) => {
                    const formData = new FormData();
                    formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');

                    cy.request({
                        method: 'POST',
                        failOnStatusCode: false,
                        url: `generate/ulos/${id}/image`,
                        headers: {
                            'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                            'Accept': '*/*'
                        },
                        body: formData
                    }).then((response) => {
                        expect(response.status).to.eq(401);
                    });
                });
        });


        it('POST: Memnambahkan data teks ulos pada fitur generate motif - Invalid Credentials', () => {
            const authToken = 'invalidAuthToken'; // Token otentikasi yang tidak valid
            const ulosData = {
                name: 'Ulos Ragi Hotang',
                ethnic: 'Batak Toba'
            };

            cy.request({
                method: 'POST',
                url: 'generate/ulos',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ulosData),
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401); // Harap sesuaikan dengan status kode yang diharapkan
                // Tambahkan assertions tambahan sesuai kebutuhan
            });
        })

        it('GET: Menampilkan data ulos pada fitur generate motif berdasarkan Id yang valid dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: `generate/ulos/${id}/image/public`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });


        it('DELETE: Mengahapus gambar ulos utuh pada generate motif berdasarkan id yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'DELETE',
                failOnStatusCode: false,
                url: `generate/ulos/${id}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Accept': '*/*'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
            });
        });
    });


})