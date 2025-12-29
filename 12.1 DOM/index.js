alert("Hello from JS file!");
alert("Welcome to DOM Manipulation");
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("Hello World");

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML= "Angela";
document.getElementsByTagName("li")[2].style.color="purple";
document.querySelector("ul .list").style.color="green"; 
document.querySelectorAll("ul .list")[0].style.color="orange";
document.querySelector("ul li a").style.color="red";
document.querySelector("button").style.backgroundColor="yellow";
document.querySelector("h1").classList.toggle("huge");
document.querySelector("a").setAttribute("href","https://www.bing.com");