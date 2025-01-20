const SESSAO_AUTOMOBILE = '#offer_automobile'

Cypress.Commands.add('entrarSessaoMobile', () => {
    cy.get(SESSAO_AUTOMOBILE).click()
})