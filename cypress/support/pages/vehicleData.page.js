const CAMPO_MAKE ='#make'
const CAMPO_ENG_PERFORMANCE ='#engineperformance'
const CAMPO_DATE_MANUFACTURE ='#dateofmanufacture'
const CAMPO_NUMBER_SEATS ='#numberofseats'
const CAMPO_FUEL_TYPE ='#fuel'
const CAMPO_LIST_PRICE ='#listprice'
const CAMPO_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('preencherDadosVeiculo', () => {
    cy.get(CAMPO_MAKE).select('Toyota')
    cy.get(CAMPO_ENG_PERFORMANCE).type('120')
    cy.get(CAMPO_DATE_MANUFACTURE).type('01/01/2020')
    cy.get(CAMPO_NUMBER_SEATS).select('5')
    cy.get(CAMPO_FUEL_TYPE).select('Petrol')
    cy.get(CAMPO_LIST_PRICE).type('42000')
    cy.get(CAMPO_ANNUAL_MILEAGE).type('30000')
})

Cypress.Commands.add('enviarDados', () => {
    cy.get(BTN_NEXT).click()
})
