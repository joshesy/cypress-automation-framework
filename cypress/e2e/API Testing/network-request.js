/// <reference types="cypress" />

describe('Network Request', () => {

    let message = "Unable to find comment!"

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Get Request', () => {
        cy.intercept({
            method: "GET",
            url: "**/comments/*",
        }, {
            body: {
                postId: 1,
                id: 1,
                name: "test name 123",
                email: "sample@test.com",
                body: "Hello World"
            }
        }).as("getComment")

        cy.get('.network-btn').click()

        cy.wait("@getComment").its("response.statusCode").should("eq", 200)
    })

    it('Post Request', () => {
        cy.intercept("POST", "/comments").as("postComment")

        cy.get('.network-post').click()

        cy.wait("@postComment").should(({request, response}) => {
            console.log(request)
            expect(request.body).to.include("email")

            console.log(response)
            expect(response.body).to.have.property("name", "Using POST in cy.intercept()")

            expect(request.headers).to.have.property("content-type")
            // expect(request.headers).to.have.property("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36")
        })
    })

    it('Put Request', () => {
        //Listen for a PUT method with the URL
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        }, {
            statusCode: 404, //mock a 404 status code
            delay: 500,
            body: {
                error: message
                // id: 69,
                // name: "Juan",
                // email: "Sample@test.com",
                // body: "This should be changed"
            },
        }).as("putComment")

        cy.get('.network-put').click()

        cy.wait("@putComment").its("response.statusCode").should("eq", 404)

        cy.get(".network-put-comment").should("contain", message)
    })
})