//var c = 300         //Global Scope
  let a = 300
if(true){            // Block Scope
    let a = 10 
    const b = 20
   // console.log("INNER : " , a);
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
  const username = "aman"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);    (scope error)

  two()
}
// one()

if (true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = " youtube "
    console.log(username + website);  // hitesh youtube
  }
  // console.log(website);
}

//console.log(username);


// *****************interesting**************** //

console.log(addOne(4))  // can access 'addOne' before initialization

function addOne(num){
  return num+1
}
// addOne(4)

console.log(addTwo(4))   // Cannot access 'addTwo' before initialization
const addTwo = function(num){
  return num +2
}

// addTwo(4)