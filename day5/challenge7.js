let tab=[1, 2, 3, 4, 5, 6];
let filtrerPairs=[];

for(let i=0; i<tab.length; i++){
    if(tab[i]%2==0){
        filtrerPairs[filtrerPairs.length]=tab[i];
    }
}
console.log(filtrerPairs);