// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username.',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('You need to enter a Github username.')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license for your project.',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Mozilla']
    }
]

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;

        console.log('README complete!')
    } );
}

// Create a function to initialize app
function init() {
    
         inquirer.prompt(questions)
            .then((inquirerAnswers) => {
                writeToFile('README.md', generateMarkdown(inquirerAnswers));
            })
    }

// Function call to initialize app
init();
