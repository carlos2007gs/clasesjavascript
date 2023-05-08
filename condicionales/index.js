//ejercicio 2 
/*let respuesta = prompt("cual es el nombre oficial de javascript?")

if (respuesta == "ECMAScript") {
 alert("correcto");
} else {
      alert("¿no lo sabes? ¡ECMAScript!");
}*/

//ejercicio 3 
 /*let numero = prompt("insertar un numero");

if (numero == "0") {
    alert ("0")
} else if (numero > "0") {
    alert ("1")
} else if (numero < "0") {
    alert ("-1")
} else {
     alert ("no se registro numero")
}*/

//ejercico 4 

/*let result = (a + b < 4) ? 'debajo' :
    'encima';
alert (result);*/ 

//ejercicio 4

let login = prompt("que cargo ocupas"," ");

let message = (login == "empleado") ? "hola" :
              (login == "director") ? "felicidades" :
              (login == " ") ? "sin sesion" :
              " " ;

alert (message);
