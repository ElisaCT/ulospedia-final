// API ini digunakan untuk mengakses data penenun yang dibutuhkan pada fitur penenun padaweb Ulospedia. }

describe('Pengujian API: Data Penenun', () => {
    const weaverId = 10;

    it('GET: Mendapatkan semua data penenun', () => {
        const theLoom = 'Gedongan';
        const pageNo = 1;

        cy.request({
            method: 'GET',
            url: `ulospedia/client/weavers?theLoom=${theLoom}&pageNo=${pageNo}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.weaverList.clientWeaverResponseList).to.be.an('array');
        });
    });

    it('GET: Mendapatkan data detail penenun berdasarkan penenun ID yang valid(Tersedia)', () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/weavers/${weaverId}`,
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

    it("GET: Mendapatkan Gambar/Image Penenun berdasarkan id yang valid(tersedia)", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/weavers/${weaverId}/image`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Add additional assertions for the response body if needed
        });
    });

});