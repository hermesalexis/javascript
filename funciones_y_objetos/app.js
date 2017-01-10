"use strict";

/*function saludar(nombre){
  return "Hola " + nombre;
}
var saludaHermes = saludar("HErmes");
alert(saludaHermes);

var saludaPedro = saludar("Pedro");
document.write(saludaPedro);*/

/*asignar una variable a una funcion

var saludar = function(nombre){
  return "Hola " + nombre;
}

alert(saludar("hermes"));*/
// declaracion de un objeto
/*var humanoide1 = {
  nombre:"Hermes Galvis", 
  edad:27,
  casado: false,
  profesion: "Programador JS",
  hobbies: ["cine", "squash"],
  propiedades:{
  	casas:1,
  	carros: 2,
  	fincas:0
  }
};

alert(humanoide1.nombre);*/

//Juego
/*var puntaje = 0;

var preguntas =[
 {n1: 1, n2: 1},
 {n1: 1, n2: 3},
 {n1: 3, n2: 4}
];

for (var i = 0; i < preguntas.length; i++ ){
  var pregunta = preguntas[i];
  var respuesta = prompt("Cuanto es " + pregunta.n1 + " + " + pregunta.n2 + "?");
  if (respuesta == pregunta.n1 + pregunta.n2){
  	puntaje ++;
  	alert("Muy bien, tu puntaje es " + puntaje);
  }else{
  	alert("Incorrecto");
  }
}

alert("TU puntaje final es " + puntaje);
*/
/*function adjustText(msg, len){
  var cadena = "";
  if (msg.length > len) {
    cadena = msg.substring(0,len);
  }else if (len > 0){
    cadena = msg;
    for ( var i = 1; i <= len - msg.length; i++){
     cadena += " "; 
    }
  }
  return cadena;
}

alert(adjustText("",3))
*/
/*function promediame(arr){
 if (arr.length === 0) {
 	return 0;
 }
 return arr.reduce(function(memo, i){
  return memo + i;
 }, 0) / arr.length;
 
}*/

function printNumber(x){
   console.log(x);
   if(x < 10) {printNumber(x + 1)}
}

function factorial(n){
 if(n === 0) {return 1;}
 return n * factorial(n - 1);
}

//alert("hola \n mundo")
//alert("zorro" != "Zorro");
//alert( "hola" < "burro" ? 1 : 2);
//alert(8 * null);
//alert("5" - 1);
//alert(false === 0);
//console.log(sum(range(1,10)));

//alert(factorial(5));
//

var one = 1, two = 2;

//console.log(Math.min(10,2) + 20);
//confirm("debería hacerlo?");
//var theNumber = Number(prompt("Ingrese un número", "0"));

/*if (!isNaN(theNumber)){
  alert("El cuadrado de tu numero es: " + theNumber * theNumber);
}else{
  alert("POr favor ingrese un número válido");
}*/

/*var num = Number(prompt("Ingrese un número", "0"));

if (num < 10) {
	alert("small");
}else if(num < 100){
	alert("Medium");
}else{
	alert("Large");
}*/

/*var number = 0;
while(number <= 12){
 console.log(number);
 number += 2;
}*/

/*var result = 1;
var counter = 0;
while(counter < 10){
  result *= 2;
  counter ++;
}

console.log(result);*/

/*do{
 var yourName = prompt("Quien eres?");
}while(!yourName)
console.log(yourName);*/

/*for (var number = 0; number <= 12; number += 2) {
	console.log(number);
}*/

/*var result = 1;
for(var counter = 0; counter < 10; counter ++){
  result *= 2;
}

console.log(result);*/

/*for (var current = 20; ; current++ ){
  if (current % 7 == 0) {
    break;
  }
}

console.log(current);*/

/*switch (prompt("Como esta el clima?")){
	case "lluvia":
	  console.log("REcuerda llevar sombrilla");
      break;
    case "soleado":
      console.log("Usa ropa ligera");
      break;
    case "nublado":
      console.log("No salgas");
      break;
    default:
      console.log("TIpo de clima desconocido");
      break;
}*/


/*Programa triangulo*/
/*for(var line = "#"; line.length < 8; line += "#"){
  console.log(line);
}*/

/*Programa FizzBuzz*/

