const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')
const shapes = require('./lib/shapes')

const questionsAndAnswers = [{
    type: 'input',
    message: 'What text would you like to include in your logo? (MAX OF 3 CHARACTERS) :',
    name: 'text',
 },
 {
    type: 'input',
    message: 'What color would you like the text to be? (Normal colors or hexadeciaml number)',
    name: 'textColor'
 },
 {
    type: 'list',
    message: 'Which license would you like to include?',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shape',
 },
 {
    type: 'input',
    message: 'What color would you like the shape to be? (Normal colors or hexadeciaml number)',
    name: 'shapeColor'
 },
];