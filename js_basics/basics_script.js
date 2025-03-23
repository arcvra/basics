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