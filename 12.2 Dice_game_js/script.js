var random1 = Math.floor(Math.random()*6);
var random2 = Math.floor(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "images/dice" + (random1 + 1) + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + (random2 + 1) + ".png");

if(random1 == random2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}   