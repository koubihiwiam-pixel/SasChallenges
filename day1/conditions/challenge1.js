let prompt = require('prompt-sync')();
let age = prompt('entez ton age : ');
if(age >= 18){
    console.log('Âge : ', age);
    console.log('Accès autorisé ');
}else{
    console.log('Âge : ', age);
    console.log('Accès refusé');
}