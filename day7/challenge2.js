function triabulles(){
let notes = [22, 19, 30, 15, 28, 17, 25];
let compteur=0;

for(let i =0;i<notes.length;i++){
    for(let j =0;j<notes.length;j++)
        if(notes[j]>notes[j+1]){
            let T = notes[j];
            notes[j]=notes[j+1];
            notes[j+1]=T;
            compteur++;
        }    
}



console.log(compteur);
return notes;
}
console.log(triabulles());