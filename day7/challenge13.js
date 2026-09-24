let produits = [
    { code: "A012", nom: "Clavier" },
    { code: "B045", nom: "Souris" },
    { code: "C078", nom: "Écran" },
    { code: "D101", nom: "Casque" },
    { code: "E134", nom: "Webcam" }
];

function recherchebinaire(produit, code) {
    let debut = 0;
    let fin = produit.length-1;
    let objet;
    while (debut <= fin) {
        if (produit[debut].code === code) {
            objet = produit[debut]
        }
        else if (produit[fin].code === code) {
            objet = produit[fin]
        }
        debut++;
        fin--;
    }
    return objet;

}
console.log(recherchebinaire(produits,"E134"));