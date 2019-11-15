//include node fs module
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});
convertFactory = require('electron-html-to');
const writeFileAsync = util.promisify(fs.writeFile);

conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
  if (err) {
    return console.error(err);
  }
  console.log(result.numberOfPages);
  console.log(result.logs);
  result.stream.pipe(fs.createWriteStream('/path/to/anywhere.pdf'));
  conversion.kill(); // necessary in the electron-server strategy, see below for details
});

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
  }
  promptUser;
  