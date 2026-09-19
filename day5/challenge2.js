let prompt = require('prompt-sync')();
let taille = prompt('la taille du tableau : ');
let calculerSomme =[];
let somme=0;
for(let i =0 ; i <= taille ; i++){
    calculerSomme[i]=+prompt('entrez la valeur ' +i+': ');
    somme+=calculerSomme[i]; 
}
 console.log("somme = ",somme);

console.log(calculerSomme);
