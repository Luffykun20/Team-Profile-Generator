//packages, class, and functions exported to be used
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const teamGenerator = require("./src/profiles-generator");

//prompted questions for users
const teamCreation = [
    {
        type: 'list',
        name: 'jobPosition',
        message: 'Which type of employee do you want to add to your team?',
        choices: ["Engineer", "Intern"],
    }
];

const addEmployee = [
    {
        type: 'list',
        name: 'newMember',
        message: 'Do you want to add another employee to your team?',
        choices: ["Yes", "No"],
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
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

//creates manager card and start the command line application
inquirer.prompt(managerQuestions).then(responds => {
    const manager = new Manager(responds.name, responds.id, responds.email, responds.officeNumber)
    team.push(manager)
    menu()
})

// creates intern card
function addIntern() {
    inquirer.prompt(internQuestions).then(responds => {
        const intern = new Intern(responds.name, responds.id, responds.email, responds.school)
        team.push(intern)
        menu()
    })



}

//creates engineer card
function addEngineer() {
    inquirer.prompt(engineerQuestions).then(responds => {
        const engineer = new Engineer(responds.name, responds.id, responds.email, responds.gitHub)
        team.push(engineer)
        menu()
    })

}

// function to add more employees or finalize team profile
function menu() {
    inquirer.prompt(addEmployee).then(responds => {
        if (responds.newMember === 'Yes') {
            inquirer.prompt(teamCreation).then(responds => {
                if (responds.jobPosition === 'Engineer') {
                    addEngineer()
                }
                else {
                    addIntern()
                }
            })
        }
        else {
            console.log(team)
            teamGenerator(team)
        }
    })
}
