// const tinderUser = new Object() //singeltonObject
const tinderUser = {}  // non singleton object

tinderUser.id ="123qbd"
tinderUser.name = "AMAN"
tinderUser.isLoggedIn = false 

 //console.log(tinderUser);  // { id: '123qbd', name: 'AMAN', isLoggedIn: false }
 
const regularUser = {
    email : "some@gmail.com" ,
    fullname : {
        userFullname : {
            firstname: "AMAN" ,
            lastname: "NAUTIYAL"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname)  // AMAN

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1, obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }



// const obj3 = Object.assign({}, obj1 , obj2)  // (target , source)  // both this and down thing are same

const obj3 = {...obj1 , ...obj2}   //SPREAD(we will use this)
//console.log(obj3);     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



const users = [              // objects inside array
    {
        id : 1 ,
        email : "h@gmail.com"
    },
    {
        id : 1 ,
        email : "h@gmail.com"
    },
    {
        id : 1 ,
        email : "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);          // { id: '123qbd', name: 'AMAN', isLoggedIn: false }

// console.log(Object.keys(tinderUser));       // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));     // [ '123qbd', 'AMAN', 'false' ]
// console.log(Object.entries(tinderUser));     // [keys , values] 
// // [ [ 'id', '123qbd' ], [ 'name', 'AMAN' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));     // true


const course = {
    coursename : " js in hindii",
    price : "999" , 
    courseInstructor : " hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);    // ye bhi dubara dekhna hai agar jarurat pdegiii
console.log(instructor);    // hitesh


// {                                           [JSON (jsObjectNotations)](API)
//     "name" : "hitesh",
//    " coursename" : " js in hindi" ,
//      "price" : " free"
// }

[
    {},
    {},
    {}
]

