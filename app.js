/*var saludar = function(nombre){
  return "Hola " + nombre;
}

var hola = saludar;

alert(hola("Hermes"));

var saludaHermes = saludar("HErmes Alexis Galvis");
alert(saludaHermes);

var saludaPedro = saludar("Pedro");
document.write(saludaPedro);*/

/*var humanoide1 = {
	  nombre: "Pedro Perez",
	   edad: 27,
       casado: false,
       profesion :"Programador JS",
       hobbies: ["cine", "squash"],
       propiedades: {
       	casas: 1,
       	carros: 2,
       	fincas: 0
       }
};

alert(humanoide1.propiedades.carros);*/

/*var puntaje = 0;

function range(){
  return  Math.ceil(Math.random() * 10 + 1);
}


var preguntas = [
 {n1: range(), n2: range()},
 {n1: range(), n2: range()},
 {n1: range(), n2: range()}
];

for(var i=0; i < preguntas.length; i++){
  var pregunta = preguntas[i];
  var respuesta = prompt("Cuánto es " + pregunta.n1 + " + " + pregunta.n2 + "?");
  if(respuesta == pregunta.n1 + pregunta.n2){
  	puntaje ++;
  	alert("Muy bien, tu puntaje es " + puntaje);
  }else{
  	alert("Incorrecto!");
  }
}

alert("Tu puntaje final es: " + puntaje);
*/

var hello = function(name){
  var color = "red";
  return function(){
    console.log("Hello" + name);
    console.log(color);
  };
};

var helloPedro = hello("Pedro");
helloPedro();