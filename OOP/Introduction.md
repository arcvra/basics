# Object Oriented Programming (OOP) o Programación Orientada a Objetos (POO)

## Breve introducción al trabajo con clases y métodos

> [Sobre "Object-oriented programming", MDN, traducción al castellano:](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)

La programación orientada a objetos consiste en modelar un sistema como una **colección de objetos**, donde cada uno representa un aspecto específico del sistema. Los objetos contienen funciones (o **métodos**) y datos. Un objeto proporciona una interfaz pública —que son los métodos y propiedades que otros componentes pueden utilizar para interactuar con él— a otro código que desee usarlo, pero mantiene su propio _estado interno privado_; otras partes del sistema no tienen que preocuparse por lo que sucede dentro del objeto.

## Modularidad, Reutilización y Organización

La modularidad es un concepto clave en OOP, que se refiere a dividir un sistema en partes más pequeñas, llamadas módulos, que actúan de manera independiente pero conectada. En OOP, esos módulos son clases y objetos.

Una **clase** actúa como una plantilla o molde para crear objetos, mientras que un objeto es una instancia de esa clase, es decir, una entidad específica con valores propios. Los objetos pueden compartir propiedades y comportamientos comunes, definidos por su clase, pero cada objeto tiene su propio conjunto de datos.

### Ejemplo: creación de personajes

Imagina que estamos diseñando un juego con diferentes personajes. Todos comparten atributos comunes: `nombre`, `rol` y `salud`. Sin embargo, cada personaje tiene valores diferentes. Además, todos los personajes pueden realizar acciones como `atacar`, `defender` y `esquivar`.

De forma convencional, nos veríamos forzados a crear funciones individuales para cada uno de los personajes, repitiendo el mismo código una y otra vez para cada acción, volviéndolo redundante y poco legible. Con OOP, sin embargo, creamos una clase `Character` que sirva de plantilla para nuestros personajes. Definimos las _propiedades_ `nombre`, `rol` y `salud` y los _métodos_ `atacar()`, `defender()` y `esquivar()`.

Así , la **clase** `Character` es la "plantilla general" que describe _cómo_ debe ser un personaje, véase, qué _propiedades_ y _comportamientos_ tiene. A su vez, los **objetos** son los personajes, cada uno con sus propios valores individuales: por ejemplo, podemos crear un personaje de nombre 'Ezio' con 100 de salud y el rol 'Asesino'. Si quisiéramos crear otro personaje, solo tendríamos que crear una nueva instancia de la clase `Character`, asignándole nuevos valores. Esto nos permite **reutilizar** el código, **modularizar** la lógica para cada personaje y mantener el sistema organizado, evitando repeticiones innecesarias.

## Mantenimiento, Abstracción, Encapsulamiento y Escalabilidad

En OOP, estos conceptos son esenciales para hacer que el código sea más fácil de mantener, expandir y entender. Rescatemos nuestro ejemplo de la clase Character y nuestro personaje Ezio.

### Mantenimiento

Cuando hablamos de "mantenimiento" de código nos referimos a la capacidad de modificar, corregir o extender un sistema sin romper algo que ya funcione correctamente en el proceso. Al trabajar con clases y objetos independientes resulta más fácil modificar un personaje o agregarle funcionalidades nuevas sin que esto afecte al resto de personajes u otra parte del código.

#### Ejemplo: adición de propiedades

Hemos decidido que todos los personajes deben tener un nuevo atributo: `nivel`. Al trabajar con OOP, simplemente añadimos esta nueva propiedad en la clase `Character`. De esta forma, todos los personajes que creemos a partir de esta clase automáticamente tendrán este nuevo atributo, sin necesidad de tocar cada uno de ellos manualmente.

### Abstracción

La abstracción es el proceso de ocultar los detalles complejos del sistema y mostrar únicamente aquello que es necesario. En vez de preocuparnos en el _cómo_ funcionan los métodos podemos centrarnos en _qué_ es lo que hacen, restando complejidad innecesaria en procesos que no lo requieren.

#### Ejemplo: lectura y manipulación de métodos

En nuestra clase `Character` definimos varios métodos: `atacar()`, `defender()` y `esquivar()`. Probablemente estos tengan implementaciones complejas y elaboradas. Sin embargo, como usuarios de la clase, no necesitamos saber cómo están implementados; utilizamos estos métodos cuando queremos que el personaje realice estas acciones, sin necesidad de preocuparnos por la lógica interna.

Con la abstracción, el código se hace más sencillo de usar y de entender.

#### Encapsulamiento

Similar a la **abstracción**, el encapsulamiento hace referencia a la idea de mantener los detalles internos de un objeto privados y únicamente exponer lo necesario a través de métodos públicos. Esto evita que otras partes del código manipulen directamente los datos internos de un objeto, lo que puede causar errores o inconsistencias.

> A diferencia de la abstracción, cuyo objetivo es faclitar el uso de métodos sin necesidad de supervisar su funcionamiento interno, el objetivo del encapsulamiento es evitar la manipulación de los datos internos por parte de un tercero en otra parte del código. De ahí el concepto de "privacidad" en oposición a métodos "públicos". De esta forma se garantiza la integridad del objeto a lo largo de su ciclo de vida.

