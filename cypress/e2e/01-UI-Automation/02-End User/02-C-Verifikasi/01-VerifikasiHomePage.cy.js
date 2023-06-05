describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/');
    });


    it('Verfikasi button Eksplor ulos dapat digunakan', () => {
        cy.getById('btn-exploreUlos').click() //menekan tombol explore ulos
        cy.getById('field-cariUlos').should('exist') //verifikasi sudah dihalaman galeri ulos
    })

    it('Verfikasi section jelajahi Ulos', () => {
        cy.getById('span-btn-jelajahiUlos').click()
        cy.getByTestDataId('tab-btn-sejarah-ulos').should('be.visible').should('exist');
        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');

    })

    it('Verifikasi section Apa itu Ulos', () => {
        // Memastikan teks judul ada dan sesuai
        cy.get('#card-apa-itu-ulos h4').should('have.text', 'Apa itu ulos?');

        // Memastikan tombol jelajahi ulos mengarahkan ke router dan halaman yang benar
        cy.get('#span-btn-jelajahiUlos').click();
        cy.url().should('eq', 'http://127.0.0.1:1753/galeri-ulos');

        cy.get('#field-cariUlos').should('be.visible');
    })

    it('Verifikasi section Lahir hidup dan Mati', () => {
        // Memastikan konten pada elemen "Lahir, hidup, dan mati" sesuai dengan yang diharapkan
        cy.get('#card-lahir-hidup-mati')
            .find('h4')
            .should('have.text', 'Lahir, hidup, dan mati');
        cy.get('#span-btn-sejarahUlos').click();
        cy.url().should('eq', 'http://127.0.0.1:1753/sejarah-ulos');

        // Memastikan tombol sejarah ulos aktif atau terlihat oleh pengguna
        cy.get('[data-test-id="btn-sejarahUlos"]').should('be.visible');

        cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');
        // Memastikan ada gambar pada elemen
        cy.get('#gambar-sejarah-ulos').should('exist');
    })

    it('Verifikasi section Fakta Menarik Ulos', () => {
        // Click on the "next-button"
        cy.get('#text-fakta-menarik').should('have.text', 'Temukan Fakta Menarik Ulos');
        cy.get('#next-button').should('be.enabled')
        cy.get('#prev-button').should('be.enabled')
    })

    it('Verifikasi section Ragam ulos: Batak Toba', () => {
        //cy.get('#btn-ragamUlos-BatakToba').click()
        cy.get('#btn-ragamUlos-BatakToba').click()
        // cy.get('#navbar-GaleriUlos').click() 
        cy.get('#label-asal-ulos').should('have.text', 'Batak Toba');
        // cy.get('#btn-filter').click()
        // cy.get('#label-batakToba').click()
        // cy.get('#btn-terapkan').click()
        cy.wait(3000)
        cy.get('#ulos-asal').each((element) => {
            cy.wrap(element).should(($p) => {
                const text = $p.text().trim();
                expect(text).to.equal('Batak Toba');
            });
        });
    })

    it('Verifikasi section Ragam ulos: Batak Simalungun', () => {
        cy.get('#btn-ragamUlos-BatakSimalungun').click()
        cy.get('#label-asal-ulos').should('have.text', 'Batak Simalungun');

        // cy.get('#btn-filter').click()
        // cy.get('#label-batakSimalungun').click()
        // cy.get('#btn-terapkan').click()
        cy.wait(3000)
        cy.get('#ulos-asal').each((element) => {
            cy.wrap(element).should(($p) => {
                const text = $p.text().trim();
                expect(text).to.equal('Batak Simalungun');
            });
        });
    })

    it('Verifikasi section Ragam ulos: Batak Mandailing', () => {
        cy.get('#btn-ragamUlos-BatakMandailing').click()
        cy.get('#label-asal-ulos').should('have.text', 'Batak Mandailing');

        // cy.get('#btn-filter').click()
        // cy.get('#label-batakMandailing').click()
        // cy.get('#btn-terapkan').click()
        cy.wait(3000)
        cy.get('#ulos-asal').each((element) => {
            cy.wrap(element).should(($p) => {
                const text = $p.text().trim();
                expect(text).to.equal('Batak Mandailing');
            });
        });
    })

    it('Verifikasi section Ragam ulos: Batak Karo', () => {
        cy.get('#btn-ragamUlos-BatakKaro').click()
        cy.get('#label-asal-ulos').should('have.text', 'Batak Karo');

        // cy.get('#btn-filter').click()
        // cy.get('#label-batakKaro').click()
        // cy.get('#btn-terapkan').click()
        cy.wait(3000)
        cy.get('#ulos-asal').each((element) => {
            cy.wrap(element).should(($p) => {
                const text = $p.text().trim();
                expect(text).to.equal('Batak Karo');
            });
        });
    })

    it('Verifikasi section Ragam ulos: Batak Angokola', () => {
        cy.get('#btn-ragamUlos-BatakAngkola').click()
        cy.get('#label-asal-ulos').should('have.text', 'Batak Angkola');

        // cy.get('#btn-filter').click()
        // cy.get('#label-batakAngkola').click()
        // cy.get('#btn-terapkan').click()
        cy.wait(3000)
        cy.get('#ulos-asal').each((element) => {
            cy.wrap(element).should(($p) => {
                const text = $p.text().trim();
                expect(text).to.equal('Batak Angkola');
            });
        });
    })

    it('Verifikasi section video dapat dimainkan oleh pengguna', () => {
        // Memeriksa apakah elemen video ada
        cy.get('#video1').should('exist');

        // Memeriksa apakah video dapat dimainkan
        cy.get('#video1').should('have.prop', 'paused', false);
    })

    it('Verifikasi section Ulos Tradisional', () => {
        // Memastikan ada gambar pada elemen
        cy.get('#gambar-ulos-tradisional').should('be.visible');
        // Memastikan teks ada
        cy.get('#text-ulosTradisional').should('be.visible').should('contain', 'Ulos Tradisional');
    })

    it('Verifikasi section Ulos Pengembangan', () => {
        // Memastikan ada gambar pada elemen
        cy.get('#gambar-ulos-pengembangan').should('be.visible');
        // Memastikan teks ada
        cy.get('#text-ulosPengembangan').should('be.visible').should('contain', 'Ulos Pengembangan');
    })

    // it('', () => {

    // })

    // it('', () => {

    // })

    // it('', () => {

    // })

    // it('', () => {

    // })
})