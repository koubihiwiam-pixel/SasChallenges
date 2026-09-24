let prompt = require('prompt-sync')();
let voitures = [
    { marque: "bmw", categorie: "suv", prix: 500000, kilometrage: 5000, disponibilite: true },
    { marque: "range", categorie: "berline", prix: 100000, kilometrage: 400, disponibilite: false },
    { marque: "toyota", categorie: "sedame", prix: 800000, kilometrage: 6000, disponibilite: true },
    { marque: "dacia", categorie: "suv", prix: 10000, kilometrage: 700, disponibilite: true }
];
function voituredisponible(voiture) {
    let ctr = 0;
    for (let i = 0; i < voiture.length; i++) {
        if (voiture[i].disponibilite === true) {
            ctr++;
        }
    }
    return ctr;

}

console.log(voituredisponible(voitures));
function moyenneprix(voiture) {
    let prixtotal = 0;
    for (let i = 0; i < voiture.length; i++) {
        prixtotal += (voiture[i].prix) / voiture.length;
    }
    return prixtotal;
}
console.log(moyenneprix(voitures) + "DH");

function nombreparcategorie(voiture, categorie) {
    let ctr = 0;
    for (let i = 0; i < voiture.length; i++) {
        if (voiture[i].categorie === categorie) {
            ctr++;
        }
    }
    return ctr;
}
console.log(nombreparcategorie(voitures, "suv"));


function ajoutervoiture(voiture) {
    let obj = {};
    let marque = prompt('entre marque : ');
    let categorie = prompt('entrez categorie : ');
    let prix = +prompt('entrez prix : ');
    let kilometrage = +prompt('entrez kilometrage : ');

    obj.marque = marque;
    obj.categorie = categorie;
    obj.prix = prix;
    obj.kilometrage = kilometrage;
    voiture.push(obj);
}
console.log(ajoutervoiture(voitures));



console.log(voitures);
