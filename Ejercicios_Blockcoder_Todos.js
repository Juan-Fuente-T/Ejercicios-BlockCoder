/*

3. Pide al usuario un número y muestra si es
primo o no (un número primo es un número
mayor que 1 que tiene únicamente dos
divisores positivos distintos: él mismo y el 1.
Por ejemplo, el 7 sólo tiene como divisores el 7
y el 1, por tanto es primo. Mientras que el 6
tiene como divisores el 6, el 1, el 2 y el 3).


let num = parseInt(prompt("Introduce un número: "));
let primo  = true;

for(let i=2; i<num; i++){
    if(num % i === 0){
        primo = false;
}
}
if(primo){
console.log("Es primo")
}else{
console.log("No es primo")
}
   



*/


/*5. Pide al usuario una letra y muestra si es
vocal o no.


letra = prompt("Introduce una letra: ");

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){

    console.log("Es una vocal");
}else {
    console.log("No es una vocal");
}
*/

/*
----------------

5. Pide al usuario una letra y muestra si es
vocal o no.
*/
/*
letra = prompt("Introduce una letra: ");
vocal = false
letras = ['a', 'e', 'i', 'o', 'u'];
for(let i = 0; i <letras.length; i++){
 
    if (letra === letras[i]){
   vocal = true;
}   
}
if (vocal == true){
       console.log("Es una vocal")
} else {
       console.log("No es una vocal")
}

*/

BUCLES
/*Ejercicio 1: Imprimir los primeros n números naturales utilizando un bucle while, donde
 n será un número que introducirá el usuario. Por ejemplo, si el usuario introduce 5, el programa
 debe mostrar 1, 2, 3, 4 y 5.
 let n = parseInt(prompt("Introduce un número: "));
 
 i = 1;
 
 while(i<n){
     console.log(i);
     i++;
 }*/
 /*Ejercicio 2: Imprime la tabla de multiplicar del número introducido utilizando un bucle for
 }
let numero = parseInt(prompt("Introduce un número:"));

for(i = i; i <= 10; i++){
    console.log(numero*i)6. Crea un array con 10 palabras y muestra por
consola la cantidad de palabras que empiezan con
la letra "a".
 
 let my_array = ["casa", "puerta", "ventana", "balcón", "chimenea", "aseo", "azotea", "cocina", "armario", "silla"];
 let palabras = 0;
 
 for(i=0; i<my_array.length; i++){
     if(my_array[i][0] === 'a'){
         palabras+=1;
     }
 }
console.log(palabras)*/
}*/
 



/*
3. Calcula la suma de los primeros n números
pares utilizando un bucle while. Por ejemplo, si el
usuario introduce 6, el programa calcular la suma
de 2 + 4 + 6, y mostrar el resultado.

let numero = parseInt(prompt("Introduce un numero: "));
let result = 0;
let i = 1;
while (i <= numero){
    if (i % 2 === 0){
        result +=i;
    }
    i++
}
console.log(result)
*/

/*
4. Calcula el factorial del número introducido
utilizando un bucle for

let numero = parseInt(prompt("Introduce un numero: "));
let factorial = 1;
for(let i = 1; i <= numero; i++){
    factorial = factorial * i;
    
}

console.log(factorial);

*/

/*
5. Dado un número n, imprime por la consola
todos los números desde 1 hasta n que sean
divisibles por 3 o 5


let n = parseInt(prompt("Introduce un numero: "));

let i = 1;
while (i <= n){
    if (i%3 === 0 || i%5 === 0){
        console.log(i);
    }
    i++
}

*/

/*
6. Dado un número n, imprimir en la consola
todos los números desde n hasta 1 en orden
descendente

let n = parseInt(prompt("Introduce un numero: "));
for (i = n; i>0; i--){
    console.log(i);
}

OPCION DOS
let n = parseInt(prompt("Introduce un numero: "));
let num = 0   
for (i = 0; i<n; i++){
    num = n-i;
    console.log(num);
}
*/

/*
7. Dado un número n, imprimir en la consola la
suma de todos los números desde 1 hasta n que
sean múltiplos de 3 y 5 (es decir, que al dividirlos
por 3 o por 5, el residuo de la división sea 0).

let n = parseInt(prompt("Introduce un numero: "));

let sum = 0;

for (let i = 1; i < n; i++){
    if (i % 3 === 0 || i % 5 === 0){
        sum += i;
    }
}
    console.log(sum);
    */


