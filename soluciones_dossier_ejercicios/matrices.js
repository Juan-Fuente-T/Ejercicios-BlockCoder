
/*
------------SOLUCIONES EJERCICIOS MATRICES------------
// Ejercicio 1: Crea una matriz cuadrada de tamaño n, que contenga todos ceros.
let n = 3;
let matriz = [];
for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        matriz[i][j] = 0;
    }
}
console.log(matriz);
// Ejercicio 2: Crea una matriz de 3x3. Luego, muestra por consola la suma 
// de los valores de la diagonal principal de la matriz.

let matriz = [
  [4, 8, 2],
  [6, 1, 9],
  [5, 3, 7]
];

let suma = 0;
for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}
console.log("La suma de los valores de la diagonal principal de la matriz es: " + suma);


// Ejercicio 3: Crea una matriz de tamaño n x n, donde n es un número introducido por el usuario, y muéstrala por pantalla.
// Luego, muestra por consola la suma de los valores de la diagonal de la matriz.

let n = parseInt(prompt("Introduce un número para el tamaño de la matriz:"));

let matriz  = [];
for (let i = 0; i < n; i++) {
  matriz.push([]);
  for (let j = 0; j < n; j++) {
    matriz[i].push(Math.floor(Math.random() * 10));
  }
}
console.log(matriz);

let suma = 0;
for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}
console.log("La suma de los valores de la diagonal de la matriz es: " + suma);

// Ejercicio 4: Crea dos matrices de 2x2. Luego, muestra por consola la suma de ambas matrices.
let matriz1 = [
  [7, 2],
  [5, 9]
];

let matriz2 = [
  [1, 6],
  [4, 8]
];

let sumaMatriz = [];
for (let i = 0; i < matriz1.length; i++) {
  sumaMatriz.push([]);
  for (let j = 0; j < matriz1.length; j++) {
    sumaMatriz[i].push(matriz1[i][j] + matriz2[i][j]);
  }
}

console.log("La suma de ambas matrices es:");
for (let i = 0; i < sumaMatriz.length; i++) {
  console.log(sumaMatriz[i]);
}


// Ejercicio 5: Crea una matriz de tamaño 4x4. Luego, muestra por consola 
// la matriz resultante de multiplicar cada valor por 2.

let matriz = [
  [3, 7, 2, 8],
  [9, 4, 6, 1],
  [5, 10, 2, 7],
  [8, 1, 9, 4]
];

let matrizMultiplicada = [];
for (let i = 0; i < matriz.length; i++) {
  matrizMultiplicada.push([]);
  for (let j = 0; j < matriz[i].length; j++) {
    matrizMultiplicada[i].push(matriz[i][j] * 2);
  }
}

console.log("La matriz resultante de multiplicar cada valor por 2 es: ", matrizMultiplicada);


// Ejercicio 6: Crea una matriz de tamaño 5x5. 
// Luego, muestra por consola la suma de todos los valores de la matriz.

let matriz = [
  [6, 8, 3, 9, 1],
  [7, 2, 4, 1, 10],
  [3, 8, 9, 5, 2],
  [10, 1, 4, 5, 6],
  [2, 7, 10, 3, 4]
];

let sumaMatriz = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    sumaMatriz += matriz[i][j];
  }
}

console.log(sumaMatriz);

Ejercicio 7: Crea una matriz de tamaño n x m, que contenga números en orden ascendente desde 1 hasta n*m.
let n = 3;
let m = 4;
let matriz = [];
let contador = 1;
for (let i = 0; i < n; i++) {
  matriz[i] = [];
  for (let j = 0; j < m; j++) {
    matriz[i][j] = contador;
    contador++;
  }
}
console.log(matriz);
*/