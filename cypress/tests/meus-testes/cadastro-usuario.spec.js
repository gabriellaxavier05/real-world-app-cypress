
describe('Testes de Cadastro', () => {
    const seletoresCadastro = {
        linkCadastro: "[href='/signup']", // url do cadastro
        firtsNameCampo: "[name='firstName']",
        lastNameCampo: "[name='lastName']",
        usernameCampo: "[name='username']",
        passwordCampo: "[name='password']",
        confirmPasswordCampo: "[name='confirmPassword']",
        btnSignIn: "[type='submit']",
        txtPagLogin: "h1.MuiTypography-h5"
    }

    it('Cadastro com sucesso', () => {
        cy.visit('http://localhost:3000/signin')
        cy.get(seletoresCadastro.linkCadastro).click()
        cy.get('h1').should('contain', 'Sign Up') // Verifica se o título da página contém "Sign Up"
        cy.get(seletoresCadastro.firtsNameCampo).type('Lucas') // preenche o campo de nome
        cy.get(seletoresCadastro.lastNameCampo).type('Gadelha') // preenche o campo de sobrenome
        cy.get(seletoresCadastro.usernameCampo).type('lucasgadelha') // preenche o campo de nome de usuário
        cy.get(seletoresCadastro.passwordCampo).type('s3cret') // preenche o campo de senha
        cy.get(seletoresCadastro.confirmPasswordCampo).type('s3cret')
        cy.get(seletoresCadastro.btnSignIn).click() // clica no botão de cadastro
        cy.get(seletoresCadastro.txtPagLogin).should('contain', 'Sign in') // Verifica se o título da página contém "Sign In"
    });
});