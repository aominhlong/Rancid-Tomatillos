describe('Details view page', () => {

    beforeEach( () => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movieData.json' })
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', { fixture: 'mulanDetails.json' })
        cy.wait(2000)
        cy.visit('http://localhost:3000/movie/337401')
    })

    // SAD PATHS for our details page load
    it('Should display an error message on failed API load for details page - 500', () => {
      cy.intercept({
          method: 'GET', 
          url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401'
      },
      {
          statusCode: 500,
          body: {
              message: `Network Error - status 500 at URL: https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401`
          }
      })
      .get('.error-msg').should('contain', 'Network Error - status 500')
    })

    it('Should display an error message on failed API load for details page - 404', () => {
        cy.intercept({
            method: 'GET', 
            url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/666'

        },
        {
            statusCode: 404,
            body: {
                message: `Cannot GET /api/v2/movies/666`
            }
        })
        .get('.error-msg').should('contain', 'Network Error - status 404')
    })

    // SAD PATHS for our video load
    it('Should display an error message on failed API load for videos - 500', () => {
      cy.intercept({
          method: 'GET', 
          url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/videos'
      },
      {
          statusCode: 500,
          body: {
              message: `Network Error - status 500 at URL: https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/videos`
          }
      })
      .get('.error-msg').should('contain', 'Network Error - status 500')
    })

    it('Should display an error message on failed API load for details page - 404', () => {
        cy.intercept({
            method: 'GET', 
            url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/666/videos'

        },
        {
            statusCode: 404,
            body: {
                message: `Cannot GET /api/v2/movies/666/videos`
            }
        })
        .get('.error-msg').should('contain', 'Network Error - status 404')
    })

    it.only('Should update the url when clicking on a movie poster', () => {
        cy.url().should('eq', 'http://localhost:3000/movie/337401')
    })

    it('Should see movie title, movie description, and play button in movie player box', () => {
        cy.get('.showcase-content').contains('Mulan')
        cy.get('.showcase-content').contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns')
    })

    it('Should be able to play a movie preview', () => {
        cy.get('.btn').click()
        cy.get('iframe').should('have.attr', 'src').should('include', 'https://www.youtube.com/embed/01ON04GCwKs')
    })

    it('Should load movie poster', () => {
        cy.get('.details-content').find('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg')
    })

    it('Should display a list of movie details', () => { // chain .should
        cy.get('article')
          .should('contain.text', 'Mulan (2020)')

        cy.get('article')
          .should('contain.text', 'Release Date: 2020/09/04')

        cy.get('article')
          .should('contain.text', 'Runtime: 115 minutes')

        cy.get('article')
          .should('contain.text', 'Genre: Action,Adventure,Drama,Fantasy')

        cy.get('article')
          .should('contain.text', 'Budget: $200000000.00')

        cy.get('article')
          .should('contain.text', 'Revenue: $57000000.00')
    })

    it('Should return home when home button clicked', () => {
        cy.get('.home-btn').click();
        cy.url().should('eq', 'http://localhost:3000/') // more precise
        // cy.url().should('include', 'http://localhost:3000/')
    })
})