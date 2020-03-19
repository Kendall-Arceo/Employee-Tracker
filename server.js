var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Karceo1024!",
  database: "departments_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  createDepartment();
});

function createDepartment() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [

          "View all Employees",
          "View all Employees by Department",
          "View all Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
        
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all Employees":
          viewEmployee();
          break;
        
        case "View all Employees by Department":
          employeeByDepartment();
          break;
        
        case "View all Employees by Manager":
          employeeByManager();

        case "Add Employee":
          addEmployee();

        case "Remove Employee":
          removeEmployee();
        
        case "Update Employee Role":
          updateRole();
        
        case "Update Employee Manager":
          updateManager();
    
        }
        
      });
}

function viewEmployee() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "What would you like to do in your department?",
        choices
      })
      .then(function(answer) {

        

        console.log(answer);
    });
}

function employeeByDepartment() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "Which Depratment do you want to look into?"
      })
      .then(function(answer) {
        console.log(answer);
    });
}

