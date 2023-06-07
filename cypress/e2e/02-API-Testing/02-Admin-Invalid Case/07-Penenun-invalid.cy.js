//API ini digunakan untuk mengakses semua data penenun yang dibutuhkan pada dashboard penenun }

describe('Pengujian API: Penenun invalid credentials', () => {

    it('GET: Mendapatkan semua data penenun yang ada dengan invalid credentials', () => {
        const invalidCredentials = 'invalidToken';

        cy.request({
            method: 'GET',
            url: 'ulospedia/weavers',
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${invalidCredentials}`, // Invalid token for testing purposes
                'Accept': 'application/json'
            },
            qs: {
                pageNo: 1,
                pageSize: 10,
                sortBy: 'updatedAt',
                sortDir: 'asc',
                searchByName: 'searchByName'
            }
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
            expect(response.status).to.equal(403); // Ensure the response status code is 403
        });
    });

    it('GET: Mendapatkan data detail penenun berdasarkan ID dengan invalid credentials', () => {
        const weaverId = 9;
        const invalidCredentials = 'invalidToken';

        cy.request({
            method: 'GET',
            url: `ulospedia/weavers/${weaverId}`,
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${invalidCredentials}`, // Invalid token for testing purposes
                'Accept': 'application/json'
            }
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
            expect(response.status).to.equal(403); // Ensure the response status code is 403
        });
    });

    it('GET: Mendapatkan gambar/image penenun berdasarkan ID penenun dengan invalid credentials', () => {
        const weaverId = 10;
        const invalidCredentials = 'invalidToken';

        cy.request({
            method: 'GET',
            url: `ulospedia/weavers/${weaverId}/image`,
            headers: {
                'Authorization': `Bearer ${invalidCredentials}`,
                'Accept': '*/*'
            },
            responseType: 'blob',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(403);
        });
    });

    it('PUT: Memperbaharui/mengupload gambar penenun berdasarkan weaverID yang valid(Tersedia) dengan invalid credentials', () => {
        const weaverId = 10;
        const invalidCredentials = 'invalidToken';

        cy.fixture('penenun2.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((weaverImage) => {
                const formData = new FormData();
                formData.append('weaver-image', weaverImage, 'penenun2.jpeg');

                cy.request({
                    method: 'PUT',
                    url: `ulospedia/weavers/${weaverId}/image`,
                    headers: {
                        'Authorization': `Bearer ${invalidCredentials}`,
                        'Accept': '*/*'
                    },
                    body: formData,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(403);
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
    });


    it('POST: Menambahkan/membuat data text penenun yang baru dengan invalid credentials', () => {
        const invalidCredentials = 'invalidToken';
        const requestBody = {
            "name": "James Doe",
            "yearOfBirth": 2001,
            "ethnic": "Batak Toba",
            "domicile": "Balige",
            "theLoom": "Gedongan",
            "technique": "Ikat Lapis",
            "story": "This is dummy story"
        };
        cy.request({
            method: 'POST',
            url: 'ulospedia/weavers',
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${invalidCredentials}`, // Invalid token for testing purposes
                'Accept': 'application/json' // You can include other headers if required
            },
            body: requestBody
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
            expect(response.status).to.equal(403); // Ensure the response status code is 403
        });
    });

    it('POST: Menambah Data Penenun Baru (gambar/image) dengan invalid credentials', () => {
        const weaverId = 2;
        const invalidCredentials = 'invalidToken';

        cy.fixture('testgambar.jpg', 'binary')
            .then((fileContent) => {
                cy.request({
                    method: 'POST',
                    url: `ulospedia/weavers/${weaverId}/image`,
                    failOnStatusCode: false,
                    headers: {
                        'Authorization': `Bearer ${invalidCredentials}`,
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: {
                        'weaver-image': {
                            value: fileContent,
                            options: {
                                filename: 'testgambar.jpg',
                                contentType: 'image/jpeg'
                            }
                        }
                    }
                }).then((response) => {
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                    expect(response.status).to.equal(403);
                });
            });
    });

    it('DELETE: Menghapus data penenun berdasarkan id penenun yang valid(tersedia) dengan invalid credentials', () => {
        const invalidCredentials = 'invalidToken';
        const weaverId = 3;

        cy.request({
            method: 'DELETE',
            url: `ulospedia/weavers/${weaverId}`,
            headers: {
                'Authorization': `Bearer ${invalidCredentials}`,
                'Accept': '*/*'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        });
    });

    it('POST: Gagal Menambahkan gambar penenun yang baru dengan invalid credentials', () => {
        const weaverId = 10;
        const invalidAuthToken = 'invalidToken';

        cy.fixture('testgambar.jpg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((weaverImage) => {
                const formData = new FormData();
                formData.append('weaver-image', weaverImage, 'testgambar.jpg');

                cy.request({
                    method: 'POST',
                    url: `ulospedia/weavers/${weaverId}/image`,
                    headers: {
                        'Authorization': `Bearer ${invalidAuthToken}`,
                        'Accept': '*/*'
                    },
                    body: formData,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(403); // Forbidden status code
                });
            });
    });

    it('PUT: Gagal Memperbaharui/Mengedit data text penenun dengan invalid credentials', () => {
        const weaverId = 3;
        const invalidAuthToken = 'invalidToken';

        const updatedWeaverData = {
            name: 'Jhon Doe',
            yearOfBirth: 2002,
            ethnic: 'Batak Toba',
            domicile: 'Balige',
            theLoom: 'Alat Tenun Bukan Mesin',
            technique: 'Ikat Lapis',
            story: 'This is dummy story after editing'
        };

        cy.request({
            method: 'PUT',
            url: `ulospedia/weavers/${weaverId}`,
            headers: {
                'Authorization': `Bearer ${invalidAuthToken}`,
                'Content-Type': 'application/json'
            },
            body: updatedWeaverData,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(403); // Forbidden status code
        });
    });

    const invalidAuthToken = 'INVALID_TOKEN';
    it('GET: Mendapatkan data detail penenun berdasarkan ID dengan invalid credentials', () => {
        cy.request({
            method: 'GET',
            url: 'ulospedia/weavers',
            headers: {
                'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                'Accept': 'application/json'
            },
            qs: {
                'weaver-id': 9 // Ganti '9' dengan ID penenun yang sebenarnya
            },
            failOnStatusCode: false // Mengabaikan kesalahan status kode
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
            expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
        });
    });

    it('GET: Mendapatkan gambar/image penenun berdasarkan ID penenun dengan invalid credentials', () => {
        const weaverId = 2;
        //const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXdpbmExMjMiLCJpYXQiOjE2ODQ5ODU1OTgsImV4cCI6MTY4NTA3MTk5OH0.ZsjZ4UoAGAJKBLvLMIY5u-KgIGocw1e15EclfQJ4X6A';

        cy.request({
            method: 'GET',
            url: `ulospedia/weavers/${weaverId}/image`,
            headers: {
                'Authorization': `Bearer invalidToken`, // Kredensial yang tidak valid
                'Accept': '*/*'
            },
            responseType: 'blob',
            failOnStatusCode: false // Mengabaikan kesalahan status kode
        }).then((response) => {
            //cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
            expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
        });
    });

    it('GET: Mendapatkan jumlah penenun yang tersedia dengan invalid credentials', () => {
        cy.request({
            method: 'GET',
            url: 'ulospedia/weavers/count',
            headers: {
                'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                'Accept': 'application/json'
            },
            failOnStatusCode: false // Mengabaikan kesalahan status kode
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
            expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
        });
    });

    it('POST: menambahkan data penenun yang baru dengan invalid credentials:', () => {
        const requestBody = {
            "name": "James Doe",
            "yearOfBirth": 2001,
            "ethnic": "Batak Toba",
            "domicile": "Balige",
            "theLoom": "Gedongan",
            "technique": "Ikat Lapis",
            "story": "This is dummy story"
        };
        cy.request({
            method: 'POST',
            url: 'ulospedia/weavers',
            failOnStatusCode: false,
            headers: {
                'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
                'Content-Type': 'application/json'
            },
            body: requestBody
        }).then((response) => {
            cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
            expect(response.status).to.equal(403); // Expecting Unauthorized status code
            // Add more assertions or error handling based on the response
        });
    })
})