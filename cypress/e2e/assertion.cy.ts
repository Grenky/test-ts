


it('learning assertins', function() {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.enabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

    //Explicit assertions
    //expect
    expect(false).to.be.false


    let name = "Clown";
    expect(name).to.be.equal('Clown')


    //assert

    assert.equal(4, 4, 'Not equal')
    assert.strictEqual(4, 4, 'Not strictly equal')
 
})