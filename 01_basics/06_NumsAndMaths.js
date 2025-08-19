const score = 400
  //console.log(score); // 400

const balance = new Number(100)
 //console.log(balance); // [number :100]

 //console.log(balance.toString().length);  //3
 //console.log(balance.toFixed(1));  // 100.0

const otherNumber = 123.8568

 //console.log(otherNumber.toPrecision(3));  // 124

const hundreds = 1000000
 //console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

// +++++++++++++++++  MATHS  ++++++++++++++++++++++

// console.log(Math);     // Object [Math] {}
// console.log(Math.abs(-4));  // 4
// console.log(Math.round(4.7)); // 5 
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.floor(4.8)); // 4
// console.log(Math.min(4,5,3,6)); // 3
// console.log(Math.max(4,5,3,6)); // 6 


console.log(Math.random());     // 0.430908405402565
console.log((Math.random()*10) + 1);  // 4.0995735249055
console.log((Math.random()*10) + 1);  // 1.514284658

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // 19
