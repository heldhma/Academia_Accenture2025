const EMAIL_INPUT = '#email';
const PHONE = '#phone';
const USERNAME = '#username';
const PASSWORD = '#password';
const CONFIRM_PASSWORD = '#confirmpassword';

Cypress.Commands.add('preencherDadosdoQuote', () => {
    cy.get(EMAIL_INPUT).type(Cypress.env('EMAIL_INPUT'))
    cy.get(PHONE).type(Cypress.env('PHONE'))
    cy.get(USERNAME).type(Cypress.env('USERNAME'))
    cy.get(PASSWORD).type(Cypress.env('PASSWORD'))
    cy.get(CONFIRM_PASSWORD).type(Cypress.env('CONFIRM_PASSWORD'))})
    