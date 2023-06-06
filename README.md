## OSAC-Student-Portal

# Dev Requirements:
- Node version 16+


## Concepts & Principles

# Atomic Design
- https://bradfrost.com/blog/post/atomic-web-design/
-- atoms = 
-- molecules = blocks
-- organisms = components
-- templates = layouts
-- pages = pages

# Block Element modifier 
- https://en.bem.info/methodology/quick-start/

## Best Practices
- Always, always, check to see if a component or block exists before creating something new
- It's better to adapt an existing element via `variant` (e.g: `marquee--really-big`) than it is to create a new element (e.g. `marquee-really-big`)
- Avoid adding 3rd party dependencies whenever possible. By keeping dependencies low, we maintain control of our code by writing our own, but also reduce the maintenance costs of the code base and preserviing consistency
- Use a 3rd party dependency when it addresses multiple concerns cleanly, concisely, and without undue dependencies of its own. (See Plop, React Tabs for good examples)
- Never change the mark up in the Student Portal Application before doing so in the Storybook component library first. A component library is the source of truth for design, markup, and code. If we fail to do this, our code will become increasingly difficult to maintain and keep up to date and increase it's cost of ownership. 

# Common commands
- `npm run storybook` this will start a local webserver and start the Storybook process. This is our common front-end web development environment and will enable you to develop with all the modern front-end goodlies like automatic ADA Compliance checking, hot reloading with CSS/HTML changes, etc.
- `npm run new` this will create a new Storybook element (block, component, layout, or page) and generate the required files for each type of element. See "creating a new element" below. 

# Creating a new element
1. stop Storybook, if it's running, by `ctrl/cmd + C`
2. `npm run new`
3. select your element type (based on BEM/Atomic Design) and name it
4. `npm run storybook`
5. Storybook will now start and you will see your component in the Storybook navigation
6. If your new element requires custom CSS (anything but a Page likely will), you will need to register your SCSS partial in `/storybook/src/index.scss`
