# Respuestas Trabajo Práctico JavaScript

## 27. Diferencia entre let, const y var

- **let**: se usa para variables que pueden cambiar su valor a lo largo del programa.
- **const**: se usa para variables cuyo valor no cambia.
- **var**: es una forma antigua de declarar variables, tiene problemas de alcance (scope) y puede generar errores, por eso hoy en día se recomienda no usarla.

---

## 28. ¿Qué es el scope?

El scope es el alcance que tiene una variable dentro del código.

En el ejemplo:

```js
let nombre = "Global";

function mostrarNombre() {
  let nombre = "Local";
  console.log(nombre);
}

mostrarNombre();
console.log(nombre);
```

- Primero se muestra: **"Local"**
- Después se muestra: **"Global"**

Esto sucede porque la variable dentro de la función tiene un alcance local y no afecta a la variable global.

---

## 29. Diferencia entre array y objeto

Un **array** se usa para guardar listas de elementos:

```js
const inventario = ["espada", "poción", "llave"];
```

Un **objeto** se usa para representar una entidad con propiedades:

```js
const jugador = {
  nombre: "Luna",
  vida: 100,
  nivel: 3,
};
```

En un videojuego:

- El array puede ser el inventario
- El objeto puede ser el jugador

---

## 30. Eventos en JavaScript

Un evento es una acción que ocurre en la página, como hacer clic o presionar una tecla.

```js
boton.addEventListener("click", function () {
  console.log("El usuario hizo clic");
});
```

- El elemento que escucha el evento es: **botón**
- El evento es: **click**
- La acción que se ejecuta es: mostrar un mensaje en consola

Esto se puede usar en videojuegos o apps para detectar acciones del usuario, como disparar, moverse o interactuar.
