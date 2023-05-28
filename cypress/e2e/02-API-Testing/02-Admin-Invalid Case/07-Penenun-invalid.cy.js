//API ini digunakan untuk mengakses semua data penenun yang dibutuhkan pada dashboard penenun }

describe('Pengujian API: Penenun', () => {
    //precondition mengisi token dengan fungsi loginandserauthtoken
    before(() => {
        cy.loginAndSetAuthToken();
    });


    // it('GET: Mendapatkan semua data penenun yang ada', () => {
    //     const authToken = Cypress.env('authToken');

    //     cy.request({
    //         method: 'GET',
    //         url: 'ulospedia/weavers',
    //         failOnStatusCode: false,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`, // Include the authToken in the Authorization header
    //             'Accept': 'application/json'
    //         },
    //         qs: {
    //             pageNo: 1,
    //             pageSize: 10,
    //             sortBy: 'updatedAt',
    //             sortDir: 'asc',
    //             searchByName: 'searchByName'
    //         }
    //     }).then((response) => {
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
    //         expect(response.status).to.equal(200);
    //         expect(response.body).to.have.property('code', 200);
    //         expect(response.body).to.have.property('status', 'success');
    //     });
    // });

    // it('GET: Mendapatkan data detail penenun berdasarkan ID', () => {
    //     const authToken = Cypress.env('authToken');
    //     cy.request({
    //         method: 'GET',
    //         url: 'ulospedia/weavers',
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`, // Include the authToken in the Authorization header
    //             'Accept': 'application/json'
    //         },
    //         qs: {
    //             'weaver-id': 9, // Replace '9' with the actual weaver ID
    //         }
    //     }).then((response) => {
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
    //         expect(response.status).to.equal(200);
    //         expect(response.body).to.have.property('code', 200);
    //         expect(response.body).to.have.property('status', 'success');
    //         expect(response.body).to.have.property('data');
    //         expect(response.body.data).to.have.property('weavers');

    //     });
    // });

    it('GET: Mendapatkan gambar/image penenun berdasarkan ID penenun', () => {
        const weaverId = 10;
        const authToken = Cypress.env('authToken');

        cy.request({
            method: 'GET',
            url: `ulospedia/weavers/${weaverId}/image`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Accept': '*/*'
            },
            responseType: 'blob'
        }).then((response) => {
            //cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
            expect(response.status).to.equal(200);
            expect(response.headers['content-type']).to.equal('image/jpeg');
            // Perform additional assertions or validations on the image if needed
        });
    });

    it('PUT: Memperbaharui/mengupload gambar penenun berdasarkan weaverID yang valid(Tersedia)', () => {
        const weaverId = 10;
        const authToken = Cypress.env('authToken');

        cy.fixture('penenun2.jpeg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((weaverImage) => {
                const formData = new FormData();
                formData.append('weaver-image', weaverImage, 'penenun2.jpeg');

                cy.request({
                    method: 'PUT',
                    url: `ulospedia/weavers/${weaverId}/image`,
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Accept': '*/*'
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    cy.log('Response Body:', JSON.stringify(response.body, null, 2));
                });
            });
    });


    // it('GET: Mendapatkan jumlah penenun yang tersedia', () => {
    //     const authToken = Cypress.env('authToken');
    //     cy.request({
    //         method: 'GET',
    //         url: 'ulospedia/weavers/count',
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': 'application/json'
    //         }
    //     }).then((response) => {
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
    //         expect(response.status).to.equal(200);
    //         expect(response.body.code).to.equal(200);
    //         expect(response.body.status).to.equal('success');
    //         expect(response.body.data.countOfWeaver).to.exist;
    //         // Perform additional assertions or validations on the count if needed
    //     });
    // });

    // it('POST: Menambahkan/membuat data text penenun yang baru', () => {
    //     const authToken = Cypress.env('authToken');
    //     const requestBody = {
                // "name": "James Doe",
                // "yearOfBirth": 2001,
                // "ethnic": "Batak Toba",
                // "domicile": "Balige",
                // "theLoom": "Gedongan",
                // "technique": "Ikat Lapis",
                // "story": "This is dummy story"
    //     };
    //     cy.request({
    //         method: 'POST',
    //         url: 'ulospedia/weavers',
    //         failOnStatusCode: false,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`, // Include the authToken in the Authorization header
    //             'Accept': 'application/json' // You can include other headers if required
    //         },
    //         body: requestBody
    //     }).then((response) => {
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));// Log the response body as JSON string
    //         expect(response.status).to.equal(201);
    //         expect(response.body).to.have.property('code', 201);
    //         expect(response.body).to.have.property('status', 'success');
    //         expect(response.body).to.have.property('message', 'data penenun baru (text) berhasil dibuat');
    //         expect(response.body.data).to.have.property('weaver');
    //         expect(response.body.data.weaver).to.have.property('id');
    //         expect(response.body.data.weaver).to.have.property('name', 'James Doe');
    //         // Add more assertions as needed for the response body
    //     });
    // });

    // it('POST: Menambah Data Penenun Baru (gambar/image)', () => {
    //     const weaverId = 2;
    //     const authToken = Cypress.env('authToken');

    //     cy.fixture('testgambar.jpg', 'binary')
    //         .then((fileContent) => {
    //             cy.request({
    //                 method: 'POST',
    //                 url: `ulospedia/weavers/${weaverId}/image`,
    //                 failOnStatusCode: false,
    //                 headers: {
    //                     'Authorization': `Bearer ${authToken}`,
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'multipart/form-data'
    //                 },
    //                 body: {
    //                     'weaver-image': {
    //                         value: fileContent,
    //                         options: {
    //                             filename: 'testgambar.jpg',
    //                             contentType: 'image/jpeg'
    //                         }
    //                     }
    //                 }
    //             }).then((response) => {
    //                 cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //                 expect(response.status).to.equal(201);
    //                 expect(response.body.code).to.equal(201);
    //                 expect(response.body.status).to.equal('success');

    //                 // Log the structure of response.body.data for debugging
    //                 cy.log('response.body.data:', response.body.data);

    //                 expect(response.body.data).to.have.property('weaverImageData');
    //                 expect(response.body.data.weaverImageData).to.have.property('id');
    //                 expect(response.body.data.weaverImageData).to.have.property('imageReference');
    //             });
    //         });
    // });

    // it('DELETE: Menghapus data penenun berdasarkan id penenun yang valid(tersedia)', () => {
    //     const authToken = Cypress.env('authToken');
    //     const weaverId = 3;

    //     cy.request({
    //         method: 'DELETE',
    //         url: `ulospedia/weavers/${weaverId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Accept': '*/*'
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body.status).to.eq('success');
    //         cy.log('Response Body:', JSON.stringify(response.body, null, 2));
    //     });
    // });

    it('POST: Menambahkan gambar penenun yang baru berdasarkan penenun ID yang valid(tersedia)', () => {
        const weaverId = 10;
        const authToken = Cypress.env('authToken');

        cy.fixture('testgambar.jpg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then((weaverImage) => {
                const formData = new FormData();
                formData.append('weaver-image', weaverImage, 'testgambar.jpg');

                cy.request({
                    method: 'POST',
                    url: `ulospedia/weavers/${weaverId}/image`,
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

    // it('PUT: Memperbaharui/Mengedit data text penenun berdasarkan ID penenun yang valid(Tersedia)', () => {
    //     const authToken = Cypress.env('authToken');
    //     const weaverId = 3;

    //     const updatedWeaverData = {
    //         name: 'Jhon Doe',
    //         yearOfBirth: 2002,
    //         ethnic: 'Batak Toba',
    //         domicile: 'Balige',
    //         theLoom: 'Alat Tenun Bukan Mesin',
    //         technique: 'Ikat Lapis',
    //         story: 'This is dummy story after editing'
    //     };

    //     cy.request({
    //         method: 'PUT',
    //         url: `ulospedia/weavers/${weaverId}`,
    //         headers: {
    //             'Authorization': `Bearer ${authToken}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: updatedWeaverData
    //     }).then((response) => {
    //         expect(response.status).to.equal(200);
    //         expect(response.body).to.have.property('code', 200);
    //         expect(response.body).to.have.property('status', 'success');
    //         expect(response.body).to.have.property('data');
    //         expect(response.body.data).to.have.property('weaver');

    //         const updatedWeaver = response.body.data.weaver;
    //         expect(updatedWeaver).to.have.property('name', updatedWeaverData.name);
    //         const expectedAge =   2023 - updatedWeaverData.yearOfBirth;
    //         expect(updatedWeaver).to.have.property('age', expectedAge);
    //         expect(updatedWeaver).to.have.property('ethnic', updatedWeaverData.ethnic);
    //         expect(updatedWeaver).to.have.property('domicile', updatedWeaverData.domicile);
    //         expect(updatedWeaver).to.have.property('theLoom', updatedWeaverData.theLoom);
    //         expect(updatedWeaver).to.have.property('technique', updatedWeaverData.technique);
    //         expect(updatedWeaver).to.have.property('story', updatedWeaverData.story);

    //         // cy.log('Name:', updatedWeaver.name);
    //         // cy.log('Age:', updatedWeaver.age);
    //         // cy.log('Ethnic:', updatedWeaver.ethnic);
    //         // cy.log('Domicile:', updatedWeaver.domicile);
    //         // cy.log('The Loom:', updatedWeaver.theLoom);
    //         // cy.log('Technique:', updatedWeaver.technique);
    //         // cy.log('Story:', updatedWeaver.story);
    //     });
    // });
});

//  const invalidAuthToken = 'INVALID_TOKEN';
// it('GET: Mendapatkan data detail penenun berdasarkan IDdengan invalid credentials', () => {
//     cy.request({
//         method: 'GET',
//         url: 'ulospedia/weavers',
//         headers: {
//             'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
//             'Accept': 'application/json'
//         },
//         qs: {
//             'weaver-id': 9 // Ganti '9' dengan ID penenun yang sebenarnya
//         },
//         failOnStatusCode: false // Mengabaikan kesalahan status kode
//     }).then((response) => {
//         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
//         expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
//     });
// });

// it('GET: Mendapatkan gambar/image penenun berdasarkan ID penenun dengan invalid credentials', () => {
//     const weaverId = 2;
//     //const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZXdpbmExMjMiLCJpYXQiOjE2ODQ5ODU1OTgsImV4cCI6MTY4NTA3MTk5OH0.ZsjZ4UoAGAJKBLvLMIY5u-KgIGocw1e15EclfQJ4X6A';

//     cy.request({
//         method: 'GET',
//         url: `ulospedia/weavers/${weaverId}/image`,
//         headers: {
//             'Authorization': `Bearer invalidToken`, // Kredensial yang tidak valid
//             'Accept': '*/*'
//         },
//         responseType: 'blob',
//         failOnStatusCode: false // Mengabaikan kesalahan status kode
//     }).then((response) => {
//         //cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
//         expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
//     });
// });

// it('GET: Mendapatkan jumlah penenun yang tersedia dengan invalid credentials', () => {
//     cy.request({
//         method: 'GET',
//         url: 'ulospedia/weavers/count',
//         headers: {
//             'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
//             'Accept': 'application/json'
//         },
//         failOnStatusCode: false // Mengabaikan kesalahan status kode
//     }).then((response) => {
//         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Menampilkan body respons dalam format JSON yang terstruktur
//         expect(response.status).to.equal(403); // Memastikan status kode respons adalah 403
//     });
// });

// it('POST: menambahkan data penenun yang baru dengan invalid credentials:', () => {
//     const requestBody = {
//         "name": "James Doe",
//         "yearOfBirth": 2001,
//         "ethnic": "Batak Toba",
//         "domicile": "Balige",
//         "theLoom": "Gedongan",
//         "technique": "Ikat Lapis",
//         "story": "This is dummy story"
//     };
//     cy.request({
//         method: 'POST',
//         url: 'ulospedia/weavers',
//         failOnStatusCode: false,
//         headers: {
//             'Authorization': `Bearer ${invalidAuthToken}`, // Invalid token for testing purposes
//             'Content-Type': 'application/json'
//         },
//         body: requestBody
//     }).then((response) => {
//         cy.log('Response Body:', JSON.stringify(response.body, null, 2)); // Log the response body as JSON string
//         expect(response.status).to.equal(403); // Expecting Unauthorized status code
//         // Add more assertions or error handling based on the response
//     });
// })
//})