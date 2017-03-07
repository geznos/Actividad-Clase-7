//Variables
var kilo_cebolla = 2000;
var kilo_tomate = 1000;
var kilo_papa = 800;
var kilo_recado = 500;
var kilo_platano = 3000;
var kilo_cambur = 1300;
var adrian;
var leonardo;
var david;
var total;
var ganancia;

//Boton
document.getElementById('boton').onclick=
function() {
	document.getElementById("cierre").innerHTML=document.getElementById("cierre").innerHTML="Revise la consola";
}
	console.log("Total compra:");
	adrian = (kilo_cebolla*3)+(kilo_tomate*2)+(kilo_papa*6)+(kilo_platano/2);
	leonardo = (kilo_platano*3.5)+(kilo_tomate/2)+(kilo_cambur/4);
	david = (kilo_recado*3)+(kilo_papa/2)+(kilo_cebolla*3)+(kilo_cambur*3/4);
	console.log("Adrian Simancas: "+adrian);
	console.log("Leonardo Chique: "+leonardo);
	console.log("David Nalbandian: "+david);
	total = adrian+leonardo+david;
	console.log("Total: "+total)
	ganancia = total-4500;
	console.log("Ganancia: "+ganancia)