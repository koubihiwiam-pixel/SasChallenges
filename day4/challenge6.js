function repeterChaine(chaine, fois){
    let resultat ="";
    for(let i=0;i<fois;i++){
        resultat +=chaine;
    }
    return resultat;
}
console.log(repeterChaine("js",4));