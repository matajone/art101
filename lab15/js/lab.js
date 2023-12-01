//Author: Maile Jones
//Date: 11-30-23
//Lab 15: Ajax
//Help with code from ChatGPT and Illya

$(document).ready(function (){
    $("#activate").on("click", function(){
   
$.ajax({
    url:"https://yesno.wtf/api",
    method: "GET",
    dataType: "json"
})
.done(
    function(many) {
        $("#output").append(many.answer);
        $("#output").after("<img src="+many.image+">");

    })

    .fail(
        function(jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        });
         
    });
});
