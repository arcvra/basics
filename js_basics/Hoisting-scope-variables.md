# Var, let y const: diferencias y semejanzas

## Breve introducción a los conceptos de scope y hoisting

## Introducción: scope y hoisting en JavaScript

En JavaScript, las variables están disponibles en función del **ámbito (scope)** en el que se declaran.

### Scope: global y local

- Si declaras una variable **fuera** de una función, estará disponible globalmente.
- Si la declaras **dentro** de una función, sólo podrá usarse dentro de esa función.

```js
var foo = "foo";
console.log(foo); // consola: "foo"

function scope() {
    var scoped = "Esto no es accesible fuera";
}

console.log(scoped); // consola: ReferenceError: scoped is not defined
```

### ¿Qué es el hoisting?

JavaScript aplica un mecanismo llamado *hoisting*, que mueve las declaraciones de variables y funciones al inicio de su ámbito (*scope*) antes de que se ejecute el código.

Esto significa que puedes usar ciertas variables antes de declararlas, aunque el comportamiento depende de cómo las declares:

- Las variables declaradas con `var` se *hoistean* con valor undefined.

- Las declaradas con `let` o `const` también se *hoistean*, pero quedan en una "zona muerta" hasta que su línea de declaración es evaluada. Si intentas acceder a ellas antes, obtendrás un error.

```js
console.log(a); // consola: undefined
var a = 5;

console.log(b); // consola: ReferenceError
let b = 10;
```

### Declarar variables: var, let y const

Existen tres formas de declarar variables:

- `var`: es la forma tradicional, disponible desde los inicios de JavaScript.

- `let` y `const`: introducidas en ECMAScript 6 (2015), ofrecen un comportamiento más predecible con respecto a alcance y hoisting.

---

## Comparación entre `var`, `let` y `const`

Definiremos las diferencias entre `var`, `let` y `const` según tres criterios: posibilidad de **re-asignación**, **re-declaración** y **comportamiento respecto al scope y hoisting**.

### `var`

- **Puede re-asignarse** ✅
- **Puede re-declararse** ✅
- **Scope de función**, no de bloque.
- Se *hoistea* con valor `undefined`

```js
var x = 1;
var x = 2; // OK: re-declaración permitida
x = 3;     // OK: re-asignación permitida

console.log(x); // consola: 3

if (true) {
    var x = 5;  // la variable se redefine globalmente
}

console.log(x); // consola: 5
```

### `let`

- **Puede re-asignarse**

- Tiene **scope de bloque**

- **No puede re-declararse** en el mismo bloque

- Se hoistea, pero **no puede usarse antes de ser declarada**

```js
let y = 10;
let y = 20; // Error: ya está declarada en este bloque
y = 15;     // OK: re-asignación permitida

if (true) {
    let y = 99;
    console.log("Dentro del bloque:", y); // consola: "Dentro del bloque: 99"
}

console.log("Fuera del bloque:", y); // consola: "Fuera del bloque: 15"
```

### `const`

- **No puede re-asignarse**

- **No puede re-declararse**

- Tiene **scope de bloque**, como `let`

- **Tampoco puede usarse antes de ser declarada**

```js
const z = 42;
z = 50;         // Error: no se puede re-asignar
const z = 60;   // Error: ya declarada en este bloque

if (true) {
    const z = 100;
    console.log("Dentro del bloque:", z); // consola: 100
}

console.log("Fuera del bloque:", z); // consola: 42
```

> ⚠ Nota importante: Si se declara un const cuyo valor es un objeto o un array, se puede modificar el contenido interno, pero no puedes volver a asignar otra cosa al mismo nombre

```js
const arr = [1, 2, 3];
arr.push(4);            // OK, permitido
console.log(arr);       // consola: [1, 2, 3, 4]

arr = [0];              // Error: re-asignación no permitida
```

### Comparativa

| Característica | `var`                 | `let`            | `const`          |
| -------------- | --------------------- | ---------------- | ---------------- |
| Re-asignable   | ✅                    | ✅                | ❌                |
| Re-declarable  | ✅                    | ❌                | ❌                |
| Scope          | Global / Función      | Bloque           | Bloque           |
| Hoisting       | Sí (valor: undefined) | Sí (no puede usarse) | Sí (no puede usarse) |
