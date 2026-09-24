function compterLettre(chaine, lettre){
    let ctr =0;
    for(let i=0;i<chaine.length;i++){
    if(chaine[i]==lettre){
        ctr ++;

    }
    }
    return ctr;
}



console.log(compterLettre("wiamaaa","m"));
