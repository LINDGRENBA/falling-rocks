# Description :
This project is a technical challenge entitled 'Falling Rocks', created for the Phylos interview process.

# Acceptance Criteria :

- [ ] A
- [ ] B
- [ ] C
- [ ] D

<!-- may not want to include as challenge is confidential - ask Patrick and Ryan -->

# Process / Approach :

### Initial Setup
- [X] Create an initial React app 
- [X] Add a react hook to hold state 
- [X] Create a 2x2 grid 
- [X] Add an array to store the possible elements (destructure array?) or variables to store the elements 
- [X] Add a button 
- [X] On the button click, render a hard coded `world` with elements into the grid

### Taking Note of Elements
- Write an algorithm to check the elements inside of the 2D world and update appropriately
- [ ] Write a function to checks which elements exists in the squares at the bottom of the grid
- [ ] Update the function to also check which element exists in the squares "above" the bottom squares of the grid
- [ ] Expand the function so that it checks not only the second row up from the bottom, but every row from the bottom up

### Updating the 2D-World / Grid
- Begin to update each square of the grid based on which element currently exists within each square and the square above it
- [ ] Will need to insert empty squares in the top row for each column where an element moves "down the column"


# Bugs / Issues :
| Issue & Message | Resolved? | Solution |
| ----- | ----- | ----- | 
| `Each child in a list should have a unique "key" prop.` | In Progress | Need to add unique key to each div rendered by map() |


# Future Updates :

* Render random 2D-World dynamically / programmatically 


# Testing Steps / QA Criteria :

* To run this application, you will need `npm` installed on your computer.

1. From your terminal, pull down this project using the command `git pull` + repo-link (found by selecting the green dropdown in the upper right corner of the github repo). 
2. Once you have the project locally, open it inside of a code editor such as `Atom` or `Visual Studio Code`.
3. To install the necessary dependencies, enter the command `npm install` into your terminal.
4. Then enter `npm start`
5. The project should automatically open in your browser. This may take a minute, don't worry! If the project does not open in your browser, check the previous steps to be sure nothing was missed. 


# Resources / Research :

1. [Code Tetris: JavaScript Tutorial for Beginners](https://youtu.be/rAUn1Lom6dw)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
