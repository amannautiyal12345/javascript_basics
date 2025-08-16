let score = "aman"

// console.log(typeof score);     // string
// console.log(typeof (score));   // string
 
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);   // Nan

// "33" => 33
//  "33adms" => NaN (notAnumber)
// true => 1 ; false => 0 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// "" => false (emptyString)
// "aman" => true

let someNumber = 33

let stringNumber = String(someNumber) 
// console.log(stringNumber);   // 33
// console.log(typeof stringNumber);  //string



//   ********************** Operations ******************//



let value = 2
let negValue = -value
// console.log(negValue) // -2
// console.log(2+2);  // 4
// console.log(2-2);  // 0
// console.log(2*2);  // 4
// console.log(2/2);  // 1
// console.log(2**3);  // 8
// console.log(2%3);  // 2

let str1 = "hello"
let str2 = "aman"

// let str3 = str1 + str2 
// console.log(str3);  // helloaman

// console.log("1" + 2) // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log( 1 + 2 + "2"); //32

// console.log( (3+3)*5%3);  // 0

console.log(+true);  // 1
console.log(-true);  // -1
console.log(+"");   // 0

let num1 , num2 , num3
num1 = num2 = num3 = 2+2
 
let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

