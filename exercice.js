let prompt = require('prompt-sync')();
let n = +prompt('le nombre d article achete :')
let prix=0;
if(n == 0){
    prix =0;
    console.log("0 DH");
}else if (n == 1) {
    prix= 125;
    console.log("125 DH");
}
 else if(n > 1){
for( let i = 2; i <= n ; i++){
    prix += 125 - 125*((i-1)*2/100) ;
    

}
console.log(prix);
}
