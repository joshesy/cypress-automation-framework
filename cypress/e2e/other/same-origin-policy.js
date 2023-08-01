/// <reference types="cypress" />

describe('Cypress web security', () => {
    it('Validate visiting two different domains', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
    })

    it('Validate visiting two different domains using user actions', () => {
        //multiple tabs is not supported by cypress
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({ force: true })
    })

    it('Origin Command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/")
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/")
        })
    })
})