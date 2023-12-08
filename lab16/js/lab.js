// Author: Maile Jones
// Date: 12-05-2023
//
console.log("js loaded");
$.ajax({
    url:"https://api.chucknorris.io/jokes/random",
    method: "GET",
    dataType: "json",
    data: {},
    success: function (data){
        console.log(data);
        $("#output").append(data.value);
    },
    error: function (jqXHR, textStatus, errorThrown){
        console.log("error:",textStatus,errorThrown);
    }
})