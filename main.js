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