//{ API ini digunakan untuk mengakses data ulos yang dibutuhkan pada gellery ulos web Ulospedia. }

describe('Ulospedia API Tests', () => {
    // let authToken;

    // before(() => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://company.ditenun.com/api/v1/auth/login',
    //         body: {
    //             username: 'rewina123',
    //             password: '12345'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.equal(200);
    //         expect(response.body).to.have.property('code', 200);
    //         expect(response.body).to.have.property('status', 'success');
    //         expect(response.body).to.have.property('data');
    //         expect(response.body.data).to.have.property('token');
    //         authToken = response.body.data.token;
    //     });
    // });

    it('should get all Ulos data with specified parameters', () => {
        const pageNo = 1;
        const ethnic = 'ethnic';
        const type = 'type';
        const colors = 'colors';
        const search = 'search';

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${pageNo}&ethnic=${ethnic}&type=${type}&colors=${colors}&search=${search}`,
            headers: {
                // 'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('ulosList');
        });
    });

    it('should get Ulos image by ID', () => {
        const ulosId = 10;

        cy.request({
            method: 'GET',
            url: `http://company.ditenun.com/api/v1/ulospedia/client/ulos/${ulosId}/image`,
            headers: {
                // 'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            },
            responseType: 'blob'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.equal('image/jpeg');
        });
    });
});