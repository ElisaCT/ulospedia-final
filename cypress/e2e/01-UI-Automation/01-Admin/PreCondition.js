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
    cy.get('#btn-login').click();
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
    cy.get('sidebar-generate-motif').click()
}

export const uploadUlosImage = () =>{
    LoginAndGoToUlosPage()
    cy.get('#btn-tambah-ulos').click();
    //stepper 1: menambahkan data gambar ulos
    cy.get('form').find('input[type="file"]').eq(0).attachFile('ulosUtuh1.jpeg');
    cy.get('form').find('input[type="file"]').eq(1).attachFile('potonganUlos1.jpeg');
    cy.get('form').find('input[type="file"]').eq(2).attachFile('motifUlos1.jpeg');

    cy.get('#btn-selanjutnya').click()
}