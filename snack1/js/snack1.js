//*L’utente inserisce due numeri in successione, con due prompt.//

var primo = parseInt(prompt("Inserisci un numero"));
var secondo = parseInt(prompt("Inserisci un altro numero"));
var maggiore;
//* Il software stampa il maggiore//

if (primo > secondo) {
  maggiore = primo;
} else if (secondo > primo) {
  maggiore = secondo;
}

document.getElementById('maggiore').innerHTML = maggiore;
