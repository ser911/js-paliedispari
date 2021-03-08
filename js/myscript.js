var evenOdd = prompt("Digita un'opzione: pari o dispari?");

if ( evenOdd == "pari" || evenOdd == "dispari") {

  var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

  var oneToFiveNumber = Math.floor(Math.random() * 5) + 1;
  console.log(oneToFiveNumber);
  var totalUserNumber = userNumber + oneToFiveNumber;
  console.log(" Il tuo punteggio é " + totalUserNumber);

function cpuRandom (min, max) {
  return Math.floor(Math.random() * max) + min;
}

var random = cpuRandom(1,5)
console.log("Il punteggio della cpu é " + random);
var totalScore = totalUserNumber + random;

if ( totalScore % 2 == 0) {
  console.log( totalUserNumber + random + " = Pari!");
}
else{
  console.log(totalUserNumber + random + " = Dispari!");
}

if (evenOdd == "pari" && totalScore % 2 == 0 ){
alert("Hai vinto!");

}
  else if (evenOdd == "dispari" && totalScore % 2 == 1 ) {
    console.log("Hai vinto!");
  }
  else{
    console.log("Hai perso!");
  }


}
else{
  alert("Per procedere dovrai digitare una delle due opzioni: pari o dispari");
}
