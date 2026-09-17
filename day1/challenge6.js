let prompt = require('prompt-sync')();
let score1 = prompt('entrez score 1 : ');
let score2 = prompt('entrez score 2 : ');
let score3 = prompt('entrez score 3 : ');
let score4 = prompt('entrez score 4 : ');

let ScoreTotal = (score1 - '0') + (score2 - '0') + (score3 -'0') + (score4 -'0');
let ScoreMoyen = ScoreTotal / 4;

console.log("Partie 1 : " , score1 );
console.log("Partie 2 :" , score2 );
console.log("Partie 3 :" , score3 );
console.log("Partie 4 :" , score4 );
console.log("score total :" , ScoreTotal);
console.log("moyenne :" , ScoreMoyen);