const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is the engineer's gitHub account?"
    }
]

const team = [];
inquirer.prompt(managerQuestions).then(responds => {
    const manager = new Manager(responds.name, responds.id, responds.email, responds.officeNumber)
    team.push(manager)
    menu()
})

function menu() { }