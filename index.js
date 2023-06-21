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
        name: "department_id",
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
        name: "role_id",
        message: "What is their role?"
    },
    {
        type: "input",
        name: "manager_id",
        message: "Who is thier manager?"
    }
];

const dbConnection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "company_db"
});

inquirer.prompt({
    type: "list",
    name: "optionChoice",
    message: "What do you want to do?",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
}).then((data) => {
    if (data.optionChoice == "view all departments") {
        dbConnection.query("SELECT * FROM departments", function(err, results, fields) {
            console.table(results);
        });
    } else if (data.optionChoice == "view all roles") {
        dbConnection.query("SELECT * FROM roles", function(err, results, fields) {
            console.table(results);
        });
    } else if (data.optionChoice == "view all employees") {
        dbConnection.query("SELECT * FROM employees", function(err, results, fields) {
            console.table(results);
        });
        // Not sure if bellow works
    } else if (data.optionChoice == "add a department") {
        inquirer.prompt(departmentQuestions).then((data) => {
            dbConnection.query(`INSERT INTO departments (name) VALUES (${data.name})`, function(err, results, fields) {
                console.table(results);
            });
        });
    } else if (data.optionChoice == "add a role") {
        inquirer.prompt(roleQuestions).then((data) => {
            dbConnection.query(`INSERT INTO roles (title, salary, department_id) VALUES (${data.title}, ${data.salary}, ${data.department_id})`, function(err, results, fields) {
                console.table(results);
            });
        });
    } else if (data.optionChoice == "add an employee") {
        inquirer.prompt(employeeQuestions).then((data) => {
            dbConnection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (${data.first_name}, ${data.last_name}, ${data.role_id}, ${data.manager_id})`, function(err, results, fields) {
                console.table(results);
            });
        });
    } else if (data.optionChoice == "update an employee role") {
        inquirer.prompt(employeeQuestions).then((data) => {
            console.log("hello world");
        });
    }
});