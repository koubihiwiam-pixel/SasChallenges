let prompt = require('prompt-sync')();
let a = +prompt('entrez a : ');
let x = prompt('entrez un operateur : ');
let b = +prompt('entrez b : ');
let r; 
switch (x){
    case ('+') :{
        r = a + b;
        console.log('resultat :' , r);
        break;
    }
     case ('-') :{
        r = a - b;
        console.log('resultat :' , r);
        break;
    }
    case ('*') :{
        r = a * b;
        console.log('resultat :' , r);
        break;
    }
    case ('/') :{
        if(b != 0){
        r = a / b;
        console.log('resultat :' , r);
    }else {
        console.log('impossible de diviser sur 0');
    }
        break;
    }
    default:
        console.log("Opérateur invalide.");
        break;
}