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


connection.connect(function (err) {
  if (err) throw err;
  createDepartment();
});

//initializer
async function createDepartment() {
  await
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
      .then(function (answer) {
        switch (answer.action) {
          case "View all Employees":
            viewAllEmployees();
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

//Table showing all employees
function viewAllEmployees() {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "Here are the list of Employees!"
    })
    .then(function (answer) {
      connection.query("SELECT * FROM employees", function (err, result, fields) {
        if (err) throw err;
        console.table(result);
        createDepartment();
      });
    });
}

//User gets employees by department keyword
function employeeByDepartment() {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "Which Depratment do you want to look into?",
    })
    .then(function (answer) {
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
    .then(function (answer) {
      console.log(answer);
    });
}

function addEmployee() {
  return inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is your Employee's first name?",
      }, {
        type: 'input',
        name: 'last_name',
        message: "What's your Employee's last name?",


      }, {
        type: 'input',
        name: 'title',
        message: "What is his/her title?",

      }, {
        type: 'input',
        name: 'department',
        message: "Which department would you like to put this employee in?",

      }, {

        type: 'input',
        name: 'salary',
        message: "What is the salary for this title?",

      }, {
        type: 'input',
        name: 'manager',
        message: "Which manager will they be reporting to?",

      }

    ])

    .then(function (answers) {
      console.log("Inserting a new employee!");
      connection.query("INSERT INTO employees SET ?",answers, function (err, res) {
        if (err) throw err;
        console.log(`${res.affectedRows} employee inserted! \n`);
      });
      connection.query("SELECT * from employees", function (err, res) {
        if (err) throw err;
        console.table(res);
        createDepartment();
      }); 
    });
}

function removeEmployee() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Which employee needs to be deleted/fired demoted quarantined?"
    })
    .then((answer) => {
      console.log(answer);
      connection.query("DELETE FROM employees WHERE id = ?",answer.id, function (err, res) {
        if (err) throw err;
        console.log(`${res.affectedRows} employee quarantined! \n`);
        createDepartment();
      });
    });
}

function updateRole() {
  inquirer
    .prompt({
      name: "title",
      type: "input",
      message: "What is the new role?"
    },{
      name: "id",
      type: "input",
      message: "What is the ID of the employee?"
    })
    .then(function (answer) {
      console.log(answer);
      console.log(answer);
      connection.query("UPDATE employees SET title = ? WHERE id = ?",[answer.id,answer.title], function (err, res) {
        if (err) throw err;
        console.log(`${res.affectedRows} employee quarantined! \n`);
        createDepartment();
      });
    });
}

function updateManager() {
  inquirer
    .prompt({
      name: "action",
      type: "input",
      message: "Which Depratment do you want to look into?"
    })
    .then(function (answer) {
      console.log(answer);
      connection.query("DELETE FROM employees WHERE id = ?",answer.id, function (err, res) {
        if (err) throw err;
        console.log(`${res.affectedRows} employee quarantined! \n`);
        createDepartment();
      });
    });
}
