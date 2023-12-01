// index.js - for Lab 9 Libraries and JQuery
// Author: Maile Jones
// Date:11/10/2023


//
// Code strutcure built wiht help from Wes Modes

//addressing my element
$("#output");
var myNiceElement=$("#output");
//add button to change color
$("#output").append("<button id='color-change'>make special</button>");
//add event listener
$("#color-change").click(
    function(){$("#output").addClass("special"); });
//change back button
$("#output").append("<button id='change-back'>change back</button>");  
$("#change-back").click(
    function(){$("#output").toggleClass("special");});

$("#challenge");
//changing html button
var myEpicElement=$("#challenge");
$("#challenge").append("<button id='new-button'>cool jazz</button>");
$("#new-button").click(
    function(){$("#challenge").html("JK THIS WAS SO HARD");}
);

$("#party-toggle button").click(function(){
    if ($("body").hasClass("party")) {
      $("body").removeClass("party");
      $("#party-toggle button").html("Party");
    }
    else {
      $("body").addClass("party");
      $("#party-toggle button").html("Business");
      debugger;
    }
  })