var randomNumber1 = (Math.floor(Math.random() * 6))+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomnumber2 = (Math.floor(Math.random()*6))+1;
var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnumber2 > randomNumber1){
     document.querySelector("h1").innerHTML = "Player 2 Wins!";
      }

else if(randomnumber2 < randomNumber1){
     document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }

else{
    document.querySelector("h1").innerHTML = "Draw!";
}