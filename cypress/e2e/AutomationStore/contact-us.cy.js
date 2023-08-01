/// <reference types="Cypress" />

describe('Test Conatct Us form via WebdriverUni', () => {

  beforeEach(() => {
    cy.visit('https://www.automationteststore.com/')
  })

  it('Should be able to submit a successful submision via contact us form', {
    retries: {
      runMode: 0,
      openMode: 2
    }
  }, () => {
    //cy.xpath('//a[contains(@href, "contact")]').click()
    cy.get('a[href$="contact"]2323').click()
      .then((txtBtn) => {
        cy.log(txtBtn.text())
      })
    cy.get('#ContactUsFrm_first_name').type('Williams')
    cy.get('#ContactUsFrm_email').type('fake@email.com')
    cy.get('#ContactUsFrm_enquiry').type('This is a comment')
    cy.get('button[title="Submit"]').click()
    //cy.hash().should('eq', 'index.php?rt=content/contact/success')
    cy.xpath('//p[contains(text(), "successfully")]').contains('Your enquiry has been successfully sent to the store owner!')
  })
})