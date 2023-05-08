const {Triangle, Square, Circle} = require('./shapes.js')



const shapeT = new Triangle();
shapeT.setColor("blue");
expect(shapeT.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>');

const shapeS = new Square();
shapeS.setColor("orange");
expect(shapeS.render()).toEqual('<rect x="50" height="200" width="200" fill="orange"/>');

const shapeC = new Circle();
shapeC.setColor("yellow");
expect(shapeC.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="yellow"/>');