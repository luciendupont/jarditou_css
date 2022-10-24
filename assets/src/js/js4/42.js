
			var somme=0;
			var moyenne=0;
			var nb_notes=0;
            var  total=0;
			nb_notes=prompt("entrez les note");
			while(nb_notes!=0 )
			{
               
                somme=parseInt(nb_notes)+parseInt(somme);
                total++; 
         nb_notes=prompt("Souhaitez-vous faire la moyenne de combien de notes ?","Nb de Notes");
         moyenne=somme/total;   
       }             

console.log(moyenne);
console.log(somme)
console.log(total)  