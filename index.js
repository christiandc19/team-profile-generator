const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");
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
        choices: ["Engineer", "Manager", "Intern"]
    },

    {
        when: (data) => data.role === "Manager" ,
        type: "input",
        name: "name",
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter a name.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Manager",
        type: "input",
        name: "id",
        message: "What is the manager's id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter manage's id number.");
                return false;
            }
        }

    },

    {
        when: (data) => data.role === "Manager",
        type: "input",
        name: "email",
        message: "What is the manager's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter manager's email.");
                return false;
            }
        }

    },

    {
        when: (data) => data.role === "Manager", 
        type: "input",
        name: "office",
        message: "What is the manager's office number? (Required)",
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log("Please Enter manager's office number.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Engineer",
        type: "input",
        name: "name",
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter engineer's name.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Engineer", 
        type: "input",
        name: "id",
        message: "What is the engineer's id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter Engineer's id number.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Engineer",
        type: "input",
        name: "email",
        message: "What is the engineer's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter engineer's email.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Engineer",
        type: "input",
        name: "github",
        message: "What is the engineer's Github Username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter engineer's github username.");
                return false;
            }
        }

    },

    {
        when: (data) => data.role === "Intern",
        type: "input",
        name: "name",
        message: "What is the Intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter intern's name.");
                return false;
            }
        }

    },

    {
        when: (data) => data.role === "Intern",
        type: "input",
        name: "id",
        message: "What is the intern's id? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter intern's id number.");
                return false;
            }
        }

    },

    {
        when: (data) => data.role === "Intern",
        type: "input",
        name: "email",
        message: "What is the Intern's email? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter intern's email address.");
                return false;
            }
        }
    },

    {
        when: (data) => data.role === "Intern",
        type: "input",
        name: "school",
        message: "What is the name of the Intern's school? (Required)",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter intern's school.");
                return false;
            }
        }

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
            const manager = new Manager(data.name, data.id, data.email, data.office);
            myTeam.push(manager);
        }
        if (data.role === "Engineer") {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            myTeam.push(engineer);
        }
        if (data.role === "Intern") {
            const intern = new Intern(data.name, data.id, data.email, data.school);
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
    