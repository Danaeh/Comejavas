var deck=[];
var card;
var totalp=0;
var cont=0;
var cvalue;
var removed;
var totalc;


var hit= document.querySelector("#hit");
var stand= document.querySelector("#stand");
var reset= document.querySelector("#reset");
var scr= document.querySelector("#scr");
var pScore=document.querySelector("#pScore");
var cScore=document.querySelector("#cScore");
var cardjs=document.querySelector("#cardjs");
var croupierValue=document.querySelector("#croupierValue");
var info=document.querySelector("#info");
// creaBaraja
var suits = ["d","c","t","p"];
var cardSuits = 13;
var deck =[];
for (i = 0; i<suits.length; i++) {
  for (var j = 1; j <=cardSuits; j++) {
    var cards = {
      suit:suits[i],
      value:j
    };
    deck [deck.length] = cards;
  }
}


//Baraja
deck= deck.sort(function(){
  return Math.random()-0.5});


  // El jugador pide carta
  hit.addEventListener("click",dealing)
  function dealing(){
    card= deck[0].value;
    if ((deck[0].value===1)||(deck[0].value ===12)|| (deck[0].value===13)){
      card=11
    }
    totalp= totalp + card
    pScore.innerHTML = totalp;
    scr.innerHTML = totalp;
    showCard()
  }

  function showCard() {
    cardjs.innerHTML= cardjs.innerHTML +'<img class="individualCard" src="images/misp3.png" alt="card">'
    remove();
    check();
  }

  function remove(){
    removed = deck.splice(0,1);
  }
  //comprobacion de que el usuario no se pasa
  function check(){
    if (totalp>21){
      info.innerHTML="<h1>Sorry, game over. Try again ^_^</h1>";
      document.querySelector("#reset");
      disabled()
      disabled2()
    }
  }

  function disabled() {
    document.getElementById('hit').disabled = "true";
  }

  function disabled2() {
    document.getElementById('stand').disabled = "true";
  }


  //Se planta y el croupier juega
  stand.addEventListener("click",dealingC);
  function randomCroupier(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
  }

  function dealingC() {
    totalc= randomCroupier(16,26)
    croupierValue.innerHTML= '<img class="individualCard" src="images/fantasmico.png" alt="card"> '
    compare()
    cScore.innerHTML= totalc;
  }

  function compare() {
    if ((totalc>21) || (totalp>totalc)){
      info.innerHTML='<h1>Congratulations, You win! ^w^</h1>';
      document.querySelector("#reset");
    } else{
      info.innerHTML='<h1>Sorry, game over. Try again ^_^</h1>';
      document.querySelector("#reset");
    }
    disabled();
    disabled2();
  }
  /*reset.addEventListener("click",reset);*/


  function reset(){
    document.location.reload(true)
  }


  document.getElementById('bjmusic').play();
