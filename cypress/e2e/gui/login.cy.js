describe('Funcionalidade de Login', () => {
  it('Login Successfully', () => {
    cy.loginSuccess()

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it('Login Fail ', () => {
    cy.loginFail()
      
    cy.get('.flash-alert > span')
      .should('be.visible')
      .and('contain', 'Invalid Login or password.')
  });
})
