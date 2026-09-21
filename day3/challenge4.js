let prompt = require('prompt-sync')();
function saluerClient(nom,titre){
// return "Bonjour "+titre +' '+nom ;
  return `Bonjour ${titre} ${nom}`
}
let N =prompt('le nom : ');
let T =prompt('le titre : ');
console.log(saluerClient(N,T||"client"));