#utf-8
#language: pt

Funcionalidade: Preencher os dados 

  Cenário: Usuário preenche corretamente os dados do veículo
    Dado que o usuário esteja no portal da Tricentis
    E o usuário entre na sessão AutoMobile
    Quando o usuário preenche os campos da aba Enter Vehicle Data
    E o usuário envia os dados
    E o usuário preenche os campos da aba Enter Insurant Data
    E o usuário envia os dados do segurador
    E o usuário preenche os campos da aba Enter Product Data
    E o usuário envia os dados do produto
    E o usuário seleciona opção de preço
    E os dados do veículo são submetidos com sucesso
    E o usuário vai para a próxima página
    Então preenche os dados do quote
    