/// <reference types="cypress" />

describe('UPDATE Request', () => {

    it('Update an existing post using /posts API', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                title: "updated title",
                author: "updated author"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })

})