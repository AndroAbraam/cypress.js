describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://login.qa.studio/');
    
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('Andranik@mail.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');

    
    

  })
})