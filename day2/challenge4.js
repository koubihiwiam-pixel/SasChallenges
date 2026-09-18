let prompt = require('prompt-sync')();
let N = prompt('entez N : ');
for(let i=1 ; i<=10 ; i++){
   console.log(N +" x "+i +" = " +N*i );
}