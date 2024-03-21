describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('Andranik@mail.ru');
    cy.get('#pass').type('jkhgshfdq');
    cy.get('#loginButton').click();
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    

  })
})