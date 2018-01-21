import fs from 'fs';
import shell from 'shelljs';
import ora from 'ora';

const spinner = ora({ color: 'green' });

class BabelMaker {
  createBabelrc() {
    spinner.start('creating .babelrc...');
    this.stream = fs.createWriteStream(".babelrc");
    spinner.succeed('.babelrc created with success!');
    return this;
  }

  setTemplate(template) {
    this.template = require(`./templates/${template}`);
    return this;
  }

  injectConfig() {
    this.stream.write(JSON.stringify(this.template.babelrc, null, 2));
    return this;
  }

  installDependencies() {
    const dependencies = this.template.dependencies.join(' ');

    spinner.start('installing dependencies...');
    shell.exec(`npm install --save-dev ${dependencies}`, (code) => {
      if (code !== 0) {
        spinner.fail(`Oops! something went wrong. Babel-maker can't install dependencies, \n try run manually: npm install --save ${dependencies}`);
      } else {
        spinner.succeed('Dependencies installed with success!');
      }
    });
  }
}


export default new BabelMaker();
