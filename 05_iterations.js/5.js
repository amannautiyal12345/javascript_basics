// "for each" Loop


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){  // forEach(callbackfunction : (value : string , index : number , array : string[]) => void)
    // console.log(val);         // callback - func without name
 } )

 coding.forEach( (item) => {
    // console.log(item);
 } )

 function printMe(item){
    // console.log(item);
 }

 coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



//  "forEach" Loop for objects inside array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
