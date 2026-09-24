function PlusGrand(chaine) {
    let mot = [];
    let resultat = "";
    for (let i = 0; i < chaine.length; i++) {


        if (chaine[i] != " ") {
            resultat += chaine[i];
        }
        else {
            mot.push(resultat);
            resultat = "";
            continue;
        }

    }

    mot.push(resultat);

    return mot;
}
console.log(PlusGrand("java est un language de programation"));