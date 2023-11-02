// index.js - for Lab 7 Functions
// Author: Maile Jones
// Date:10/31/2023

//
// Code structure from Wes Modes

// userNameSort- function that sorts the letters in a user's name
function userNameSort() {
    var userName = window.prompt(" Hello, enter username for reconfiguration.");
    console.log("userName =",userName);

    //
    // Split string to array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    //
    // Sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //
    // Turn array back into string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted ;

}
//output
document.writeln("Name reconfigured: ",
    userNameSort(), "</br>");
