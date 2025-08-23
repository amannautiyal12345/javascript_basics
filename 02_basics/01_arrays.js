// arrays

const myArr = [0 , 1, 2 , 3, 4 , 5]
const heroes = ["spiddy" , "batman" , "ironman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]); // 1

//Array method

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9)
// console.log(myArr);  // [9,0,1,2,3,4,5,6]
// myArr.shift()
// console.log(myArr);  // [0,1,2,3,4,5,6]

// console.log(myArr.includes(9));  //false
//console.log(myArr.indexOf(3));  // 3

const newArrr = myArr.join() // converts into string datatype

// console.log(typeof newArrr);  // string
console.log(myArr);  // [ 0,1,2,3,4,5,6]

// slice and splice

console.log("A" , myArr);  //  A[0,1,2,3,4,5,6]
const myn1 = myArr.slice(1,3)

console.log(myn1);  // [1,2]
console.log("B" , myArr);  //  B[0,1,2,3,4,5,6]

const myn2 = myArr.splice(1,3) // original array manipulated(changed)

console.log(myn2); // [1,2,3]
console.log("C" , myArr); // C[0,4,5,6]

