describe('Fungsionalitas Login - Admin', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/admin/login');
    });
    //Admin login dengan username dan katasandi yang benar/valid
    it('Admin login dengan username dan katasandi yang benar/valid', () => {
        cy.get('#username-address-icon').type('rewina123')
        cy.get('#password').type('12345')
        cy.get('#btn-login').click()

    })

    describe('Login dengan Invalid credentials', () => {
        const testData = [{
                //username valid, password kosong
                username: 'rewina123',
                errorMessage: 'password can not be empty'
            },
            {
                //username valid, password salah
                username: 'rewina123',
                password: 'test123',
                errorMessage: 'username atau password salah'
            },
            {
                //username tidak terdaftar,password benar
                username: 'testttt',
                password: '12345',
                errorMessage: 'username atau password salah'
            },
            {
                //username tidak terdaftar,password kosong
                username: 'testttt',
                errorMessage: 'password can not be empty'
            },
            {
                //username tidak terdaftar,password salah
                username: 'testttt',
                password: 'passwordsalah',
                errorMessage: 'username atau password salah'
            }
        ]

        testData.forEach(data => {
            it(`Menampilkan pesan error ketika ${data.username ? `username = ${data.username}` : 'username kosong'} and ${data.password ? `password = ${data.password}` : 'password kosong'}`, () => {
                // cy.contains('Login with Password instead').should('exist').click()
                if (data.username) {
                    cy.get('#username-address-icon').type(data.username)
                }
                if (data.password) {
                    cy.get('#password').type(data.password)
                }
                cy.get('#btn-login').click()

                cy.contains(data.errorMessage).should('exist')
            })
        })
    })
    // //Admin login dengan username dan katasandi yang benar/valid
    // it('Admin login dengan username dan katasandi yang benar/valid', () => {

    // })

    // it('Admin login dengan username yang valid dan katasandi yang kosong', () => {

    // })

    // it('Admin login dengan username yang valid dan kata sandi yang salah', () => {

    // })

    // it('Admin login dengan username tidak terdaftar dan katasandi yang benar/valid', () => {

    // })

    // it('Admin login dengan username tidak terdaftar dan katasandi yang kosong', () => {

    // })

    // it('Admin login dengan username tidak terdaftar dan kata sandi yang salah', () => {

    // })

    // it('', () => {

    // })
    // it('', () => {

    // })
    // it('', () => {

    // })
    // it('', () => {

    // })
    // it('', () => {

    // })

})
describe('Weaver API Tests', () => {
    it('should retrieve all weavers', () => {
        cy.request({
            method: 'GET',
            url: 'http://company.ditenun.com/api/v1/ulospedia/weavers',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NDg1NDI1NywiZXhwIjoxNjg0OTQwNjU3fQ.89qRbpwHuOuqE8IIAw5KeQIFqtiALRV9gblxyGrSnZE',
                'Accept': 'application/json' // You can include other headers if required
            },
            qs: {
                pageNo: 1,
                pageSize: 10,
                sortBy: 'updatedAt',
                sortDir: 'asc',
                searchByName: 'searchByName'
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('weavers');
            expect(response.body.data.weavers).to.have.property('totalElementsOnPage');
            expect(response.body.data.weavers).to.have.property('totalAllElements');
            expect(response.body.data.weavers).to.have.property('lastPage');
            expect(response.body.data.weavers).to.have.property('weaversListAdminDashboard');
            // Additional assertions or actions based on the response
        });
    });

    it('should add a new weaver', () => {
        cy.request({
            method: 'POST',
            url: 'http://company.ditenun.com/api/v1/ulospedia/weavers',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NDg1NDI1NywiZXhwIjoxNjg0OTQwNjU3fQ.89qRbpwHuOuqE8IIAw5KeQIFqtiALRV9gblxyGrSnZE',
                'Content-Type': 'application/json'
            },
            body: {
                "name": "James Doe",
                "yearOfBirth": 2001,
                "ethnic": "Batak Toba",
                "domicile": "Balige",
                "theLoom": "Gedongan",
                "technique": "Ikat Lapis",
                "story": "This is dummy story"
            }
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('code', 201);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'data penenun baru (text) berhasil dibuat');
            expect(response.body.data).to.have.property('weaver');
            expect(response.body.data.weaver).to.have.property('id');
            expect(response.body.data.weaver).to.have.property('name', 'James Doe');
            // Add more assertions as needed for the response body
        });
    });
});

//ulosdata