#### Ejemplo: encapsulamiento de propiedades

La propiedad `salud` de un personaje es muy importante para el funcionamiento del juego, por lo que no queremos que otra parte del sistema pueda modificarla directamente sin control. Para ello, **encapsularemos** la propiedad `salud` dentro de la clase `Character` y crearemos un **método público** `getDmg(dmg)` que sea el que controle cómo se le resta salud a un personaje. De esta manera, el acceso y la modificación de datos se gestionan de forma segura en vez de ser manipulados directamente.

### Escalabilidad

Cuando priorizamos la capacidad de nuestro sistema para crecer o adaptarse a nuevos requisitos —sin perder rendimiento ni organización en el proceso— estamos hablando de la **escalabilidad** del proyecto. OOP nos lo facilita gracias a la posibilidad de crear **sub-clases** que se extienden de otras (concepto de _herencia_) y —tal y como hemos visto anteriormente— la capacidad de agregar nuevas funcionalidades o atributos sin tener que rehacer el sistema desde cero.

#### Ejemplo: herencia de sub-clases

Además de los personajes normales, ahora queremos añadir una nueva clase para un tipo especial de personajes: los Healers. Estos tienen habilidades de curación, una acción que no se incluye en los métodos de nuestra clase `Character` original. En lugar de escribir todo el código de nuevo, podemos crear una nueva clase `Healer` que herede las características de `Character` y añada nuevos métodos o propiedades, como `curar()`.

Al adoptar la OOP nos encontramos con que no hace falta re-escribir la clase desde cero, siguiendo así el concepto de **mantenimiento**, y al **encapsular** el nuevo tipo de personajes en una clase independiente favorecemos la **abstracción** de los métodos nuevos.

## Polimorfismo

El polimorfismo es uno de los principios fundamentales de la OOP: permite escribir código más flexible y reutilizable. ¿Cómo? Al permitir que diferentes clases implementen el mismo método de manera personalizada. Si bien hemos hablado de la importancia de mantener una misma "plantilla" o "molde" para todos los objetos, en ocasiones necesitamos que una subclase herede atributos y métodos, pero modificando su comportamiento sin alterar la estructura general.

En un programa con múltiples tipos de personajes, es probable que cada uno tenga una forma distinta de realizar ciertas acciones. Por ejemplo, tanto un Bárbaro como un Healer pueden atacar, pero la forma en que lo hacen es diferente. En lugar de definir un método de ataque distinto para cada clase, podemos aprovechar el polimorfismo para sobrescribir (o modificar) el comportamiento de un método ya existente en una subclase.

### Ejemplo: redefiniendo métodos en subclases

Tomemos nuestra clase base `Character`, que tiene un método `atacar()` ya definido. Decidimos crear dos subclases: `Bárbaro` y `Healer`, cada una con su propia versión de `atacar()`. Podríamos crear un método extra para cada uno de ellos, como `garrote()` o `hemomancia()` aparte del ya presente `atacar()`, aunque realmente ambos realizan la misma acción: atacar. Gracias al polimorfismo esto no es necesario. Simplemente reescribimos cómo funciona `atacar()` a la hora de definir cada subclase. De este modo, cuando llamamos al método `atacar()` en un objeto `Bárbaro`, se ejecutará su versión del ataque. Lo mismo sucederá con `Healer`, sin necesidad de crear métodos con nombres distintos.

El polimorfismo nos permite trabajar con un código más limpio, organizado y fácil de extender sin afectar la estructura principal del programa o forzarnos a mantener código que no vamos a utilizar.

## Patrón Factory

El **Factory Pattern** es un _patrón de diseño_ en el que se encapsula la lógica de creación de objetos en una función o clase, en lugar de instanciarlos directamente con new. Esto puede resultar útil en ciertos escenarios:

* Si queremos que la creación de objetos sea más flexible y e independiente de la implementación concreta
* En casos en los  que existen múltiples tipos de objetos con una estructura similar, pero con suficientes diferencias en su configuración
* Cuando buscamos centralizar la lógica de creación para evitar repetir código

### Ejemplo: creación de objetos mediante patrón factory

Anteriormente hemos creado nuestra clase `Character` como base, a partir de la cual hemos creado las subclases `Bárbaro` y `Healer`. En lugar de instanciar estas clases directamente en el código

```js
const foo = createCharacter(Barbaro, 'Foo');
const foo2 = createCharacter(Healer, 'Foo2');
```

utilizamos una _función Factory_ llamada `createCharacter`. Esta función recibe como **parámetros** el tipo de personaje y su nombre, y se encarga de _devolver una instancia_ de la subclase correspondiente.

```js
const foo = createCharacter('Barbaro', 'Foo');
const foo2 = createCharacter('Healer', 'Foo2');
```

De este modo, si solicitamos un nuevo `Bárbaro`, la función creará y **devolverá una instancia de la clase Bárbaro**, y si se solicita un `Healer`, devolverá una **instancia de Healer**. En caso de que el tipo de personaje no coincida con ninguna subclase específica, se devolverá una instancia genérica de Character (u otra configuración personalizada).

Gracias a este enfoque se abstrae la _lógica_ de creación y se facilita la _expansión del sistema_, permitiendo añadir nuevos tipos de personajes sin modificar el código que los utiliza.
