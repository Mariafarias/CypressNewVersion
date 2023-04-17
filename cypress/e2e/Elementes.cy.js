

describe('Testando elementos', () => {
  it('Test1 -Interagir com texto', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#resultado')
    .should('contain', 'Status')
    .and('have.not.text', 'Status invalido')
  })

  it('Test2 -Interagir com Link', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

})

it('Test3- Interagir com input', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
  cy.get('#formNome').type ('Maria Ines', {Delay: 1000})
  .should('have.value', 'Maria Ines')

  cy.get('[data-cy="dataSobrenome"]').type('Farias')
  .should('have.value', 'Farias')
})

it('Test4- Interagir com radio buton', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
  cy.get('#formSexoMasc').click()
  .should('be.checked')

  cy.get('#formSexoFem')
  .should('not.be.checked')
  
  
})

it('Test5- Interagir com combo box', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
  cy.get('[data-test="dataEscolaridade"]')
  .select('Superior')
  .should('have.value', 'superior')

 
})
it('Test6- Interagir com chek box', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
  cy.get('#formComidaCarne').click()
  .should('be.checked')

  cy.get('#formComidaFrango')
  .should('not.be.checked')

  cy.get('#formComidaPizza')
  .should('not.be.checked')

  cy.get('#formComidaVegetariana')
  .should('not.be.checked')



})

it('Test7 -Interagir com texto. Com xpaph', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
  cy.xpath("//*[contains(text(),'Status: Nao')]")
  .should('contain', 'Status')
  .and('have.not.text', 'Status invalido')

})

})
