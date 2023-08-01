/// <reference types="cypress" />

describe('Test mouse actions', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    })

    it('Drag and drop', () => {
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    })

    it('Double Click', () => {
        cy.get('#double-click').trigger('dblclick')
        cy.get('#double-click').dblclick()
    })

    it('Hold Click', () => {
        cy.get('#click-box').trigger('mousedown', {which: 1})
        .then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
        .should('contain', 'Well done! keep holding that click now.....')
        .trigger('mouseup').should('contain', 'Dont release me!!!')
            .then(($element) => {
                // expect($element).to.have.css('background', 'tomato')
            })
    })
})