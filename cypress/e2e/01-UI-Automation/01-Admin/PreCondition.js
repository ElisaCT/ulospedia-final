export const visitLoginPage = () => {
    cy.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Cannot read properties of undefined')) {
            return false;
        }
    });
    cy.visit('http://127.0.0.1:1753/admin/login');
}
export const Login = () => {
    visitLoginPage()
    cy.get('#username-address-icon').type('rewina123');
    cy.get('#password').type('12345');
    cy.get('#btn-submit').click();
    cy.wait(1000);
    cy.get('#ulospedia-logo').should('be.visible');
}

export const LoginAndGoToPenenunPage = () => {
    Login()
    cy.get('#sidebar-penenun').click();
    cy.wait(1000);
}

export const LoginAndGoToUlosPage = () => {
    Login()
    cy.wait(1000);
    cy.get('#sidebar-ulos').click();
}

export const LoginAndGoToGenerateMotifPage = () => {
    Login()
    cy.wait(1000);
    cy.get('#sidebar-generate-motif').click()
}

export const uploadUlosImage = () => {
    cy.get('#btn-tambah-ulos').click();
    //stepper 1: menambahkan data gambar ulos
    cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
    cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
    cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');

    cy.get('#btn-selanjutnya').click()
}

export const addUlosInformation = () => {
    cy.get('#ulos-name').type('Ulos Harungguan')
    cy.get('#dropdown-suku-ulos').select('Batak Toba')
    cy.get('#checkbox-merah').click()
    cy.get('#jenis-ulos-tradisional').check();
    cy.get('#ulos-location').type('Samosir')
    cy.get('#ulos-legth').type('122')
    cy.get('#ulos-width').type('89')
    cy.get('#dropdown-teknik-tenun').select('Teknik Ikat Lungsi');
    cy.get('#ulos-meaning').type('Ulos Harungguan disebut sebagai “Raja” Ulos di Tanah Tapanuli karena di masa lampau hanya dipakai oleh Raja dan kalangan terpandang')
    cy.get('#ulos-function').type('Ulos berarti kain dalam bahasa Batak Toba.')
    cy.get('#btn-selanjutnya').click()
}


export const cariGambarUlos = () => {
    cy.get('#field-cari-ulos').type('test_Ulos Harungguan')
    cy.get('#ulos-name').click()
}