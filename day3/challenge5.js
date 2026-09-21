let prompt = require('prompt-sync') ();
let valeur=[];
function additionnerTout(...args) {
    let somme = 0;
    for (let i = 0; i < arguments.length; i++) {
        somme += arguments[i];
    }
    return somme;
}
do
{
     valeur[valeur.length] = +prompt('entrez la valeur :');
}
while(valeur[valeur.length-1] != 0);

console.log(additionnerTout(...valeur));