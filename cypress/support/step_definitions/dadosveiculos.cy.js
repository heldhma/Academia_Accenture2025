import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário esteja no portal da Tricentis', () => {
    cy.visit('/')
})

And('o usuário entre na sessão AutoMobile', () => {
    cy.entrarSessaoMobile()
})

When('o usuário preenche os campos da aba Enter Vehicle Data', () => {
    cy.preencherDadosVeiculo()
})

And('o usuário envia os dados', () => {
    cy.enviarDados()
})

And('o usuário preenche os campos da aba Enter Insurant Data', () => {
    cy.preencherDadosSegurador()
})


And('o usuário envia os dados do segurador', () => {
    cy.enviarDadosSegurador()
})

And('o usuário preenche os campos da aba Enter Product Data', () => {
    cy.preencherDadosProduto()
})

And('o usuário envia os dados do produto', () => {
    cy.enviarDadosProduto()
})

And('o usuário seleciona opção de preço', () => {
    cy.selecionarOpcaoPreco()
})

And('os dados do veículo são submetidos com sucesso', () => {
    cy.validarEnvio()
})

And('o usuário vai para a próxima página', () => {
    cy.navegarProximaPagina()
})

Then('preenche os dados do quote', () => {
    cy.preencherDadosdoQuote()
})