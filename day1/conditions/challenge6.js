let prompt = require('prompt-sync')();
let a = +prompt('choisir une option :');
switch (a){
    case 1 :{
        console.log("Ouverture de profil");
        break;
    }
    case 2 :{
        console.log("Ouverture des paramètres...");
        break;
    }
    case 3 :{
        console.log("Ouverture des notifications");
        break;
    }
    case 4 :{
        console.log("Se déconnecter");
        break;
    }
    default:{
        console.log("Choix invalide.");
    }
}