// { API ini digunakan untuk mengakses data motif ulos. }

describe('API Testing - Ulos', () => {
    let authToken; // Declare the authToken variable outside the beforeEach block
    before(() => {
        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/auth/login',
            body: {
                username: 'rewina123',
                password: '12345'
            }
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            //   cy.log('Response Body:', JSON.stringify(response.body)); // Log the response body as JSON string
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('token');
            authToken = response.body.data.token; // Update the assignment of authToken
            cy.log('authToken:', authToken); // Log the value of authToken
        });
    });

    it('should create a new ulos motif image', () => {
        const ulosId = 10;
        const imagePath = 'motifUlos1.jpeg';

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('ulos-motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/motif-images`,
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                },
                body: formData
            }).then((response) => {
                expect(response.status).to.eq(201);
                cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            });
        });
    });

    it('should get the ulos motif image', () => {
        const ulosId = 10;
        const motifImageId = 2;

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
            cy.log('Response Body:', response.body);
        });
    });

    // it('should delete the ulos motif image', () => {
    //     const ulosId = 9;
    //     const motifImageId = 2;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'DELETE',
    //         url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/motif-images/${motifImageId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         // Perform additional assertions if needed
    //         cy.log('Response Body:', response.body);
    //     });
    // });

});