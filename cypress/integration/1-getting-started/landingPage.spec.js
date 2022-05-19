describe('Landing Page', () => {

    beforeEach( () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' })
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

    it('Should change the movies based on the search input', () => {

    })

    it('Should have a search bar', () => {
        cy.get('input[placeholder="Search"]')
    })

    it('Should be able to input a text and display a movie poster', () => {
        cy.get('input[name="search"]').type('Rogue')

        cy.get('[alt="Rogue movie poster"]')
        .should('be.visible')
    })
})