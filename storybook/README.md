# Storybook developer documentation

# Dev Requirements:
- Node version 16+

## Concepts & Principles
# Atomic Design
- https://bradfrost.com/blog/post/atomic-web-design/
-- atoms = not used
-- molecules = blocks
-- organisms = components
-- templates = layouts
-- pages = pages

# Block Element modifier 
- https://en.bem.info/methodology/quick-start/
- By using a functional and consistent naming convention for our elements, we increase the efficiency of development, and also reduce the effort/cost to maintain code long-term. 

## Best Practices
- Always, check to see if a component or block exists before creating something new
- It is better to adapt an existing element via `variant` (e.g: `marquee--really-big`) than it is to create a new element (e.g. `marquee-really-big`). This keeps the markup and CSS performant as well as smaller in size.
- Avoid adding 3rd party dependencies whenever possible. By keeping dependencies low, we maintain control of our code by writing our own, but also reduce the maintenance costs of the code base and preserviing consistency
- Use a 3rd party dependency when it addresses multiple concerns cleanly, concisely, and without undue dependencies of its own. (See Plop, React Tabs for good examples)
- Never change the mark up in the Student Portal Application before doing so in the Storybook component library first. A component library is the source of truth for design, markup, and code. If we fail to do this, our code will become increasingly difficult to maintain and keep up to date and increase it's cost of ownership. 

# Common commands
- `npm run storybook` this will start a local webserver and start the Storybook process. This is our common front-end web development environment and will enable you to develop with all the modern front-end goodies like automatic ADA Compliance checking, hot reloading with CSS/HTML changes, etc.
- `npm run new` this will create a new Storybook element (block, component, layout, or page) and generate the required files for each type of element. See "creating a new element" below.
- `npx storybook@latest upgrade` this will upgrade version of Storybook. You may get prompted during this process to allow it to perform a "migration". If so, this is not needed or recommended as this solution was initiated using Storybook 7 to begin with.

# Creating a new element
1. stop Storybook, if it's running, by `ctrl/cmd + C`
2. `npm run new`
3. select your element type (based on BEM/Atomic Design) and name it
4. `npm run storybook`
5. Storybook will now start and you will see your component in the Storybook navigation
6. If your new element requires custom CSS (anything but a Page likely will), you will need to register your SCSS partial in `/storybook/src/index.scss`


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
