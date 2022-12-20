-- CAS HOTEL--
--  LOT1 --
-- 1 --
--liste hotel--
SELECT hot_nom from hotel;
--2 --
--residence mr  white--
select  cli_adresse , cli_nom, cli_prenom, cli_ville  
from  client 
where  cli_nom='White';
--3--
-- station  altitude < 1000
select sta_nom, sta-altitude 
from station 
where sta-altitude < 1000
--4--
-- chambre capacite >1
select cha_numero, cha_capacite
from chambre
where cha_capacite > 1
--5--
-- client n habitant pas a  londres 
select cli_nom, cli_prenom,cli_ville
from client
where cli_ville !='Londres' 
--6--
--liste  hotel  a  bretou 
select  hot_nom, hot_categorie, hot_ville
from hotel
where hot_ville='Bretou'and hot_categorie >=3
--LOT2--
--1--
--afficher  la  liste  des hotel et leur  station
select hot_nom, hot_sta_id, hot_ville,sta_nom,sta_id 
from hotel
join  station on  sta_id=hot_sta_id
--2--
--affciher  les chambres et  leur  hotel 
select hot_nom, hot_categorie, hot_ville, cha_numero
from hotel
join chambre on hot_sta_id=cha_numero
--3--
--liste  chambre de   d une  place  a bretou 
select hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite
from hotel
join chambre on cha_hot_id=hot_id
where  hot_ville='bretou'and cha_capacite >1
--4--
--reservation  nomclient
select  cli_nom, hot_nom, res_date 
from client 
join reservation, hotel  
--5--
--liste  chambres nom hotel et station
select  sta_nom, hot_nom, cha_numero, cha_capacite
from hotel 
join station, chambre 


--CAS  PAPYRUS 
--1--
SELECT   numcom 
from entcom
WHERE  numfou=9120
--2--
SELECT  numcom,numfou
from entcom
--3--
SELECT  numlig, numcom, codart
from ligcom 
--4-
SELECT libart, stkale stkphy, qteann
from 	produit 
where qteann <1000
--5--
select nomfou, posfou
from fournis 
where  posfou  >70000 and !(posfou>80000 AND posfou<90000) 