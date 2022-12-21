
## Project Quizalicious

A quiz based game with leaderboard!

Try to get on the leaderboard by completing a season!

A season consists of 2 easy games, 2 medium difficulty games and one hard difficulty game.

## How to setup

1. install node
2. Clone the repository to any directory
3. After cloning execute
```
npm install
```
4. To start your development server run
```
npm run dev
```
Vite.js will provide a url to a local development servers in the terminal.


## System architecture
![Quizalicious-Architecture drawio](https://user-images.githubusercontent.com/5389940/204908283-a9d5eee1-1495-4b1d-96f0-46a34eeb07de.svg)


## What we have done
We have created the following components:

|     Component    |                Description                    |
| ---------------- | --------------------------------------------- |
| Login            | handles logins using Firebase                 |
| CreateAccount    | handles account creation using Firebase       |
| Season           | shows a season, where the user can play games |
| QuickGame        | Handles the quick game mode                   |
| Game             | shows a game consisting of 5 questions        |
| HomeScreen       | provides a homescreen                         |
| Header           | provides a header to the web page             |
| Highscore        | shows a highscore board for all users         |
| Profile          | shows information about the logged in user    |
| Owl              | Shows a small tutorial on the home screen     |
| UserNotLoggedIn  | Shows a button to go to login screen          |
| PageNotFound     | For React Router, invalid route               |

## What we still plan to do
Nothing more planned to do.

## Project file structure
|               File/Folder                  |                      Description                      |
| ------------------------------------------ | ----------------------------------------------------- |
| /public/                                   | Contains images                                       |
| /src/                                      | Contains most of our source code                      |
| /src/presenters/                           | Contains all of our component presenters              |
| /src/presenters/createAccountPresenter.jsx | Presenter for the CreateAccount component             |
| /src/presenters/gamePresenter.jsx          | Presenter for the Game componenet                     |
| /src/presenters/headerPresenter.jsx        | Presenter for the Header component                    |
| /src/presenters/highscorePresenter.jsx     | Presenter for the Highscore component                 |
| /src/presenters/homeScreenPresenter.jsx    | Presenter for the HomeScreen component                |
| /src/presenters/loginPresenter.jsx         | Presenter for the Login component                     |
| /src/presenters/notLoggedInPresenter.jsx   | Presenter for the NotLoggedIn component               |
| /src/presenters/profilePresenter.jsx       | Presenter for the Profile component                   |
| /src/presenters/quickGamePresenter.jsx     | Presenter for the QuickGame component                 |
| /src/presenters/seasonPresenter.jsx        | Presenter for the Season component                    |
| /src/presenters/settingsPresenter.jsx      | Presenter for the Settigns component                  |
| /src/styles/                               | Folder for all the stylesheets                        |
| /src/styles/animations.css                 | Stylesheet for the animations used throughout the app |
| /src/styles/app.css                        | Stylesheet for the App component                      |
| /src/styles/createAccountView.css          | Stylesheet for the CreateAccount component            |
| /src/styles/gameView.css                   | Stylesheet for the Game component                     |
| /src/styles/headerView.css                 | Stylesheet for the Header component                   |      
| /src/styles/highscoreView.css              | Stylesheet for the Highscore component                |
| /src/styles/homeScreenView.css             | Stylesheet for the Highscore component                |
| /src/styles/index.css                      | Stylesheet for the basic DOM elements like buttons    |
| /src/styles/loginView.css                  | Stylesheet for the Login component                    |
| /src/styles/notLoggedInView.css            | Stylesheet for the NotLoggedIn component              |
| /src/styles/owlView.css                    | Stylesheet for the Owl component                      |
| /src/styles/profileMenuView.css            | Stylesheet for the ProfileMenu component              |
| /src/styles/profileView.css                | Stylesheet for the Profile component                  |
| /src/styles/promiseNoData.css              | Stylesheet for the loading bar, waiting for promise   |
| /src/styles/quickGameView.css              | Stylesheet for the QuickGame component                |
| /src/styles/seasonView.css                 | Stylesheet for the Season Component                   |
| /src/styles/settingsView.css               | Stylesheet for the Settings Component                 |
| /src/views/                                | Contains all of our views for our components          |
| /src/views/createAccountView.jsx           | View for the AccountCreation component                |
| /src/views/gameView.jsx                    | View for the Game component                           |
| /src/views/headerView.jsx                  | View for the Header component                         |
| /src/views/highscoreView.jsx               | View for the Highscore component                      |
| /src/views/homeScreenView.jsx              | View for the HomeScreen component                     |
| /src/views/loginView.jsx                   | View for the Login page component                     |
| /src/views/notLoggedInView.jsx             | View for the NotLoggedIn component                    |
| /src/views/owlView.jsx                     | View for the Owl component                            |
| /src/views/pageNotFoundView.jsx            | View for the PageNotFound component                   |
| /src/views/profileMenuView.jsx             | View for the ProfileMenu component                    |
| /src/views/profileView.jsx                 | View for the Profile component                        |
| /src/views/promiseNoData.jsx               | View providing a loading bar, waiting for promise     |
| /src/views/quickGameView.jsx               | View for the QuickGame component                      |
| /src/views/seasonView.jsx                  | View for the Season component                         |
| /src/views/settingsView.jsx                | View for the Settings component                       |
| /src/apiConfig.jsx                         | Contains configuration for our API, not commited      |
| /src/App.jsx                               | The App components, the base of our SPA               |
| /src/firebaseConfig.jsx                    | The firebase configuration file, not commited         |
| /src/firebaseModel.jsx                     | Contains functions related to firebase services       |
| /src/main.jsx                              | Boostrap file for React                               |
| /src/navigation.js                         | Sets the default hash for navigation                  |
| /src/QuizModel.jsx                         | The model for the application.                        |
| /src/quizSource.jsx                        | Contains functions for interfacting with the API      |
| /src/resolvePromise.jsx                    | Helper functions for easy promise handeling           |
| /src/Root.jsx                              | Root component, contains the App component            |
| /.firebaserc                               | Settings for deploy targets, firebase                 |
| /.gitignore                                | Files to ignore when commiting                        |
| /firebase.json                             | Contains the hosting configuretion for Firebase       |
| /index.html                                | The index file, the starting point of the application |
| /package.json                              | The npm package files, defines all dependencies.      |
| /README.md                                 | Contains information about this project               |
| /styles.html                               | Basic page to showcase the basic styles for the app   |
| /vite.config.js                            | Contains configuration for Vite.js                    |


