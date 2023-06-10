import {
    LoginAndGoToUlosPage
} from "../../PreCondition";
describe('Fungsionalitas Mengurutkan data ulos - Admin', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToUlosPage()
    });

    it.only('Verifikasi admin bisa melakukan sorting berdasarkan nama ulos pada tabel ulos', () => {
        cy.get('#btn-sort-nama-ulos').click();
        cy.wait(500)
        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 9) {
                const currentName = Cypress.$(row).find('td').eq(1).text();
                const previousName = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentName <= previousName).to.be.true,
                    `Names are not sorted correctly. Expected "${currentName}" to be greater than or equal to "${previousName}".`;
            }
        });
    })

    it('Verifikasi admin bisa melakukan sorting berdasarkan suku ulos pada tabel ulos', () => {
        cy.get('#btn-sort-suku-ulos').click();
        cy.wait(5000)

        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 9) {
                const currentethnic = Cypress.$(row).find('td').eq(1).text();
                const previousethnic = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentethnic <= previousethnic).to.be.true,
                    `ethnics are not sorted correctly. Expected "${currentethnic}" to be greater than or equal to "${previousethnic}".`;
            }
        });
    })

    it('Verifikasi admin bisa melakukan sorting berdasarkan teknik tenun pada tabel ulos', () => {
        cy.get('#btn-sort-teknik-tenun').click()
        cy.wait(5000)


        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 9) {
                const currentTeknikTenun = Cypress.$(row).find('td').eq(1).text();
                const previousTeknikTenun = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentTeknikTenun <= previousTeknikTenun).to.be.true,
                    `TeknikTenun are not sorted correctly. Expected "${currentTeknikTenun}" to be greater than or equal to "${previousTeknikTenun}".`;
            }
        });
    })
})