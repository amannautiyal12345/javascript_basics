const name = "aman"
const repoCount = 49
// console.log(name + repoCount + "value");  // aman49value
 
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // hello my name is aman and my repo count is 49

const gameName = new String ("aman-nautiii-hello-yess")

// console.log(gameName[0]);   // a
// console.log(gameName.__proto__);  //{}

// console.log(gameName.length);  //23
console.log(gameName.toUpperCase()); // AMAN-NAUTIII-HELLO-YESS
console.log(gameName.charAt(2)); // a
console.log(gameName.indexOf('i')); //9

const newString = gameName.substring(0,4)
console.log(newString); //aman

const anotherString = gameName.slice(-9,4)
console.log(anotherString); //        //(empty spaces) and isko dkhna bhi pdega ek bar agar jarurat pdegi

const newStringOne = "    aman     "
console.log(newStringOne);  //     aman      
console.log(newStringOne.trim()); // aman

const  url = "https://aman.com/aman%20nautiyal"

console.log(url.replace('%20' , '-'))  //https://aman.com/aman-nautiyal
console.log(url.includes('aman')); // true
console.log(gameName.split('-')); // ['aman' , 'nautiii' , ' hello' , 'yess']