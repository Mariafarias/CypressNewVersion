describe('Testando pagina da fixpay', () => {
// Login sem informar a senha!

it.only('Test1 - Login sem senha', () => {
    cy.acessarPaginaLogin()

    cy.inserirEmail()
    cy.clicarnobotaoentrar()
    cy.contains('Por favor, entre com a sua senha!').should('be.visible')

})  

// Login sem informa o e-mail!
it.only('Test1 - Login sem e-mail', () => {
    cy.acessarPaginaLogin()

    cy.inserirSenha()
    cy.clicarnobotaoentrar()
    cy.contains('Por favor, entre com seu email!').should('be.visible')

})

// Fluxo feliz!
it.only('Test1 - Login com sucesso', () => {
    cy.acessarPaginaLogin()

    cy.inserirEmail()
    cy.inserirSenha()
    cy.clicarnobotaoentrar().should('have.have.visible', 'https://portal.fixpay.com.br:9443/app/dashboard')


})  


})
