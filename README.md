# Rancid Tomatillos
<img width="554" alt="logo" src="https://user-images.githubusercontent.com/97044701/168508486-a84354b0-e7bb-413e-942c-e0b8de6abc52.png">
 

#### Full Demo

![full_demo](https://user-images.githubusercontent.com/97044701/168508159-faf3a730-cdd0-4fe6-856f-2fc09666d2d4.gif)

#### Getting Started
1. Clone the repo from [github](https://github.com/aominhlong/Rancid-Tomatillos)

2. Cd into the directory from your terminal and install the project dependencies:
- Run `npm install` or `npm i` in the terminal

3. To see the web app:
- Run `npm start` in the terminal
- Press `ctrl/cmd + c` to exit

4. Copy the local host address from your terminal and add to your web browser to see the web app

### Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Instructions on Use](#instructions-on-use)
- [Demo of Features](#demo-of-features)
- [Testing the app](#testing-the-app)
- [Challenges and Wins](#challenges-and-wins)
- [Project Overview and Goals](#project-overview-and-goals)
- [Future Additions](#future-additions)

#### About the Project
Save yourself the agony of watching another bad movie and come visit **Rancid Tomatillos** where we seperate the compostable from the salsa ready films. You can scroll through our list latest films and checkout their ratings, details, and other neat facts! Already have a film in mind? Search for it using our responsive search bar. 

This was part of Turing School of Software & Design module 3 project. 

#### Contributors
 - [Kal Al-Rajhi](https://github.com/kal-aalrajhi)
 - [Nicholas Ao](https://github.com/aominhlong)

#### Technologies Used
- React
- Javascript
- HTML
- CSS
- Fetch API
- WAI-ARIA 
- Webkit
- React Router for client-side routing
- [react-player npm package](https://www.npmjs.com/package/react-player)
- Cypress 

#### Instructions on Use
Type in the name of anything, ideally a verb or noun, and then hit 'submit'. Users should see a card appear with the text the user input and three facts about it. That's it! 

**_Search for a Specific Movie_**
To search for a specific movie, users can click in the input field and type in keywords or a title of the movie. The movies on the homepage will change based on the user's input. 

**_View Movie Details_**
To view a movie's specific detail, users can click on a specific movie of their choice on the homepage. They will be taken to another page to view the movie's details. 

**_Go back to the Homepage_**
To go to the homepage, users can click on the `HOME` button located at the top-right of the screen in the navigation bar. 

**_Play the Movie Trailer_**
To play a movie trailer, the user can click on a movie poster on the homepage and then click the play icon on the video.

#### Demo of Features
1. **Homepage**

![home_view](https://user-images.githubusercontent.com/97044701/168508425-62b8e5f5-333d-48c4-8eb6-cf40c0329ad2.gif)

2. **Search for a Specific Movie**

![search_functionality](https://user-images.githubusercontent.com/97044701/168508098-8df7afd8-e48e-4cde-9e29-48eb3fd38f13.gif)

3. **View Movie Details**

![movie_details](https://user-images.githubusercontent.com/97044701/168508218-9e40ff41-092f-4c9d-b4af-e4376c06cbe0.gif)

#### Testing the App
`End-to-end` testing was implimented to test the application by using Cypress. `Stubbing` and `intercepting` was used to control the network response. The app was fully tested based on the user story from start to finish. 

#### Challenges and Wins

##### Challenges
- Implementing search bar logic that rendered correctly depending on user's input.

##### Wins
- Learning to use React more in depth and reinforcing a good React workflow between components.

#### Project Overview And Goals
- Use OOP to drive the design of the application and the code
- Gain competency with React fundamentals
- Implement asynchronous JavaScript
- Practice refactoring

#### Future Additions
- Filter by genre
- Add browse genre carousel page
- A sample video from the movie should be played on the movie details page by clicking the grey play icon.
