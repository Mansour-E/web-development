// with 2 arg in css() you will set a value , with 1 arg , you will get the value 
$("h1").css("color","blue");

alert($("h1").css("color"));

// it is bether that we use css in style sheet , not here 

$("h1").addClass("font-size");
$("h1").removeClass("font-size");
$("h1").hasClass("font-size");// if das class ist there 

$("h1").text("bye");
$("button").html("dont click me");

$("h1").click(function(){
    $("h1").css("color","purple");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

