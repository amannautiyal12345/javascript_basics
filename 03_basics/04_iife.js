// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()


(function chai(){
    // named iife
    console.log(`DB Connected`);
})() ;   // " ; " is must 


//  (funciton ki definition)(execution call)   immediately execute ho jaye & global scope ke pollution se jo problem hoti hai to us pollution  ko hatane ke liye use krte hai IIFE  ko


( (name) => {
    // simple iife
    console.log(`DB Connected Two ${name}`);   // DB Connected Two aman
})("aman")