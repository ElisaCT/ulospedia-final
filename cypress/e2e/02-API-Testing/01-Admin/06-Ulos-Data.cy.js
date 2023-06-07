//{ API ini digunakan untuk mengakses semua data ulos melalui admin dashboard. }

describe('Pengujian API: Data ulos', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
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

    it('GET: Mendapatkan jumlah ulos yang ada', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: 'ulospedia/ulos/count',
            headers: {
                Authorization: `Bearer ${authToken}`,
                accept: '*/*',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'jumlah ulos yang tersedia berhasil diambil');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('GET: Mendapatkan Detail Ulos Berdasarkan ID', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 10;

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos/${ulosId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.ulos.name).to.eq('Sibolang');
            expect(response.body.data.ulos.ethnic).to.eq('Sumatera Utara');
            expect(response.body.data.ulos.location).to.eq('Tapanuli Selatan');
        });
    });

    it('GET: Mendapatkan Semua Data Ulos untuk Dashboard Ulos', () => {
        const authToken = Cypress.env('authToken');
        const pageNo = 1;
        const sortBy = 'updatedAt';
        const sortDir = 'desc';
        const search = '';

        cy.request({
            method: 'GET',
            url: `ulospedia/ulos?pageNo=${pageNo}&sortBy=${sortBy}&sortDir=${sortDir}&search=${search}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Lakukan pengujian lebih lanjut sesuai dengan respons yang diharapkan
            // Contoh: Memeriksa jumlah ulos yang diterima
            expect(response.body.data.ulos.ulosElDashboardResponseList).to.have.length.above(0);
            // ...
        });
    });


    it('POST: Membuat data ulos baru', () => {
        const requestBody = testData.ulosData;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'POST',
            url: 'ulospedia/ulos',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: requestBody,
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('code', 201);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'data ulos baru berhasil ditambahkan');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('PUT: Memperbaharui/Mengedit data ulos berdasarkan ulosId yang valid(tersedia)', () => {
        const ulosId = 10;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'PUT',
            url: `ulospedia/ulos/${ulosId}`,
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
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'ulos berhasil diperbaharui');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    //baru dari sini
    it('GET: Mendapatkan 4 Data Ulos Terbaru', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: 'ulospedia/ulos/4-home-dashboard',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Assert any additional validations as needed
        });
    });

    it('GET: Mendapatkan Formulir Data Ulos Lama', () => {
        const authToken = Cypress.env('authToken');
        cy.request({
            method: 'GET',
            url: 'ulospedia/ulos/10/old-data-update-form',
            headers: {
                'Accept': '*/*',
                Authorization: `Bearer ${authToken}`,
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulosList.ulosId).to.eq(10);
            // Assert any additional validations as needed
        });
    });


    // it('DELETE: Menghapus Ulos', () => {
    //     const authToken = Cypress.env('authToken');
    //     cy.request({
    //         method: 'DELETE',
    //         url: 'ulospedia/ulos/21',
    //         headers: {
    //             'Accept': '*/*',
    //             Authorization: `Bearer ${authToken}`,
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         // Assert any additional validations as needed
    //     });
    // });

});