8. Pide al usuario un número y muestra por
consola todos los números primos menores o
iguales a ese número.
/*
9. Pide al usuario una palabra y mostrar por
consola todas las letras de la palabra.
let palabra = (prompt("Introduce una palabra: "));
let letras = [];

for(i=0; i<palabra.length; i++){
    letras.push(palabra[i])
}

    console.log(letras)

OPCION DOS

let palabra = (prompt("Introduce una palabra: "));

for(i=0; i<palabra.length; i++){
    console.log(palabra[i])
}


*/

/*10. Muestra los primeros n términos de la serie de
Fibonacci utilizando un bucle while. La serie de
fibonacci es una secuencia de números donde
cada número es igual a la suma de sus dos
anteriores. Por ejemplo, la secuencia en caso de
que n fuera 5 seria: 0, 1, 1, 2, 3, 5

let n = parseInt(prompt("Introduce un número: "));
let nums = [0, 1];
let num =1;
let fibo = 0;


while (num<n){
    num++;
    fibo = nums[num-2]+nums[num-1];
    nums.push(fibo);
}
    console.log(nums);
    */

ARRAYS

/*1. Crea un array con los números del 1 al 10.
Luego, utiliza un bucle for para sumar todos los
números del array y mostrar el resultado por
consola.
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (i = 0; i<=ar.length; i++){
    sum += arr[i];
}
console.log(sum);
*/
/*
2. Crea un array con 5 nombres. Luego, utiliza un
bucle while para mostrar cada uno de los
nombres por consola.
let nom = ["Paco", "Peco", "Pico", "Poco", "Puco"];
let nombres = 0;

while(nombres < nom.length){
    
console.log(nom[nombres++]);

}
*/

/*
3. Crea un array con 3 números. Luego, utiliza un
bucle for para mostrar por consola los cuadrados
de cada uno de los números. (Investiga cómo
hacer el cuadrado de un número en javascript).

let arra = [2,4,3];

for (let i = 0; i<arra.length; i++){
    console.log(arra[i]**2);
}

*/

/*
4. Crea un array con los números del 1 al 5 y otro
array con los números del 6 al 10. Luego, utiliza
un bucle for para mostrar por consola la suma de
cada par de elementos correspondientes de los
dos arrays.

let ar = [1,2,3,4,5];

let arra = [6,7,8,9,10];

let sum = 0;

for (let i = 0; i<arra.length; i++){
    console.log(arra[i]+ar[i]);
}
*/

/*
5. Crea un array con 5 números y muestra por
consola el número mayor.

let nums = [2,6,24,32,17];
let mayor = 0;

for(i=0; i<nums.length; i++){
    if(mayor<nums[i]){
        mayor = nums[i];
    }
}
console.log(mayor)
*/
/*
6. Crea un array con 10 palabras y muestra por
consola la cantidad de palabras que empiezan con
la letra "a".
 
 let my_array = ["casa", "puerta", "ventana", "balcón", "chimenea", "aseo", "azotea", "cocina", "armario", "silla"];
 let palabras = 0;
 
 for(i=0; i<my_array.length; i++){
     if(my_array[i][0] === 'a'){
         palabras+=1;
     }
 }
console.log(palabras)*/

/*
7. Crea un array con 7 números y muestra por
consola la suma de los números en posiciones
pares (0, 2, 4, etc.).

let my = [1, 24, 7 ,9 ,22, 15, 38];
let sum = 0;

for(i=0; i<my.length; i++){
    if(my[i]%2===0){
    sum+=my[i];
    }
}
console.log(sum)

*/
/*
8. Crea un array con 6 números y muestra por
consola los números que son pares.

let my = [1, 24, 9, 22, 15, 38];

for(i=0; i<my.length; i++){
    if(my[i]%2===0){
        console.log(my[i])
    }
}

*/

