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

describe('',() => {

})

describe('',() => {

})