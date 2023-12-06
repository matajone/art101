//
//Author: Maile Jones with Help from Wes Modes
//Created: 26 Nov 2023
//
function FizzBuzzBoom (){
    var oneLongString = '';

for(var index=1; index<=200; index++){

if (index % 105 == 0){
    oneLongString += "FizzBuzzBoom!<br>";
} else if (index % 35 == 0) {
    oneLongString += "BuzzBoom!<br>";
}  else if (index % 21 == 0) {
    oneLongString += "FizzBoom!<br>";
} else if (index % 15 == 0) {
    oneLongString += "FizzBuzz!<br>";
} else if (index % 3 == 0) {
    oneLongString += "Fizz!<br>";
} else if (index % 5 == 0) {
    oneLongString += "Buzz!<br>";
} else if (index % 7 == 0) {
    oneLongString += "Boom!<br>";
} else {
    oneLongString += index + '<br>'; 
}
}
$("#output").html(oneLongString);
}
FizzBuzzBoom();