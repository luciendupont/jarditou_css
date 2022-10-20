var prenom = window.prompt("saisissez le prénom N°1 ou clic sur Annuler pour  arrêter la saisie.");
var liste = "prenom";
var compteur=0;
while(prenom!=""){
    prenom=window.prompt("saisissez le prénom N°2 ou clic sur Annuler pour  arrêter la saisie.");
    liste=liste+prenom;
     compteur=compteur+1;
}
console.log(liste);
console.log(compteur);