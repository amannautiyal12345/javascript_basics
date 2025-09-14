// "for of"  loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {      // for(const "iterator" of "object"){
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps - used for unique values and are always in order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);   // unique element leta hai 

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// "for of" looop for an object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// *object is not iterable here so watch the next js file

// * maps are not iterable in "for in" loop