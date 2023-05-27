// { API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

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


    it('should get all motifs for dashboard', () => {
        const ulosId = 10;

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });


    it('should add a new motif (text)', () => {
        const ulosId = 11;
        const size = 'Sedang';

        cy.request({
            method: 'POST',
            url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                "size": size
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });


    it('should add a new motif (image)', () => {
        const ulosId = 11;
        const motifId = 15;
        const imagePath = 'motifUlos1.jpeg';

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('motif-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs/${motifId}/image`,
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

    it('should get the motif image', () => {
        const ulosId = 10;
        const motifId = 11;

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs/${motifId}/image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            encoding: 'binary'
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    // it('should delete the motif', () => {
    //     const ulosId = 9;
    //     const motifId = 10;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs/${motifId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.status).to.eq('success');
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //     });
    // });

});