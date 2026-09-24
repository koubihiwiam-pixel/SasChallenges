function recherchelineair(nombre) {
    let nombres = [4, 8, 15, 16, 23, 42];
    let verifier = false;
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i]==nombre){
           verifier = true;
        }
    }
    return verifier;
}
console.log(recherchelineair(4));