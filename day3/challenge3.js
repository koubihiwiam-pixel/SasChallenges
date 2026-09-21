let prompt = require('prompt-sync')();
function genererEmail(prenom,nom){
    let Text=prenom+"."+nom+"@entreprise.com";
    return Text.toLowerCase();
}
let a = prompt('prenom : ');
let b = prompt('nom : ')
console.log( genererEmail(a,b));