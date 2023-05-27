//{ API ini digunakan untuk mengakses gambar utama atau main image dari data ulos. }

describe('API Testing - Ulos Main Image - Ulos utuh', () => {
    let authToken;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/auth/login',
            body: {
                username: 'rewina123',
                password: '12345'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('token');
            authToken = response.body.data.token;
            cy.log('authToken:', authToken);
            Cypress.env('authToken', authToken);
        });
    });

    it('should get the main image of ulos', () => {
        const ulosId = 10;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    
    // it('should upload the main image for an ulos', () => {
    //     const ulosId = 10;
    //     const imagePath = 'ulosUtuh1.jpeg';
    //     const authToken = Cypress.env('authToken');

    //     cy.fixture(imagePath, 'binary').then((fileContent) => {
    //         const formData = new FormData();
    //         formData.append('main-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

    //         cy.request({
    //             method: 'POST',
    //             url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`,
    //             headers: {
    //                 'Authorization': `Bearer ${authToken}`,
    //                 'Content-Type': 'multipart/form-data'
    //             },
    //             body: formData
    //         }).then((response) => {
    //             expect(response.status).to.eq(201);
    //             // expect(response.body.status).to.eq('success');
    //             // expect(response.body.data.ulos).to.have.property('id', ulosId);
    //             // expect(response.body.data.ulos).to.have.property('mainImageReference');
    //             cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //         });
    //     });
    // });

    // it('should delete the main image of ulos', () => {
    //     const ulosId = 9;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'DELETE',
    //         url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.data).to.be.null;
    //         expect(response.body.status).to.eq('success');
    //         cy.log('Response Body:', response.body);
    //     });
    // });
});