/*
9. Crea un array con 4 números y muestra por
consola la diferencia entre el mayor y el menor
número.
let nom = [6, 13, 3, 6, 101];
let mayor = 0;
let menor = 0;

for(i=0; i<nom.length;i++){
    if(nom[i]>mayor){
        menor = mayor;
        mayor = nom[i];
    }
}

for(j=0;j<nom.length;j++){
    if(menor>nom[j]){
        menor=nom[j];
    }
}
console.log(mayor - menor);

OPCION DOS

let nom = [6, 1, 3, 10];
let mayor = nom[0];
let menor = nom[0];

for(i=0; i<nom.length;i++){
    if(nom[i]>mayor){
        mayor = nom[i];
    }else if(nom[i]<menor){
        menor=nom[i];
    }
}
console.log(mayor - menor);
*/
/*10. Encuentra el índice del primer elemento par
en un array. (pista: Investiga sobre la palabra
reservada "break" y cómo utilizarla a tu favor en
los bucles).

let nums = [3, 7, 6, 13, 3, 1];

for(i=0;i<nums.length;i++){
    if(nums[i]%2 === 0){
        console.log(nums.indexOf(nums[i]))
    }
}

OPCION CON BREAK


let nums = [3, 9,13, 2, 8, 3, 3, 1];

for(i=0;i<nums.length;i++){
    if(nums[i]%2 === 0){
        console.log(i)
        break
    }
}
*/
FUNCIONES

/*1. Define una función llamada "sumar" que reciba
dos parámetros y retorne la suma de ambos.

function funt(sum1, sum2){
    return (sum1 + sum2);
}
let sum1 = parseInt(prompt("Introduce un primer número: "));
let sum2 = parseInt(prompt("Introduce un segundo número: "));
console.log(funt(sum1,sum2));
*/


/*
2. Define una función llamada "restar" que reciba
dos parámetros y retorne la resta del segundo al
primero.
function funt(num1, num2){
    return (num2 - num1);
}
let res1 = parseInt(prompt("Introduce un primer número: "));
let res2 = parseInt(prompt("Introduce un segundo número: "));
console.log(funt(res1,res2));

*/
/*
3. Define una función llamada "multiplicar" que
reciba dos parámetros y retorne el producto de
ambos.

function multiplicar(num1, num2){
    return num1 * num2;
}

console.log(multiplicar(3, 6));
*/
/*4. Define una función llamada "dividir" que reciba
dos parámetros y retorne la división del primero
entre el segundo. Si el segundo parámetro es 0, la
función debe retornar un mensaje de error
indicando que la división entre 0 no está definida.


/*
function dividir(num1,num2){
    if(num2 === 0){
    return ("La división entre 0 no está definida");
    }else{
    return num1/num2;
    }
}

console.log(dividir(100,2));
console.log(dividir(50,0));
*/
/*
5. Define una función llamada "calculadora" que
reciba tres parámetros: num1, num2 y operacion.
La función debe retornar el resultado de la
operación entre num1 y num2, donde la
operación es un string que puede ser "suma"
,

"resta"
,
"multiplicacion" o "division". Si la
operación no es una de las cuatro opciones
mencionadas, la función debe retornar un
mensaje de error indicando que la operación
introducida no es válida.

function calc(num1, num2, operacion){
    if(operacion != "suma" && operacion != "resta" && operacion != "multiplicacion" && operacion != "division"){
        return("Error. La operación introducida no es válida.")
    }else{
        if(operacion === "suma"){
            return ("El resultado es " + (num1 + num2));
        }else if(operacion === "resta"){
            return ("El resultado es " + (num1 - num2));
        }else if(operacion === "multiplicacion"){
            return ("El resultado es " + (num1 * num2));
        }else if(operacion === "division"){
            if(num2 === 0){
                return("Error. No se puede dividir entre cero.")
            }else{
                return ("El resultado es " + (num1 / num2));
        }
    }    
}
}
let n1=parseInt(prompt("Introduce tu primer número: "));
let n2=parseInt(prompt("Introduce tu segundo número: "));
let operador=(prompt("Introduce la operación: ")).toLowerCase();

console.log(calc(n1, n2, operador));
*/


