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
console.log(random);


}
else{
  alert("Per procedere dovrai digitare una delle due opzioni: pari o dispari");
}
