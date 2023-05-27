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
            expect(response.body).to.have.property('message', 'ulos data successfully updated');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });
});