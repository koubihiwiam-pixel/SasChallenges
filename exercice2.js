var prompt = require('prompt-sync')();
let n = Number(prompt("entrer votre nombre : "));
let tab = [];
for (let j = 1; j < n; j++) {
    let isPremier = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            isPremier = false
            break;
        }
    }
    if (isPremier) {
        tab.push(j);
    }
}
console.log(tab);