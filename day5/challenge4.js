let prompt = require('prompt-sync')();
let n = +prompt('la taille : ');
let tab=[];

for (let i =0; i<n; i++){
    tab[i]= prompt('entrez la valeur ' +i);
}

    console.log(tab);


tab[tab.length]=prompt('entrez un element: ');

    console.log(tab);
