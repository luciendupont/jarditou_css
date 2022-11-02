var checkbox = document.getElementById("1");
SubmitEvent.getElementById("envoyer",f_valid);

document.getElementById("nom").value="";
document.getElementById("prenom").value="";
document.getElementById("code_postal").value="";
document.getElementById("email").value="";
document.getElementById("date").value="";
document.getElementById("votre_question").value="";
document.getElementById("coche").value="";




function f_valid(e) {
function name(){
var name = document.getElementById("nom");
var name_m=document.getElementById("alert_name");
var name_v= new RegExp("^[A-Za-z]+$");
if (name.value === ""){
e.preventDefault();
name_m.textContent = "manquant";
name_m.style.color = "red";	
}else if(name_v.test(name.value) == false){
e.preventDefault();
name_m.textContent="incorrect";
name_m.style.color="orange";
}
}
name();
function pre(){
var pre=document.getElementById("prenom");
var pre_m=document.getElementById("alert_pre");
var pre_v=new RegExp("^[A-Za-z]+$");
if (pre.value ===""){
e.preventDefault();
pre_m.textContent = "manquant";
pre_m.style.color = "red";	
}else if(pre_v.test(pre.value) == false){
e.preventDefault();
pre_m.textContent="incorrect";
pre_m.style.color="orange";
}
}
pre();

function sx(){
var sx_alert = document.getElementById("sx_alert");
var sx_1=document.getElementById("sexe1");
console.log(sx_1);
var sx_2=document.getElementById("sexe2");
if (sx_1.checked == false && sx_2.checked == false){
e.preventDefault();
sx_alert.textContent = "Veuillez cocher l'un des choix suivants";
sx_alert.style.color = "red";	
}
}
sx();
function nai(){
var nai=document.getElementById("date");
var nai_m=document.getElementById("alert_dateNaissance");
if (nai.value ===""){
e.preventDefault();
nai_m.textContent = "manquant";
nai_m.style.color = "red";	
}
}
nai();


function cdpo(){
var cdpo=document.getElementById("code_postal");
var cdpo_m=document.getElementById("alert_cdp");
var cdpo_v=new RegExp("^([0-9a-z]){5}$");
if (cdpo.value ===""){
e.preventDefault();
cdpo_m.textContent = "manquant";
cdpo_m.style.color = "red";	
}else if(cdpo_v.test(cdpo.value) == false){
e.preventDefault();
cdpo_m.textContent="incorrect";
cdpo_m.style.color="orange";
}
}
cdpo();

function em(){
var em=document.getElementById("email");
var em_m=document.getElementById("alert_ml");
var em_v=new RegExp("^[a-z0-9]+@");
if (em.value===""){
e.preventDefault();
em_m.textContent = "manquant";
em_m.style.color = "red";	
}else if(em_v.test(em.value) == false){
e.preventDefault();
em_m.textContent="incorrect";
em_m.style.color="orange";
}
}
em();

function qu(){
var qu=document.getElementById("votre_question");
var qu_m=document.getElementById("ques");
var qu_v=new RegExp("^[A-Za-z]+$");
if (qu.value===""){
e.preventDefault();
qu_m.textContent = "manquant";
qu_m.style.color = "red";	
}else if(qu_v.test(em.value) == false){
e.preventDefault();
qu_m.textContent="incorrect";
qu_m.style.color="orange";
}
}
qu();

function click(){
var click=document.getElementById("coche");
var click_m=document.getElementById("acce");
if (click.checked == false){
e.preventDefault();
click_m.textContent="Veuillez accepter";
click_m.style.color="red";	
}
}
click();
}