let prompt = require('prompt-sync')();
let account = {
    owner: "Tayeb",
    balance: 0,
    type: "saving"
};
console.log("le solde : ", account.balance);
let n = +prompt("deposer l'argent : ");
function deposeargent() {
    if (n >= 0) {
        account.balance += n;
    } else {
        console.log('tu ne peut pas deposer! ');
    }
    return account.balance;
}
console.log(deposeargent());
console.log(account);

function retirerargent() {
        let retirer = +prompt("combien d'argent a retirer : ");

    
    if (retirer < account.balance) {

        account.balance -= retirer;
    }
    else {
        console.log("votre solde n'est pas disponible pour ce montant : ")
    }

    return account;
}
console.log(retirerargent());
console.log(account);
