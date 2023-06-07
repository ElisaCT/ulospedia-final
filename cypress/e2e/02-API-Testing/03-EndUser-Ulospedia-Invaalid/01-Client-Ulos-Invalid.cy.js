//{ API ini digunakan untuk mengakses data ulos yang dibutuhkan pada gellery ulos web Ulospedia. }

describe('Pengujian API: Data Ulos case Invalid', () => {

    const invalidUlosId = 1011;
    const invalidPiecesImageId = 22;
    const invalidOtherImageId = 14;
    const invalidMotifImageId = 22;
    const ulosId = 10;
    const piecesImageId = 2;
    const otherImageId = 1;
    const motifImageId = 2;

    it("GET: Mendapatkan Gambar Potongan Ulos - Invalid Ulos ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${invalidUlosId}/pieces-image/${piecesImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar Potongan Ulos - Invalid Pieces Image ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}/pieces-image/${invalidPiecesImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `image dengan [ulosId | imageId] {[${ulosId} | ${invalidPiecesImageId}]} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar Lainnya - Invalid Ulos ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${invalidUlosId}/other-image/${otherImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
        
        });
    });

    it("GET: Mendapatkan Gambar Lainnya - Invalid Other Image ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}/other-image/${invalidOtherImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `image dengan [ulosId | imageId] {[${ulosId} | ${invalidOtherImageId}]} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar Motif - Invalid Ulos ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${invalidUlosId}/motif-image/${motifImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar Motif - Invalid Motif Image ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}/motif-image/${invalidMotifImageId}`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `ulos motif image dengan id {${invalidMotifImageId}} tidak ditemukan`);
        });
    });

    it("GET: Mendapatkan Gambar Utama - Invalid Ulos ID", () => {
        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${invalidUlosId}/main-image`,
            failOnStatusCode: false,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
            expect(response.body).to.have.property('message', `ulos dengan id {${invalidUlosId}} tidak ditemukan`);
        });
    });

});