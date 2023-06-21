/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});


context('Funcionalidade Login', () =>{
    it('Deve fazer login com sucesso' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
    })

    it('Deve exibir mensagem de erro ao inserir usuario invalido' , () => {
        cy.get('#username').type('aluno@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'a senha fornecida para o e-mail aluno@teste.com está incorreta')
    })

    it('Deve exibir mensagem de erro ao inserir senha invalida' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    })
})