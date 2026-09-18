let prompt = require('prompt-sync')();
let N = prompt('N = ');

for (let i = 0 ;i<=N ;i++){
    if(i % 2 == 0){
        console.log(i)
    }
}  