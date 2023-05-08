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
      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeE}${this.textE}</svg>`
   }

   setShapeE(shape) {
      this.shapeE = shape.render()
   }
   setTextE(text, color) {
      this.textE = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
   }
}





const questionsAnduserInput = [
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




function writeToSVG(fileName, data) {
	console.log('Starting write to file')
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("SVG File Generated!");
    });
}

async function initilization() {
   var svgString = "";
   var svgFile = "logo.svg";
 
   const userInput = await inquirer.prompt(questionsAnduserInput);
   console.log(userInput)
   var userText = "";
   if (userInput.text.length > 0 && userInput.text.length < 4) {
      userText = userInput.text;
   } else {
      console.log("Please only enter 1-3 characters");
      return;
   }
  
   let fontColor = userInput.textColor;
   let shapeColor = userInput.shapeColor;
   let shapeType = userInput.shape;
 
   let shapeInstance;
   if (shapeType === "Square" || shapeType === "square") {
       shapeInstance = new Square();
      //  shapeInstance.setColor(shapeColor);
   }
   else if (shapeType === "Circle" || shapeType === "circle") {
      shapeInstance = new Circle();
      // shapeInstance.setColor(shapeColor);
   }
   else if (shapeType === "Triangle" || shapeType === "triangle") {
      shapeInstance = new Triangle();
      // shapeInstance.setColor(shapeColor);
   }
   else {
      console.log("Invalid shape!");
      return;
   }
 
   shapeInstance.setColor(shapeColor);
 
   let svg = new Blueprint();
   svg.setTextE(userText, fontColor);
   svg.setShapeE(shapeInstance);
   svgString = svg.render();
   
   console.log("Shape generation complete!");
   writeToSVG(svgFile, svgString); 
 }
initilization()