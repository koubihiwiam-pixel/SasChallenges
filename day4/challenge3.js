function inverserChaine(chaine) {
    let inverse = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
        inverse += chaine[i];
    }
    return inverse;
}
console.log(inverserChaine("moad"));