/*for(var number = 1; number <= 100; number++){
	if(number % 3 == 0){
      console.log("Fizz");
	}else if(number % 5 == 0){
	  console.log("Buzz");
	}else{
	  console.log(number);
	}
}*/

/*FizzBuzz version 2.0*/
/*for(var number = 1; number <= 100; number++){
	if((number % 3 == 0) && (number % 5 == 0)){
      console.log(number + "-" + "FizzBuzz");
	}else if(number % 3 == 0){
	  console.log(number + "-" + "Buzz");
	}else if (number % 5 == 0){
	  console.log(number + "-" + "Fizz");
	}
}*/

/*Ejercicio Ajedrez*/
/*var board = ""
var size = 16

for (var i = 1; i <= size; i++) {

  for(var j = 1; j<= size; j++){
    if ((i + j) % 2 == 0){
      board += " ";
    }else{
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/

/*var square = function(x){
	return x * x;
};
console.log(square(12));*/

/*var makeNoise = function(){
  console.log("Pling!");
};

makeNoise();*/

/*var power = function(base, exponent){
  var result = 1;
  for(var count = 0; count < exponent; count ++){
  	result *= base;
  }
  return result;
}

console.log(power(2,10));*/

/*var x = "outside";

var f1 = function(){
  var x = "inside f1";
};
f1();
console.log(x);

var f2 = function(){
  x =  "inside f2";
};
f2();
console.log(x);*/

/*var landscape = function(){
  var result = "";
  var flat = function(size){
  	for(var count = 0; count < size; count++){
  		result += "_";
  	};
  }
  var mountain = function(size){
    result += "/";
    for(var count = 0; count < size; count++){
    	result += "'";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());*/

/*function greet(who){
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");*/

/*function power(base, exponent){
  if (exponent == undefined){
  	exponent= 2;
  }
  var result = 1;
  for(var count = 0; count < exponent; count++){
  	result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(4, 3));
*/

/*function wrapValue(n){
  var localVariable = n;
  return function(){ return localVariable;};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());*/

/*function multiplier(factor){
 return function(number){
  return number * factor;
 };
};

var twice = multiplier(2);
console.log(twice(5));*/

/*function hello(name){
  return function(lastName){
  	return name + " "+ lastName;
  };
};

var human = hello("hermes");
console.log(human("Galvis"));*/

/*function power(base, exponent){
	if (exponent == 0){
		return 1;
	}else{
		return base * power(base, exponent - 1);
	}
}
console.log(power(2,3));*/

/*function findSolution(target){
  function find(start, history){
  	if (start == target){
  	  return history;
  	}else if (start > target){
  	  return null;
  	}else{
  	  return find(start + 5, "(" + history + " + 5)") ||
  	         find(start * 3, "(" + history + " * 3)");
  	}
  }
  return find(1, "1");
}

console.log(findSolution(100));*/

/*function printFarmInventory(cows, chickens){
  var cowString = String(cows);
  while(cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while(chickenString.length < 3)
  	chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens")
}

printFarmInventory(7, 11);*/

/*function minimumNumber(n1, n2){
   var out;
   n1 < n2 ?  out = n1 : out = n2
   return out;
}

console.log(minimumNumber(0, -10));*/

/*function isEven(n){
  if (n < 0){return "Ingrese un número positivo";}
  if (n === 0) {
  	return true;
  }else if (n === 1){
  	return false;
  }
  return isEven(n - 2);
}

console.log(isEven(100));*/

/*function countBs(string){
   var count = 0;
   for(var i = 0; i <= string.length - 1; i++){
     if (string[i] === "B"){
     	count ++;
     }
   }
   return count;
}
*/

/*function countChar(string, char){
  var count = 0;
  for(var i = 0; i <= string.length - 1; i++){
    if (string[i] === char){
  	  count ++;
     }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));*/

/*var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);
console.log(listOfNumbers[1 - 1]);*/

//console.log("hola".toUpperCase());
//
/*var mack = [];
mack.push("Mack");
mack.push("the", "knife");
console.log(mack);
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);
*/

/*var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false; // crea una nueva propiedad
console.log(day1.wolf);*/

/*var anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);*/

