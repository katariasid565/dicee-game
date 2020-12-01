//randomNumber(1-6)------------------------------------------------------------------------------------

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);




//for second image or Player.------------------------------------------------------



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);





//winner,loser or draw-------------------------------------------------------------


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player2 wins!";
} else {
  document.querySelector("h1").innerHTML = "round draw!"
}
