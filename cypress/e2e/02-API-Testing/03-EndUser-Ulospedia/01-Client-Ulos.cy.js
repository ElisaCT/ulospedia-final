//{ API ini digunakan untuk mengakses data ulos yang dibutuhkan pada gellery ulos web Ulospedia. }

describe('Pengujian API: Data Ulos', () => {
    
    it('GET: Menampilkan semua data ulos denga parameter yang valid', () => {
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
        const ulosId = 10;

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
        const ulosId = 10;

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
});