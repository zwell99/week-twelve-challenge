const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const departmentQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the department?"
    }
];

const roleQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the department?"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary forthis role?"
    },
    {
        type: "input",
        name: "department",
        message: "What department is this role a part of?"
    }
];

const employeeQuestions = [
    {
        type: "input",
        name: "firstName",
        message: "What is thier first name?"
    },
    {
        type: "input",
        name: "lastName",
        message: "What is thier last name?"
    },
    {
        type: "input",
        name: "role",
        message: "What is their role?"
    },
    {
        type: "input",
        name: "manager",
        message: "Who is thier manager?"
    }
];

inquirer.prompt({
    type: "list",
    name: "optionChoice",
    message: "What do you want to do?",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
}).then((data) => {
    if (data.optionChoice == "view all departments") {
        console.table("placeholder");
    } else if (data.optionChoice == "view all roles") {
        console.table("placeholder");
    } else if (data.optionChoice == "view all employees") {
        console.table("placeholder");
    } else if (data.optionChoice == "add a department") {
        inquirer.prompt(departmentQuestions).then((data) => {
            console.log("hello world");
        });
    } else if (data.optionChoice == "add a role") {
        inquirer.prompt(roleQuestions).then((data) => {
            console.log("hello world");
        });
    } else if (data.optionChoice == "add an employee") {
        inquirer.prompt(employeeQuestions).then((data) => {
            console.log("hello world");
        });
    } else if (data.optionChoice == "update an employee role") {
        inquirer.prompt(employeeQuestions).then((data) => {
            console.log("hello world");
        });
    }
});