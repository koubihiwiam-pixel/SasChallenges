function obtenirHeureActuelle(date){
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    return `${heure}:${minute}:${seconds}`;

}
console.log(obtenirHeureActuelle(new Date()));