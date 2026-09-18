let prompt = require('prompt-sync')();
let N = prompt('entez N : ');
let somme =0;
for (let i = 1 ;i<= N ; i++){
    somme += i;
}
 console.log(somme);