// Author: Maile Jones
// Date: 12-05-2023
//
console.log("js loaded");

$.ajax({
    url:"https://xkcd.com/5/info.0.json",
    method: "GET",
    dataType: "json",
    data: {},
    success: function (data){
        console.log(data);
        $("#output").append(data.month+"-"+data.day+"-"+data.year+"</br>");
        $("#output").append(data.img);
        $("#output").append(data.alt);
        $("#output").after("<img src="+">");
    },
    error: function (jqXHR, textStatus, errorThrown){
        console.log("error:",textStatus,errorThrown);
    }
})