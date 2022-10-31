var pu=parseInt(prompt("veuillez saisir le prix unitaire"));
var qtecom=parseInt(prompt("veuillez saisir une quantité"));
var tot = pu*qtecom;
var rem;
var pap; //pu*qtecom  - rem
var port;
alert(tot);


if(tot>100 && tot<200){

    rem=tot*0.05;

    par=tot-rem;

}

else {

    if(tot==100||tot==200){

        rem=tot*0.05;

        par=tot-rem;

    }

    else{

        if(tot>200){

            rem=tot*0.1;

            par=tot-rem;

        }

        else{

            par=tot;

            rem=0;

        }

    }

}

if(par>500){

    port=0;

    pap=par;

}

else{

    port=par*0.02;

    if(port<6){

        port=6;

    }

}

pap=par+port;

document.write("prix a payer : "+pap+"<br>");

document.write("remise : "+rem+"<br>");

document.write("frais de port : "+port);
