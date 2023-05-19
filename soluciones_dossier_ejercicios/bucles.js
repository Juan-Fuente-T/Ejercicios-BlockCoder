/*
------------SOLUCIONES EJERCICIOS BUCLES------------
// Ejercicio 1: Imprimir los primeros n números naturales utilizando un bucle while, donde
// n será un número que introducirá el usuario. Por ejemplo, si el usuario introduce 5, el programa
// debe mostrar 1, 2, 3, 4 y 5.

let n = parseInt(prompt("Introduce un número: "));
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

// Ejercicio 2: Imprime la tabla de multiplicar del número introducido utilizando un bucle for
let numero = parseInt(prompt("Introduce un número:"));
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

// Ejercicio 3: Calcula la suma de los primeros n números pares utilizando un bucle while. 
// Por ejemplo, si el usuario introduce 6, el programa calcular la suma de 2 + 4 + 6, y mostrar el resultado.
let n = parseInt(prompt("Introduce un número:"));
let i = 1;
let suma = 0;
while (i <= n * 2) {
  if (i % 2 === 0) {
    suma += i;
  }
  i++;
}

console.log("La suma de los primeros n números pares es:", suma);

// Ejercicio 4: Calcula el factorial del número introducido utilizando un bucle for
let numero = parseInt(prompt("Introduce un número:"));
let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial *= i;
}
console.log("El factorial de " + numero + " es: " + factorial);

// Ejercicio 5: Dado un número n, imprime por la consola todos los números desde 1 hasta 
// n que sean divisibles por 3 o 5
let n = parseInt(prompt("Introduce un número"));
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}


// Ejercicio 6: Dado un número n, imprimir en la consola todos los números desde n hasta 
// 1 en orden descendente
let n = parseInt(prompt("Introduce un número"));
for (let i = n; i >= 1; i--) {
  console.log(i);
}

// Ejercicio 7: Dado un número n, imprimir en la consola la suma de todos los números desde 1 hasta n 
// que sean múltiplos de 3 y 5 (es decir, que al dividirlos por 3 y por 5, el residuo de la división sea 0).

let n = parseInt(prompt("Introduce un número"));
let suma = 0;
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    suma += i;
  }
}
console.log(suma);

// Ejercicio 8: Pide al usuario un número y muestra por consola todos los números primos 
// menores o iguales a ese número
let num = parseInt(prompt("Introduce un número"));
for (let i = 2; i <= num; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Ejercicio 9: Pide al usuario una palabra y muestra por consola todas las letras de la palabra 

let word = prompt("Introduce una palabra");
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}


// Ejercicio 10: Muestra los primeros n términos de la serie de Fibonacci utilizando un bucle while.
// La serie de fibonacci es una secuencia de números donde cada número es igual a la suma de sus dos anteriores.
// Por ejemplo, la secuencia en caso de que n fuera 5 seria: 0, 1, 1, 2, 3, 5
let n = parseInt(prompt("Introduce un número:"));
let i = 1;
let a = 0;
let b = 1;
console.log(0);
while (i <= n) {
  console.log(b);
  let temp = b;
  b += a;
  a = temp;
  i++;
}
*/