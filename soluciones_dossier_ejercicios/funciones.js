/*
------------SOLUCIONES EJERCICIOS FUNCIONES------------
// Ejercicio 1: Define una función llamada "sumar" que reciba 
// dos parámetros y retorne la suma de ambos.

function sumar(num1, num2) {
  return num1 + num2;
}

console.log(sumar(3, 5)); // resultado esperado: 8

// Ejercicio 2: Define una función llamada "restar" que reciba dos 
// parámetros y retorne la resta del segundo al primero.

function restar(num1, num2) {
  return num1 - num2;
}

console.log(restar(10, 7)); // resultado esperado: 3

// Ejercicio 3: Define una función llamada "multiplicar" que 
// reciba dos parámetros y retorne el producto de ambos.

function multiplicar(num1, num2) {
  return num1 * num2;
}

console.log(multiplicar(4, 6)); // resultado esperado: 24

// Ejercicio 4: Define una función llamada "dividir" que reciba dos parámetros y retorne 
// la división del primero entre el segundo. Si el segundo parámetro es 0, 
// la función debe retornar un mensaje de error indicando que la división entre 0 no está definida.

function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: división entre 0 no está definida";
  } else {
    return num1 / num2;
  }
}

console.log(dividir(10, 2)); // resultado esperado: 5
console.log(dividir(7, 0)); // resultado esperado: "Error: división entre 0 no está definida"

// Ejercicio 5: Define una función llamada "calculadora" que reciba tres parámetros: num1, num2 y operacion.
// La función debe retornar el resultado de la operación entre num1 y num2, donde la operación 
// es un string que puede ser "suma", "resta", "multiplicacion" o "division". Si la operación no
// es una de las cuatro opciones mencionadas, la función debe retornar un mensaje de error indicando 
// que la operación introducida no es válida.
function calculadora(num1, num2, operacion) {
    if(operacion == "suma") {
        return num1 + num2;
    } else if (operacion == "resta") {
        return num1 - num2;
    }else if(operacion == "multiplicacion"){
        return num1 * num2;
    }else if(operacion == "division"){
        if(num2 == 0){
            return "Error: división entre 0 no está definida";
        }
        return num1 / num2;
    } else {
        return "Error: operación no válida";
    }
}

console.log(calculadora(3, 6, "suma")); // resultado esperado: 9
console.log(calculadora(10, 4, "resta")); // resultado esperado: 6
console.log(calculadora(2, 5, "multiplicacion")); // resultado esperado: 10
console.log(calculadora(9, 3, "division")); // resultado esperado: 3
console.log(calculadora(7, 8, "potencia")); // resultado esperado: "Error: operación no válida"


// Ejercicio 6: Define una función llamada "esPar" que reciba un parámetro de tipo número y 
// retorne un valor booleano indicando si el número es par o no.

function esPar(num) {
  return num % 2 === 0;
}

console.log(esPar(7)); // resultado esperado: false
console.log(esPar(10)); // resultado esperado: true

// Ejercicio 7: Define una función llamada "esPrimo" que reciba un parámetro de 
// tipo número y retorne un valor booleano indicando si el número es primo o no.
// Un número es primo si sólo es divisible entre 1 y sí mismo.

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(esPrimo(7)); // resultado esperado: true
console.log(esPrimo(10)); // resultado esperado: false

// Ejercicio 8: Define una función llamada "factorial" que reciba un parámetro 
// de tipo número y retorne el factorial de ese número.
// El factorial de un número n es el producto de todos los números enteros positivos desde 1 hasta n.

function factorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5)); // resultado esperado: 120

// Ejercicio 9: Define una función llamada "palindromo" que reciba un parámetro que sea una palabra y 
// retorne un valor booleano indicando si la palabra es un palíndromo o no.
// Un palíndromo es una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
// (considera que la palabra que recibe la función no tiene espacios)

function palindromo(cadena) {
  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadena.toLowerCase() === cadenaInvertida.toLowerCase();
}

console.log(palindromo("radar")); // resultado esperado: true
console.log(palindromo("hola")); // resultado esperado: false

// Ejercicio 10:
// Define una función llamada "contarVocales" que reciba una palabra y retorne la cantidad de 
// vocales que tiene. Las vocales permitidas son "a", "e", "i", "o" y "u" (en minúsculas). 
// No hace falta que controles si la palabra tiene alguna vocal en mayúscula, asume que 
// las vocales de la palabra siempre estarán en minúscula

function contarVocales(cadena) {
  let cantidadVocales = 0;
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      cantidadVocales++;
    }
  }
  return cantidadVocales;
}

console.log(contarVocales("avion")); // resultado esperado: 3
console.log(contarVocales("murcielago")); // resultado esperado: 4

*/