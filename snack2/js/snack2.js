//*L’utente inserisce due parole in successione, con due prompt.//

var prima = prompt("Scegli una parola");
var seconda = prompt ("Scegli un'altra parola");

var parole
//*stampa prima la parola più corta, poi la parola più lunga.//
if (prima.length > seconda.length){
parole = seconda + " è più corta di " + prima;
} else if (seconda.length > prima.length)
{
parole = prima + " è più corta di " + seconda;
} else (prima.length == seconda.length)
{
parole="Le parole sono lunghe uguali";
}

document.getElementById('parole').innerHTML = parole;
