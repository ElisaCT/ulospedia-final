import { LoginAndGoToPenenunPage } from "../../PreCondition";
describe('Fungsionalitas Menghapus Penenun - Admin', () => {
    //pre condition
    beforeEach(() => {
        LoginAndGoToPenenunPage()
    })

    it('Verifikasi admin Bisa melakukan sorting berdasarkan nama penenun pada tabel penenun', () => {
        cy.get('#btn-sort-nama-penenun').click();
        cy.wait(5000)

        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 11) {
                const currentName = Cypress.$(row).find('td').eq(1).text();
                const previousName = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentName <= previousName).to.be.true,
                    `Names are not sorted correctly. Expected "${currentName}" to be greater than or equal to "${previousName}".`;
            }
        });
    })

    it('Verifikasi admin Bisa melakukan sorting berdasarkan alat tenun penenun pada tabel penenun', () => {
        cy.get('#btn-sort-alat-tenun').click();
        cy.wait(5000)

        cy.get('tr').each((row, index) => {
            if (index >= 2 && index <= 11) {
                const currentAlatTenun = Cypress.$(row).find('td').eq(1).text();
                const previousAlatTenun = Cypress.$(row).prev().find('td').eq(0).text();

                expect(currentAlatTenun <= previousAlatTenun).to.be.true,
                    `AlatTenuns are not sorted correctly. Expected "${currentAlatTenun}" to be greater than or equal to "${previousAlatTenun}".`;
            }
        });
    })

    // it.only('Verifikasi admin Bisa melakukan sorting berdasarkan teknik tenun penenun pada tabel penenun', () => {
    //     cy.get('#btn-sort-teknik-tenun').click();
    //     cy.wait(5000)

    //     cy.get('tr').each((row, index) => {
    //         if (index >= 2 && index <= 10) {
    //             const currentTeknikTenun = Cypress.$(row).find('td').eq(1).text();
    //             const previousTeknikTenun = Cypress.$(row).prev().find('td').eq(0).text();

    //             expect(currentTeknikTenun <= previousTeknikTenun).to.be.true,
    //                 `TeknikTenuns are not sorted correctly. Expected "${currentTeknikTenun}" to be greater than or equal to "${previousTeknikTenun}".`;
    //         }
    //     });
    // })

    // it.only('Verifikasi admin Bisa melakukan sorting berdasarkan suku penenun pada tabel penenun', () => {
    //     cy.get('#btn-sort-suku-penenun').click()
    //     cy.wait(5000)

    //     cy.get('tr').each((row, index) => {
    //         if (index >= 2 && index <= 10) {
    //             const currentSukuPenenun = Cypress.$(row).find('td').eq(1).text();
    //             const previousSukuPenenun = Cypress.$(row).prev().find('td').eq(0).text();

    //             expect(currentSukuPenenun <= previousSukuPenenun).to.be.true,
    //                 `SukuPenenuns are not sorted correctly. Expected "${currentSukuPenenun}" to be greater than or equal to "${previousSukuPenenun}".`;
    //         }
    //     });
    // })

})