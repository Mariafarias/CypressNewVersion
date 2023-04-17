import loginLocators from './elements/loginLocators';
const login_loc = new loginLocators

// Fluxo Feliz!!

Cypress.Commands.add('acessarPaginaLogin', () => { 
    cy.visit('/user/login', {failOnStatusCode: false})
})

Cypress.Commands.add('inserirEmail', () => { 
    cy.xpath(login_loc.FIELD_EMAIL()).type('guilacovolan@gmail.com')
    
   
})

Cypress.Commands.add('inserirSenha', () => { 
    cy.xpath(login_loc.FIELD_SENHA()).type('123456')

})

Cypress.Commands.add('clicarnobotaoentrar', () => { 
    cy.xpath(login_loc.BTN_ENTRAR()).click()
   
})