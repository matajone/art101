// index.js - for Lab 6 Arrays and Objects
// Author: Maile Jones
// Date:10/26/2023

// Define Variables
var myTransportation = [ "bus","bike","walk","Uber"];

// create an object for main ride
var myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Silver",
  year: 2009,
  age: function() {
    return 2023 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ",myTransportation,"</br>" );
document.writeln("My Dream Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");