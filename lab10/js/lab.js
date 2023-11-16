/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Maile Jones
   Date: Nov 18 2023
*/
function generateText() {
    const text = "I know it's for the better, Know it's for the better, know it's for the better, Know it's for the better.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
    //retrieve new dialogue
    const newText = generateText();
    //append new div to output
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});




