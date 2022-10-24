var nbre = Number(prompt("Veuillez entrer un nombre"));
        var soe ="";
        window.prompt("Les nombres premiers entre 1 et <strong>"+nbre+"</strong> sont :10");
        for(i=2; i<=nbre; i++)
        {
        var root = Math.floor(Math.sqrt(i));
            for(j=root; j>=2; j--)
            {
                var premier = i%j;
                soe = soe + premier;
            }
            var verif = /^[1-9]*$/.test(soe);
            if(verif == true)
            {
                document.write(i+', ');
            }
        }