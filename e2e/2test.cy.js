describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://login.qa.studio/');
    
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('Andranik@mail.ru');
    
    
    

  })
})