
function randomNumber() {
  var number = Math.random()*100 ;
  var roundNumber = Math.floor(number);
  return roundNumber;
}

var randomNumber = randomNumber();
console.log(randomNumber);

var inputElement = document.getElementById('inputGame1');
var buttonElement = document.getElementById("buttonEnterGame1");
var infoElement = document.getElementById('infoGame1');
var pointElement = document.getElementById('pointsGame1');
var resetElement = document.getElementById('resetGame1');

function showInfo() {
  var userInput = inputElement.value; //numero que mete el usuario
  showInfo.innerHTML = compareNumbers();
}

var tries = 0;
var maxTries = 7;

function compareNumbers() {
  var userInput = inputElement.value;
  tries = tries + 1;
  if (randomNumber > userInput) {
    if ((randomNumber - userInput) >= 10) {
      infoElement.innerHTML = "Your number is very low. Try again" ;
      if(tries === maxTries ) {
        infoElement.innerHTML = "Sorry, your tries are over. Play again."
        document.getElementById('resetGame1').style.visibility = "visible" ;
        document.getElementById("audioLoserGame1").play();
      }
    }
    if ((randomNumber - userInput) < 10 && (randomNumber - userInput) >0){
      infoElement.innerHTML =  "Your number is sligthly low. Try again" ;
      if(tries === maxTries ) {
        infoElement.innerHTML = "Sorry, your tries are over. Play again."
        document.getElementById('resetGame1').style.visibility = "visible" ;
        document.getElementById("audioLoserGame1").play();
      }
    }
  }
  else if (userInput >= 100) {
    infoElement.innerHTML = "Your number is 100 or bigger. Pick a lower one."
    if (tries === maxTries ) {
      infoElement.innerHTML = "Sorry, your tries are over. Play Again.";
      document.getElementById('resetGame1').style.visibility = "visible" ;
      document.getElementById("audioLoserGame1").play();
    }
  }
  if (randomNumber < userInput) {
    if ((userInput - randomNumber) >= 10 && (userInput < 100)) {
      infoElement.innerHTML = "Your number is very high. Try again"
      if (tries === maxTries) {
        infoElement.innerHTML = "Sorry, your tries are over. Play Again."
        document.getElementById('resetGame1').style.visibility = "visible" ;
        document.getElementById("audioLoserGame1").play();
      }
    }
    if ((userInput - randomNumber) < 10 && (userInput - randomNumber) >0) {
      infoElement.innerHTML = "Your number is sligthly high. Try again" ;
      if (tries === maxTries) {
        infoElement.innerHTML = "Sorry, your tries are over. Play Again."
        document.getElementById('resetGame1').style.visibility = "visible" ;
        document.getElementById("audioLoserGame1").play();
      }
    }
  }
  else if (randomNumber == userInput) {
    infoElement.innerHTML = "Fantastic!!! You guessed the number!!!"
    document.getElementById('resetGame1').style.visibility = "visible" ;
    document.getElementById("audioWinnerGame1").play();
  }
  pointElement.innerHTML = tries;
}

buttonEnterGame1.addEventListener("click", showInfo);

var modal = document.querySelector(".modal1");
var btn = document.querySelector("#buttonModalGame1");
var span = document.querySelector(".closeGame1");
btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('GamePlayMusic').play();
