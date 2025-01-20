const FIRST_NAME = '#firstname'
const LAST_NAME = '#lastname'
const DATA_NASC = '#birthdate'
const COUNTRY = '#country'
const ZIPCODE = '#zipcode'
const OCCUPATION = '#occupation'
const HOBBIES = 'input[type="checkbox"]'
const BTN_NEXT2 = '#nextenterproductdata'

Cypress.Commands.add('preencherDadosSegurador', () => {
    cy.get(FIRST_NAME).type(Cypress.env('FIRST_NAME'))
    cy.get(LAST_NAME).type(Cypress.env('LAST_NAME'))
    cy.get(DATA_NASC).type(Cypress.env('DATA_NASC'))
    cy.get(COUNTRY).select(Cypress.env('COUNTRY'))
    cy.get(ZIPCODE).type(Cypress.env('ZIPCODE'))
    cy.get(OCCUPATION).select(Cypress.env('OCCUPATION'))
    cy.get(HOBBIES).check(Cypress.env('HOBBIES'), { force: true })
})

Cypress.Commands.add('enviarDadosSegurador', () => {
    cy.get(BTN_NEXT2).click()
})
