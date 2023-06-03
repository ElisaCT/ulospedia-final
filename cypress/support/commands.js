// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginAndSetAuthToken", () => {
    cy.request({
        method: 'POST',
        url: 'http://company.ditenun.com/api/v1/auth/login',
        body: {
            username: 'rewina123',
            password: '12345'
        }
    }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('code', 200);
        expect(response.body).to.have.property('status', 'success');
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('token');
        const authToken = response.body.data.token;
        cy.log('authToken:', authToken);
        Cypress.env('authToken', authToken);
    });
});

Cypress.Commands.add('getById', (selector) => {
    return cy.get(`[id="${selector}"]`);
});

Cypress.Commands.add('getInputById', (id, value) => {
    return cy
        .get(`[id=${id}]`)
        .should('exist')
        .type(value)
        .should('have.value', value)
})

Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add('getByName', (selector) => {
    return cy.get(`[name=${selector}]`)
})

Cypress.Commands.add('getByType', (selector) => {
    return cy.get(`[type=${selector}]`)
})

Cypress.Commands.add('getByTestDataId', (selector) => {
    return cy.get(`[test-data-id="${selector}"]`);
});