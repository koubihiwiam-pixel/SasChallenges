let prompt = require('prompt-sync')();

let utilisateurs = [
  { id: 1, nom: "Sara" },
  { id: 2, nom: "Omar" },
  { id: 3, nom: "Nadia" },
  { id: 4, nom: "Yassine" }
];
let id = prompt("entrez id : ");
function rechercheparid (id){
    let resultat=null;
    for(let i=0;i<utilisateurs.length;i++){
        
        if(utilisateurs[i].id==id){
            resultat = utilisateurs[i];
        }
    }
    return resultat ;

}
console.log(rechercheparid(id));
