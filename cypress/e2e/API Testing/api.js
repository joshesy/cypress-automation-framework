/// <reference types="cypress" />

describe('POST, GET, UPDATE, DELETE request', () => {

    it('Create a new comment using /comments API', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/comments",
            body: {
                body: "Sample comment",
                postId: 2
            }
        }).then(response => {
            expect(response.status).to.eq(201)
        })
    })

    it('Validate /posts API contains the correct keys and values', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/comments",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[1]).has.property("body", "Sample comment")
            expect(body[1]).has.property("postId", 2)

            body.forEach((item) => {
                expect(item).to.have.all.keys("id", "body", "postId")
                cy.log("Post ID: " + item["postId"] + " & Comment " + item["body"])
            })
        })
    })

    it('Update an existing comment using /comments API', () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/comments/2",
            body: {
                title: "updated title",
                author: "updated author"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it('Delete a comment using /comments API', () => {
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/comments/2"
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })
})