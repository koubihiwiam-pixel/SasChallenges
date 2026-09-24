function recherchebinaire(nombre) {
    let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
    let debut = 0;
    let fin = ids.length - 1;
    let index = -1;

    while (fin > debut) {
        if (ids[debut] == nombre) {
            index = debut;
        }
        else if (ids[fin] == nombre) {
            index = fin;
        }
        
    debut++;
    fin--;
    }
    
    return index;
}

console.log(recherchebinaire(23));