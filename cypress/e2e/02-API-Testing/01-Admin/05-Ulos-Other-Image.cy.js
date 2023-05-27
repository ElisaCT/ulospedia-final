// API ini digunakan untuk mengakses data ulos utuh lainnya yang mungkin ditambahkan.}

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

    it('should create a new ulos other image', () => {
        const ulosId = 10;
        const imagePath = 'ulosLainnya1.jpeg';

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('other-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/other-images`,
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

    it('should get the ulos other image', () => {
        const ulosId = 10;
        const imageId = 1;

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/other-images/${imageId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            encoding: 'binary'
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.writeFile(`ulosLainnya${imageId}.jpeg`, response.body, 'binary');
            cy.log('Response Body:', response.body);
        });
    });


    // it('should delete the ulos other image', () => {
    //     const ulosId = 9;
    //     const imageId = 1;
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'DELETE',
    //         url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/other-images/${imageId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         cy.log('Response Body:', response.body);
    //     });
    // });

});