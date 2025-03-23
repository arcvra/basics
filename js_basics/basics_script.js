// Data types (Tipos de datos primitivos)
const dataTypes = [
    { String: { definition: "Cadena de caracteres.", value: "'Hola, mundo!'" } },
    { Number: { definition: "Números enteros y decimales.", value: "42, 3.14" } },
    { Boolean: { definition: "Valor lógico: verdadero o falso.", value: "true, false" } },
    { Undefined: { definition: "Variable declarada sin valor.", value: "let x; // undefined" } },
    { Null: { definition: "Ausencia intencional de valor.", value: "let y = null;" } },
    { Symbol: { definition: "Valor único e inmutable.", value: "Symbol('id')" } }
];

// Data structures (Estructuras de datos basadas en objetos)
const dataStructures = [
    { Object: { definition: "Estructura clave-valor.", example: "{ nombre: 'Carlos', edad: 25 }" } },
    { Array: { definition: "Lista ordenada de elementos.", example: "[1, 2, 3, 'Hola']" } },
    { Set: { definition: "Colección de valores únicos.", example: "new Set([1, 2, 3])" } },
    { Map: { definition: "Colección clave-valor con claves únicas.", example: "new Map([[1, 'uno']])" } }
];

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Tipos de comparadores: asignación, igualdad e igualdad estricta:

// 🔹 1️⃣ Asignación (=) No compara valores, únicamente los asigna
let a = 5;  // Asigna el valor 5 a la variable 'a'
let b = "5";

// 🔹 2️⃣ Comparación débil (==) Sí compara valores pero ignora el tipo de dato
console.log(a == b); // true
console.log(0 == false); // true
console.log(null == undefined); // true

/* 
🔹 3️⃣ Comparación estricta (===) 
* Compara tanto el valor como el tipo de dato
* Es la mejor opción a seguir para evitar errores 
*/
console.log(a === b); // false
console.log(0 === false); // false
console.log(null === undefined); // false


// 🔹 4️⃣ Comparadores de desigualdad
console.log(10 != "10"); // false (conversión implícita)
console.log(10 !== "10"); // true (verifica tipo y valor)

/* 
🔹 5️⃣ Comparadores de mayor y menor
* Comparan números y strings basados en el orden lexicográfico (ABC...)
*/
console.log(10 > 5);  // true
console.log(3 <= 3);  // true
console.log("apple" > "banana"); // false ('a' tiene menor valor Unicode que 'b')

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// Operadores lógicos: AND, OR, NOT

// 🔹 6️⃣ AND lógico (&&) → Devuelve true solo si AMBOS valores son verdaderos
console.log(true && false); // false
console.log(5 > 3 && 10 < 20); // true

// 🔹 7️⃣ OR lógico (||) → Devuelve true si AL MENOS UNO es verdadero
console.log(false || true); // true
console.log(5 > 10 || 10 > 5); // true

// 🔹 8️⃣ NOT lógico (!) → Invierte el valor booleano
console.log(!true); // false
console.log(!0); // true
console.log(!!"texto"); // true (doble negación convierte a booleano)
