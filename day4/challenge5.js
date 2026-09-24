function estPalindrome(chaine){
  
    let v ="";
    let b =false;
    
    for(let i=chaine.length-1;i>=0;i--){
        v +=chaine[i];
    }
    if(v==chaine){
        b=true;
    }
    return b;

}
console.log(estPalindrome("kayak"))