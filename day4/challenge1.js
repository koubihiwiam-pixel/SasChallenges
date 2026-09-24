function compterCaracteres(chaine) {
    let ctr = 0;
    let i = 0;

    while (chaine.charAt(i) !== "") {
        i++
        ctr++;
        
    }


    return ctr;
}

console.log(compterCaracteres("wiam"));