let prompt = require('prompt-sync')();
let N = +prompt('la taille du tableau : ');
let tab=[];
let r=0;
for(let i=0;i<N;i++){
    tab[i]= +prompt('entrez la valeur : '+i);
}
for(let i=0;i<N;i++){
    if(tab[i]>r){
        r=tab[i];
    }
}
console.log("max =",r )