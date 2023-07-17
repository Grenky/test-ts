

it('google test', function() {
    cy.visit('https://google.com')
    cy.get('[name="q"]').type('Automation step by step{enter}')
    cy.contains('Відео').click()
})