/*var journal = [
  {events: ["work", "touched tree", "pizza", 
           "running", "television"], 
   squirrel: false},
   {events: ["work", "ice cream", "cauliflower",
             "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
   {events: ["weekend", "cycling", "break", "peanuts", "beer"],
   squirrel: true},
];*/

/*var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object1.value);
console.log(object3.value);*/
/*var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

var journal = [];

function addEntry(events, didITurnIntoASquirrel){
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

function phi(table){
	return (table[3] * table[0] - table[2] * table[1]) / 
	Math.sqrt((table[2] + table[3]) * 
		(table[0] + table[1]) * 
		(table[1] + table[3]) * 
		(table[0] + table[2]));
}

function hasEvent(event, entry){
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal){
  var table = [0, 0, 0, 0];
  for(var i = 0; i < journal.length; i++){
  	var entry = journal[i], index = 0;
  	if (hasEvent(event, entry)){
  	  index += 1;
  	}
  	if (entry.squirrel){index += 2;}
  	table[index] += 1;
   }
   return table;
}


function gatherCorrelations(journal){
	var phis = {};
	for (var entry = 0; entry < journal.length; entry++){
	  var events = journal[entry].events;
	  for (var i = 0; i < events.length; i++) {
	        var event = events[i];
	        if (!(event in phis))
	          phis[event] = phi(tableFor(event, journal));
	    }
	    return phis;

	}
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);
for (var event in correlations)
  console.log(event + ": " + correlations[event]);

for (var event in correlations) {
  var correlation = correlations[event];
  if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}
*/
/*var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

console.log([1,2,3,2,4].indexOf(4));
console.log([1,2,3,2,1].lastIndexOf(2));*/
//console.log([0,1,2,3,4].slice(1));

/*function remove(array, index){
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c","d","e"], 2));*/

/*console.log("coconuts".slice(4,7));
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ree"));*/

/*console.log("  okay \n ".trim());*/

/*var string = "abc";
console.log(string.length);
console.log(string.charAt(2));
console.log(string[1]);*/

/*function randomPoinOnCircle(radius){
  var angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}
console.log(randomPoinOnCircle(2));
console.log(Math.floor(Math.random() * 10));*/

/*var myVar = 10;
console.log("myVar" in window);
console.log(window.myVar);*/

/*function range(n1, n2, step){
  var array = [];

  if (typeof step == 'undefined') {step = 1;}

  if(n1 > n2){
    for(var i = n1; i >= n2; i = i + step){
    	array.push(i);
    }
  }else{
  	for(var i = n1; i <= n2; i = i + step){
  	  array.push(i);
    }
  }
  return array;

}

function sum(array){
  var sum = 0;
  for(var i = 0; i < array.length; i ){
   sum += array[i];
  }
  return sum;
}

console.log(range(1, 10));
//console.log(sum(range(1, 10, 2)));
*/
/*
function reverseArray(array){
  var array_out = [];

  for (var i = array.length - 1; i >= 0; i --){
  	array_out.push(array[i]);
  }
  return array_out;
}

console.log(reverseArray(["A", "B", "C"]));*/

/*function reverserArrayInPlace(array){
  var a = 0;
  for (i = 0; i < Math.floor(array.length / 2); i++){
    a = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = a;
  }

  return array;
}

console.log(reverserArrayInPlace([12,5,6,4,5,7,8]));*/

/*var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 0,
      rest: null
    }
  }
};

var list2 = {
	value:0,
	edad:27,
	nombre: "HErmes"
}

function arrayToList(array){
	 var list = null;
    for (var i=array.length-1; i>=0; i--)
        list = {value: array[i], rest:list};
    return list;
}

var list = arrayToList([1,2,3]);

function runObject(list){
  for(var propiedad in list){
  	console.log(list[propiedad]);
  }

}

function listToArray (list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log(listToArray(list));
**/

// find sum of values
var values = [1,2,3,4,5,6,7,8,9];
var result = 0;

var total = function(values) {
    var sum = 1;
    values.forEach(function(value) {
        sum *= value;
    });
    return sum;
};


var totalEven = function(values) {
    var sum = 0;
    values.forEach(function(value) {
        if(value % 2 == 0) sum += value;
    });
    return sum;
};


