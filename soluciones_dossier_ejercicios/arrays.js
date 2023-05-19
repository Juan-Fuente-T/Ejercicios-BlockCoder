/*
------------SOLUCIONES EJERCICIOS ARRAYS------------
// Ejercicio 1 :Crea un array con los números del 1 al 10. 
// Luego, utiliza un bucle for para sumar todos los números del array y mostrar el resultado por consola.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

// Ejercicio 2: Crea un array con 5 nombres. Luego, utiliza un bucle while para mostrar 
// cada uno de los nombres por consola.
let nombres = ['Juan', 'Pedro', 'Maria', 'Luisa', 'Ana'];
let i = 0;
while (i < nombres.length) {
  console.log(nombres[i]);
  i++;
}

// Ejercicio 3: Crea un array con 3 números. Luego, utiliza un bucle for para 
// mostrar por consola los cuadrados de cada uno de los números. (Investiga cómo hacer el cuadrado de un
// número en javascript)
let numeros = [2, 5, 7];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] ** 2);
}


// Ejercicio 4: Crea un array con los números del 1 al 5 y otro array con los números del 6 al 10. 
// Luego, utiliza un bucle for para mostrar por consola la suma de cada par de elementos correspondientes 
// de los dos arrays. 
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];
for (let i = 0; i < nums1.length; i++) {
  console.log(nums1[i] + nums2[i]);
}


// Ejercicio 5: Crea un array con 5 números y muestra por consola el número mayor
let numeros = [8, 5, 12, 3, 10];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("El número mayor es:", mayor);

// Ejercicio 6: Crea un array con 10 palabras y muestra por consola la cantidad de palabras 
// que empiezan con la letra "a"
let palabras = ["amigo", "ave", "biblioteca", "computadora", "oso", "agua", "auto", "anillo", "ciudad", "manzana"];
let contador = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i][0] === "a") {
    contador++;
  }
}

console.log("La cantidad de palabras que empiezan con la letra a es:", contador);

// Ejercicio 7: Crea un array con 7 números y muestra por consola la suma de los números en posiciones pares (0, 2, 4, etc.)
let numeros = [3, 7, 1, 8, 2, 5, 9];
let suma = 0;

for (let i = 0; i < numeros.length; i += 2) {
  suma += numeros[i];
}

console.log("La suma de los números en posiciones pares es:", suma);

// Ejercicio 8: Crea un array con 6 números y muestra por consola los números que son pares
let numeros = [9, 12, 5, 3, 8, 6];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i], "es un número par");
  }
}

// Ejercicio 9: Crea un array con 4 números y muestra por consola la diferencia entre el mayor y el menor número
let numeros = [15, 10, 18, 12];
let mayor = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log("La diferencia entre el mayor y el menor número es:", mayor - menor);

// Ejercicio 10: Encuentra el índice del primer elemento par en un array.
// (pista: Investiga sobre la palabra reservada `break` y cómo utilizarla a tu favor en los bucles).
let arr = [1, 3, 5, 2, 6, 7];
let indice = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    indice = i;
    break;
  }
}
console.log("El índice del primer elemento par es:", indice);

*/