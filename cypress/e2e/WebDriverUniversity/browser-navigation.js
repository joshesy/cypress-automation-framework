/// <reference types="cypress" />

describe('Validate webdriveruni homepage links', () => {
    it('Confirm link redirect to the correct pages', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        //cy.reload(true) //reload without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        
        //login portal
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        //To Do List
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    })
})