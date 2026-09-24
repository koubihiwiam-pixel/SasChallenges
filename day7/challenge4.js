function triparselection() {
    let temperatures = [22, 19, 30, 15, 28, 17, 25];
    let compteur = 0;
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                let T = temperatures[i];
                temperatures[i] = temperatures[j];
                temperatures[j] = T;
                compteur++;
            }

        }
    }
    console.log(compteur);
    return temperatures;
}
console.log(triparselection());