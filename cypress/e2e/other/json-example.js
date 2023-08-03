/// <reference types="cypress" />

describe('JSON Object', () => {
    it('Json Obect Examples', () => {
        const exampleOject = {"key": "Tim", "keys": "Jones"}

        cy.log(exampleOject["key"])
        cy.log(exampleOject["keys"])
        cy.log(exampleOject.keys)
    })
})