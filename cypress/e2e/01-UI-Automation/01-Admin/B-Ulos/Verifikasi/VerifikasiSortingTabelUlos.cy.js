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
    })

    it('Verifikasi admin Bisa melakukan sorting pada setiap kolom tabel penenun', () => {
        //cy.get('#btn-sort-nama-penenun').click();

        //cy.get('#btn-sort-alat-tenun').click();
        //cy.get('#btn-sort-teknik-tenun').click();
        cy.get('#btn-sort-suku-penenun').click()
        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 11) {
                const currentName = Cypress.$(row).find('td').eq(1).text();
                const previousName = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentName <= previousName).to.be.true,
                    `Names are not sorted correctly. Expected "${currentName}" to be greater than or equal to "${previousName}".`;
            }
        });
    })

})