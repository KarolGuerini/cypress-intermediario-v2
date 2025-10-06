
const performLogin = (user, password) => {
  cy.visit('/users/sign_in')
  cy.get("[data-qa-selector='login_field']").type(user)
  cy.get("[data-qa-selector='password_field']").type(password, { log: false })
  cy.get("[data-qa-selector='sign_in_button']").click()
}

Cypress.Commands.add('loginSuccess', () => {
  performLogin(Cypress.env('user_name'), Cypress.env('user_password'))
})

Cypress.Commands.add('loginFail', () => {
  performLogin(Cypress.env('user_name'), Cypress.env('user_password_fail'))
})
