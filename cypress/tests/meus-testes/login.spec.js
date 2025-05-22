describe('Testes de Login', () => {
    // objetos de seletores
    const seletoresLogin = {
        username: "[name='username']",
        password: "[name='password']",
        checkboxRemember: ".MuiCheckbox-root",
        btnSignIn: "[type='submit']",
        abasHome: ".MuiTab-root",
        alertaErroLogin: "[role='alert']",
    }


    it('Login com sucesso', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(seletoresLogin.username).type('Heath93')
        cy.get(seletoresLogin.password).type('s3cret')
        cy.get(seletoresLogin.checkboxRemember).click({force: true})
        cy.get(seletoresLogin.btnSignIn).click()
        cy.get(seletoresLogin.abasHome).eq(0).should('contain', 'Everyone')
    });

    it.only('Login com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(seletoresLogin.username).type('Heath30')
        cy.get(seletoresLogin.password).type('secreto')
        cy.get(seletoresLogin.checkboxRemember).click({force: true})
        cy.get(seletoresLogin.btnSignIn).click()
        cy.get(seletoresLogin.alertaErroLogin)
    });
});