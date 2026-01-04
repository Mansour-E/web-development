// game logic 

var colors = ["green" , "red" , "yellow" , "blue"];
var sequences = [];

function random(){
    var randomnum = Math.floor(Math.random() * 4) ; 
    return randomnum; 
}

function playSound(arg){

    switch(arg){
        case 0 : var audio = new Audio("./sounds/green.mp3");
                    audio.play();
                    console.log("green");
                    sequences.push(0);
                    break;
        case 1: var audio = new Audio("./sounds/red.mp3");
                    audio.play();
                    console.log("red");
                    sequences.push(1);
                    break;
        case 2: var audio = new Audio("./sounds/yellow.mp3");
                    audio.play();
                    console.log("yellow");
                    sequences.push(2);
                    break;
        case 3: var audio = new Audio("./sounds/blue.mp3");
                    audio.play();
                    console.log("blue");
                    sequences.push(3);
                    break;
            }
}


for(let i = 0; i < 4 ; i++){
    $("."+colors[i]).on("click",function(){
    playSound(i);
    console.log(sequences);
});}


// check die sequences

function nextSequence(num){

}



for (var i= 0 ; i < sequences.length; i++){

}