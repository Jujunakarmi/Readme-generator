// TODO: Include packages needed for this application
const fs = require('fs')

const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to be the title of your project?(Required)',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your title.')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What would you like to name your project?(Required)',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter the name for the project')
            }

        }
    },
    {
        type: 'input',
        message: 'How would you like to describe your project?(Required)',
        name: 'description',
        validate: descInput => {
            if (descInput) {
                return true
            } else {
                console.log('Please write a short description on your project.')
                return false

            }
        }

    },
    {
        type: 'input',
        message: 'Provide the steps to install your project.(Required)',
        name: 'installation',
        validate: insInput =>{
            if(insInput){
                return true
            }else{
                console.log('Please provide the steps to install.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.(Required)',
        name: 'usage',
          validate: usageInput =>{
            if(usageInput){
                return true
            }else{
                console.log('Please provide the steps to install.')
                return false
            }
        }
    },
    {
        type: 'list',
        message: 'Choose a license for your project.',
        name: 'license',
        choices: [
            { value: 'MIT' },
            { value: 'BSD' },
            { value: 'JRL' },
            { value: 'Apache' },
            { value: 'MPL' },
            { value: 'None' },
        ]
    },
    {
        type: 'input',
        message: 'List your collaboraters.',
        name: 'credits',
     
    },
    {
        type: 'input',
        message: 'How would you test this project?(Required)',
        name: 'tests',
        validate: testInput =>{
            if(testInput){
                return true
            }else{
                console.log('Please provide the steps to install.')
                return false
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email?(Required)',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your github username?(Required)',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Where is this application deployed at?(Required)',
        name: 'deploy',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        err ? console.log('Error') : console.log('Thank you. Your professional README is created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile("./dist/README.md", generateMarkdown(response))
    });
}


// Function call to initialize app
init();
