module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What type of component?',
        choices: ['common', 'components', 'templates']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What component name to create?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/Component.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs'
      }
    ]
  })
}
