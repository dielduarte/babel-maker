import inquirer from 'inquirer';
import BabelMaker from './BabelMaker';

const defineTemplate = [{
  type: 'list',
  name: 'template',
  message: 'What template do you want?',
  choices: [
    {
      name: 'Just a simple babel env',
      value: 'simple'
    },
    {
      name: 'React based',
      value: 'react'
    },
    {
      name: 'Vue based',
      value: 'vue'
    }
  ]
}];

inquirer.prompt(defineTemplate)
  .then(answers =>
    BabelMaker
      .createBabelrc()
      .setTemplate(answers.template)
      .injectConfig()
      .installDependencies()
  );
