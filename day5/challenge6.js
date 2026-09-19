let prompt = require('prompt-sync')();
let n = prompt('la taille :');
let tab1 =[];
let tab2 =[];
for (let i=0; i<n; i++){
    tab1[i]=prompt('entrez valeur ');
}
    console.log(tab1);
for (let i=n-1;i>=0;i--){
    tab2[tab2.length]=tab1[i];
}
 console.log(tab2);