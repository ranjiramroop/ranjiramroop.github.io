//include node fs module
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const axios = require("axios");
const writeFileAsync = util.promisify(fs.writeFile);

// convertFactory = require('electron-html-to');
// const conversion = convertFactory({
//   converterPath: convertFactory.converters.PDF
// });
// const electron = require('electron');
// conversion({ html: '<h1>Hello World</h1>' }, function(err, result) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(result.numberOfPages);
//   console.log(result.logs);
//   result.stream.pipe(fs.createWriteStream('profile.pdf'));
//   conversion.kill(); // necessary in the electron-server strategy, see below for details
// });

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

  async function gitAPICall(answers) {
    const response = axios
    .get('https://api.github.com/users/$answers.github}')
    return response;
  }
  async function gitRepoAPICall(answers) {
    const response = axios
    .get('https://api.github.com/users/$answers.github}/repos')
    return response;
  }
  function stars(gitRepos) {
    let startCount=0;
    for(let i=0; i<gitRepos.data.length; i++){
      startCount+=gitRepos.data[i].stargazers_count;
    }
    return startCount;
  }

  promptUser()
    .then(function(answers){
      console.log(answers);
      const html = generateHTML(answers);

      return writeFileAsync("index.html", html);
    })
    .then(function(){
      console.log("Successfully wrote to index.html");
    })
    .catch(function(err) {
      console.log(err);
    });