var totalSelectValues = function(values, selector) {
    //handle undefined selector
    if (typeof selector == 'undefined'){
      selector = function() {return true;};
    }

    var sum = 0;
    values.forEach(function(value) {
        if(selector(value)) sum += value;
    });
    return sum;
};

/*result = totalSelectValues(values, function(value){return value % 2 === 0});
console.log(result);
result = totalSelectValues(values, function(value){return value % 2 !== 0});
console.log(result);
result = totalSelectValues(values, function(value){return value > 5});
console.log(result);

result = totalSelectValues(values);
console.log(result);
*/

///

function transform(values, f){
	var result = [];
	values.forEach(function(value){
      result.push(f(value));
	});

  return result;
}

/*var duplicate = function(i) { return i * 2; };
console.log(transform([1, 2, 3], duplicate));


var increase = function(i) { return i + 10; };
console.log(transform([1, 2, 3], increase));*/

function forEach(array, action){
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

//forEach(["wampeter", "Foma", "Granfalloon"], console.log);

var numbers = [1,2,3,4,5,6], sum =0;
forEach(numbers, function(number){
 sum += number;
});
//console.log(sum);
//

/*function greaterThan(n){
  return function(m){ return m > n;};
}

/*var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));*/

function noisy(f){
  return function(arg){
  	console.log("calling with ", arg);
  	var val = f(arg);
  	console.log("called with ", arg, "- got", val);
  	return val;
  };
}

function unless(test, then){
	if(!test)then();
}
function repeat(times, body){
  for(var i = 0; i < times; i++) body(i);
}

/*repeat(3, function(n){
  unless(n % 2, function() {
    console.log(n, "is even");
  });
}); */

var filter = function(values, selector){
 var result = [];
 values.forEach(function(value){
  if(selector(value)) result.push(value);
 });
 return result;
};

/*var even = function(i) { return i % 2 === 0 };
console.log(filter([1, 2, 3, 4], even)); // => [2, 4]

var none = function(i) { return false; };
console.log(filter([1, 2, 3, 4], none));*/

/*var string = JSON.stringify({name:"X", born: 1980});
console.log(string);
console.log(JSON.parse(string).born);*/

/*function filter(array, test){
  var passed = [];
  for (var i = 0; i < array.length; i++){
    if(test(array[i]));
    passed.push(array[i]);
  }
  return passed;
}


function reduce(array, combine, start){
  var current = start;
  for(var i = 0; i < array.length; i++){
  	current = combine(current, array[i]);
  }
  return current;
}

console.log(reduce([1,2,3,4], function(a,b){
  return a + b;
}, 0));

*/

/*var foo = {name: 'kitten'}
console.log(foo.name);
console.log(foo['name']);*/

/*var obj = {
	bar: 1,
	foo: 2,
	baz: 3
};

obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for(var i in obj){
  if(obj.hasOwnProperty(i))
  	console.log(i, '' + obj[i]);
}

*/
function compose(function1, function2){
  var function1Result = function1();
  return function2(function1Result);
}

/*var greet = function(){return "Bienvenidos"};
var yell = function(str){return str.toUpperCase() + "!"};
console.log(compose(greet, yell));

var generate = function() { return 2; };
var square = function(x) { return x * x; }
console.log(compose(generate, square));*/

/*var points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a-b}));

function order(arr, reverse) {
  return arr.sort(function(a, b) {
    return reverse ? b - a : a - b
  });
}

console.log(order([25, 10, 1, 1, 5, 14]));*/
var array = [[1, 2, 3], [4, 5], [6]];
var mergeArray = [];

/*mergeArray = mergeArray.concat(array[0]);
mergeArray = mergeArray.concat(array[1]);
console.log(mergeArray);*/




function flatten(arraysSet){
  var mergeArray = [];
  for(var i = 0; i < arraysSet.length; i++ ){
  	mergeArray =  mergeArray.concat(arraysSet[i]);
  }
  return mergeArray;
}

//console.log(flatten([[1, 2, 3], [4, 5], [6]]));
//

function counter(){
  var accountant = 0;

  return function(){
  	return ++accountant;
  };
}

function foo() {
    var a = 2;

    function baz() {
        return a ; // 2
    }

    bar( baz );
}

function bar(fn) {
    fn(); // look ma, I saw closure!
}

function wait(message){
	setTimeout(function timer(){
      console.log(message);
	}, 1000);
}

/*for(let i=1; i<=5; i++){
  setTimeout(function timer(){
    console.log(i);
  }, i*1000);

}
*/

/*var person = {
	firstName:"hermes",
	lastName: "Galvis",
	weigth: 98, 
	color:"white",
    fullName: function(){
      return this.firstName + " " + this.lastName;
    }

    };
*/
/*console.log(person.fullName());*/
function person(first, last, age, eye){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

/*var myFather = new person("Hermes", "Galvis", 28, "White");
console.log(myFather);
var myDaugther = new person("Fancy", "Garcia", 32, "green");
console.log(myDaugther);
console.log(myDaugther.firstName);*/

/*function crearMensaje(){
  mensaje = "Mensaje de prueba";
}

crearMensaje();
alert(mensaje);*/

var Vehicle = function Vehicle(color){
	this.color = color;
}

Vehicle.prototype = {
  go: function go(){
  	return "Vroom!";
  }
}

var vehicle = new Vehicle("blue");

function Square(width, height){
 this.width = width;
 this.heigth = height;
}

Square.prototype.calculateArea = function() {
   return this.width * this.heigth;
};

var square = new Square(50, 60);
//console.log(square.width, square.heigth, square.calculateArea());

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  showFullName: function(){
    console.log(this.firstName + " " + this.lastName);
  }
}


var anotherPerson = {
	firstName: "Rohit",
	lastName: "Khan"
};

//console.log(person.showFullName.apply(anotherPerson));

var user = {
  tournament:"The Masters",
  data :[
    {name:"T.Woods", age:37},
    {name:"P.Mickelson", age:43},
    {name: "H.Galvis", age:28}
  ],

  clickHandler:function(event){
    var theUserObj = this;
    this.data.forEach(function(person){
     console.log(person.name + " is playing at " + theUserObj.tournament);
    })

  }
}

function Domestico(){
  this.animal = "";
  this.nombre = "";
  this.configurarAnimal = function(nuevoAnimal){
    this.animal = nuevoAnimal;
  }
  this.configurarNombre = function(nuevoNombre){
    this.nombre = nuevoNombre;
  }
}

var miGato = new Domestico();
miGato.configurarAnimal("gato");
miGato.configurarNombre("Silveste");
Perro.prototype = new Domestico();
function Perro(){
  this.raza = "";
  this.configurarRaza = function(nuevaRaza){
    this.raza = nuevaRaza;
  }
  this.mostrarInfo = function(){
    alert(this.nombre + " es un " + this.raza);
  }
}

/*var miPerro = new Perro();
miPerro.configurarRaza("Pastor Aleman");
miPerro.configurarNombre("Max");
miPerro.mostrarInfo();*/

function Car() {
  this.velocity = 0; 
}
Car.prototype.accelerate = function(amount) {
  this.velocity += amount || 1;
  return this;
}
Car.prototype.break = function(amount) {
  this.velocity -= amount || 1;
  return this;
}

Bus.prototype = new Car();
function Bus(){
  this.beep = function(){
    return "BEEP!";
  }
}

/*var bus = new Bus();
console.log(bus.velocity);
bus.accelerate();
console.log(bus.velocity);
bus.accelerate(2);
console.log(bus.velocity);
bus.break();
console.log(bus.velocity);
console.log(bus.beep());
*/

/*var hello = function(name){
  return function(){
    console.log("hello " + name);
  };
};


function miFunction(){
   var color = "negro";
}
miFunction();

console.log(color);*/

/*(function(num){
  console.log(num);
})(20);*/

function User(name, age){
  this.name = name;
  this.age = age;
};

var pedro = new User("Pedro perez", 25);
var pablo = new User("Pablo", 30);

User.prototype.save = function(){
  console.log("Saving " + this.name);
}

//pedro.save();
//pablo.save();

var pedro = {
  name: "Pedro"
};

var greet = function(){
  return "Hola " + this.name;
};

//console.log(greet.call(pedro));
//
//

function maximo(){
 return Math.max.apply(Math,arguments);
}

function minimo(){
  return Math.min.apply(Math, arguments);
}

console.log(maximo(5, 10, 20, 50, 32));
console.log(minimo(3, 44, 2, 8));