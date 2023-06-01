// API ini digunakan untuk mengakses data penenun yang dibutuhkan pada fitur penenun padaweb Ulospedia. }

describe('Pengujian API: Data Penenun Invalid', () => {
    it('GET: Mendapatkan data detail penenun berdasarkan penenun ID yang tidak valid', () => {
        const invalidWeaverId = 1011;

        cy.request({
            method: 'GET',
            url: `ulospedia/client/weavers/${invalidWeaverId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body.message).to.eq(`weaver dengan id {${invalidWeaverId}} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar/Image Penenun berdasarkan id yang tidak valid", () => {
        const invalidWeaverId = 1011;

        cy.request({
            method: 'GET',
            url: `ulospedia/client/weavers/${invalidWeaverId}/image`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body.message).to.eq(`weaver dengan id {${invalidWeaverId}} tidak ditemukan`);
        });
    });
});