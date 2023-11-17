//
//Author: Maile Jones
//Date: 11-20-23
//credits to Wes Mode for assisting with the code
//
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
  };

  // click listener for button
$("#submit").click(function(){
   // get value of input field
const userName = $("#username").val(); 
// append a new div to our output div
$("#output").html('<div class="text"><p>' + userName + '</p></div>');
});
