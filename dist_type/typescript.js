"use strict";
let a = "hola";
let b = "world";
console.log(a + b);
let c = 18;
let d = 39;
console.log(c + d);
/**Tipos de datos primitivos */
/*string*/
let saludo = "hola mundo";
/*Acento Grave  `  y  ${}*/
let nombre = "Diego";
let mensaje = `Mi nombre es ${nombre}. 
soy nuevo en javascript.`;
console.log(mensaje);
/*Numero*/
let meatCarne = 5;
/*Boolean*/
let estado = false;
let estada = true;
/*Void: Indica la ausencia de un valor*/
function mensajeUsuario() {
    console.log("Ausencia de un parametro de entrada");
}
/*Enum: Conjunto de valores*/
var Color;
(function (Color) {
    Color[Color["Negro"] = 0] = "Negro";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
//**Declarar la variable y asignar un valor de la enumeracion */
let colorCasa = Color.Negro;
console.log(colorCasa);
/*tipos de Objetos*/
let list = ["papa", "zanaoria", "onion"];
let rocas = [true, false];
let lost = ["papa", false, 1141];
let metro = ["papa", 1109];
