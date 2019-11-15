//include node fs module
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const writeFileAsync = util.promisify(fs.writeFile);

convertFactory = require('electron-html-to');
const conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});
const electron = require('electron');
conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
  if (err) {
    return console.error(err);
  }
  console.log(result.numberOfPages);
  console.log(result.logs);
  result.stream.pipe(fs.createWriteStream('profile.pdf'));
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
        name: "github",
        message: "What is your Github username?"
      },
      {
        type: "input",
        name: "color",
        message: "What is your favorite color?"
      },
      {
        type: "input",
        name: "location",
        message: "Where do your reside?"
      }
    ]);
  }

  promptUser()
    .then(function(answers){
      console
      const html = generateHTML(answers);

      return writeFileAsync("index.html", html);
    })
    .then(function(){
      console.log("Successfully wrote to index.html");
    })
    .catch(function(err) {
      console.log(err);
    });
