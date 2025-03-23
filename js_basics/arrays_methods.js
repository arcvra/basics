// 📌 Métodos de arrays

const numbers = [1, 2, 3, 4, 5];

// 1️⃣ push() - Agrega un elemento al final del array
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// 2️⃣ pop() - Elimina el último elemento del array
numbers.pop(); // [1, 2, 3, 4, 5]

// 3️⃣ shift() - Elimina el primer elemento del array
numbers.shift(); // [2, 3, 4, 5]

// 4️⃣ unshift() - Agrega un elemento al inicio del array
numbers.unshift(1); // [1, 2, 3, 4, 5]

// 5️⃣ forEach() - Itera sobre cada elemento del array
numbers.forEach(num => console.log(num)); 

// 6️⃣ map() - Crea un nuevo array transformando los elementos
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// 7️⃣ filter() - Crea un nuevo array con los elementos que cumplen una condición
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// 8️⃣ find() - Encuentra el primer elemento que cumple una condición
const firstEven = numbers.find(num => num % 2 === 0); // 2

// 9️⃣ reduce() - Reduce el array a un único valor
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// 🔟 some() - Verifica si al menos un elemento cumple una condición
const hasEven = numbers.some(num => num % 2 === 0); // true

// 1️⃣1️⃣ every() - Verifica si todos los elementos cumplen una condición
const allPositive = numbers.every(num => num > 0); // true

// 1️⃣2️⃣ includes() - Comprueba si un elemento está en el array
const hasThree = numbers.includes(3); // true

// 1️⃣3️⃣ sort() - Ordena el array (¡cuidado, ordena como string por defecto!)
const sorted = [10, 5, 8, 1].sort((a, b) => a - b); // [1, 5, 8, 10]

// 1️⃣4️⃣ splice() - Modifica el array eliminando o agregando elementos
const fruits = ['manzana', 'pera', 'banana'];
fruits.splice(1, 1, 'uva'); // ['manzana', 'uva', 'banana'] (reemplaza 'pera' por 'uva')

// 1️⃣5️⃣ slice() - Extrae una parte del array sin modificarlo
const newFruits = fruits.slice(1, 3); // ['uva', 'banana']
