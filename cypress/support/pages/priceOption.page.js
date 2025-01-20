const PRICE_TAG = 'th.group';
const ICON_OK = '.idealforms-field-radio .icon'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add('selecionarOpcaoPreco', () => {
    cy.get(PRICE_TAG).find('input[value="Platinum"]').check({force:true})
})

Cypress.Commands.add('validarEnvio', () => {
    //dados foram preenchidos com sucesso
    cy.get(ICON_OK).should('be.visible')
})

Cypress.Commands.add('navegarProximaPagina', () => {
    cy.get(BTN_NEXT).click()
})