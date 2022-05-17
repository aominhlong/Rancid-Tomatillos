describe('Landing Page', () => {

    beforeEach( () => {
        cy.fixture('./MovieData.json').as('MovieData')
        cy.visit('http://localhost:3000/')
    })

    it('Should have a title', () => {
        cy.contains('RANCID TOMATILLOS')
    })

    it('Should have a home button', () => {
        cy.get('button').contains('HOME')
    }) 

    it('Should have a genre drop down menu with different genres displayed', () => {
        cy.get('button').contains('GENRE')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ACTION')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ADVENTURE')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('HORROR')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('COMEDY')
    })

})