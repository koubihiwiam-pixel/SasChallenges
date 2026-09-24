let commandes = [
    { categorie: "Électronique", prix: 450 },
    { categorie: "Alimentation", prix: 30 },
    { categorie: "Électronique", prix: 120 },
    { categorie: "Vêtement", prix: 80 },
    { categorie: "Alimentation", prix: 15 }
];

function tricategorie(commande) {
    for (let i = 0; i < commande.length - 1; i++) {
        for (let j = 0; j < commande.length - 1-i; j++) {
            if (commande[j].categorie > commande[j + 1].categorie) {
                let m = commande[j];
                commande[j] = commande[j + 1];
                commande[j + 1] = m;
            }
        }
    }
    return commande;
}
console.log(tricategorie(commandes));