// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
    name: "license",
    message: "Add a license",
    choices:"",
    type: "list"
    },
    {
    name: "title",
    message: "What is the title of the project?",
    type: "input"
    },
    {
    name: "description",
    message: 
    "What was your motivation? Why did you build this project? What problem does it solve? What did you learn?",
    type: "input"
    },
    {
    name: "installation",
    message: "What are the steps required to install your project?",
    type: "input"
    },
    {
    name: "usage",
    message: "What are the instructions to use this?",
    type: "input"
    },
    {
    name: "tests",
    message: "How to test this project?",
    type: "input"
    },
    {
    name: "username",
    message: "What is your Github username?",
    type: "input"
    },
    {
    name: "email",
    message: "What is your e-mail?",
    type: "input"
    },
    {
    name: "filename",
    message: "What would you like to name this readme file?",
    type: "input"
    },
]);
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.appendFile(`$(filename).md`, data, (err) => {
        err ? console.log(err) : console.log(`${filename}.md created!`)
    })
}
// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
