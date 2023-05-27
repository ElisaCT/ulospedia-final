describe('API Testing - Ulos', () => {
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

    it('should add a new ulos image', () => {
        const ulosId = 19;
        const imagePath = 'ulosUtuh2.jpg';
        const authToken = Cypress.env('authToken');

        cy.fixture(imagePath, 'binary').then((fileContent) => {
            const formData = new FormData();
            formData.append('ulos-image', Cypress.Blob.binaryStringToBlob(fileContent), imagePath);

            cy.request({
                method: 'POST',
                url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/image`,
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
});