describe('DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com')
  })

  it('searches by typing and pressing ENTER', () => {
    cy.get('#searchbox_input')
      .should('be.visible')
      .type('Cypress.io{enter}')
    cy.wait(6000)
    cy.get('#react-layout')
      .should('contain', 'cypress.io')
  })

  it('searches by typing and clicking the magnifying glass button', () => {
    cy.get('#searchbox_input')
      .should('be.visible')
      .type('Cypress.io')
    cy.get('[type="submit"]')
      .should('be.visible')
      .click()
    cy.wait(6000)
    cy.get('#react-layout')
      .should('contain', 'cypress.io')
  })
})