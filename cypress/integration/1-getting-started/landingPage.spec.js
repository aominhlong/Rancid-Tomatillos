describe('Landing Page', () => {
    beforeEach( () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'MovieData' });
        cy.wait(2000);
        cy.visit('http://localhost:3000/');
    })

    it('Should load landing page URL', () => {
        cy.url().should('eq', 'http://localhost:3000/');
    })

    it('Should display error message to a user when the server is down', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 500,
        });
        cy.wait(8000)
        cy.contains('Network Error - status 500');
    });

    it('Should display error message to user when the page is not found', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            statusCode: 404,
        });
        cy.wait(4000)
        cy.contains('Network Error - status 404');
    });

    it('Should have a title', () => {
        cy.contains('RANCID TOMATILLOS');
    })

    it('Should have a home button', () => {
        cy.get('button').contains('HOME');
    }) 
    
    it('Should have a search bar', () => {
        cy.get('input[placeholder="Search"]');
    })

    it('Should display all movies on when a user first comes to the site', () => {
        cy.get('[alt="Money Plane movie poster."]')
        .should('be.visible');
        
        cy.get('[alt="Mulan movie poster."]')
        .should('be.visible');

        cy.get('[alt="Rogue movie poster."]')
        .should('be.visible');
    })

    it('Should be able to input a text and display a movie poster', () => {
        cy.get('input[name="search"]').type('Rogue');

        cy.get('[alt="Rogue movie poster."]')
        .should('be.visible');
    })  
    
    it('Should change the movies based on the search input', () => {
        cy.get('input[name="search"]').type('M');

        cy.get('[alt="Mulan movie poster."]')
        .should('be.visible');

        cy.get('[alt="Money Plane movie poster."]')
        .should('be.visible');
    })

    it('Should start with a clear nav search bar on page load', () => {
        cy.get('input[name="search"]').should('have.value', '');
    })

    it('Should clear nav search bar when movie poster clicked', () => {
        cy.get('input[name="search"]').type('Mulan');
        cy.get('[alt="Mulan movie poster."]').click();
        cy.get('input[name="search"]').should('have.value', '');
    })

    it('Should clear nav search bar when home button clicked', () => {
        cy.get('input[name="search"]').type('Mulan');
        cy.get('button').contains('HOME').click();
        cy.get('input[name="search"]').should('have.value', '');
    })

    it('Should only show one movie poster if the search input matches the name', () => {
        cy.get('input[name="search"]').type('Mulan');
        cy.get('[alt="Mulan movie poster."]').should('be.visible');
    })

    it('Should display an error message for non-existant search result', () => {
        cy.get('input[name="search"]').type('The Great Bagel');
        cy.contains('Sorry, The Great Bagel is not an available movie.');
    })
    
    it('Should redisplay all movies when a user clicks home', () => {
        cy.get('input[name="search"]').type('Mulan');

        cy.get('[alt="Mulan movie poster."]')
        .should('be.visible');

        cy.get('button').contains('HOME').click();

        cy.get('[alt="Money Plane movie poster."]')
        .should('be.visible');
        
        cy.get('[alt="Mulan movie poster."]')
        .should('be.visible');

        cy.get('[alt="Rogue movie poster."]')
        .should('be.visible');
    })  
})
