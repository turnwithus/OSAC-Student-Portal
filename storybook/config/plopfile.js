const moduleExists = require('./moduleExists');

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        default: 'Component',
        message: 'Which type of component do you want to create?',
        choices: () => [
          'Block',
          'Component',
          'Layout',
          'Page'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
        validate: (value) => {
          if (/.+/.test(value)) {
            return moduleExists(value) ? 'A component with this name already exists, please use a different name.' : true;
          }

          return 'A name is required.';
        }
      }
    ],
    actions: (data) => {
      const actions = [];

      if (data.type !== 'Page') {
        actions.push(
          {
            type: 'add',
            path: '../src/stories/{{kebabCase type}}s/{{kebabCase name}}/{{kebabCase name}}.jsx',
            templateFile: 'plop-templates/component-jsx.hbs'
          },
          {
            type: 'add',
            path: '../src/stories/{{kebabCase type}}s/{{kebabCase name}}/{{kebabCase name}}.scss',
            templateFile: 'plop-templates/component-scss.hbs'
          },
          {
            type: 'add',
            path: '../src/stories/{{kebabCase type}}s/{{kebabCase name}}/{{kebabCase name}}.stories.js',
            templateFile: 'plop-templates/component-stories.hbs'
          }
        );
      } else {
        actions.push(
          {
            type: 'add',
            path: '../src/ui/app/components/{{kebabCase name}}/{{kebabCase name}}.js',
            templateFile: 'plop-templates/page-stories.hbs'
          }
        );
      }

      return actions;
    }
  });
};
