import { createConnection } from "net";

//functions

function mainMenu() {
  inquirer
    .prompt({
      name: "menu",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View all Employees By Role",
        "Add Employee",
        "Update Employee Role",
        "Update Employee Manager"
      ]
    })
    .then(function(answer) {
      switch (answer.menu) {
        case "View All Employees":
          viewAll();
          break;
        case "View All Employees By Department":
          viewDepartment();
          break;
        case "View All Employees By Role":
          byRole();
          break;
        case "Add Employee":
          addEmployee();
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

//view all employees
function viewAll() {
  connection.query(
    // need to adjust this query
    "SELECT * FROM employee",
    function(err, res) {
      if (err) throw err;

      console.table(res);
      mainMenu();
    }
  );
}

function viewDepartment() {
  inquirer
    .prompt({
      type: "list",
      message: "Select the department to view their employees.",
      name: "deptEmp",
      choices: ["Sales", "Engineering", "Finance", "Legal"]
    })
    .then(function(answer) {
      if (answer.deptEmp === "Sales" || "Engineering" || "Finance" || "Legal") {
        connection.query(
          //need to adjust this query
          //"SELECT * FROM employee WHERE department.department = ?",
          [answer.deptEmp],
          function(err, res) {
            if (err) throw err;

            console.table(res);
            mainMenu();
          }
        );
      }
    });
}
