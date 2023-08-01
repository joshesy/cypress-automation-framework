/// <reference types="cypress" />

describe('Alias and Invoke', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })

    it('Validate a specific hair care product', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail') // invoke is cypress method to extract text property
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', "Seaweed Conditioner")
    })

    it('Validate Product Thumbnail', () => {
        cy.get('.thumbnail').as('itemThumbnail').its('length').should('eq', 16) // should('have.length', 16)
        //cy.get('.thumbnail > .pricetag > .productcart').eq(0).should('have.title', 'Add to Cart')
        cy.get('@itemThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only('Calculate total of normal and sale products', () => {
        cy.get('.thumbnail').as('itemThumbnail')
        // cy.get('@itemThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('@itemThumbnail').find('.oneprice').invoke('text').as('nonSale_itemPrice')
        cy.get('@itemThumbnail').find('.pricenew').invoke('text').as('Sale_itemPrice')
        
        var itemsTotalPrice = 0
        cy.get('@nonSale_itemPrice').then($linkText => {
            var nonSale_totalPrice = 0
            var itemPrice = $linkText.split('$')
            for(var i=0; i<itemPrice.length; i++){
                cy.log(itemPrice[i])
                nonSale_totalPrice += Number(itemPrice[i])
            }
            itemsTotalPrice += nonSale_totalPrice
            cy.log("Non sale price total: " + nonSale_totalPrice)
        })
        cy.get('@Sale_itemPrice').then($linkText => {
            var Sale_totalPrice = 0
            var saleItemPrice = $linkText.split('$')
            for(var i=0; i<saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                Sale_totalPrice += Number(saleItemPrice[i])
            }
            itemsTotalPrice += Sale_totalPrice
            cy.log("Sale price total: " + Sale_totalPrice)
        })
        .then(() => {
            cy.log('Total Items Price: '+ itemsTotalPrice)
            expect(itemsTotalPrice).to.equal(660.5)
        })
    })
})
