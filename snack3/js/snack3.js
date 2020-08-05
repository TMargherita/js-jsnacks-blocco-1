//Inserisci un numero//
var numero = parseInt (prompt("Scegli un numero"));
var risultato;
//se è pari stampa il numero//
//se è dispari stampa il numero successivo//

if (numero % 2 == 0){
risultato = numero;
} else {
risultato = numero +1;
}

document.getElementById('risultato').innerHTML = risultato;
