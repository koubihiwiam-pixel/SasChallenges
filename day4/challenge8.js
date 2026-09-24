function extraireChaine(chaine, debut, fin) {
    let resultat = "";
    for (let i = debut; i < fin; i++) {
        resultat += chaine[i];
    }

    return resultat;
}

console.log(extraireChaine("javacript", 0, 4));