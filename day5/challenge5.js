let prompt = require('prompt-sync')();
let n = +prompt('la taille : ');
let tab=[];

for (let i =0; i<n; i++){
    tab[i]= prompt('entrez la valeur ' );
}

    console.log(tab);

let b = false;
let m =prompt('quel element ?');
for(let i=0; i<n; i++){
    if(tab[i]==m){
        b= true;
        break;
    }
}
console.log(b);