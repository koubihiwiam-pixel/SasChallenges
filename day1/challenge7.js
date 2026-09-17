let prompt = require('prompt-sync')();
let noteCC = prompt('entrez la note du controle finale : ');
let noteProjet = prompt('entrez la note du projet : ');
let noteExamen =  prompt('entrez la note d examen : ');

let NoteFinale = (noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10;

console.log("Contrôle continu : " , noteCC);
console.log("Projet : " , noteProjet);
console.log("Examen : " , noteExamen);
console.log("Note finale : " , NoteFinale);