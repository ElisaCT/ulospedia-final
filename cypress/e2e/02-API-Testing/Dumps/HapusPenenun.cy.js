describe('Fungsionalitas Menghapus Penenun - Admin', () => {
    //pre condition
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                return false;
            }
        });
        cy.visit('http://127.0.0.1:1753/admin/login');
        cy.get('#username-address-icon').type('rewina123');
        cy.get('#password').type('12345');
        cy.get('#btn-login').click();
        cy.wait(1000);
        cy.get('#ulospedia-logo').should('be.visible');
        cy.get('#sidebar-penenun').click();
        // cy.wait(1000);
    });

    it('Admin mencari data penenun dengan inputan yang valid', () => {
        cy.get('#table-search').type('Hanna');
        cy.contains('tr', 'Hanna').should('be.visible');
    })

    it('Admin mencari data penenun dengan inputan yang tidak valid', () => {
        cy.get('#table-search').type('Hannadsds');
        cy.contains('p', 'Data Penenun belum ada');
    })
});