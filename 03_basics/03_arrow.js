const user = {
    username :  " hitesh" , 
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
       console.log(this);
    }
}

// user.welcomeMessage()
//  user.username = "sam"
// user.welcomeMessage()

// console.log(this);  

// function chai(){                          (function ke andrr this use nahi kr skte only in object)
//     let username = "aman"
//     console.log(this.username)
// }
// chai()

// same upar aur niche

// const chai = function(){
//     let username = " aman "
//     console.log(this.username);
// }
//chai()

const chai = () => {                          // arrow function
    let username = " aman "
    console.log(this.username);
}
// chai()

// const addTwo = (num1 , nm2) => {              (curly braces mein return use hota hai)
//     return num1 + num2
// }

//const addTwo =  (num1 , num2) => num1 + num2
// const addTwo =  (num1 , num2) =>(num1 + num2) //(parenthesis me return use nhi hota)
const addTwo =  (num1 , num2) => ({username : "aman"}) 
console.log(addTwo(3,4)); 
