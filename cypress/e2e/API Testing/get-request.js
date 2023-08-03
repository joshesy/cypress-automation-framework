/// <reference types="cypress" />

describe('GET Request', () => {
    var result
    it('Validate status code of the /posts API', () => {
        result = cy.request("http://localhost:3000/posts")
        result.its("status").should("eq", 200)
    })

    it('Validate /posts API contains the correct keys and values', () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body[0]).has.property("title", "json-server")
            expect(body[0]).has.property("author", "typicode")

            body.forEach((item) => {
                expect(item).to.have.all.keys("id", "title", "author")
                cy.log("Author: " + item["author"] + " & Title: " + item["title"])
            })
        })
    })
})