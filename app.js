// higher order functions


// A Higher Order Function/Method is a function that:
//     1. Takes a function as a parameter
        // or/ and
//     2. Returns a function
    
// Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function.

// callback is a function passed into another function


function doMath(num1, num2, callback){
    return  callback(num1, num2)
}
function sum(num1, num2){
    return num1+num2
}

function subtract(num1, num2){
    return num1 - num2
}

console.log(doMath(5, 10, sum ))