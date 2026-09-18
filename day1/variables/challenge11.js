let prompt = require('prompt-sync')();
let Longueur = prompt('la longueur :');
let Largeur = prompt('la largeur :');

let surface = Longueur * Largeur;
let perimetre = 2 * (Longueur + Largeur);
console.log("surface :" +surface +" m^2");
console.log("perimetre :" +perimetre +" m");