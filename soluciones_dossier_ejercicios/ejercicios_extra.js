/*
------------SOLUCIONES EJERCICIOS EXTRA (TEMÁTICA JUEGOS)------------
// Ejercicio 1: Adivina el número. El programa creará un número aleatorio entre 1 y 100. 
// El jugador tiene que adivinar el número. El programa le indica al jugador si el número 
//es mayor o menor al que ha Introducedo. El juego termina cuando el jugador adivina el número.

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroIntroducido = parseInt(prompt("Adivina el número entre 1 y 100"));

while(numeroIntroducido !== numeroAleatorio) {
  if(numeroIntroducido > numeroAleatorio) {
    numeroIntroducido = parseInt(prompt("El número es menor. Inténtalo de nuevo:"));
  } else {
    numeroIntroducido = parseInt(prompt("El número es mayor. Inténtalo de nuevo:"));
  }
  intentos++;
}
console.log("¡Felicidades! Has adivinado el número en", intentos + 1, "intentos.");

// Ejercicio 2: Crea el piedra, papel, tijeras en javascript. El usuario jugará contra el programa.  
// Para que el programa pueda jugar, generará un número aleatorio. Si este número es menor que 3, la 
// elección del programa será piedra. Si el número es menor o igual a 6 y no es menor a 3, la elección del
// programa será piedra. En cualquier otro caso, la elección del programa será tijeras.

// Preguntamos al usuario su elección
let respuestaUsuario = prompt("¿Elige piedra, papel o tijeras? ");

// Generamos la elección aleatoria del ordenador
let eleccionPrograma = Math.floor(Math.random() * 10);
if (eleccionPrograma < 3) {
    eleccionPrograma = "piedra";
} else if(eleccionPrograma <= 6) {
    eleccionPrograma = "papel";
} else {
    eleccionPrograma = "tijeras";
}

// Mostramos la elección del programa
console.log("El programa ha eligido: " + eleccionPrograma);

// Comparar las elecciones y mostrar el resultado
if (respuestaUsuario === eleccionPrograma) {
    console.log("Empate!");
} else if (respuestaUsuario === "piedra") {
    if (eleccionPrograma === "tijeras") {
        console.log("Has ganado!");
    } else {
        console.log("Has perdido! Prueba de nuevo.");
    }
} else if (respuestaUsuario === "papel") {
    if (eleccionPrograma === "piedra") {
        console.log("Has ganado!");
    } else {
        console.log("Has perdido! Prueba de nuevo.");
    }
} else if (respuestaUsuario === "tijeras") {
    if (eleccionPrograma === "papel") {
        console.log("Has ganado!");
    } else {
        console.log("Has perdido! Prueba de nuevo.");
    }
} else {
    console.log("Opción no válida. Inténtalo de nuevo.");
}

// Ejercicio 3: Crea el ahorcado. El programa elige una palabra aleatoria de un conjunto 
// predefinido de palabras. El usuario debe adivinar la palabra introduciendo una letra en cada intento. 
// Si la letra está en la palabra, el programa muestra la letra en la palabra. Si la letra no 
// está en la palabra, el programa agrega un intento fallido a un contador. Muestra la palabra oculta con
// guiones bajos. El usuario gana si adivina la palabra antes de que el contador de intentos fallidos 
llegue a un número predefinido (como 10).
// Por ejemplo, si la palabra es bitcoin, primero lo mostramos con _______. Si el usuario introduce la 
// b, mostraremos b______. Si falla, restaremos un intento.
// Pista: investiga las funciones `repeat`,  y `includes` de los strings  en javascript.


// Palabras disponibles
let palabras = ['javascript', 'solidity', 'criptografia', 'bitcoin', 'ethereum'];

// Función para seleccionar una palabra aleatoria de la lista
function seleccionarPalabra(palabras) {
  let indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

// Función para ocultar la palabra seleccionada con guiones bajos
function ocultarPalabra(palabra) {
  return '_'.repeat(palabra.length);
}

// Función para comprobar si la letra adivinada se encuentra en la palabra
function comprobarLetra(letra, palabra, palabraOculta) {
  let nuevaPalabraOculta = '';
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      nuevaPalabraOculta += letra;
    } else {
      nuevaPalabraOculta += palabraOculta[i];
    }
  }
  return nuevaPalabraOculta;
}

// Función para jugar
function jugar() {
  let palabra = seleccionarPalabra(palabras);
  let palabraOculta = ocultarPalabra(palabra);
  let intentos = 6;
  let letrasUsadas = '';

  console.log('¡Bienvenido al Juego del Ahorcado!');
  console.log('La palabra a adivinar tiene ' + palabra.length + ' letras.');

  while (intentos > 0) {
    console.log('Tienes ' + intentos + ' intentos.');
    console.log('Palabra: ' + palabraOculta);
    console.log('Letras usadas: ' + letrasUsadas);

    let letra = prompt('Adivina una letra:');
    if (letra.length !== 1) {
      console.log('Por favor, introduce solo una letra.');
    } else if (palabra.includes(letra)) {
      palabraOculta = comprobarLetra(letra, palabra, palabraOculta);
      console.log('¡Bien hecho! La letra ' + letra + ' está en la palabra.');
      if (!palabraOculta.includes('_')) {
        console.log('¡Has ganado! La palabra era ' + palabra + '.');
        return;
      }
    } else {
      intentos--;
      letrasUsadas += letra + ' ';
      console.log('Lo siento, la letra ' + letra + ' no está en la palabra.');
      console.log('Te quedan ' + intentos + ' intentos.');
    }
  }

  console.log('¡Lo siento, has perdido! La palabra era ' + palabra + '.');
}

// Iniciar juego
jugar();

*/