describe('Landing Page', () => {
    beforeEach( () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' })
        cy.wait(2000)
        cy.visit('http://localhost:3000/')
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('Should display error message to a user when the server is down', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 500,
        });
        cy.contains('Network Error - status 500');
    });

    it('Should display error message to user when the page is not found', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404,
        });
        cy.contains('Network Error - status 404');
    });

    it('Should have a title', () => {
        cy.contains('RANCID TOMATILLOS')
    })

    it('Should have a home button', () => {
        cy.get('button').contains('HOME')
    }) 
    
    it('Should have a search bar', () => {
        cy.get('input[placeholder="Search"]')
    })

    it('Should have a genre drop down menu with different genres displayed', () => {
        cy.get('button').contains('GENRE')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ACTION')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('ADVENTURE')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('HORROR')
        cy.get('.dropdown > .nav-btn').trigger('mouseover').get('.dropdown-content').contains('COMEDY')
    })

    it('Should display all movies on when a user first comes to the site', () => {
        cy.get('[alt="Money Plane movie poster"]')
        .should('be.visible')
        
        cy.get('[alt="Mulan movie poster"]')
        .should('be.visible')

        cy.get('[alt="Rogue movie poster"]')
        .should('be.visible')
    })

    it('Should be able to input a text and display a movie poster', () => {
        cy.get('input[name="search"]').type('Rogue')

        cy.get('[alt="Rogue movie poster"]')
        .should('be.visible')
    })  
    
    it('Should change the movies based on the search input', () => {
        cy.get('input[name="search"]').type('M')

        cy.get('[alt="Mulan movie poster"]')
        .should('be.visible')

        cy.get('[alt="Money Plane movie poster"]')
        .should('be.visible')
    })

    it('Should only show one movie poster if the search input matches the name', () => {
        cy.get('input[name="search"]').type('Mulan')

        cy.get('[alt="Mulan movie poster"]')
        .should('be.visible')
    })

    it('Should not show any movies if the user searches for a movie title that doesn"t exist', () => {
        cy.get('input[name="search"]').type('The Great')
        cy.get('div[class="movie-container"]').children().should('have.length', 0)
        // Check error message string
    })
    
    it('Should redisplay all movies when a user clicks home', () => {
        cy.get('input[name="search"]').type('Mulan')

        cy.get('[alt="Mulan movie poster"]')
        .should('be.visible')

        cy.get('button').contains('HOME').click()

        cy.get('[alt="Money Plane movie poster"]')
        .should('be.visible')
        
        cy.get('[alt="Mulan movie poster"]')
        .should('be.visible')

        cy.get('[alt="Rogue movie poster"]')
        .should('be.visible')
    })  
})