/*
6. Define una función llamada "esPar" que reciba
un parámetro de tipo número y retorne un valor
booleano indicando si el número es par o no.

function esPar(num){
    if(num%2===0){
    return(true)
    }else{
        return(false);
    }
}
console.log(esPar(33));
*/
/*7. Define una función llamada "esPrimo" que
reciba un parámetro de tipo número y retorne un
valor booleano indicando si el número es primo o
no. Un número es primo si sólo es divisible entre 1
y sí mismo.

function esPrimo(num){
    let primo = true;
    
    for(let i=2; i<num; i++){
         if(num%i===0){
            primo=false;
        }
    }
    return(primo);
}
console.log(esPrimo(7));
*/
/*8. Define una función llamada "factorial" que
reciba un parámetro de tipo número y retorne el
factorial de ese número. El factorial de un número
n es el producto de todos los números enteros
positivos desde 1 hasta n.

function factorial(num){
    let fact = 1;
    
    for(let i=1; i<=num; i++){
         fact *= i;
    }
    return(fact);
}
console.log(factorial(6));
*/

/*9. Define una función llamada "palindromo" que
reciba un parámetro que sea una palabra y
retorne un valor booleano indicando si la palabra
es un palíndromo o no. Un palíndromo es una
palabra o frase que se lee igual de izquierda a
derecha que de derecha a izquierda.
function palindromo(frase) {
  let reverso = "";
  
    for (let i=frase.length-1; i>=0; i--) {
        reverso += frase[i];
    }
return frase.toLowerCase() === reverso.toLowerCase();
}


console.log(palindromo("arara"));

OPCION ARRAYS
function palindromo(frase) {
  let pal = false;
  let letras = [];
  let reverso = [];
  
    for (let i = 0; i < frase.length; i++) {
        letras.push(frase[i]);
        reverso.unshift(frase[i])
    }
    for(let j = 0; j<frase.length; j++){
        if(letras[j] === reverso[j]){
        pal = true;
    }
    }
  
console.log(letras);
console.log(reverso);
return pal;
}
console.log(palindromo("acaca"));
*/


/*
10. Define una función llamada "contarVocales"
que reciba una palabra y retorne la cantidad de
vocales que tiene. Las vocales permitidas son "a"
,

"e"
,
"i"
,
"o" y "u" (en minúsculas). No hace falta
que controles si la palabra tiene alguna vocal en
mayúscula, asume que las vocales de la palabra
siempre estarán en minúscula

function contarVocales(palabra){
    let contador = 0;
    for(i = 0; i<palabra.length; i++){
        if(palabra[i] === "a" || palabra[i] === "e" || palabra[i] === "i" || palabra[i] === "o" || palabra[i] === "u"){
            contador++;
        }
    }
return("El numero de vocales es "+ contador)   
}

console.log(contarVocales("astrolabio"));

CON ARRAY

function contarVocales(palabra){

let vocales = ["a","e","i","o","u"];
let contador =0;

    for(let i=0; i<palabra.length; i++){
        for(let j=0; j<palabra.length; j++){
            if(palabra[i] === vocales[j]){
                contador+=1;
            }
        }
    }
return(contador);
}


console.log(contarVocales("cebolla"));
*/

