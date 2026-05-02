console.log("Guía JavaScript iniciada");

// EJERCICIO 1
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

// EJERCICIO 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeFinal = puntosBase + bonus - penalizacion;

console.log("Puntaje final:", puntajeFinal);

// EJERCICIO 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  let numero = Number(valor);
  let resultado = numero + 10;

  mensaje.textContent = "Resultado: " + resultado;
});

// EJERCICIO 4
let edadJugador = 15;

if (edadJugador >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}

// EJERCICIO 5
let vidaJugador = 50;

if (vidaJugador > 70) {
  console.log("Jugador en buen estado");
} else if (vidaJugador >= 30) {
  console.log("Jugador herido");
} else if (vidaJugador >= 1) {
  console.log("Jugador en peligro");
} else if (vidaJugador === 0) {
  console.log("Game Over");
} else {
  console.log("Error: vida inválida");
}

// EJERCICIO 6
let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("El juego ha comenzado");
    break;
  case "configuracion":
    console.log("Abriendo configuración");
    break;
  case "creditos":
    console.log("Mostrando créditos");
    break;
  case "salir":
    console.log("Saliendo del juego");
    break;
  default:
    console.log("Opción no válida");
}

// EJERCICIO 7
for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("¡Comienza!");

// EJERCICIO 8
let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10;
}

console.log("Puntaje total:", puntajeTotal);

// EJERCICIO 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];

console.log("Primer objeto:", inventario[0]);
console.log("Último objeto:", inventario[inventario.length - 1]);
console.log("Cantidad:", inventario.length);

// EJERCICIO 10
const inventario2 = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario2.length; i++) {
  console.log(inventario2[i]);
}

// EJERCICIO 11
let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

mochila.pop();

console.log(mochila);

// EJERCICIO 12
const inventario3 = ["espada", "poción", "escudo"];

if (inventario3.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}