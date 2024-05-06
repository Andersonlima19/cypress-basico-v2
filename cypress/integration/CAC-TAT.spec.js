/// <reference types="Cypress" />

describe('Central de atendimento ao cliente TAT', function(){
    beforeEach(function(){
    cy.visit('./src/index.html')  
})

 it('Verificar o título da aplicação', function() {
     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

})

 it('Preencher os campos obrigatórios e envia o formulário', function(){
    const longText = 'Testar é a arte de explorar, descobrir e aprimorar a qualidade, um código por vez.'
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Site')
    cy.get('#email').type('Test@site.com.br')
    cy.get('#phone').type('999335621')
    cy.get('#open-text-area').type(longText, {delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
})

it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Site')
    cy.get('#email').type('Test@sitecombr')
    cy.get('#phone').type('999335621')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')

})

it('Validação de Campo Numérico - Campo Vazio', function(){
    cy.get('#phone').type('abcd').should('have.value','')
    
})

it 

it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Site')
    cy.get('#email').type('Test@sitecom.br')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
})

it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    cy.get('#firstName').type('Teste').should('have.value', 'Teste').clear().should('have.value','')
    cy.get('#lastName').type('Site').should('have.value', 'Site').clear().should('have.value','')
    cy.get('#email').type('Test@sitecom.br').should('have.value', 'Test@sitecom.br').clear().should('have.value','')
    cy.get('#phone').type('999335621').should('have.value', '999335621').clear().should('have.value','')

})
it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')

})

it('envia o formuário com sucesso usando um comando customizado', function(){
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')




})

it('seleciona um produto (YouTube) por seu texto', function(){
    cy.get('#product').select('YouTube')
    .should('have.value', 'youtube')
    

})

it('seleciona um produto (Mentoria) por seu valor (value)', function(){
    cy.get('#product').select('mentoria')
    .should('have.value', 'mentoria')


})

it('seleciona um produto (Blog) por seu índice', function(){
    cy.get('#product').select(1)
    .should('have.value', 'blog')

})

it('marca o tipo de atendimento "Feedback"', function(){
   const typeService = 'feedback'
   cy.get('input[value="feedback"]').check()
   .should('have.value', typeService)


})

it('marca cada tipo de atendimento', function(){
  cy.get('input[type="radio"]').should('have.length', 3).each(function($radio){
  cy.wrap($radio).check()
  cy.wrap($radio).should('be.checked')

})

  })
  
  it('marca ambos checkboxes, depois desmarca o último', function(){
     cy.get('input[type="checkbox"]').check()
     .should('be.checked')
     .last().uncheck().should('not.be.checked')


  })

  it('seleciona um arquivo da pasta fixtures', function(){
    cy.get('input[type="file"]#file-upload').should('not.have.value')
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')

    })

})

it('seleciona um arquivo simulando um drag-and-drop', function(){
    cy.get('input[type="file"]#file-upload').should('not.have.value')
    .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(function($input){
    expect($input[0].files[0].name).to.equal('example.json')

    })

})

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
  cy.fixture('example.json').as('samplefile')
  cy.get('input[type="file"]').selectFile('@samplefile')
  .should(function($input){
   expect($input[0].files[0].name).to.equal('example.json')

})
 
 })

 it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.get('#privacy a').should('have.attr', 'target', '_blank')

 })
 it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.contains('Talking About Testing').should('be.visible')

    
 })


})