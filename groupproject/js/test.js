/*
var myButton = document.getElementById("button");
myButton.addEventListener("click",function (){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText ="<p> The sorting hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});
*/


/*function createObjectFromSelect(){
    const select = document.getElementById('stop');
    const select = document.getElementById('route');
    
    const selectedOption = select.options[selected.selectedIndex];

    const selectedObject = {
        busStop: selectedOption.stop,
        

    }
}*/


const timeChart = new Chart( "timeChart", {
    type: "bar",
    data: {
        labels: ["Early","OnTime","Late"],
        datasets: [{
        backgroundColor: ["red", "green","blue"],
            data: [Math.floor(Math.random() * 30), Math.floor(Math.random() * 40), Math.floor(Math.random() * 50)]
        }]
    },
    options: {}
})
console.log("Chart is" + timeChart);
$("#output").append(timeChart);


function getData(){
    var busrou = $("#route").val();
    console.log("Bus Route is: " + busrou);

    var bussto = $("#stop").val();
    console.log("Bus Stop Location is: " + bussto);

    var busarr = $("#arrive").val();
    console.log("Bus arrive status is: " + busarr);
    
    var busdata = [busrou, bussto, busarr];
    return busdata;
}