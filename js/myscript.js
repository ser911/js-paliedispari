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


function evenOddgame(num1, num2, sum) {

  if ( sum % 2 == 0) {
    console.log( num1 + num2 + " = Pari!");
    return "pari";
  }
  else{
    console.log(num1 + num2 + " = Dispari!");
    return "dispari";
  }
}

var evenOddGameresult = evenOddgame(totalUserNumber, random, totalScore);

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
