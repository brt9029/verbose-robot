// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your Project's title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a Project title!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a brief description of this project",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please enter a Project description!");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"],
        validate: languages => {
            if(languages.length > 0) {
                return true;
            } else {
                console.log();
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "How should this Project be installed?",
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log("Please enter how to install this Project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How should this Project be used?"
    },
    {
        type: "input",
        name: "license",
        message: "Which license was used?",
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log();
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributor",
        message: "Who were the contributors to this project?",
        validate: contributorInput => {
            if(contributorInput) {
                return true;
            } else {
                console.log("Please enter at least one contributor");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "How should the tests be run?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Provide an e-mail where you can be contacted",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter an e-mail address where you may be contacted!");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.md`, data, err => {
        if(err) return console.log(err);
    })
};

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then( data => {
        const [ title, markdown ] = data;
        return writeToFile(title, markdown);
    })
};

// Function call to initialize app
init();
