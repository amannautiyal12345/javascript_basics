
function sayMyName (){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

//sayMyName() 

// function addTwoNumber (number1 , number2) {
//     console.log(number1 + number2);
// }
function addTwoNumber (number1 , number2) {
    // let result = number1 + number2
    // return result
   return number1 + number2
}

const result = addTwoNumber(3,4)
 // console.log("RESULT:" , result);  // RESULT : 7

function loginUserMessage (username = "sam"){
     if (!username) {
        //   if (username ===undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("AMAN")); // AMAN just logged in
// console.log(loginUserMessage(""));  // please enter a username
// console.log(loginUserMessage());   // sam just logged in

// function calculateCartPrice (...num1){    // here it is rest operator not spread
//     return num1
// }
//  console.log(calculateCartPrice(200,  300 , 400 , 600));  // [200, 300 , 400 , 600]


function calculateCartPrice (va1 , val2 ,...num1){    // here it is rest operator not spread
    return num1
}
//  console.log(calculateCartPrice(200,  300 , 400 , 500)); // [400 , 500]

 const user = {
    username :  "AMAN"
    , price : 1999
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); // Username is sam and price is 399
 }

//  handleObject(user)   // Username is AMAN and price is 1999
 handleObject({
    username : " sam" ,
    price : 399
 })

 const myNewArray = [ 200 , 300 ,400 , 500 ,600]
 function returnSecondArray(getArray){
    return getArray[1]
 }

//  console.log(returnSecondArray(myNewArray));   // 300
 console.log(returnSecondArray([200 , 300 , 400 , 500 , 600]));  //300
  