MATRICES
/*
1. Crea una matriz cuadrada de tamaño n, que
contenga todos ceros.

n = parseInt(prompt("Introduce un numero: "));

let matrix = [];


for(let i=0; i<n; i++){
    matrix[i] = [];
   for(let j=0; j<n; j++){
       matrix [i][j] = 0;
   }
}

console.log(matrix);

*/
/*
2. Crea una matriz de 3x3. Luego, muestra por
consola la suma de los valores de la diagonal
principal de la matriz.
let matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
let suma = 0;

for(let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }

console.log(suma);
*/
/*
3. Crea una matriz de tamaño n x n, donde n es un
número Introducedo por el usuario, y muéstrala
por pantalla. Luego, muestra por consola la suma
de los valores de la diagonal de la matriz.
let n = parseInt(prompt("Introduce un numero: "));
let matriz = [];
let suma = 0;

for(i = 0; i < n; i++){
    matriz.push([]);
    for(j = 0; j < n; j++){
        matriz[i].push(j);
        }
    suma += matriz[i][i];
}
    
console.log(matriz);
console.log(suma);

*/
/*
4. Crea dos matrices de 2x2. Luego, muestra por
consola la suma de ambas matrices.
let matriz1 = [[1,2],[3,4]];
let matriz2 = [[5,6],[7,8]];
let suma_matriz = [];

for(i = 0; i < matriz1.length; i++){
    suma_matriz.push([]);
    for(j = 0; j < matriz1.length; j++){
    suma_matriz[i].push(matriz1[i][j]+matriz2[i][j]);
    }
}
console.log(suma_matriz);
*/
/*5. Crea una matriz de tamaño 4x4. Luego, muestra
por consola la matriz resultante de multiplicar
cada valor por 2.
let matriz = [[1,2,3,4],[5,6,7,8],[8,7,6,5],[4,3,2,1]];
let matriz_multi = [];

for(let i = 0; i < matriz.length; i++){
    matriz_multi.push([]);
    for(let j = 0; j < matriz[i].length; j++){
          matriz_multi.push(matriz[i][j]*2);
    }
}
console.log(matriz_multi);
*/
/*6. Crea una matriz de tamaño 5x5. Luego, muestra
por consola la suma de todos los valores de la
matriz.
let matriz = [[1,2,3,4,5],[5,6,7,8,9],[9,8,7,6,5],[5,4,3,2,1],[1,2,3,4,5]];
let suma = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
          suma += matriz[i][j];
    }
}
console.log(matriz);
console.log(suma);

OTRO

let matriz = [];
let suma = 0;
for(let i = 0; i < 5; i++){
    matriz[i] = [];
    for(let j = 0; j < 5; j++){
        matriz[i][j] = Math.floor(Math.random() * 100);;
    }
}

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
          suma += matriz[i][j];
    }
}
console.log(matriz);
console.log(suma);
*/

/*7. Crea una matriz de tamaño n x m, que
contenga números en orden ascendente desde 1
hasta n*m.

let n = parseInt(prompt("Introduce el primer numero: "));
let m = parseInt(prompt("Introduce el segundo numero: "));
let matriz = [];
let num = 1;

for(i = 0; i < n; i++){
    matriz.push([]);
       for(j = 0; j < m; j++){
            matriz[i].push([]);
            matriz[i][j].push(num++);
       }    
}    
console.log(matriz);


*/
EXTRAS

/*
1. Adivina el número. El programa creará un
número aleatorio entre 1 y 100. El jugador tiene
que adivinar el número. El programa le indica al
jugador si el número es mayor o menor al que ha
Introducedo. El juego termina cuando el jugador
adivina el número.

let numero_secreto = Math.floor(Math.random()*100);
let numero_introducido = parseInt(prompt("Intenta acertar el número secreto, introduce un número entre 1 y 100: "));
let acertado = false;

while(!acertado){
    if(numero_introducido === numero_secreto){
        console.log("¡Lo has conseguido! El numero secreto era el ",numero_secreto)
        acertado = true;
        break;
    }else if(numero_introducido > numero_secreto){
        console.log("Tu numero es mayor que el numero secreto.")
    }else{
        console.log("Tu numero es menor que el numero secreto.")
    }
    numero_introducido = parseInt(prompt("Prueba otra vez: "));
}

*/
2. Crea el piedra, papel, tijeras en javascript. El
usuario jugará contra el programa. Para que el
programa pueda jugar, generará un número
aleatorio. Si este número es menor que 3, la
elección del programa será piedra. Si el número es
menor o igual a 6 y no es menor a 3, la elección
del programa será piedra. En cualquier otro caso,
la elección del programa será tijeras.

DOSIER EJERCICIOS
PROGRAMACIÓN

3. Crea el ahorcado. El programa elige una palabra
aleatoria de un conjunto predefinido de palabras.
El usuario debe adivinar la palabra introduciendo
una letra en cada intento. Si la letra está en la
palabra, el programa muestra la letra en la
palabra. Si la letra no está en la palabra, el
programa agrega un intento fallido a un contador.
Muestra la palabra oculta con guiones bajos. El
usuario gana si adivina la palabra antes de que el
contador de intentos fallidos
llegue a un número predefinido (como 10).
Por ejemplo, si la palabra es bitcoin, primero lo
mostramos con _______. Si el usuario introduce la
letra "b"

, mostraremos b______. Si falla,
restaremos un intento. Pista: investiga las
funciones "repeat"

, y "includes" de los strings en

javascript.