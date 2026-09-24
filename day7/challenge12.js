let etudiants = [
    { nom: "Ali", age: 22 },
    { nom: "Fatima", age: 19 },
    { nom: "Reda", age: 25 },
    { nom: "Imane", age: 21 }
];
function triabulle(etudiant) {
    
    for (let i = 0; i < etudiant.length-1; i++) {
        for (let j = 0; j < etudiant.length-1-i; j++) {
            if (etudiant[j].age > etudiant[j + 1].age) {
                let m = etudiant[j];
                etudiant[j] = etudiant[j + 1];
                etudiant[j + 1] = m
            }
        }
    }
    return etudiant;

}
console.log(triabulle(etudiants));