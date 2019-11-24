const inquirer = require("inquirer");
const fs = require("fs");

async function theManager() {
  console.log("$$$$ Input Department Info $$$$");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Manager's name.",
        name: "managerName"
      },
      {
        type: "input",
        message: "Enter Manager's ID.",
        name: "managerID"
      },
      {
        type: "input",
        message: "Enter Manager's email.",
        name: "managerEmail"
      },
      {
        type: "input",
        message: "Enter Manager's office.",
        name: "managerOffice"
      }
    ])
    .then(function({ managerName, managerID, managerEmail, managerOffice }) {
      employeeType();
      fs.appendFile(
        "output/./department.html",
        `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css"/>
    <script src="https://kit.fontawesome.com/d5da0e9812.js" crossorigin="anonymous"></script>
    <title>Document</title>
  </head>

  <body>
    <header>
      <h1>Department Employees</h1>
    </header>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="cardContent1">
              <h4 class="cardTitle">${managerName}</h4>
              <i class="fas fa-coffee"></i><p>Manager</p>
            </div>
            <div class="cardContent2">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <p>ID: ${managerID}</p>
                </li>
                <li class="list-group-item">
                  <p>Email: ${managerEmail}</p>
                </li>
                <li class="list-group-item">
                  <p>Office Number: ${managerOffice}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
        err => {
          if (err) throw err;
        }
      );
    });
}

async function employeeType() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Who are you adding?",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "Complete Adding Employees."]
      }
    ])
    .then(function(answer) {
      switch (answer.employeeRole) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          console.log("$$$$ Please See Generated HTML for Completed List $$$$");
          fs.appendFile(
            "output/./department.html",
            "</div></div></body></html>",
            err => {
              if (err) throw err;
            }
          );
      }
    });
}

function addEngineer() {
  console.log("$$$$ Enter Engineer's information $$$$");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Engineer's name?",
        name: "engineerName"
      },
      {
        type: "input",
        message: "Engineer's ID?",
        name: "engineerID"
      },
      {
        type: "input",
        message: "Engineer's email address?",
        name: "engineerEmail"
      },
      {
        type: "input",
        message: "Engineer's GitHub username?",
        name: "engineerGithub"
      }
    ])
    .then(function({
      engineerName,
      engineerID,
      engineerEmail,
      engineerGithub
    }) {
      employeeType();
      fs.appendFile(
        "output/./department.html",
        `
      <div class="col-md-4">
  <div class="card">
    <div class="cardContent1">
      <h4 class="cardTitle">${engineerName}</h4>
      <i class="fas fa-glasses"></i><p>Engineer</p>
    </div>
    <div class="cardContent2">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p>ID: ${engineerID}</p>
        </li>
        <li class="list-group-item">
          <p>Email: ${engineerEmail}</p>
        </li>
        <li class="list-group-item">
          <p>Github: ${engineerGithub}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
`,
        err => {
          if (err) throw err;
        }
      );
    });
}

function addIntern() {
  console.log("$$$$ Enter Intern's information $$$$");
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Intern's name?",
        name: "internName"
      },
      {
        type: "input",
        message: "Intern's ID?",
        name: "internID"
      },
      {
        type: "input",
        message: "Intern's email address?",
        name: "internEmail"
      },
      {
        type: "input",
        message: "Intern's GitHub username?",
        name: "internGithub"
      }
    ])
    .then(function({ internName, internID, internEmail, internGithub }) {
      employeeType();
      fs.appendFile(
        "output/./department.html",
        `
      <div class="col-md-4">
  <div class="card">
    <div class="cardContent1">
      <h4 class="cardTitle">${internName}</h4>
      <i class="fas fa-user-graduate"></i><p>Intern</p>
    </div>
    <div class="cardContent2">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p>ID: ${internID}</p>
        </li>
        <li class="list-group-item">
          <p>Email: ${internEmail}</p>
        </li>
        <li class="list-group-item">
          <p>Github: ${internGithub}</p>
        </li>
      </ul>
    </div>
  </div>
</div>
`,
        err => {
          if (err) throw err;
        }
      );
    });
}

theManager();
