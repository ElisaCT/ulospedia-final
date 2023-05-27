// API ini digunakan untuk mengakses data penenun yang dibutuhkan pada fitur penenun padaweb Ulospedia. }

describe('Ulospedia API Tests', () => {
    const baseUrl = 'http://company.ditenun.com/api/v1/ulospedia/client';

    it('should retrieve all weavers', () => {
        const theLoom = 'Gedongan';
        const pageNo = 1;

        cy.request({
            method: 'GET',
            url: `${baseUrl}/weavers?theLoom=${theLoom}&pageNo=${pageNo}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.weaverList.clientWeaverResponseList).to.be.an('array');
        });
    });

    it('should retrieve a specific weaver', () => {
        const weaverId = 33;

        cy.request({
            method: 'GET',
            url: `${baseUrl}/weavers/${weaverId}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.weaver).to.have.property('id', weaverId);
            expect(response.body.data.weaver).to.have.property('name');
            expect(response.body.data.weaver).to.have.property('theLoom');
            expect(response.body.data.weaver).to.have.property('ethnic');
            expect(response.body.data.weaver).to.have.property('age');
            expect(response.body.data.weaver).to.have.property('domicile');
            expect(response.body.data.weaver).to.have.property('imageUrl');
            expect(response.body.data.weaver).to.have.property('story');
        });
    });
});