let prompt = require('prompt-sync') ();
const formatMAD = (val) => val + " DH";

function convertirMontant(montant,taux,formatMAD){
    return formatMAD(montant*taux);
}
let montant = prompt('le montant : ');
let taux = prompt('le taux : ');

console.log(convertirMontant(montant,taux,formatMAD));