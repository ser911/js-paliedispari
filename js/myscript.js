// PROMPT PER LA SCELTA DEL NUMERO DELL'USER
var evenOdd = prompt("Digita un'opzione: pari o dispari?");
// ANALISI DEL NUMERO SELEZIONATO: PARI O DISPARI
if ( evenOdd == "pari" || evenOdd == "dispari") {

  var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
// CREAZIONE NUMERO RANDOM
  var oneToFiveNumber = Math.floor(Math.random() * 5) + 1;
  console.log(oneToFiveNumber);
  // SOMMA DI NUMERO SELEZIONATO + NUMERO RANDOM
  var totalUserNumber = userNumber + oneToFiveNumber;
  console.log(" Il tuo punteggio é " + totalUserNumber);
// FUNZIONE NUMERO RANDOM PER LA CPU
function cpuRandom (min, max) {
  return Math.floor(Math.random() * max) + min;
}

var random = cpuRandom(1,10)
console.log("Il punteggio della cpu é " + random);
var totalScore = totalUserNumber + random;

// FUNZIONE CHE ANALIZZA LE POSSIBILI COMBINAZIONI DI DUE NUMERI NELL'AMBITO PARI/DISPARI
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
// RISULTATO FINALE
if (evenOdd == "pari" && totalScore % 2 == 0 ){
console.log("Hai vinto!");

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

var userWord = prompt("Inserisci una parola");
function paliWord (parola){
  var wordReverse = "";
  for (var i = userWord.length -1; i >= 0 ; i--) {
    wordReverse += userWord[i];
  }
  return wordReverse;

}
var wordRebuilt = paliWord(userWord);
console.log(userWord, wordRebuilt);

if (wordRebuilt == userWord) {
  console.log("La parola da te digitata è un palindromo");
}
else{
  console.log("La parola da te digitata non è un palindromo");
}
