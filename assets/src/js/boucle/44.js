var mot, nb_voyelles, compteur;
mot = prompt ("mot : ");
mot = mot.toUpperCase();
nb_voyelles=0;
for (compteur=0; compteur <= mot.length; compteur++)
switch (mot.charAt(compteur))
{
case "A" : 
nb_voyelles = nb_voyelles + 1;
break;
case "E" :
nb_voyelles = nb_voyelles + 1;
break;
case "I" :
nb_voyelles= nb_voyelles +1;
break;
case "O" :
nb_voyelles = nb_voyelles + 1;
break;
case "U" :
nb_voyelles = nb_voyelles+ 1;
break;
case "Y" :
nb_voyelles = nb_voyelles+ 1;
break;
} 
document.write("nombre de voyelles : " + nb_voyelles);