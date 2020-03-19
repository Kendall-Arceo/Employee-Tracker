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
  connection.query("SELECT * FROM departments", function (err, result, fields) {
    if (err) throw err;
    console.table(result);
  });
  createDepartment();
});

//initializer
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
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;
        
        case "Update Employee Role":
          updateRole();
          break;
        
        case "Update Employee Manager":
          updateManager();
          break;
    
        }
        
      });
}

function viewEmployee() {
    inquirer
      .prompt({
        name: "action",
        type: "input",
        message: "What would you like to do in your department?",
  
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
        message: "Which Depratment do you want to look into?",
      })
      .then(function(answer) {
        console.log(answer);
    });
}

function employeeByManager() {
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

function addEmployee() {
    inquirer
      .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is your Employee's first name?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
        
      }, 
      {
        type: 'input',
        name: 'last_name',
        message: "What's your Employee's last name?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }

      }, 
      {
        type: 'input',
        name: 'title',
        message: "What is his/her title?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }, 
      {
        type: 'input',
        name: 'department',
        message: "Which department would you like to put this employee in?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }, 
      {

        type: 'input',
        name: 'salary',
        message: "What is the salary for this title?",
        validate: function(value) {
          var pass = value.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
          );
          if (pass) {
            return true;
          }
    
          return 'Please enter a valid salary';
        
        }
        
      }, 
      {
        type: 'input',
        name: 'manager',
        message: "Which manager will they be reporting to?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
      
    ])

    .then(function(answers) {
        
        console.log(JSON.stringify(answers.first_name));
        console.log(JSON.stringify(answers.last_name));
        
    });
}

function removeEmployee() {
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

function updateRole() {
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

function updateManager() {
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
