// 📌 Métodos de objetos

const person = {
    name: "Juan",
    age: 30,
    city: "Madrid"
};

// 1️⃣ Object.keys() - Devuelve un array con las claves del objeto
const keys = Object.keys(person); // ['name', 'age', 'city']

// 2️⃣ Object.values() - Devuelve un array con los valores del objeto
const values = Object.values(person); // ['Juan', 30, 'Madrid']

// 3️⃣ Object.entries() - Devuelve un array con pares clave-valor
const entries = Object.entries(person);
// [['name', 'Juan'], ['age', 30], ['city', 'Madrid']]

// 4️⃣ Object.assign() - Copia las propiedades de un objeto a otro
const newPerson = Object.assign({}, person, { country: "España" });
// { name: 'Juan', age: 30, city: 'Madrid', country: 'España' }

// 5️⃣ Object.freeze() - Congela un objeto (no se pueden modificar sus propiedades)
Object.freeze(person);
person.age = 35; // ❌ No se aplica el cambio

// 6️⃣ Object.seal() - Sella un objeto (se pueden modificar propiedades pero no agregar ni eliminar)
const user = { username: "coder", password: "1234" };
Object.seal(user);
user.password = "5678"; // ✅ Se permite modificar
user.email = "email@example.com"; // ❌ No se permite agregar nuevas propiedades

// 7️⃣ hasOwnProperty() - Verifica si un objeto tiene una propiedad específica
const hasAge = person.hasOwnProperty("age"); // true

// 8️⃣ Object.fromEntries() - Convierte un array de pares clave-valor en un objeto
const arr = [["name", "Ana"], ["age", 25]];
const obj = Object.fromEntries(arr); // { name: 'Ana', age: 25 }