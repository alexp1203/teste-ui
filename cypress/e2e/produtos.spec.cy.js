/// <reference types="cypress" />

describe('Funcionalidade Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um item da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(5)
        .contains('Abominable Hoodie')
        .click()
    });

    it('Deve adicionar o produto ao carrinho', () => {
        var quantidade = 5
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')


    });
});

//19/06 11min aula 4 listas e variaveis 