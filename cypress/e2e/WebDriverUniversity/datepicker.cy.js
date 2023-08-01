/// <reference types="Cypress" />

describe("Test Datepicker via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
        cy.get('#datepicker').click()
    })

    it('Select date from the date picker', () => {
        /*
        Basically,  getting the current date and getting future dates by adding **+ n** to the get current date.
        var future____ is confusing when read because it does not really get the future____.
        All is based on the **+ n** for the 'future' date
        */

        let date = new Date()

        //sete date to current date + 360 days
        date.setDate(date.getDate() + 360) //get current day //without + 360

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", { month: "long" })
        var futureDay = date.getDate()

        cy.log("Future date to select: " + futureYear + " " + futureMonth + " " + futureDay)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
                .then(currentDate => {
                    if (!currentDate.text().includes(futureYear)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
                .then(() => {
                    cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
                        .then(currentDate => {
                            if (!currentDate.text().includes(futureMonth)) {
                                cy.get('.next').first().click()
                                selectMonthAndYear()
                            }
                        })
                })
        }

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()
        
    })
})
