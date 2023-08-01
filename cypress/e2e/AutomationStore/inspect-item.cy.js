/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of comamnds', () => {
    var index = 0;
    beforeEach(() => {
        cy.visit('https://automationteststore.com/')
    })

    it('Click on the first item using item header', () => {
        
    })

    it.only('Click on the first item using item text', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        .then((itemHeaderText) => {
            console.log('Selected the following item: '+itemHeaderText.text())
        })
    })

    it('Click on the first item using index', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})