// index.js - for Lab 8 Anon Functions and Callbacks
// Author: Maile Jones
// Date:11/03/2023

//
// Code structure from Wes Modes

function isEven(x){
    return (x % 2 == 0);
}

//test function
console.log("is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

var array = [20, 100, 15, 13, 4]
console.log("My Array", array);

var resultOne = array.map(isEven);
//should return [True, True, False, False, True]
console.log("Test of eveness array:", resultOne);


var resultTwo = array.map(function(x){ 
    return x ** 0.5;
})
//should return [ 4.472135955, 10, 3.87298334621, 3.60555127546, 2]
console.log("Squareroot of array:", resultTwo);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = array; //show results here

var outputEl = document.getElementById("output2"); 
outputEl.innerHTML = resultOne; //show results here

var outputEl = document.getElementById("output3"); 
outputEl.innerHTML = resultTwo;//show results here



