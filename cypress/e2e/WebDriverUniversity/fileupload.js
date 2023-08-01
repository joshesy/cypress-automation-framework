/// <reference types="Cypress" />

describe("Test File Upload via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })

    it('Upload missing file', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq("You need to select a file to upload!")
        })
    })

    it('Upload a file', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq("Your file has now been uploaded!")
        })
    })


})
