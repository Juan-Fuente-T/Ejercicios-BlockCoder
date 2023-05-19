const prompt = require('prompt-sync')();
// 1. Pedir el sexo del usuario (H/h) para hombre, (M/m) para mujer. 
// Habrá que controlar si ponen otro tipo de respuesta.
let numero1 = prompt("Por favor, introduce el primer múmero: ");
let numero2 = prompt("Por favor, introduce el segundo numero: ");

let suma = parseInt(numero1)+parseInt(numero2);
if (suma %2 == 0) {
    console.log("Es un numero par");
}else{
    console.log ("Es un numero impar");
}


// 2. Pedir cuál es su objetivo: 1 --> ganancia muscular 2 --> pérdida de peso
//  3 --> mantenimiento

// 3.  Pedir cuál es su actividad física actual:
// 1-> Poco o ningún ejercicio
// 2-> Ejercicio ligero (1-3 dias a la semana)
// 3-> Ejercicio moderado (3-5 días a la semana) 
// 4-> Ejercicio fuerte (6-7 días a la semana)) 
// 5-> Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros))
 
 
 // 4. Pedir el peso en kg (mínimo 20kg, máximo 200kg), 
// altura en cm (mínimo 100cm, máximo 250 cm) y edad en años



// 5. Calcular la Tasa Metabolica Basal usando la ecuación de Harris-Benedict:
 // Hombres TMB = (10 x peso en kg) + (6,25 x altura en cm) - (5 x edad en años) + 5 
 // Mujeres TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 x edad en años) - 161
 
 
 // 6. Calcular las calorías finales en función de la TMB y el objetivo.
// 1 - Poco o ningún ejercicio -> TMB x 1,2
// 2 - Ejercicio ligero (1-3 días a la semana) -> TMB x 1,375
// 3 - Ejercicio moderado (3-5 días a la semana) -> TMB x 1,55
// 4 - Ejercicio fuerte (6-7 días a la semana) -> TMB x 1,725
// 5 - Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros) -> TMB x 1,9
