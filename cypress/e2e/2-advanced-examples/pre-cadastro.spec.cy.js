/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
const { it } = require('mocha');

describe('Funcionalidade Pré cadastro', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar o pre-cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('Tes%te22@15s')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.internet.userName())
        cy.get('#account_last_name').type('da Silva')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'sucesso')
    });

    it.only('Deve completar o pre cadastro com sucesso utilizando os comandos customizados', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha@fort&', 'Alex', 'Teste')
        
    });
});