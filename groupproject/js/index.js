var pos_table = [
 [-30,100], // Main Enterence
 [,], // Village/Farm
 [,], // East Remote
 [-30,75], // Bookstore
 [-30,90], // Crown/Merril
 [50,100], // Colleges 9 & Lewis
 [-65,100], // Science Hill
 [-75,70], //Kerr Hall
 [-80,30], // Porter/Rachel Carson
 [-80,10], // Oaks/Rachel Carson
 [-50,90], // Western Drive
 [-60,-60], //Arboretum
 [-75,90], //Kresge

]


var clr = 0;
function Drive(xval, yval){
    //$("#bus").css("transform", "translateX(" + xval + "/100)");
    //$("#bus").css("transform", "translateY("+ yval +"/100)");
    $("#bus").css("margin-left", xval * 5);
    $("#bus").css("margin-bottom", yval * 5);
    console.log("We have now driven somewhere!");
}