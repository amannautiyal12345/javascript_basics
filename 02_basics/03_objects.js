//singleton
//object.create (constructor)

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name : "AMAN" ,
    "full name": "AMAN NAUTIYAL",
    age : 21 ,
    [mySym] : "mykey1",   // symbol syntax
    location: "RISHIKESH" ,
    email: "aman@google.com" ,
    isLoggedIn : false ,
    lastLoginDays: ["monday" , "tuesday"]
}

// console.log(JsUser.email);  // aman@google.com
// console.log(JsUser["email"]);  // aman@google.com
// console.log(JsUser["full name"]);  // AMAN NAUTIYAL 
// console.log(JsUser[mySym]);   // mykey1

// JsUser.email = "amannautiyal@google.com"
// Object.freeze(JsUser)  // now changes will not propagate i.e will not change
// JsUser.email = "akdjmskjdkandka.com"

// console.log(JsUser.email);  // amannautiyal@google.com

console.log(JsUser);  //{                              (output)
                      //    name: 'AMAN',
                      //    'full name': 'AMAN NAUTIYAL',
                      //    age: 21,
                      //    location: 'RISHIKESH',
                      //    email: 'amannautiyal@google.com',
                      //    isLoggedIn: false,
                      //    lastLoginDays: [ 'monday', 'tuesday' ],
                      //    [Symbol(key1)]: 'mykey1'
                      //     }

JsUser.greeting = function (){
    console.log("hello JS user");  // hello JS user
}
console.log(JsUser.greeting());   // hello JS user

JsUser.greetingtwo = function (){
    console.log(`hello JS user, ${this.name}`);  // hello JS user , AMAN
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());