// describe('Valid Weaver API Tests', () => {
//     let authToken; // Declare the authToken variable outside the beforeEach block
//     before(() => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/auth/login',
//             body: {
//                 username: 'rewina123',
//                 password: '12345'
//             }
//         }).then((response) => {
//             cy.log('Response Body:', JSON.stringify(response.body, null, 2));
//             //   cy.log('Response Body:', JSON.stringify(response.body)); // Log the response body as JSON string
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('data');
//             expect(response.body.data).to.have.property('token');
//             authToken = response.body.data.token; // Update the assignment of authToken
//             cy.log('authToken:', authToken); // Log the value of authToken
//         });
//     });


//     it('should get the count of available ulos', () => {
//         cy.request({
//             method: 'GET',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/ulos/count',
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'accept': '*/*'
//             }
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'jumlah ulos yang tersedia berhasil diambil');
//         });
//     });


//     it('should create a new ulos data', () => {
//         const requestBody = {
//             "name": "Sibolang",
//             "colors": [
//                 "Merah", "Biru"
//             ],
//             "originEthnic": "Batak Toba",
//             "type": "Tradisional",
//             "location": "Balige",
//             "length": 320,
//             "width": 80,
//             "technique": "Ikat Lapis",
//             "meaning": "Ulos berarti kain dalam bahasa Batak Toba.",
//             "func": "Ulos Sibolang sering dikenakan pada saat upacara adat yang melambangkan duka cita."
//         };

//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/ulos',
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: requestBody
//         }).then((response) => {
//             expect(response.status).to.equal(201);
//             expect(response.body).to.have.property('code', 201);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'data ulos baru berhasil ditambahkan');
//         });
//     });

//     it('should update ulos data', () => {
//         const ulosId = 10;
//         const updatedUlosData = {
//             "name": "Sibolang",
//             "colors": [
//                 "Merah",
//                 "Biru"
//             ],
//             "originEthnic": "Sumatera Utara",
//             "type": "Batak Mandailing",
//             "location": "Tapanuli Selatan",
//             "length": 243,
//             "width": 89,
//             "technique": "Ikat Lapis",
//             "meaning": "Ulos adalah kain",
//             "func": "Digunakan untuk acara berduka"
//         };

//         cy.request({
//             method: 'PUT',
//             url: `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}`,
//             headers: {
//                 'Authorization': `Bearer ${authToken}`,
//                 'accept': '*/*',
//                 'Content-Type': 'application/json'
//             },
//             body: updatedUlosData
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'ulos data successfully updated');
//         });
//     });
// });

   // Add more test cases for other invalid scenarios...

                // it('should handle invalid credentials and valid request body', () => {
                //             const requestBody = {
                //                 "name": "James Doe",
                //                 "yearOfBirth": 2001,
                //                 "ethnic": "Batak Toba",
                //                 "domicile": "Balige",
                //                 "theLoom": "Gedongan",
                //                 "technique": "Ikat Lapis",
                //                 "story": "This is dummy story"
                //             };

                //             cy.request({
                //                         method
            

// describe('Weaver API Tests', () => {
//     it('should retrieve all weavers', () => {
//         cy.request({
//             method: 'GET',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/weavers',
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NDg1NDI1NywiZXhwIjoxNjg0OTQwNjU3fQ.89qRbpwHuOuqE8IIAw5KeQIFqtiALRV9gblxyGrSnZE',
//                 'Accept': 'application/json' // You can include other headers if required
//             },
//             qs: {
//                 pageNo: 1,
//                 pageSize: 10,
//                 sortBy: 'updatedAt',
//                 sortDir: 'asc',
//                 searchByName: 'searchByName'
//             },
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('data');
//             expect(response.body.data).to.have.property('weavers');
//             expect(response.body.data.weavers).to.have.property('totalElementsOnPage');
//             expect(response.body.data.weavers).to.have.property('totalAllElements');
//             expect(response.body.data.weavers).to.have.property('lastPage');
//             expect(response.body.data.weavers).to.have.property('weaversListAdminDashboard');
//             // Additional assertions or actions based on the response
//         });
//     });

