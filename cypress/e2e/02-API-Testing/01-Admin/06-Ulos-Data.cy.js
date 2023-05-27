//{ API ini digunakan untuk mengakses semua data ulos melalui admin dashboard. }

// describe('Valid Weaver API Tests', () => {
//     let authToken; // Declare the authToken variable outside the beforeEach block
//     before(() => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/auth/login',
//             body: {
//                 username: 'rewina123',
//                 password: '12345'
//             }
//         }).then((response) => {
//             cy.log('Response Body:', JSON.stringify(response.body, null, 2));
//             //   cy.log('Response Body:', JSON.stringify(response.body)); // Log the response body as JSON string
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('data');
//             expect(response.body.data).to.have.property('token');
//             authToken = response.body.data.token; // Update the assignment of authToken
//             cy.log('authToken:', authToken); // Log the value of authToken
//         });
//     });


//     it('should get the count of available ulos', () => {
//         cy.request({
//             method: 'GET',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/ulos/count',
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'accept': '*/*'
//             }
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'jumlah ulos yang tersedia berhasil diambil');
//         });
//     });


//     it('should create a new ulos data', () => {
//         const requestBody = {
//             "name": "Sibolang",
//             "colors": [
//                 "Merah", "Biru"
//             ],
//             "originEthnic": "Batak Toba",
//             "type": "Tradisional",
//             "location": "Balige",
//             "length": 320,
//             "width": 80,
//             "technique": "Ikat Lapis",
//             "meaning": "Ulos berarti kain dalam bahasa Batak Toba.",
//             "func": "Ulos Sibolang sering dikenakan pada saat upacara adat yang melambangkan duka cita."
//         };

//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/ulos',
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: requestBody
//         }).then((response) => {
//             expect(response.status).to.equal(201);
//             expect(response.body).to.have.property('code', 201);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'data ulos baru berhasil ditambahkan');
//         });
//     });

//     it('should update ulos data', () => {
//         const ulosId = 10;
//         const updatedUlosData = {
//             "name": "Sibolang",
//             "colors": [
//                 "Merah",
//                 "Biru"
//             ],
//             "originEthnic": "Sumatera Utara",
//             "type": "Batak Mandailing",
//             "location": "Tapanuli Selatan",
//             "length": 243,
//             "width": 89,
//             "technique": "Ikat Lapis",
//             "meaning": "Ulos adalah kain",
//             "func": "Digunakan untuk acara berduka"
//         };

//         cy.request({
//             method: 'PUT',
//             url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}`,
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'accept': '*/*',
//                 'Content-Type': 'application/json'
//             },
//             body: updatedUlosData
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'ulos data successfully updated');
//         });
//     });
// });

describe('Valid Weaver API Tests', () => {
    let authToken; // Declare the authToken variable outside the beforeEach block

    before(() => {
        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/auth/login',
            body: {
                username: 'rewina123',
                password: '12345',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('token');
            authToken = response.body.data.token; // Update the assignment of authToken
        });
    });

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

    it('should get the count of available ulos', () => {
        cy.request({
            method: 'GET',
            url: 'http://company.ditenun.com/api/v1/ulospedia/ulos/count',
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

    it('should create a new ulos data', () => {
        const requestBody = testData.ulosData;

        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/ulospedia/ulos',
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

    it('should update ulos data', () => {
        const ulosId = 10;

        cy.request({
            method: 'PUT',
            url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}`,
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