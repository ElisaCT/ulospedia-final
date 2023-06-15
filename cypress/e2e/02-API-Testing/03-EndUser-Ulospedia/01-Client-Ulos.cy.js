//{ API ini digunakan untuk mengakses data ulos yang dibutuhkan pada gellery ulos web Ulospedia. }

describe('Pengujian API: Data Ulos', () => {
    const ulosId = 10;
    const piecesImageId = 2;
    const otherImageId = 1;
    const motifImageId = 2;

    it('GET: Menampilkan semua data ulos dengan parameter yang valid', () => {
        const pageNo = 1;
        // const ethnic = 'ethnic';
        // const type = 'type';
        // const colors = 'colors';
        // const search = 'search';

        cy.request({
            method: 'GET',
            url: 'ulospedia/client/ulos',
            qs: {
                pageNo,
                // ethnic,
                // type,
                // colors,
                // search
            },
            headers: {
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            // Lakukan pengujian lebih lanjut terhadap response di sini
        });
    });

    it('GET: Mendapatkan Data Detail Ulos dan Relasinya', () => {

        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}`,
            headers: {
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            // Lakukan pengujian lebih lanjut terhadap response di sini
        });
    });


    it('GET: Mendapatkan gambar ulos berdasarkan ulosId yang valid(tersedia)', () => {

        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}/image`,
            headers: {
                'Accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Lakukan pengujian lebih lanjut terhadap response di sini
        });
    });
    it("GET: Mendapatkan Gambar Potongan Ulos berdasarkan ulosId dan pieces imageId yang valid(tersedia)", () => {
        const piecesImageId = 2;

        cy.request({
            method: 'GET',
            url: `ulospedia/client/ulos/${ulosId}/pieces-image/${piecesImageId}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
        });
    });

    it("GET: Mendapatkan Gambar Lainnya berdasarkan ulosId dan otherImageId yang valid(tersedia)", () => {
        cy.request({
            method: 'GET',
            url: `/ulospedia/client/ulos/${ulosId}/other-image/${otherImageId}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
        });
    });

    it("GET: Mendapatkan Gambar Motif berdasarkan ulosId dan motifImageId yang valid(tersedia)", () => {
        cy.request({
            method: 'GET',
            url: `/ulospedia/client/ulos/${ulosId}/motif-image/${motifImageId}`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
        });
    });

    it("GET: Mendapatkan Gambar Utama berdasarkan ulosId yang valid(tersedia)", () => {
        cy.request({
            method: 'GET',
            url: `/ulospedia/client/ulos/${ulosId}/main-image`,
            headers: {
                'accept': '*/*'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Perform additional assertions if needed
        });
    });
});