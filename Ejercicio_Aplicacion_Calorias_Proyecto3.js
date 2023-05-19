// 1. Pedir el sexo del usuario (H/h) para hombre, (M/m) para mujer.
// Habrá que controlar si ponen otro tipo de respuesta.
function calcularTmb(peso, altura, edad) {
    let tmb = (10 * peso) + (6.25 * altura) - (5 * edad);
    if (sexo_usuario === 'h') {
        tmb += 5;
    } else {
        tmb -= 161;
    }
    return tmb;
}
let debugging = false;
let sexo_usuario;
let objetivo;
let peso;
let altura;
let edad;
let tasa_mb;
let calorias_finales;

sexo_usuario = prompt("Por favor, introduce tu sexo. H/h para hombre y M/m para mujer: ").toLowerCase();
while (sexo_usuario != 'h' && sexo_usuario != 'm') {
    sexo_usuario = prompt("Te has equivocado. Introduce H/h para hombre y M/m para mujer: ");
}

// 2. Pedir cuál es su objetivo: 1 → ganancia muscular 2 → pérdida de peso
objetivo = parseInt(prompt("Por favor, introduce tu objetivo. Teclea 1 para ganancia muscular y 2 para perdida de peso: "));
if (objetivo === 1) {
    objetivo = "ganancia muscular";
} else if (objetivo === 2) {
    objetivo = "perdida de peso";
} else {
    objetivo = prompt("Te has equivocado. Teclea 1 para ganancia muscular y 2 para perdida de peso: ");
}

// 3 → mantenimiento

// 3. Pedir cuál es su actividad física actual:
// 1-> Poco o ningún ejercicio
// 2-> Ejercicio ligero (1-3 dias a la semana)
// 3-> Ejercicio moderado (3-5 días a la semana)
// 4-> Ejercicio fuerte (6-7 días a la semana))
// 5-> Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros))

actividad_fisica = parseInt(prompt("Introduce tu nivel de actividad fisica. Teclea un numero entre 1 para nula y 5 para ejercicio duro dos veces al dia: "));
while (actividad_fisica < 1 || actividad_fisica > 5) {
    actividad_fisica = prompt("Te has equivocado. Introduce un numero del 1 al 5 segun tu nivel de actividad: ");
}

// 4. Pedir el peso en kg (mínimo 20kg, máximo 200kg),

// altura en cm (mínimo 100cm, máximo 250 cm) y edad en años

peso = parseInt(prompt("Por favor, introduce tu peso en kg: "));
while (peso < 20 || peso > 200) {
    peso = prompt("El rango de peso aceptado está entre 20 y 200 kg. Introduce tu peso: ");
}
altura = parseInt(prompt("Por favor, introduce tu altura en cm: "));
while (altura < 100 || altura > 250) {
    altura = prompt("El rango de altura aceptado está entre 100 y 250 cm. Introduce tu altura: ");
}
edad = parseInt(prompt("Por favor, introduce tu edad: "));
while (edad < 2 || edad > 110) {
    edad = prompt("El rango de edad aceptado está entre 2 y 110. Introduce tu edad: ");
}

if (debugging) {
    console.log(peso, altura, edad)
}

// 5. Calcular la Tasa Metabolica Basal usando la ecuación de Harris-Benedict:
// Hombres TMB = (10 x peso en kg) + (6,25 x altura en cm) - (5 x edad en años) + 5
// Mujeres TMB = (10 x peso en kg) + (6,25 × altura en cm) - (5 x edad en años) - 161

tasa_mb = calcularTmb(peso, altura, edad);
if (debugging) {
    console.log(tasa_mb)
}
// 6. Calcular las calorías finales en función de la TMB y el objetivo.
// 1 - Poco o ningún ejercicio → TMB x 1,2
// 2 - Ejercicio ligero (1-3 días a la semana) → TMB x 1,375
// 3 - Ejercicio moderado (3-5 días a la semana) → TMB x 1,55
// 4 - Ejercicio fuerte (6-7 días a la semana) → TMB x 1,725
// 5 - Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros) → TMB x 1,9
if (actividad_fisica === 1) {
    if (objetivo === "ganancia muscular") {
        calorias_finales = tasa_mb * 1.2 * 100;
    } else {
        calorias_finales = tasa_mb * 1.2 / 100;
    }
} else if (actividad_fisica === 2) {
    if (objetivo === "ganancia muscular") {
        calorias_finales = tasa_mb * 1.375 * 100;
    } else {
        calorias_finales = tasa_mb * 1.375 / 100;
    }
} else if (actividad_fisica === 3) {
    if (objetivo === "ganancia muscular") {
        calorias_finales = tasa_mb * 1.55 * 100;
    } else {
        calorias_finales = tasa_mb * 1.55 / 100;
    }
} else if (actividad_fisica === 4) {
    if (objetivo === "ganancia muscular") {
        calorias_finales = tasa_mb * 1.725 * 100;
    } else {
        calorias_finales = tasa_mb * 1.725 / 100;
    }
} else {
    if (objetivo === "ganancia muscular") {
        calorias_finales = tasa_mb * 1.9 * 100;
    } else {
        calorias_finales = tasa_mb * 1.9 / 100;
    }
}

console.log("Tu tasa de metabolismo basal es: ",tasa_mb);
console.log("Las calorias que necesitas para tu objetivo de",objetivo, "son:",calorias_finales);