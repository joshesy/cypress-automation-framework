/// <reference types="Cypress" />

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO"

describe('Test Contact Us form via WebdriverUni', () => {
  Cypress.config('defaultCommandTimeout', 20000)
  const homepage_PO = new HomePage_PO
  const contactUs_PO = new ContactUs_PO

  before(() => {
    cy.fixture('example.json').then((data) => {
      globalThis.data = data
    })
  })

  beforeEach(() => {
    // cy.visit('/Contact-Us/contactus.html')

    cy.viewport(1920, 1080)

    //POM
    homepage_PO.visitHomepage()
    homepage_PO.clickOn_ContactUs_Button()
    // cy.pause()
    cy.wait(5000)
  })

  it('Input via POM', () => {
    contactUs_PO.contactForm_Submission(data.first_name, data.last_name, data.email, data.body)
  })

  it('Input via fixtures', () => {
    cy.get('[name="first_name"]').type(data.first_name)
    cy.get('[name="last_name"]').type(data.last_name)
    cy.get('[name="email"]').type(data.email)
    cy.get('[name="message"]').type(data.body)
  })

  it('Input via fixtures while using alias', () => {
    cy.fixture('userDetails.json').as('user')
    cy.get('@user').then((user) => {
      // cy.get('[name="first_name"]').type(user.first_name)
      // cy.get('[name="last_name"]').type(user.last_name)
      // cy.get('[name="email"]').type(user.email)
      // cy.get('[name="message"]').type(user.body)
      cy.webdriverUni_ContactForm_Submission(user.first_name, user.last_name, user.email, user.body, "", "")
    })
  })

  it('Should be able to submit a successful submision via contact us form', () => {
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.webdriverUni_ContactForm_Submission(Cypress.env('first_name'), data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!')
    // cy.get('[name="first_name"]').type('Anna')
    // cy.get('[name="last_name"]').type('Williams')
    // cy.get('[name="email"]').type('fake@email.com')
    // cy.get('[name="message"]').type('This is a comment')
    // cy.contains('SUBMIT').click()
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    cy.url().should('include', 'contact-form-thank-you.html')
  })

  it('Should NOT be able to submit a successful submision via contact us form', () => {
    if (Cypress.isBrowser('firefox')) {
      //Added few codes for cross-browser testing
      //https://docs.cypress.io/guides/guides/cross-browser-testing#Running-Specific-Tests-by-Browser
      cy.get('[name="first_name"]').type('Anna')
      cy.get('[name="last_name"]').type('Williams')
      cy.get('[name="message"]').type('This is a comment')
      cy.contains('SUBMIT').click()
    } else {
      cy.get('[name="first_name"]').type('Anna')
      cy.get('[name="last_name"]').type('Williams')
      cy.get('[name="message"]').type('This is a comment')
      cy.contains('SUBMIT').click()
    }
  })

  it('Workaround to open page on existing page instead of new tab', () => {
    //multiple tabs is not supported by cypress
    cy.visit('https://webdriveruniversity.com/')
    //cy.get('#contact-us').click({force:true})

    //workaround
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
  })

})