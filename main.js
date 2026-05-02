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

// EJERCICIO 13
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

// EJERCICIO 14
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// EJERCICIO 15
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));

// EJERCICIO 16
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};

console.log(jugador.nombre);
console.log(jugador.vida);
console.log(jugador.energia);
console.log(jugador.nivel);
console.log(jugador.inventario);

// EJERCICIO 17
const jugador2 = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

jugador2.nivel += 1;
jugador2.monedas += 50;

console.log(jugador2);

// EJERCICIO 18
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
  let p = personajes[i];
  console.log(p.nombre + " es " + p.tipo + " y está en nivel " + p.nivel);
}

// EJERCICIO 19
const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);

// EJERCICIO 20
const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);

// EJERCICIO 21
const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

// EJERCICIO 22
const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

// EJERCICIO 23
//const mensaje = document.getElementById("mensaje");

mensaje.textContent = "Bienvenido a la guía de JavaScript";
mensaje.style.color = "blue";

// EJERCICIO 24
//const boton = document.getElementById("btn");
const mensaje2 = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function () {
  puntos += 10;
  mensaje2.textContent = "Puntos: " + puntos;
});

// EJERCICIO 25
//const input = document.getElementById("dato");
const boton2 = document.getElementById("btn");
const mensaje3 = document.getElementById("mensaje");

boton2.addEventListener("click", function () {
  if (input.value === "") {
    mensaje3.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje3.textContent = "Bienvenido/a, " + input.value;
  }
});

// EJERCICIO 26
const jugadorLS = {
  nombre: "Luna",
  puntaje: 1500
};

// guardar
localStorage.setItem("jugador", JSON.stringify(jugadorLS));

// recuperar
const jugadorRecuperado = JSON.parse(localStorage.getItem("jugador"));

console.log(jugadorRecuperado);

// rama ejercicios-basicos funcionando