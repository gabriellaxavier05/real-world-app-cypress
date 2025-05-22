import userData from '../../fixtures/userData.json' // importação do arquivo JSON com dados do usuário

describe('Testes de Login', () => {
    const seletoresLogin = {
        username: "[name='username']",
        password: "[name='password']",
        checkboxRemember: ".MuiCheckbox-root",
        btnSignIn: "[type='submit']",
        abasHome: ".MuiTab-root",
        alertaErroLogin: "[role='alert']",
    }

    it.only('Login com sucesso', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(seletoresLogin.username).type(userData.usuarioSucesso.username)
        cy.get(seletoresLogin.password).type(userData.usuarioSucesso.password)
        cy.get(seletoresLogin.checkboxRemember).click({force: true})
        cy.get(seletoresLogin.btnSignIn).click()
        cy.get(seletoresLogin.abasHome).eq(0).should('contain', 'Everyone')
    });

    it('Login com credenciais inválidas', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(seletoresLogin.username).type(userData.usuarioErro.username)
        cy.get(seletoresLogin.password).type(userData.usuarioErro.password)
        cy.get(seletoresLogin.checkboxRemember).click({force: true})
        cy.get(seletoresLogin.btnSignIn).click()
        cy.get(seletoresLogin.alertaErroLogin)
    });
});