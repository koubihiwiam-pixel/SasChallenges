function nettoyerEspaces(chaine) {
    let resultat = "";
    let D = 0;
    let F = chaine.length-1;
    while(chaine[D] == " "){
        D ++;
    }
    while(chaine[F] == " "){
        F --;
    }
    for(let i = D ; i<=F ;i++){
        resultat += chaine[i];
    }
    return resultat;
}
console.log(nettoyerEspaces("   hello world   "));