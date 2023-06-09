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

    it.only('Admin menghapus data penenun dari tabel penenun', () => {
        cy.get('#table-search').type('nama');
        //cy.contains('tr', 'nama').should('be.visible');
        cy.xpath('//*[@id="baris-daftar-penenun"]/td[5]/div/div/button').click();
        cy.xpath("//button[contains(text(),'Batal')]").click()
        //cy.xpath("//button[contains(text(),'Batal')]").clic()
        // cy.xpath("//button[contains(text(),'Hapus')]").click();
        // cy.contains('tr', 'nama').should('not.exist');
        // cy.contains('data sudah berhasil dihapus').should('be.visible');

        // cy.xpath("//button[contains(text(),'Hapus')]")
    });

});