let prompt = require('prompt-sync')();
let N = prompt('entrez N :');
let X = prompt('entrez X :');

for (let i=1 ;i<=N;i++){
    let j=X*i;
    if(j<=N){
    console.log(j); }
}

