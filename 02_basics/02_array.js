const marvel = ["spiddy" , "thor" , "ironman"]
const dc = ["superman" , " batman" , "flash"];

//marvel.push(dc)

//console.log(marvel);  // ['spiddy', 'thor' , 'ironman' , ['superman', 'batman', 'flash' ]]

//console.log(marvel[3][1]);  // batman

const allHeroes = marvel.concat(dc)

console.log(allHeroes);  // ['spiddy', 'thor' , 'ironman' , 'superman' , 'batman' , 'flash']

// const allHeroes = [...marvel , ...dc]  //spread (kaanch ka gilaas)
 console.log(allHeroes);   //[ 'spiddy', 'thor', 'ironman', 'superman', ' batman', 'flash' ]

const another_array = [1,2,3 ,[2,3,6],3,4,[5,4,2,[4,45,2]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  // [1,2,3,2,3,6,3,4,5,4,2,4,45,2]

console.log(Array.isArray("AMAN"));  // false
console.log(Array.from("AMAN"));  // ['A' , 'M' , 'A' , 'N']
console.log(Array.from({name:"AmaN"})); // []       (interesting) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3)); // [100,200,300]



