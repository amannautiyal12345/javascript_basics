// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// we will use "for in" loop for object bcuz objects are not iterable in "for of" loop


for (const key in myObject) {    // for(const key in object){
    //  console.log(`${key} shortcut is for ${myObject[key]}`);     // js shortcut is for javascript
                                                                  //  cpp shortcut is for C++
                                                                 //   rb shortcut is for ruby
                                                                //   swift shortcut is for swift by apple
}

//  "for in" loop for array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// "for in" loop is not iterable for maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }