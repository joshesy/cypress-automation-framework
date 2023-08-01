/// <reference types="cypress" />

describe('Interact with dropdown lists via webdriveruni', () => {
    it('Select specific values via select dropdown lists', () => {
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('C#').contains('C#') //select and assert based on text value
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng') //select and assert based on value attr
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery') // select based on value attr and assert using text value
    })
    
    it('Test disabled dropdown', () => {
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#fruit-selects > [value="orange"]').should('be.disabled')
    })
})