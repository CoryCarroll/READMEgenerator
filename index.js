// TODO: Include packages needed for this application
const inquirer = require('inquirer')
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
        message: "Table of Contents.",
        name: "Table of Contents"
    }, {
        type: "input",
        message: "What needs to be installed to run this app?",
        name: "Installation"
    }, {
        type: "input",
        message: "How is the app used?",
        name: "Usage"
    }, {
        type: "input",
        message: "What License is being used?",
        name: "License"
    }, {
        type: "input",
        message: "Who contributed to the project?",
        name: "Contributing"
    }, {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact info for inquiries?",
        name: "Questions"
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
