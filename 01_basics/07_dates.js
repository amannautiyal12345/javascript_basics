//Dates

let myDate = new Date()
// console.log(myDate.toString());   // Mon Jul 21 2025 17:40:41 GMT(India Standard Time)
// console.log(myDate.toDateString());  // Mon Jul 21 2025 
// console.log(myDate.toLocaleString());  // 21/7/2025 , 5:40:41 pm
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023 , 0 , 24)
// let myCreatedDate = new Date(2025 , 0 , 22 , 3, 40)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());   // 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  //1753099998619   //(millisecond me value dega)
// console.log(myCreatedDate.getTime()); // 1673634600000
// console.log(Math.floor(Date.now()/1000)); // 1753099998 //(seconds me value dega)

let newDate = new Date()
console.log(newDate);  // 2025-07-21T12:13:18.621Z
console.log(newDate.getMonth() + 1); // 7
console.log(newDate.getDate()); // 21

//`${newDate.getDate()} and the time is`

newDate.toLocaleString('default' ,{
    weekday : "long"
})
console.log(newDate);  // 2025-07-21T12:13:18.621Z