//     it('should add a new weaver', () => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/ulospedia/weavers',
//             headers: {
//                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NDg1NDI1NywiZXhwIjoxNjg0OTQwNjU3fQ.89qRbpwHuOuqE8IIAw5KeQIFqtiALRV9gblxyGrSnZE',
//                 'Content-Type': 'application/json'
//             },
//             body: {
//                 "name": "James Doe",
//                 "yearOfBirth": 2001,
//                 "ethnic": "Batak Toba",
//                 "domicile": "Balige",
//                 "theLoom": "Gedongan",
//                 "technique": "Ikat Lapis",
//                 "story": "This is dummy story"
//             }
//         }).then((response) => {
//             expect(response.status).to.equal(201);
//             expect(response.body).to.have.property('code', 201);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('message', 'data penenun baru (text) berhasil dibuat');
//             expect(response.body.data).to.have.property('weaver');
//             expect(response.body.data.weaver).to.have.property('id');
//             expect(response.body.data.weaver).to.have.property('name', 'James Doe');
//             // Add more assertions as needed for the response body
//         });
//     });
// });

   // Add more test cases for other invalid scenarios...

                // it('should handle invalid credentials and valid request body', () => {
                //             const requestBody = {
                //                 "name": "James Doe",
                //                 "yearOfBirth": 2001,
                //                 "ethnic": "Batak Toba",
                //                 "domicile": "Balige",
                //                 "theLoom": "Gedongan",
                //                 "technique": "Ikat Lapis",
                //                 "story": "This is dummy story"
                //             };

                //             cy.request({
                //                         method

// describe('Authentication API Tests', () => {
//     // beforeEach(() => {
//     //     cy.visit('/login'); // Assuming /login is the login page URL
//     // });

// const {
//     describe
// } = require("vitest");

//     it('should login successfully', () => {
//         cy.request('POST', 'http://company.ditenun.com/api/v1/auth/login', {
//             username: 'testadmin',
//             password: 'password123',
//         }).then((response) => {
//             expect(response.status).to.equal(200);
//             expect(response.body).to.have.property('code', 200);
//             expect(response.body).to.have.property('status', 'success');
//             expect(response.body).to.have.property('data');
//             expect(response.body.data).to.have.property('token');
//             expect(response.body.data.token).to.be.a('string');
//             expect(response.body).to.have.property('message', 'login berhasil dan token baru berhasil didapatkan');
//             // Additional assertions or actions after successful login
//         });
//     });

//     it('should handle validation error for empty username', () => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/auth/login',
//             failOnStatusCode: false,
//             body: {
//                 username: '',
//                 password: 'password123',
//             },
//         }).then((response) => {
//             expect(response.status).to.equal(400);
//             expect(response.body).to.have.property('code', 404);
//             expect(response.body).to.have.property('status', 'error');
//             expect(response.body).to.have.property('message');
//             expect(response.body.message).to.deep.equal({
//                 username: 'username cannot be empty',
//             });
//             // Additional assertions or actions for handling the validation error response
//         });
//     });

//     it('should handle validation error for empty password', () => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/auth/login',
//             failOnStatusCode: false,
//             body: {
//                 username: 'testadmin',
//                 password: '',
//             },
//         }).then((response) => {
//             expect(response.status).to.equal(400);
//             expect(response.body).to.have.property('code', 404);
//             expect(response.body).to.have.property('status', 'error');
//             expect(response.body).to.have.property('message');
//             expect(response.body.message).to.deep.equal({
//                 password: 'password cannot be empty',
//             });
//             // Additional assertions or actions for handling the validation error response
//         });
//     });


//     it('should display an error for invalid credentials', () => {
//         cy.request({
//             method: 'POST',
//             url: 'http://company.ditenun.com/api/v1/auth/login',
//             failOnStatusCode: false,
//             body: {
//                 username: 'invaliduser',
//                 password: 'wrongpassword',
//             },
//         }).then((response) => {
//             expect(response.status).to.equal(401);
//             expect(response.body).to.have.property('code', 401);
//             expect(response.body).to.have.property('status', 'error');
//             expect(response.body).to.have.property('data', null);
//             expect(response.body).to.have.property('message', 'username atau password salah');
//             // Additional assertions or actions for handling the error response
//         });
//     });

// });

it('should retrieve weaver image by ID', () => {
    const weaverId = 9; // Replace with the actual weaver ID

    cy.request({
        method: 'GET',
        url: `http://company.ditenun.com/api/v1/ulospedia/weavers/${weaverId}/image`,
        failOnStatusCode: false,
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    }).then((response) => {
        expect(response.status).to.equal(200);
        // expect(response.headers['content-type']).to.equal('image/jpeg');
        expect(response.body).to.exist;
        // Perform additional assertions or validations on the image if needed
    });
});

    // beforeEach(() => {
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
    //         authToken = response.body.data.token; // Update the assignment of authToken
    //         cy.log('authToken:', authToken); // Log the value of authToken
    //     });
    // });

describe('Pengujian API: Invalid',() => {

})
describe('Pengujian API: Gambar Ulos lainnya dengan invalid credentials',() => {

})

describe('',() => {

    const invalidUlosId = 1011;
    const ulosId = 10;
    const imagePath = 'motifUlos1.jpeg';
    const motifImageId = 2;
    const invalidMotifImageId = 12;
    const invalidAuthToken = 'INVALID_TOKEN';
})