describe('Details view page', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/')
        cy.get('.movie-container > div').eq(1).click();
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', { 'fixture: MulanDetails' })
    })

    it('Should visit movie details page', () => {
        cy.get('div')
    })


    // it('Should have a title', () => {
    //     cy.contains('RANCID TOMATILLOS')
    // })

    // it('Should have a home button', () => {
    //     cy.get('button').contains('HOME')
    // }) 

    // it('Should have a genre drop down menu with different genres displayed', () => {
    //     cy.get('button').contains('GENRE')
    //     cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ACTION')
    //     cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ADVENTURE')
    //     cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('HORROR')
    //     cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('COMEDY')
    // })

    // it('Should be able to input a text and display a movie poster', () => {
    //     cy.get('input[name="search"]')
    //     .type('Rogue')

    //     cy.get('[alt="Rogue movie poster"]')
    //     .should('be.visible')
    // })
})