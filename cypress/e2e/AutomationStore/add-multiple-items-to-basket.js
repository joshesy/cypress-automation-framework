/// <reference types="cypress" />

import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO"
import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO"

describe('Add multiple items to the basket', () => {
    
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO
    
    before(() => {
        cy.fixture('products.json').then((data) => {
            globalThis.data = data
        })
    })
    
    beforeEach(() => {
        // cy.visit('https://automationteststore.com/')
        autoStore_Homepage_PO.accessHomepage()
    })

    it('Add specific item to basekt', () => {
        // cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        autoStore_Homepage_PO.clickOn_HairCare_Link()
        autoStore_HairCare_PO.addHairCareProductsToBasket()
        // globalThis.data.productName.forEach((element) => {
        //     cy.addProductToBasket(element)
        // })
        cy.get('.block_7').click()
    })
})