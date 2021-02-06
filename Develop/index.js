// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'githunodb',
        message: 'Enter your GitHub Username'
        //add in a validation because it has to link correctly 
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
        choices: [''
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
         inquirer.prompt(questions)
            .then((response) => {
                console.log(response);
            })
            .then(() => {
                console.log('Successfully wrote file.')
            }) 
            .catch(err => console.log(err));
    }


// Function call to initialize app
init();
