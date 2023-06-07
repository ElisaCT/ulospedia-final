//{ API ini digunakan untuk mengakses semua data ulos melalui admin dashboard. }
describe('Pengujian API: Invalid', () => {
    const ulosId = 10;
    const invalidAuthToken = 'INVALID_TOKEN';
    const invalidUlosId = 1011;

    describe('Pengujian API: Data ulos invalid Case', () => {
        //precondition mengisi token dengan fungsi loginandserauthtoken
        before(() => {
            cy.loginAndSetAuthToken();
        });


        it('PUT: Memperbaharui/Mengedit data ulos berdasarkan ulosId yang tidak valid(tidak tersedia)', () => {
            const authToken = Cypress.env('authToken');

            cy.request({
                method: 'PUT',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${invalidUlosId}`,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: {
                    name: 'Sibolang',
                    colors: ['Merah', 'Biru'],
                    originEthnic: 'Sumatera Utara',
                    type: 'Batak Mandailing',
                    location: 'Tapanuli Selatan',
                    length: 243,
                    width: 89,
                    technique: 'Ikat Lapis',
                    meaning: 'Ulos adalah kain',
                    func: 'Digunakan untuk acara berduka'
                }
            }).then((response) => {
                expect(response.status).to.equal(404);
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        // it('POST: Membuat data ulos baru', () => {
        //     const requestBody = testData.ulosData;
        //     const authToken = Cypress.env('authToken');

        //     cy.request({
        //         method: 'POST',
        //         url: 'ulospedia/ulos',
        //         headers: {
        //             Authorization: `Bearer ${authToken}`,
        //             'Content-Type': 'application/json',
        //         },
        //         body: requestBody,
        //     }).then((response) => {
        //         expect(response.status).to.equal(201);
        //         expect(response.body).to.have.property('code', 201);
        //         expect(response.body).to.have.property('status', 'success');
        //         expect(response.body).to.have.property('message', 'data ulos baru berhasil ditambahkan');
        //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        //     });
        // });


        // it('PUT: Memperbaharui/Mengedit data ulos berdasarkan ulosId yang valid(tersedia)', () => {
        //     const ulosId = 10;
        //     const authToken = Cypress.env('authToken');

        //     cy.request({
        //         method: 'PUT',
        //         url: `ulospedia/ulos/${ulosId}`,
        //         headers: {
        //             Authorization: `Bearer ${authToken}`,
        //             'accept': '*/*',
        //             'Content-Type': 'application/json'
        //         },
        //         body: {
        //             name: 'Sibolang',
        //             colors: ['Merah', 'Biru'],
        //             originEthnic: 'Sumatera Utara',
        //             type: 'Batak Mandailing',
        //             location: 'Tapanuli Selatan',
        //             length: 243,
        //             width: 89,
        //             technique: 'Ikat Lapis',
        //             meaning: 'Ulos adalah kain',
        //             func: 'Digunakan untuk acara berduka'
        //         }
        //     }).then((response) => {
        //         expect(response.status).to.equal(200);
        //         expect(response.body).to.have.property('code', 200);
        //         expect(response.body).to.have.property('status', 'success');
        //         expect(response.body).to.have.property('message', 'ulos data successfully updated');
        //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        //     });
        // });

        it('GET: Mendapatkan Detail Ulos Berdasarkan ID (Invalid ID)', () => {
            const authToken = Cypress.env('authToken');
            const invalidUlosId = 1011;

            cy.request({
                method: 'GET',
                url: `ulospedia/ulos/${invalidUlosId}`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'accept': '*/*',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(404);
                expect(response.body).to.have.property('message', 'ulos dengan id 1011 tidak ditemukan');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });
    });

    describe('Pengujian API: Data ulos dengan invalid credentials', () => {

        it('GET: Mendapatkan Semua Data Ulos untuk Dashboard Ulos (Invalid Credentials)', () => {
            const invalidAuthToken = 'invalid-token';
            const pageNo = 1;
            const sortBy = 'updatedAt';
            const sortDir = 'desc';
            const search = '';

            cy.request({
                method: 'GET',
                url: `ulospedia/ulos?pageNo=${pageNo}&sortBy=${sortBy}&sortDir=${sortDir}&search=${search}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`,
                    'accept': '*/*',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'masa pemakaian jwt telah usang');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('GET: Mendapatkan Detail Ulos dengan invalid kredensials', () => {
            const authToken = Cypress.env('authToken');
            const invalidUlosId = 1011;

            cy.request({
                method: 'GET',
                url: `ulospedia/ulos/${invalidUlosId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`,
                    'accept': '*/*',
                },
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'masa pemakaian jwt telah usang');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('GET: Mendapatkan jumlah ulos yang ada dengan invalid credentials', () => {
            cy.request({
                method: 'GET',
                failOnStatusCode: false,
                url: 'ulospedia/ulos/count',
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    accept: '*/*',
                },
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'masa pemakaian jwt telah usang');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        //mendefenisikan request body untuk POST dan PUT request
        const testData = {
            ulosData: {
                name: 'Sibolang',
                colors: ['Merah', 'Biru'],
                originEthnic: 'Batak Toba',
                type: 'Tradisional',
                location: 'Balige',
                length: 320,
                width: 80,
                technique: 'Ikat Lapis',
                meaning: 'Ulos berarti kain dalam bahasa Batak Toba.',
                func: 'Ulos Sibolang sering dikenakan pada saat upacara adat yang melambangkan duka cita.',
            },
            updatedUlosData: {
                name: 'Sibolang',
                colors: ['Merah', 'Biru'],
                originEthnic: 'Sumatera Utara',
                type: 'Batak Mandailing',
                location: 'Tapanuli Selatan',
                length: 243,
                width: 89,
                technique: 'Ikat Lapis',
                meaning: 'Ulos adalah kain',
                func: 'Digunakan untuk acara berduka',
            },
        };

        it('POST: Membuat data ulos baru dengan invalid credentials', () => {
            const requestBody = testData.ulosData;

            cy.request({
                method: 'POST',
                failOnStatusCode: false,
                url: 'ulospedia/ulos',
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'Content-Type': 'application/json',
                },
                body: requestBody,
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'masa pemakaian jwt telah usang');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });

        it('PUT: Memperbaharui/Mengedit data ulos berdasarkan ulosId yang valid(tersedia) dengan invalid credentials', () => {
            cy.request({
                method: 'PUT',
                failOnStatusCode: false,
                url: `ulospedia/ulos/${ulosId}`,
                headers: {
                    'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: {
                    name: 'Sibolang',
                    colors: ['Merah', 'Biru'],
                    originEthnic: 'Sumatera Utara',
                    type: 'Batak Mandailing',
                    location: 'Tapanuli Selatan',
                    length: 243,
                    width: 89,
                    technique: 'Ikat Lapis',
                    meaning: 'Ulos adalah kain',
                    func: 'Digunakan untuk acara berduka'
                }
            }).then((response) => {
                expect(response.status).to.eq(401);
                expect(response.body).to.have.property('message', 'masa pemakaian jwt telah usang');
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });
    });

})