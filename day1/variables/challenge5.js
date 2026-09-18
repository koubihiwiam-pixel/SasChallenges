let prompt = require('prompt-sync')();
let duree = prompt(' entez duree :');
if (duree <60){
    console.log( "Duree :" +duree +"minutes");
    console.log( "Court métrage");
}else if (duree >= 60 && duree <= 120){
    console.log( "Duree :" +duree +"minutes");
    console.log( "Film standard");
}else{
     console.log( "Duree :" +duree +"minutes");
      console.log( "Film long");
}