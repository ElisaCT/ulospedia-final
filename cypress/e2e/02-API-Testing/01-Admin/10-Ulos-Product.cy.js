// API ini digunakan untuk mengakses data produk yang berkaitan dengan data ulos. }

describe('Pengujian API: Ulos Product', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });


    it('PUT: Memperbaharui Ketersediaan Produk yang Berkaitan dengan Ulos', () => {
        const ulosId = 10;
        const state = false;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'PUT',
            url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.code).to.eq(200);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulosProductData.id).to.eq(ulosId);
            expect(response.body.data.ulosProductData.availableInEcommerce).to.eq(state);
            expect(response.body.message).to.eq('state availability of ulos products successfully updated');
        });
    });

    it('POST: Mengatur Ketersediaan Produk yang Berkaitan dengan Ulos', () => {
        const ulosId = 19;
        const state = true;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'POST',
            url: `ulospedia/ulos/${ulosId}/products/availability?state=${state}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.code).to.eq(201);
            expect(response.body.status).to.eq('success');
            expect(response.body.data.ulos.id).to.eq(ulosId);
            expect(response.body.data.ulos.availableInEcommerce).to.eq(state);
            expect(response.body.message).to.eq('state untuk kondisi apakah produk yang menggunakan ulos berhasil diset');
        });
    });

    it('POST: Menambahkan Data Produk Baru', () => {
        const authToken = Cypress.env('authToken');
        const ulosId = 10;
        const requestBody = {
            name: "Ragi Hotang",
            price: 200000,
            url: "https://ditenun.com/"
        };

        cy.request({
            method: 'POST',
            url: `ulospedia/ulos/${ulosId}/products`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.code).to.eq(201);
            expect(response.body.status).to.eq('success');
            expect(response.body.message).to.eq('data product berhasil dibuat');
        });
    });

})