describe('Mencari Ulos di galeri ulos berdasarkan kombinasai nama ulos - End User', () => {
    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/galeri-ulos')
    });


    it('Cari Ulos menggunakan search box, dan filter Ragam Ulos; filter Jenis Ulos; filter Warna Ulos', () => {
        cy.getById('field-cariUlos').type('ragi')
        cy.wait(2000)
        cy.getById('btn-filter').click()
        cy.getById('label-batakToba').click()
        cy.getById('label-Merah').click()
        cy.getById('label-ulosTradisional').click()
        cy.getById('btn-terapkan').click()
        cy.get('#label-jenis-ulos').should('be.visible');
        cy.get('#label-asal-ulos').should('be.visible');
        cy.get('#label-warna-ulos').should('be.visible');

    })

    it('Cari Ulos menggunakan search box saja', () => {
        cy.getById('field-cariUlos').type('ragi')
        cy.wait(2000)
        cy.getById('ulos-nama').eq(1).should('be.visible')
    })

    it('Cari Ulos menggunakan filter Ragam Ulos saja', () => {
        cy.getById('field-cariUlos').type('ragi')
        cy.wait(2000)
        cy.getById('btn-filter').click()
        cy.getById('label-batakToba').click()
        cy.get('#label-asal-ulos').should('be.visible');
    })

    it('Cari Ulos menggunakan  filter Jenis Ulos saja', () => {
        cy.getById('field-cariUlos').type('ragi')
        cy.wait(2000)
        cy.getById('btn-filter').click()
        cy.getById('label-ulosTradisional').click()
        cy.getById('btn-terapkan').click()
        cy.get('#label-jenis-ulos').should('be.visible');
    })

    it('Cari Ulos menggunakan filter Warna Ulos saja', () => {
        cy.getById('field-cariUlos').type('ragi')
        cy.wait(2000)
        cy.getById('btn-filter').click()
        cy.getById('label-Merah').click()
        cy.getById('btn-terapkan').click() 
        cy.get('#label-warna-ulos').should('be.visible');
    })

    it('Cari Ulos dengan inputyang tidak valid', () => {
        cy.getById('field-cariUlos').type('Ulos sada')
        cy.wait(2000)
        cy.get('.text-xl').should('contain', 'Oops, tidak ada ulos yang ditemukan');
    })
});