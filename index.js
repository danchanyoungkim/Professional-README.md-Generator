// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            name: "license",
            message: "Add a license",
            choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "WTFPL", "The zlib/libpng License"],
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
            name: "contribute",
            message: "How to contribute to this project?",
            type: "input"
        },
        {
            name: "test",
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
    ]);
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
        .then(() => console.log(`Successfully wrote README.md`))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();