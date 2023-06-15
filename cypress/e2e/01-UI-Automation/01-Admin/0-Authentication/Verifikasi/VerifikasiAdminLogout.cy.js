import {
    visitLoginPage
} from "../../PreCondition";

describe('Fungsionalitas LogOut', () => {
    const validUsername = 'rewina123';
    const validPassword = '12345';

    before(() => {
        visitLoginPage()
        cy.get('#username-address-icon').type(validUsername)
        cy.get('#password').type(validPassword)
        cy.get('#btn-login').click();

        cy.wait(1000)
        cy.get('.self-center').should('be.visible');
    });



    it('Admin berhasil log out setelah melakukan login', () => {
        cy.get('#btn-logout').click();
        cy.wait(1000)
        cy.get('#username-address-icon').should('be.visible');
    })
})