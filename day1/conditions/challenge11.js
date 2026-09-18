let prompt = require('prompt-sync')();
let a = +prompt('choisir un plat  de 1 a 4 : ');
switch (a){
    case 1 :{
        a = 60;
        console.log("Pizza  → 60 DH");
        break;
    }
    case 2 :{
        a = 45;
        console.log("Burger → 45 DH");
        break;
    }
    case 3 :{
        a = 40;
        console.log("Tacos  → 40 DH");
        break;
    }
    case 4 :{
        a = 30;
        console.log("Salade → 30 DH");
        break;
    }
    default :{
        console.log('il n y a pas ce plat');
    }
}
let quantite = +prompt('Combien en voulez-vous?') ;
let Q;
if( quantite >=1){
    Q = a * quantite;  
}
else {
    quantite = +prompt('La quantite devrait etre plus de 1 : ') ;
    if( quantite >=1){
    Q = a * quantite;  
}
}
let r;
let q;
if ( Q >= 200){
    r = Q/10;
    q = Q-r;
}else q = Q;


console.log('Quantité :' , quantite);
console.log("Prix unitaire : "+ a +" DH");
console.log("PSous-total : "+ Q +" DH");
console.log("Réduction : "+ r +" DH");
console.log("Total à payer : "+ q + " DH");



