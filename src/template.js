const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Template() {
    this.manager
    this.engineer = [];
    this.intern = [];
}
// function to generate Manager card
Template.prototype.createManager = function (manager) {
    return `
    <div class="card p-0 col-3 shadow m-2">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4><span class="oi oi-briefcase"></span>${manager.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">
                Email:  <br/>
                <a href="mailto:${manager.email}">${manager.email}</a>
            </li>
            <li class="list-group-item">
                Office Number: <br/>
                ${manager.getOfficeNum()}
            </li>
        </ul>
    </div>
            `
}
// function to generate Engineer cards
Template.prototype.createEngineer = function (engineer) {
    let engineerCards = [];
    for (let i = 0; i < engineer.length; i++) {
        engineerCards.push(`
        <div class="card p-0 col-3 shadow m-2">
            <div class="card-header">
                <h3>${engineer[i].name}</h3>
                <h4><span class="oi oi-wrench"></span>${engineer[i].getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer[i].id}</li>
                <li class="list-group-item">
                    Email:  <br/>
                    <a href="mailto:${engineer[i].email}">${engineer[i].email}</a>
                </li>
                <li class="list-group-item">
                    Github: <br/>
                    <a class="text-decoration-none" href="${engineer[i].getGithub()}">${engineer[i].github}</a>
                </li>
            </ul>
        </div>
            `);
    }
    return engineerCards.join('');
}
// function to generate Intern cards
Template.prototype.createIntern = function (intern) {
    let internCards = [];
    for (let i = 0; i < intern.length; i++) {
        internCards.push(`
        <div class="card p-0 col-3 shadow m-2">
            <div class="card-header">
                <h3>${intern[i].name}</h3>
                <h4><span class="oi oi-book"></span>${intern[i].getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern[i].id}</li>
                <li class="list-group-item">
                    Email:  <br/>
                    <a href="mailto:${intern[i].email}">${intern[i].email}</a>
                </li>
                <li class="list-group-item">
                    School:
                    ${intern[i].getSchool()}
                </li>
            </ul>
        </div>
            `);
    }
    return internCards.join('');
}


Template.prototype.createHtml = function (manager, engineer, intern) {
    this.manager = manager;
    this.engineer = engineer;
    this.intern = intern;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid bg-dark">
            <div class="container">
                <h1 class="text-center text-light">Team Profiles</h1>
            </div>
        </header>
        <main class="container">
            <section class="row">
                ${this.createManager(this.manager)}
                ${this.createEngineer(this.engineer)}
                ${this.createIntern(this.intern)}
            </section>
        </main>
    </body>
    </html>
    `;
};

module.exports = Template;