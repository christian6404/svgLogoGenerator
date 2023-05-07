const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest')
const {Triangle, Square, Circle} = require('./lib/shapes')

class Blueprint{
   constructor(){
      this.shapeE = ''
      this.textE = ''
   }
   render() {
      return `<svg width="300" height="200">${this.shapeE}${this.textE}</svg>`
   }

   setShapeE(shape) {
      this.shapeE = shape.render()
   }
   setTextE(text, color) {
      this.textElement = `<text x="120" y="100" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
   }
}





const questionsAndAnswers = [
 {
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
 }
];