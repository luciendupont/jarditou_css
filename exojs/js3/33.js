var nb1= window.prompt("entrez un   nombre entier ");
var nb2= window.prompt("entrez un deuxieme nombre ");
var operateur = window.prompt("saisir un operateur");
var resultat;
for(;operateur !=="+" && operateur!== "-" && operateur!== "*" &&  operateur !== "/";)
{
    alert("entrez un operateur valide : +,-,*,/,");
    var operateur =window.prompt("entrez un opétateur");

}
switch(operateur){
    case "+" : 
    resultat = parseInt(nb1)+ parseInt(nb2);
    break;

    case "-" : 
    resultat =nb1-nb2;
    break  ;     
    case "*" : 
    resultat =nb1*nb2;
    break    ;
    case "/" : 
    resultat = nb1/nb2;
     break ;  
}

alert(resultat);





















