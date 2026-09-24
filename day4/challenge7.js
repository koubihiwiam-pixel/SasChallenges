function remplacerCaractere(chaine, ancien, nouveau) {
    let resultat = "";
    for (let i = 0; i < chaine.length; i++) {

        if (chaine[i] === ancien) {
            resultat += nouveau;
        }
        else {
            resultat += chaine[i];
        }
    }
    return resultat;
}

console.log(remplacerCaractere("banana", "a", "o"));