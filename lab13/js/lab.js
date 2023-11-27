//
//Author: Maile Jones
//Created: 26 Nov 2023
//

for(var index=1; index<=200; index++){
   var oneLongString , index ;

if (index % 105 == 0){
    oneLongString += "BuzzBoom!<br>";
} else if (index % 21 == 0) {
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