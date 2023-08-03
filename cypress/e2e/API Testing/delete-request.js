/// <reference types="cypress" />

describe('Delete Request', () => {
    it('Delete a post using /posts API', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/3"
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})