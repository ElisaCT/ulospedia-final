describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        // cy.visit('http://127.0.0.1:1753/sejarah-ulos');
        // cy.get('#navbar-Home').click()
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Request failed with status code 404')) {
                return false;
            }
        });
        cy.visit('http://127.0.0.1:1753');
    });

    describe('Home', () => {
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
            cy.url().should('eq', 'http://127.0.0.1:1753/sejarah-ulos');
        })

        it('Verifikasi section Lahir hidup dan Mati', () => {
            // Memastikan konten pada elemen "Lahir, hidup, dan mati" sesuai dengan yang diharapkan
            cy.get('#card-lahir-hidup-mati')
                .find('h4')
                .should('have.text', 'Lahir, hidup, dan mati');
            cy.get('#span-btn-sejarahUlos').click();
            cy.url().should('eq', 'http://127.0.0.1:1753/sejarah-ulos');

            // Memastikan tombol sejarah ulos aktif atau terlihat oleh pengguna
            cy.get('#segment-item-1').should('be.visible');

            cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');
            // Memastikan ada gambar pada elemen
            cy.get('#gambar-sejarah-ulos').should('exist');
        })

        it('Verifikasi section Fakta Menarik Ulos', () => {
            // Click on the "next-button"
            cy.get('#text-fakta-menarik').should('have.text', ' Temukan Fakta Menarik Ulos ');
            cy.get('#next-button').should('be.enabled')
            cy.get('#prev-button').should('be.enabled')
        })

        it('Verifikasi section Ragam ulos: Batak Toba', () => {
            //cy.get('#btn-ragamUlos-BatakToba').click()
            cy.get('#btn-ragamUlos-BatakToba').click()
            // cy.get('#navbar-GaleriUlos').click() 
            cy.get('#label-asal-ulos').should('have.text', 'Batak Toba');
            cy.get('#btn-filter').click()
            cy.get('#label-batakToba').click()
            cy.get('#btn-terapkan').click()
            cy.wait(3000)
            cy.get('#ulos-asal').each((element) => {
                cy.wrap(element).should(($p) => {
                    const text = $p.text().trim();
                    expect(text).to.equal('Batak Toba');
                });
            });
        })

        it('Verifikasi section video dapat dimainkan oleh pengguna', () => {
            cy.wait(3000)
            cy.scrollTo('bottom');
            cy.get('iframe[src="https://www.youtube.com/embed/Yb6H-XB6dDM"]').should('exist');
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
    })

    describe('Sejarah Ulos', () => {
        //pre condition
        beforeEach(() => {
            cy.get('#navbar-SejarahUlos').click()
        });
        it('Verifikasi Tab Sejarah Ulos', () => {
            cy.getByTestDataId('tab-btn-sejarah-ulos').should('be.visible').should('exist');
            cy.getById('text-sejarahUlos').should('be.visible').should('contain', 'Sejarah Ulos');

            // Memastikan ada gambar pada elemen
            cy.get('#gambar-sejarah-ulos').should('exist');

        })

        it('Verifikasi Tab Arti Ulos', () => {
            cy.getByTestDataId('tab-btn-arti-ulos').should('be.visible').should('exist').click();

            // Memastikan ada gambar pada elemen
            cy.get('#gambar-arti-ulos').should('be.visible');
            // Memastikan teks ada
            cy.getById('text-artiUlos').should('be.visible').should('contain', 'Arti Ulos');
        })

        it('Verifikasi Ulos di zaman modern', () => {

            cy.getByTestDataId('tab-btn-ulos-zaman-modern').should('be.visible').should('exist').click();

            // Memastikan ada gambar pada elemen
            cy.get('#gambar-ulos-modern').should('exist');

            // Memastikan teks judul ada dan sesuai
            cy.get('#text-ulosModern').should('contain', 'Ulos di zaman modern');

        })
    })


    describe('Penenun', () => {
        //pre condition
        beforeEach(() => {
            cy.get('#navbar-Penenun').click()
        });

        it('Verifikasi Section Penenun Gedongan', () => {
            cy.get('#navbar-Penenun')
            //verifikasi ketika mouse diarahkan ke gambar penenun gedongan maka akan menampilkan text yang diharapkan
            cy.getById('gedongan').trigger('mouseover', {
                force: true
            }).get('#text-gedongan').invoke('text').then((text) => {
                expect(text.trim()).to.equal('Gedogan merupakan salah satu jenis alat tenun tradisional yang sudah sejak lama digunakan oleh para leluhur di berbagai daerah Indonesia dalam proses penenunan kain. Cara penggunaannya yaitu dengan memangku atau menggendong alat tenun sambil duduk di lantai.');
            });

            cy.get('#penenun-Gedongan > .bg-gradient-to-b').click()
            //verifikasi bahwa ketika penenun gedongan diclick maka akan menampilkan daftar dari penenun gedongan yang ada
            // Scroll sekali ke bawah
            cy.getById('card-penenun').should('exist').each(($card) => {
                cy.wrap($card).within(() => {
                    cy.wait(2000)
                    // Verifikasi gambar
                    cy.get('#penenun-gambar').should('be.visible');

                    // Verifikasi nama
                    cy.get('#penenun-nama').should('be.visible')

                    // Verifikasi umur dengan angka
                    cy.get('#penenun-umur').should('be.visible')
                });
            });
        })

        it('Verifikasi halaman detail penenun', () => {
            cy.get('#penenun-Gedongan > .bg-gradient-to-b').click()
            cy.getById('card-penenun').eq(0).click()
            // Memastikan elemen nama penenun ditampilkan
            cy.get('#nama-penenun').should('be.visible');

            // Memastikan elemen teknik tenun penenun ditampilkan
            cy.get('#teknik-tenun-penenun').should('be.visible');

            // Memastikan elemen suku penenun ditampilkan
            cy.get('#suku-penenun').should('be.visible');

            // Memastikan elemen usia penenun ditampilkan
            cy.get('#usia-penenun').should('be.visible');

            // Memastikan elemen domisili penenun ditampilkan
            cy.get('#domisili-penenun').should('be.visible');

            // Memastikan elemen gambar penenun ditampilkan
            cy.get('#gambar-penenun').should('be.visible');

            // Memastikan elemen cerita penenun ditampilkan
            cy.get('#cerita-penenun').should('be.visible');
        });
    })
});