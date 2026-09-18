let prompt = require('prompt-sync')();
let r = prompt('donnez le rayon :');
let h = prompt('donnez la hauteur :');
const pi = 3.14159;
let volume = pi * (r**2) * h;

console.log('rayon : ' +r +'m');
console.log('Hauteur : ' +h + 'm');
console.log('Volume : ' +volume +' m^3');