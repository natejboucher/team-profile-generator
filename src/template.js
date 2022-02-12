const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function Template() {
    this.manager
    this.engineer = [];
    this.intern = [];
}

Template.prototype.createManager = function(manager) {
    return `
    <div class="card p-0 col-3 shadow">
        <div class="card-header">
            <h3 class="text-center">${manager.name}</h3>
            <h4>Icon ${manager.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: Id goes here.</li>
            <li class="list-group-item">
                Email:  <br/>
                ${manager.email}
            </li>
            <li class="list-group-item">
                Office Number: <br/>
                ${manager.getOfficeNum()}
            </li>
        </ul>
    </div>
            `
}

Template.prototype.createHtml = function (manager, engineer, intern) {
    this.manager = manager;
    this.engineer = engineer;
    this.intern = intern;
    return `${this.createManager(this.manager)}`
    // return `
    // <!DOCTYPE html>
    // <html lang="en">

    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

    //     <title>Team Profile Generator</title>
    // </head>

    // <body>
    //     <header class="jumbotron jumbotron-fluid bg-dark">
    //         <div class="container">
    //             <h1 class="text-center text-light">Team Profiles</h1>
    //         </div>
    //     </header>

    //     <main class="container">
    //         <section class="row">
    //             ${createManager(this.manager)}

    //         </section>
    //     </main>

    // </body>

    // </html>
    // `
}

module.exports = Template;