/// <reference types="cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)
    })
});

    it.only('Deve fazer cadastro de faturamento com sucesso - usando dados ', () => {
       //cadastro endereço
        EnderecoPage.editarEnderecoFaturamento('Alex', 'Pinheiro', 'Empresa X', 'Brasil', 'Avenda Brasil', '500', 'Campinas', 'São Paulo', '13000000', '1999885544', 'teste456@teste.com.br')
            /*dadosEndereco[1].nome,
            dadosEndereco[1].sobrenomenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,)*/
        
    });
});