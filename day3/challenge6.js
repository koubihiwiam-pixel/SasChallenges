let prompt = require('prompt-sync') ();
let verifier=false;
function verifierMotDePasse(motDePasse) {
    if(motDePasse.includes("@") && motDePasse.length >= 8){
        verifier= true;
    }
    return verifier;

}
let mdp= prompt('mot de passe : ');
console.log(verifierMotDePasse(mdp));