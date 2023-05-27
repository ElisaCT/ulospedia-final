//{ API ini digunakan untuk mengakses data ulos utuh pada fitur generate motif web Ulospedia. }

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

  it('should add new ulos image', () => {
    const id = 10;
  
    cy.fixture('ulosUtuh1.jpeg', 'binary')
      .then(Cypress.Blob.binaryStringToBlob)
      .then((ulosImage) => {
        const formData = new FormData();
        formData.append('ulos-image', ulosImage, 'ulosUtuh1.jpeg');
  
        cy.request({
          method: 'POST',
          url: `http://company.ditenun.com/api/v1/generate/ulos/${id}/image`,
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

    it('should retrieve all ulos data for the dashboard', () => {
        cy.request({
            method: 'GET',
            url: 'http://company.ditenun.com/api/v1/generate/ulos',
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

    it('should retrieve ulos image by ulosId', () => {
        const ulosId = 10; // Ulos ID parameter

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/image`,
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

    it('should add a new ulos', () => {
        const ulosData = {
            name: 'Ulos Ragi Hotang',
            ethnic: 'Batak Toba'
        };

        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/generate/ulos',
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

    // it('should delete an ulos', () => {
    //     const ulosId = 2;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}`,
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