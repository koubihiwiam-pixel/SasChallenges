let prompt = require('prompt-sync')();
let x1 = prompt('donnez x1 :');
let y1 = prompt('donnez y1 :');
let z1 = prompt('donnez z1 :');

let x2 = prompt('donnez x2 :');
let y2 = prompt('donnez y2 :');
let z2 = prompt('donnez z2 :');

let distance = ((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)**.5;

console.log("Position A : (" +x1 +"," +y1 +"," +z1 +")");
console.log("Position B : (" +x2 +"," +y2 +"," +z2 +")");
console.log("Distance : " ,distance);
