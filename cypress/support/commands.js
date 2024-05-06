    Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    const longText = 'Testar é a arte de explorar, descobrir e aprimorar a qualidade, um código por vez.'
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('Site')
    cy.get('#email').type('Test@site.com.br')
    cy.get('#phone').type('999335621')
    cy.get('#open-text-area').type(longText, {delay: 0 })
    cy.contains('button', 'Enviar').click()

})