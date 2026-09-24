function compterVoyelles(chaine) {
    let ctr = 0;
    for (let i = 0; i < chaine.length; i++) {
        let ch = chaine.toLowerCase();
        if (ch[i] == "a" || ch[i] == "e" || ch[i] == "o" || ch[i] == "u" || ch[i] == "i" || ch[i] == "e") {
            ctr++
        }
    }
    return ctr;
}
console.log(compterVoyelles("developpeur"));