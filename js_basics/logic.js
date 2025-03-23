/* 
🔹 1️⃣ Condicionales IF y ELSE
* `If` evalúa una condición, ejecutando el código únicamente si esta se cumple.
* `Else` permite ejecutar un bloque alternativo si la condición no se cumple.
* De no haber un else el código continúa una vez analizada la condición
*/

let age = 18;

if (age >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

/* 
🔹 2️⃣ ELSE IF
Se usa cuando hay múltiples condiciones posibles.
*/

let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace mucho calor.");
} else if (temperatura > 20) {
    console.log("El clima es agradable.");
} else {
    console.log("Hace frío.");
}

/*
🔹 3️⃣ Operador ternario (?)
* Es una versión simplificada de `if` y `else`
* Si bien útil, se aconseja usar con moderación: 
    menos código != mejor código
    código legible > menos código
*/

let msg = (age >= 18) ? "Acceso permitido" : "Acceso denegado";
console.log(msg);

/*
🔹 4️⃣ Encadenamiento de ternarias
* Puede ser útil, pero si hay demasiadas condiciones, un if-else puede ser más claro.
*/

let clima = (temperatura > 30) ? "Caluroso" :
    (temperatura > 20) ? "Templado" : "Frío";

console.log(clima);

/*
🔹 5️⃣ Switch-case
* Evalúa expresiones respecto a un valor `case` anteriormente definido 
* Ejecuta el código correspondiente hasta encontrarse con un `break` que "rompe" el flujo
    si ejecuta un `case` que no contiene break, continuará ejecutando el resto del código hasta encontrar uno
    a esto se le llama "fall-through" (caída en cascada)
* En caso de no encontrar ningún `case` que corresponda salta al `default`
    - de no encontrar un default el `switch` se omite y continúa el código, sin devolver nada
*/

let day = "lunes";

switch (day) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Viernes de chill");
        break;
    case "sábado": // para concatenar más de un `case` únicamente se escriben uno seguido de otro
    case "domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}

// Veamos un escenario en el que coincide un `case` con la expresión dada pero no tiene `break`

let fruta = "manzana";

switch (fruta) {
    case "manzana":
        console.log("Es una manzana."); // Imprimirá el texto en la consola
    case "pera": 
        console.log("O quizá una pera..."); // Al no haber un `break` en el caso anterior, también se ejecutará
        break;
    default:
        console.log("No es ni manzana ni pera.");
}

// Aún así, el fall-through puede ser intencionado y útil dependiendo del escenario

// Ejemplo donde el fall-through es intencionado
let nivel = "avanzado";

switch (nivel) {
    case "avanzado":
        console.log("Y acceso completo al contenido avanzado.");
    case "intermedio":
        /*
        Al no haber un `break` en el nivel "avanzado", el código continúa ejecutándose
        * esto permite que "avanzado" también acceda a "intermedio" y eventualmente a "básico"
        */
        console.log("También puedes ver contenido intermedio."); 
    case "básico":
        /*
        Sin embargo, básico únicamente es capaz de acceder a sí mismo:
        * una vez detectado "básico" se cierra la ejecución del resto código
        */
        console.log("Tienes acceso al contenido básico.");
        break;
    default:
        console.log("Nivel no reconocido.");
}
