describe('Verifikasi Home Page - End User', () => {

    //pre condition
    beforeEach(() => {
        cy.visit('http://127.0.0.1:1753/')
        cy.get('#navbar-Penenun').click()
        cy.contains('Alat Tenun Ulos').should('be.visible');
        cy.contains('Tiga jenis alat tenun yang digunakan penenun dengan tangan-tangan terampil untuk menghasilkan ulos yang bernilai tinggi').should('be.visible');
    });

    it('Verifikasi Section Penenun Gedongan', () => {
        //verifikasi ketika mouse diarahkan ke gambar penenun gedongan maka akan menampilkan text yang diharapkan
        cy.getById('gedongan')
            .trigger('mouseover', {
                force: true
            })
            .get('#text-gedongan')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Gedogan merupakan salah satu jenis alat tenun tradisional yang sudah sejak lama digunakan oleh para leluhur di berbagai daerah Indonesia dalam proses penenunan kain. Cara penggunaannya yaitu dengan memangku atau menggendong alat tenun sambil duduk di lantai.');
            });

        cy.get('#penenun-Gedongan > .bg-gradient-to-b').click()
        //verifikasi bahwa ketika penenun gedongan diclick maka akan menampilkan daftar dari penenun gedongan yang ada
        // Scroll sekali ke bawah
        cy.window().scrollTo('bottom');


        // Cek apakah tombol "Muat Lebih Banyak" ada
        cy.getById('btn-muatLebihBanyak').then(($button) => {
            if ($button.length === 0) {
                // Jika tombol tidak ada, verifikasi card penenun langsung
                // Verifikasi card penenun terdiri dari gambar, nama, dan umur
                cy.getById('card-penenun').should('exist').each(($card) => {
                    cy.wrap($card).within(() => {
                        // Verifikasi gambar
                        cy.get('#penenun-gambar').should('be.visible');

                        // Verifikasi nama
                        cy.get('#penenun-nama').should('be.visible')

                        // Verifikasi umur dengan angka
                        cy.get('#penenun-umur').should('be.visible')
                    });
                });
            } else {
                // Jika tombol ada, klik tombol "Muat Lebih Banyak"
                cy.get('#btn-muatLebihBanyak').click();

                // Verifikasi card penenun bertambah setelah mengklik tombol "Muat Lebih Banyak"
                // Verifikasi card penenun terdiri dari gambar, nama, dan umur
                cy.getById('card-penenun').should('exist').each(($card) => {
                    cy.wrap($card).within(() => {
                        // Verifikasi gambar
                        cy.get('#penenun-gambar').should('be.visible');

                        // Verifikasi nama
                        cy.get('#penenun-nama').should('be.visible')

                        // Verifikasi umur dengan angka
                        cy.get('#penenun-umur').should('be.visible')
                    });
                });
            }
        });
    })

    it('Verifikasi Section Penenun Alat Tenun Bukan Mesin', () => {
        //verifikasi ketika mouse diarahkan ke gambar penenun gedongan maka akan menampilkan text yang diharapkan
        cy.getById('penenun-ATBM')
            .trigger('mouseover', {
                force: true
            })
            .get('#text-atbm')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Alat tenun bukan mesin (ATBM) merupakan alat untuk melakukan penenunan yang digerakkan oleh manusia. ATBM dapat dipergunakan sambil duduk maupun berdiri. Alat ini biasa digunakan dalam industri tekstil kecil dan tradisional.');
            });

        cy.get('#penenun-ATBM > .bg-gradient-to-b').click()
        //verifikasi bahwa ketika penenun gedongan diclick maka akan menampilkan daftar dari penenun gedongan yang ada
        // Scroll sekali ke bawah
        cy.window().scrollTo('bottom');
        cy.getById('card-penenun').should('exist').each(($card) => {
            cy.wrap($card).within(() => {
                // Verifikasi gambar
                cy.get('#penenun-gambar').should('be.visible');

                // Verifikasi nama
                cy.get('#penenun-nama').should('be.visible');

                // Verifikasi umur dengan angka
                cy.get('#penenun-umur').should('be.visible');
            });
        })
    });

    it('Verifikasi Section Penenun Alat Tenun Mesin', () => {
        //verifikasi ketika mouse diarahkan ke gambar penenun gedongan maka akan menampilkan text yang diharapkan
        cy.getById('penenun-ATM')
            .trigger('mouseover', {
                force: true
            })
            .get('#text-atm')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Alat tenun mesin (ATM) merupakan alat tenun yang dilengkapi dengan motor penggerak sehingga proses pengerjaan kain tenun menjadi relatif lebih cepat karena sepenuhnya dikerjakan oleh mesin.');
            });

        cy.get('#penenun-ATM > .bg-gradient-to-b').click()
        //verifikasi bahwa ketika penenun gedongan diclick maka akan menampilkan daftar dari penenun gedongan yang ada
        // Scroll sekali ke bawah
        cy.window().scrollTo('bottom');
        cy.getById('card-penenun').should('exist').each(($card) => {
            cy.wrap($card).within(() => {
                // Verifikasi gambar
                cy.get('#penenun-gambar').should('be.visible');

                // Verifikasi nama
                cy.get('#penenun-nama').should('be.visible');

                // Verifikasi umur dengan angka
                cy.get('#penenun-umur').should('be.visible');
            });
        })
    })
});