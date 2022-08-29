// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const generatorMarkdown = require("./util/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "what is your projects name?",
        name: "Title"
    }, {
        type: "input",
        message: "what is your description of your project?",
        name: "Description"
    }, {
        type: "input",
        message: "Provide installation instructions for the project?",
        name: "Installation"
    }, {
        type: "input",
        message: "Provide instructions on how to use your application?",
        name: "Usage"
    }, {
        type: "list",
        message: "What License is being used?",
        name: "License",
        choices: ["MIT", "Apache", "Boost", "Mozilla", "No License"]        
    }, {
        type: "input",
        message: "How can people contribute to your project?",
        name: "Contributor"
    }, {
        type: "input",
        message: "What is your Github username?",
        name: "Username"
    }, {
        type: "input",
        message: "What is your email address",
        name: "Email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
