var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var img1="images/dice"+randomnumber1+".png";
var img2="images/dice"+randomnumber2+".png";
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);
if(randomnumber1===randomnumber2)
document.querySelector("h1").innerHTML="Draw";
else if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="❤ Player1 won";
else if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player2 won ❤";
