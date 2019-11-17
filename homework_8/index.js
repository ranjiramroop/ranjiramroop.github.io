//include node fs module
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const axios = require("axios");
const pdf = require("html-pdf");
const writeFileAsync = util.promisify(fs.writeFile);

async function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
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
  const response = axios.get(`https://api.github.com/users/${answers.github}`);
  return response;
}

async function getStars(answers) {
  const response = axios.get(
    `https://api.github.com/users/${answers.github}/starred_url`
  );
  return response;
}

function generateHTML(answers, gitInfo, stars) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script
      src="https://kit.fontawesome.com/d5da0e9812.js"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>GITHUB Profile Generator</title>
  </head>

  <body>
    <div class="bs-container" style="max-width: 600px;">
      <div
        class="jumbotron jumbotron-fluid"
        style="background-color: ${answers.color}; max-width: 600px;"
      >
        <div class="wrapper" style="max-width: 600px;" >
          <div class="wrapper">
            <img src="${gitInfo.data.avatar_url}" style="width: 180px; height: auto; align: center;"/>
          </div>
          <h1 class="display-4" style="text-align:center;">
            Hi! <br />
            My name is ${answers.name}!
          </h1>
          <h4 style="text-align:center;">
            <i class="fas fa-location-arrow"></i
            ><span class="badge badge-secondary">${answers.location}</span>
            <i class="fab fa-github"></i>
            <span class="badge badge-secondary">${answers.github}</span>
          </h4>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-sm-12 text-center"></div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-sm-12 text-center" style="padding: 2%;">
          <p>I'm a Full Stack Web Developer and teach people to code.</p>
        </div>
      </div>
      <div class="row justify-content-md-center" style="padding: 1%;">
        <div class="col-sm-6">
          <div
            class="card text-center"
            style="padding: 1%; background-color: ${answers.color};"
          >
            <h2>Public Repositories: ${gitInfo.data.public_repos}</h2>
          </div>
        </div>
        <div class="col-sm-6">
          <div
            class="card text-center"
            style="padding: 1%; background-color: ${answers.color};"
          >
            <h2>Followers: ${gitInfo.data.followers}</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center" style="padding: 1%;">
        <div class="col-sm-6">
          <div
            class="card text-center"
            style="padding: 1%; background-color: ${answers.color};"
          >
            <h2>GitHub Stars: ${stars}</h2>
          </div>
        </div>
        <div class="col-sm-6">
          <div
            class="card text-center"
            style="padding: 1%; background-color: ${answers.color};"
          >
            <h2>Following: ${gitInfo.data.following}</h2>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>


  `;
}

async function init() {
  try {
    const answers = await promptUser();

    const gitInfo = await gitAPICall(answers);
    const stars = getStars(answers);

    const html = generateHTML(answers, gitInfo, stars);

    await writeFileAsync("index.html", html);

    var readHtml = fs.readFileSync("index.html", "utf8");
    var options = { format: "Letter" };

    pdf.create(readHtml, options).toFile("test.pdf", function(err, res) {
      if (err) return console.log(err);
      console.log(err);
    });

    console.log("successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

init();
