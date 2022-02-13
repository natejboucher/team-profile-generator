const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const validateEmail = require('./validate');
const Template = require('../src/template');
const writeFile = require('../src/writeFile');

function App() {
    this.manager;
    this.engineers = [];
    this.interns = [];
}
// Initial function to collect Manager information
App.prototype.initializeApp = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the managers name?',
                validate: nameInput => (nameInput) ? true : console.log('Please enter a name.')
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?',
                validate: idInput => (idInput) ? true : console.log('Please enter an ID number.')
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address?',
                validate: emailInput => validateEmail(emailInput)
            },
            {
                type: 'text',
                name: 'officeNum',
                message: 'What is their office number?',
                validate: offNumInput => (offNumInput) ? true : console.log('Please enter a office number.')
            }
        ])
        .then(teamData => {
            this.manager = new Manager(teamData.name, teamData.id, teamData.email, teamData.officeNum);
            this.addTeamMember();
        })
}
// Menu to add members, or finish the app
App.prototype.addTeamMember = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addMember',
                message: 'Choose a new member to add, or finish your team.',
                choices: [
                    'Add Engineer.',
                    'Add Intern.',
                    'Finish Team.'
                ],
            }
        ])
        .then(response => {
            if (response.addMember === 'Add Engineer.') {
                this.addEngineer();
            } else if (response.addMember === 'Add Intern.') {
                this.addIntern();
            } else {
                this.dataHandler();
            }
        })
}
// Inquirer to add engineer information and push to engineer array.
App.prototype.addEngineer = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the engineers name?',
                validate: nameInput => (nameInput) ? true : console.log('Please enter a name.')
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?',
                validate: idInput => (idInput) ? true : console.log('Please enter an ID number.')
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email address?',
                validate: emailInput => validateEmail(emailInput)
            },
            {
                type: 'text',
                name: 'github',
                message: 'What is their Github username?',
                validate: offNumInput => (offNumInput) ? true : console.log('Please enter their Github user.')
            }
        ])
        .then(response => {
            engineerInput = new Engineer(response.name, response.id, response.email, response.github);
            this.engineers.push(engineerInput);
            this.addTeamMember();
        })
}
// Inquirer to add intern information and push into intern array
App.prototype.addIntern = function () {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the interns name?',
                validate: nameInput => (nameInput) ? true : console.log('Please enter a name.')
            },
            {
                type: 'text',
                name: 'id',
                message: 'What is their employee ID?',
                validate: idInput => (idInput) ? true : console.log('Please enter an ID number.')
            },
            {
                type: 'text',
                name: 'email',
                message: 'What is their email address?',
                validate: emailInput => validateEmail(emailInput)
            },
            {
                type: 'text',
                name: 'school',
                message: 'What school did they attend?',
                validate: offNumInput => (offNumInput) ? true : console.log('Please enter a school name.')
            }
        ])
        .then(response => {
            internInput = new Intern(response.name, response.id, response.email, response.school);
            this.interns.push(internInput);
            this.addTeamMember();
        })
}
// Data handler to send collected info to template file and writeFile function.
App.prototype.dataHandler = function () {
    let template = new Template().createHtml(this.manager, this.engineers, this.interns);
    //console.log(template);
    writeFile(template)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = App;