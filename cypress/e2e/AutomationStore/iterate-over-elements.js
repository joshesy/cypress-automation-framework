/// <reference types="cypress" />

describe('Iterate over elements', () => {
     let index
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })

    it('Log information of all hair care products', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index: ' + index + " : " + $el.text())
        })
    })

    it('Add specific product to basket', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.selectProduct('Curls to straight Shampoo')
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')){
        //         cy.wrap($el).click()
        //     }
        // })
    })

    it('Add another specific product to basket', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.selectProduct('Eau Parfumee au The Vert Shampoo')
    })
})