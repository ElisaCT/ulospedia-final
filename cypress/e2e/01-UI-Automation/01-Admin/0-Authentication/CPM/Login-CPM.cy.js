import {visitLoginPage} from "../../PreCondition";

describe('Fungsionalitas Login - Metode Category Partitioning Method', () => {
    const validUsername = 'rewina123';
    const validPassword = '12345';

    //precondition
    beforeEach(() => {
        visitLoginPage()
    });


    it('Admin login with Admin login dengan username dan katasandi yang benar/valid', () => {
        cy.get('#username-address-icon').type(validUsername)
        cy.get('#password').type(validPassword)
        cy.get('#btn-login').click();

        cy.wait(1000)
        cy.get('.self-center').should('be.visible');
    })

    const testCases = [
        {
            testName: 'Admin login dengan username yang valid dan katasandi yang kosong',
            username: validUsername,
            password: '',
            expectedErrorMessage: 'password can not be empty'
        },
        {
            testName: 'Admin login dengan username yang valid dan kata sandi yang salah',
            username: validUsername,
            password: 'katasandisalah',
            expectedErrorMessage: 'username atau password salah'
        },
        {
            testName: 'Admin login dengan username tidak terdaftar dan katasandi yang benar/valid',
            username: 'usernametidakterdaftar',
            password: validPassword,
            expectedErrorMessage: 'username atau password salah'
        },
        {
            testName: 'Admin login dengan username tidak terdaftar dan katasandi yang kosong',
            username: 'usernametidakterdaftar',
            password: '',
            expectedErrorMessage: 'password can not be empty'
        },
        {
            testName: 'Admin login dengan username tidak terdaftar dan kata sandi yang salah',
            username: 'usernametidakterdaftar',
            password: 'katasandisalah',
            expectedErrorMessage: 'username atau password salah'
        },
        {
            testName: 'Admin login dengan username kosong dan kata sandi yang benar',
            username: '',
            password: validPassword,
            expectedErrorMessage: 'username can not be empty'
        },
        {
            testName: 'Admin login dengan username kosong dan kata sandi yang kosong',
            username: '',
            password: '',
            expectedErrorMessages: ['username can not be empty', 'password can not be empty']
        },
        {
            testName: 'Admin login dengan username kosong dan kata sandi yang salah',
            username: '',
            password: 'katasandisalah',
            expectedErrorMessage: 'username can not be empty'
        }
    ];

    testCases.forEach((testCase) => {
        it(testCase.testName, () => {
            if (testCase.username) {
                cy.get('#username-address-icon').type(testCase.username);
            }

            if (testCase.password) {
                cy.get('#password').type(testCase.password);
            }

            cy.get('#btn-login').click();
            cy.contains(testCase.expectedErrorMessages).should('exist');

        });
    });

});