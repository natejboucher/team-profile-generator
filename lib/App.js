const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const validateEmail = require('./validate');

function App() {
    this.manager;
    this.engineer = [];
    this.intern = [];
}

App.prototype.initializeApp = function() {
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
            validate: idInput =>  (idInput) ? true : console.log('Please enter an ID number.')
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => validateEmail(emailInput)
            //validate: emailInput => (emailInput) ? true : console.log('Please enter a valid email.')
        }
        ])
}

module.exports = App;