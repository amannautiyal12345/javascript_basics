// Primitive

// 7 types : String , Boolean , Number , null , undefined ,Symbol , BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
 let userEmail

 const id = Symbol('123')
 const anotherId = Symbol ('123')

 console.log(id === anotherId) // false

 const bigNumber = 3784397483783n

// Reference(Non Primitive)
// Array , Objects , Functions(in sbka datatype object hi hogaa)

const heroes = ["spiddy" , "thor" , "robin"];
 let myObj = {
    name: "aman",
    age: 21 ,
 }

 const myFunction = function(){
    console.log("Hello World");    // we have not called it yet
 }

 /*********************************************** */
 // Stack(Primitive) {copy} AND Heap(Non-Primitive)  {reference}{original} memory 

 let myYoutubeName = "aman"
  let anothername = myYoutubeName 
  anothername = "student"

  console.log(myYoutubeName); // aman
  console.log(anothername);  // student

  let userOne ={
    email:"user@google.com",
    UPI : "user@okicici"
  }
  let userTwo = userOne 
  userTwo.email = "amannautiyal@gmail.com"

  console.log(userOne.email); // amannautiyal@gmail.com
  console.log(userTwo.email);  // amannautiyal@gmail.com