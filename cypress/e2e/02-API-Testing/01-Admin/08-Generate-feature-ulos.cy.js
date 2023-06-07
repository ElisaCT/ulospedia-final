//{ API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

describe('Pengujian API - Fitur Generate Ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });

    it('POST: Menambahkan gambar ulos utuh pada generate motif berdasarkan id ulos yang valid(tersedia) ', () => {
        const id = 10;
        const authToken = Cypress.env('authToken');

        cy.fixture('ulosUtuh1.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((ulosImage) => {
                const formData = new FormData();
                formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');

                cy.request({
                    method: 'POST',
                    url: `generate/ulos/${id}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Accept': '*/*'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(201);
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
    });

    it('GET: Mendapatkan semua data ulos untuk dashboard generate motif', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: 'generate/ulos',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            qs: {
                'search-data': 'a',
                'ethnic': 'batak toba'
            }
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('ulosDashboardList').that.is.an('array').and.not.empty;

            // Perform additional assertions for the ulosDashboardList array
            const ulosList = response.body.data.ulosDashboardList;
            ulosList.forEach((ulos) => {
                expect(ulos).to.have.property('id').that.is.a('number');
                expect(ulos).to.have.property('name').that.is.a('string');
                expect(ulos).to.have.property('ethnic').that.is.a('string');
                expect(ulos).to.have.property('imageUrl').that.is.a('string');
            });
        });
    });

    it('GET: Menampilkan data ulos pada fitur generate motif berdasarkan Id ulos yang valid', () => {
        const id = 10; // Ulos ID parameter
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `generate/ulos/${id}/image/public`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            // cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.eq('image/jpeg');
            expect(response.headers['content-length']).to.not.be.empty;
        });
    });

    it('POST: Membuat/mengupload data teks ulos pada fitur generate motif', () => {
        const authToken = Cypress.env('authToken');
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
            body: JSON.stringify(ulosData)
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.code).to.eq(201);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulosData.name).to.eq(ulosData.name);
            expect(response.body.data.ulosData.ethnic).to.eq(ulosData.ethnic);
        });
    });

    it.only('PUT: Memperbarui Gambar generate ulos berdasarkan ulos ID', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 66;

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
                    expect(response.status).to.eq(200);

                });
            });
    });

    it.only('PUT: Memperbarui data teks generate ulos berdasarkan ID', () => {
        const authToken = Cypress.env('authToken');
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
            expect(response.status).to.eq(200);
            expect(response.body.data.ulosData.name).to.eq('Ulos Ragi Hotang');
            expect(response.body.data.ulosData.ethnic).to.eq('Batak Toba');
        });
    });

    it('DELETE: Menghapus Data Ulos & Semua Data Motif Terkait', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 64; // ID ulos yang ingin dihapus

        cy.request({
            method: 'DELETE',
            url: `generate/ulos/${ulosId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*',
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Tambahkan assertions tambahan sesuai kebutuhan
        });
    });



    // it('DELETE: Menghapus Gambar Generate Ulos', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 64;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `generate/ulos/${ulosId}/image`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*',
    //         },
    //         failOnStatusCode: false,
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.data).to.be.null;
    //         expect(response.body.message).to.eq('gambar ulos berhasil dihapus');
    //     });
    // });


    // it('DELETE: Mengahapus gambar ulos utuh pada generate motif berdasarkan id yang valid(tersedia)', () => {
    //     const authToken = Cypress.env('authToken');
    //     const ulosId = 2;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `generate/ulos/${ulosId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.code).to.eq(200);
    //         expect(response.body.status).to.eq('success');
    //         expect(response.body.data).to.be.null;
    //         expect(response.body.message).to.eq('ulos berhasil dihapus');
    //     });
    // });
});