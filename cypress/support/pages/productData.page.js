const START_DATE = '#startdate'
const INSURANCE_SUM = '#insurancesum'
const MERIT_RATING = '#meritrating'
const DAMAGE_INSURANCE = '#damageinsurance'
const OPITIONAL_PRODUCTS = 'input[type="checkbox"]'
const COURTESY_CAR = '#courtesycar'
const BTN_NEXT3 = '#nextselectpriceoption'

Cypress.Commands.add('preencherDadosProduto', () => {
    cy.get(START_DATE).type('04/20/2025')
    cy.get(INSURANCE_SUM).select('20.000.000,00')
    cy.get(MERIT_RATING).select('Bonus 2')
    cy.get(DAMAGE_INSURANCE).select('Full Coverage')
    cy.get(OPITIONAL_PRODUCTS).check({ force: true })
    cy.get(COURTESY_CAR).select('Yes')
})

Cypress.Commands.add('enviarDadosProduto', () => {
    cy.get(BTN_NEXT3).click()
})