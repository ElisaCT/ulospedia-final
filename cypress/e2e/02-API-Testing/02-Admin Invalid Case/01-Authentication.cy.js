//{ API ini digunakan untuk proses autentikasi ke dalam web Ulospedia. }

describe('Pengujian API: Fitur Authentication', () => {
    describe('Login dengan valid dan Invalid credentials', () => {
        const baseUrl = 'http://company.ditenun.com/api/v1/auth/login';

        const requestBodyBerhasil = {
            username: 'rewina123',
            password: '12345',
        };

        const requestbodyUsernameKosong = {
            username: '',
            password: 'password123',
        };

        const requestbodyPasswordKosong = {
            username: 'testadmin',
            password: '',
        };

        const requestbodyAkunTidakTerdaftar = {
            username: 'invaliduser',
            password: 'wrongpassword',
        };

        const assertSuccessResponse = (response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('code', 200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('token');
            expect(response.body.data.token).to.be.a('string');
            expect(response.body).to.have.property('message', 'login berhasil dan token baru berhasil didapatkan');
            // Additional assertions or actions after successful login
        };

        const assertValidationErrorResponse = (response, expectedMessage) => {
            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('code', 404);
            expect(response.body).to.have.property('status', 'error');
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.deep.equal(expectedMessage);
            // Additional assertions or actions for handling the validation error response
        };

        const assertInvalidCredentialsError = (response) => {
            expect(response.status).to.equal(401);
            expect(response.body).to.have.property('code', 401);
            expect(response.body).to.have.property('status', 'error');
            expect(response.body).to.have.property('data', null);
            expect(response.body).to.have.property('message', 'username atau password salah');
            // Additional assertions or actions for handling the error response
        };

        it('should login successfully', () => {
            cy.request('POST', baseUrl, requestBodyBerhasil).then(assertSuccessResponse);
        });

        it('Menampilkan validasi untuk username yang kosong', () => {
            cy.request({
                method: 'POST',
                url: baseUrl,
                failOnStatusCode: false,
                body: requestbodyUsernameKosong,
            }).then((response) => { 
                assertValidationErrorResponse(response, {
                    username: 'username cannot be empty'
                });
            });
        });

        it('Menampilkan validasi untuk password yang kosong', () => {
            cy.request({
                method: 'POST',
                url: baseUrl,
                failOnStatusCode: false,
                body: requestbodyPasswordKosong,
            }).then((response) => {
                assertValidationErrorResponse(response, {
                    password: 'password cannot be empty'
                });
            });
        });

        it('Menampilkan validasi untuk akun yang tidak terdaftar', () => {
            cy.request({
                method: 'POST',
                url: baseUrl,
                failOnStatusCode: false,
                body: requestbodyAkunTidakTerdaftar,
            }).then(assertInvalidCredentialsError);
        });
    })


    //describe('Authentikasi: Registrasi Admin', () => {
        //     it('should register successfully', () => {
        //         cy.request({
        //             method: 'POST',
        //             url: 'http://company.ditenun.com/api/v1/auth/register',
        //             failOnStatusCode: false,
        //             body: {
        //                 username: 'testadmin2',
        //                 password: 'password123',
        //             },
        //         }).then((response) => {
        //             expect(response.status).to.equal(201);
        //             expect(response.body).to.have.property('code', 201);
        //             expect(response.body).to.have.property('status', 'success');
        //             expect(response.body).to.have.property('data');
        //             expect(response.body.data).to.have.property('token');
        //             expect(response.body.data.token).to.be.a('string');
        //             expect(response.body).to.have.property('message', 'akun baru berhasil ditambahkan dan token baru berhasil didapatkan');
        //             // Additional assertions or actions after successful registration
        //         });
        //     });
        // })
    
});