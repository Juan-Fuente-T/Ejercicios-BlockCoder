/*
------------SOLUCIONES EJERCICIOS CONDICIONALES------------
// Ejercicio 1: Pide al usuario un número y muestra si es par o impar.
let numero = parseInt(prompt("Introduce un número:"));
if (numero % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}

// Ejercicio 2: Pide al usuario dos números, súmalos y muestra si la suma es par o impar.
let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));
let suma = numero1 + numero2;
if (suma % 2 === 0) {
  console.log("La suma de los números es par.");
} else {
  console.log("La suma de los números es impar.");
}

// Ejercicio 3: Pide al usuario un número y muestra si es primo o no.
// (un número primo es un número mayor que 1 que tiene únicamente dos divisores positivos distintos: 
// él mismo y el 1. Por ejemplo, el 7 sólo tiene como divisores el 7 y el 1, por tanto es primo. Mientras 
// que el 6 tiene como divisores el 6, el 1, el 2 y el 3).
let numero = parseInt(prompt("Introduce un número:"));
let esPrimo = true;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
    break;
  }
}
if (esPrimo) {
  console.log("El número es primo.");
} else {
  console.log("El número no es primo.");
}

// Ejercicio 4: Pide al usuario dos números y muestra cuál es el mayor.
let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));
if (numero1 > numero2) {
  console.log("El primer número es mayor.");
} else if (numero2 > numero1) {
  console.log("El segundo número es mayor.");
} else {
  console.log("Los números son iguales.");
}

// Ejercicio 5: Pide al usuario una letra y muestra si es vocal o no.
let letra = prompt("Introduce una letra:");
if (
  letra === 'a' ||
  letra === 'e' ||
  letra === 'i' ||
  letra === 'o' ||
  letra === 'u'
) {
  console.log("La letra es una vocal.");
} else {
  console.log("La letra no es una vocal.");
}

// Ejercicio 6: Pide al usuario un número entre 1 y 7 y muestra a qué dia de la semana corresponde.
let diaSemana = parseInt(prompt("Introduce un número: "));
if (diaSemana === 1) {
  console.log("Hoy es lunes.");
} else if (diaSemana === 2) {
  console.log("Hoy es martes.");
} else if (diaSemana === 3) {
  console.log("Hoy es miércoles.");
} else if (diaSemana === 4) {
  console.log("Hoy es jueves.");
} else if (diaSemana === 5) {
  console.log("Hoy es viernes.");
else if (diaSemana === 6) {
  console.log("El dia introducido es sábado.");
} else if (diaSemana === 7) {
  console.log("El dia introducido es domingo.");
} else {
  console.log("El dia introducido no corresponde a ningún dia de la semana.");
}

// Ejercicio 7: Escribe un programa que pida al usuario su nombre y su edad y muestre en
// pantalla si es mayor de edad (18 años o más) y si su nombre empieza por una letra anterior a 
// la "M" en el abecedario (pista: piensa en acceder a la primera letra del nombre considerando que 
// las palabras (o strings) son un array de caracteres)

let nombre = prompt("Introduce tu nombre:");
let edad = parseInt(prompt("Introduce tu edad:"));

if (edad >= 18 && nombre[0] < "M") {
  console.log("Eres mayor de edad y tu nombre empieza por una letra anterior a la M.");
} else {
  console.log("No cumples los requisitos.");
}


// Ejercicio 8: Escribe un programa que solicite al usuario introducir dos números y determine cuál es el mayor. 
// Si ambos números son iguales, mostrará un mensaje que diga "Ambos números son iguales".

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (num1 > num2) {
  console.log("El primer número es mayor");
} else if (num2 > num1) {
  console.log("El segundo número es mayor");
} else {
  console.log("Ambos números son iguales");
}

// Ejericicio 9: Escribe un programa que solicite al usuario introducir dos números y 
// determine si el primer número es divisible entre el segundo número. Si el primer número 
// es divisible entre el segundo número, mostrará un mensaje que diga "El primer número es 
// divisible entre el segundo número". De lo contrario, mostrará un mensaje que diga "El primer 
// número no es divisible entre el segundo número".

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (num1 % num2 === 0) {
  console.log("El primer número es divisible entre el segundo número");
} else {
  console.log("El primer número no es divisible entre el segundo número");
}


// Ejercicio 10: Escribe un programa que solicite al usuario introducir tres números y determine cuál es 
// el mayor.  Si los tres números son iguales, mostrará un mensaje que diga "Los tres números son iguales".

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let num3 = parseInt(prompt("Introduce el tercer número:"));

if (num1 > num2 && num1 > num3) {
  console.log("El primer número es el mayor");
} else if (num2 > num1 && num2 > num3) {
  console.log("El segundo número es el mayor");
} else if (num3 > num1 && num3 > num2) {
  console.log("El tercer número es el mayor");
} else {
  console.log("Los tres números son iguales");
}

*/