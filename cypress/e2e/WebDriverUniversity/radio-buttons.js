/// <reference types="cypress" />

describe('Verify Radio Buttons via webdriveruni', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })
    
    it('Check specific radio buttons', () => {
        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
        .should('be.checked')
        cy.get('#radio-buttons').find('[type="radio"]').first()
        .should('not.be.checked')
    })

    it('Validate the states of specific radio buttons', () => {
        // cy.get('#radio-buttons-selected-disabled').find('[type="radio"]').first().check()
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="pumpkin"]').should('be.checked')

        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')
    })
})