const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { type } = require("express/lib/response");

const myTeam = [];

const inquire = () => {
return inquirer
.prompt([

    {
        type: "list",
        name: "role",
        message: "Which team member would you like to add? (Required)",
        choices: ["Engineer", "Manager", "Intern"],
        default: "Engineer"
    },

    {
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
        when: (data) => data.role === "Manager" 
    },

    {
        type: "input",
        name: "id",
        message: "What is the manager's id? (Required)",
        when: (data) => data.role === "Manager" 
    },

    {
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
        when: (data) => data.role === "Manager" 
    },

    {
        type: "input",
        name: "office",
        message: "What is the manager's office number? (Required)",
        when: (data) => data.role === "Manager" 
    },

    {
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        when: (data) => data.role === "Engineer" 
    },

    {
        type: "input",
        name: "id",
        message: "What is the engineer's id? (Required)",
        when: (data) => data.role === "Engineer" 
    },

    {
        type: "input",
        name: "email",
        message: "What is the engineer's email? (Required)",
        when: (data) => data.role === "Engineer" 
    },

    {
        type: "input",
        name: "name",
        message: "What is the Intern's name? (Required)",
        when: (data) => data.role === "Intern" 
    },

    {
        type: "input",
        name: "id",
        message: "What is the intern's id? (Required)",
        when: (data) => data.role === "Intern" 
    },

    {
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
        when: (data) => data.role === "Intern" 
    },

    {
        type: "input",
        name: "school",
        message: "What is the manager's school? (Required)",
        when: (data) => data.role === "Intern" 
    },

    {
        type: "list",
        name: "newMember",
        message: "Would you like to add another team member?",
        choices: ["Yes", "No"]
    }
])
    .then((data) => {
        if (data.role === "Manager") {
            const manager = new Manager(data.role, data.name, data.id, data.email, data.office);
            myTeam.push(manager);
        }
        if (data.role === "Engineer") {
            const engineer = new Engineer(data.role, data.name, data.id, data.email, data.github);
            myTeam.push(engineer);
        }
        if (data.role === "Intern") {
            const intern = new Intern(data.role, data.name, data.id, data.email, data.office);
            myTeam.push(intern);
        }
        if (data.newMember === "Yes") {
            return inquire();
        } else {
            console.log(myTeam);
            return myTeam;
            
        }
    })
}

const writeFile = (data) => {
    fs.writeFile("./index.html", data, err => {
        if (err) {
            throw err;
        } else {
            console.log("Team Profile has been created")
        }
    })
}

inquire()
    .then(myTeam => {
        return generateHTML(myTeam);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err);
    })