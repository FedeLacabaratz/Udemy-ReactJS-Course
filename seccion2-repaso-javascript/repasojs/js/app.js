// Crear variables

/*
var aprendiendo99;
aprendiendo99 = true;
aprendiendo99 = false;
aprendiendo99 = 20;
aprendiendo99 = 'Federico';

console.log(aprendiendo99);
*/

// Variables con const

/*
const aprendiendo = 'JavaScript';
console.log(aprendiendo);
*/

// Variables con let

/*
let aprendiendo;
aprendiendo = true;
console.log(aprendiendo);
*/

// Scope

/*
var musica = 'Rock';

if(musica) {
    var musica = 'Grunge';
    console.log('Dentro del if: ', musica);
}

console.log('Fuera del if: ', musica);

// En el pasado ES5 esto me reescribia la variable arrojando el mismo resultado (Grunge) tanto dentro como fuera del if
*/

// Scope con let

/*
let musica = 'Rock';

if(musica) {
    let musica = 'Grunge';
    console.log('Dentro del if: ', musica);
}

console.log('Fuera del if: ', musica);
*/

// Con let en ES6 se solucionaron estos problemas de manera que dentro del if tenga 'Grunge' pero fuera tenga 'Rock'. Si cambiara de let a const funcionaria porque estan en dos scope distintos (dentro y fuera del if)

// Template strings
/*
const nombre = 'Federico';
const trabajo = 'Desarrollador Web';

// Concatenar JavaScript (version ES5)
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

// Concatenar JavaScript (ES6 en adelante con template strings)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`) 
*/

/*
// Concatenar con multiples lineas (Version ES5)
const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';

contenedorApp.innerHTML = html;
*/

/*
// Concatenar con multiples lineas (Version ES6 en adelante con template strings)
const contenedorApp = document.querySelector('#app');
let html = `<ul> 
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>`;

contenedorApp.innerHTML = html;
*/

// Creando una funcion

/*
// Function declaration
function saludar() {
    console.log('Binvenido ')
}
saludar();

// Ejemplo con un argumento
function saludar(nombre) {
    console.log('Binvenido ' + nombre)
}
saludar('Fede');
*/

/*
// Function expression (La diferencia con function expression es que siempre debo declarar las funciones antes de llamarlas o no se reconocera a la misma)
const cliente = function (nombreCliente) {
    console.log('Mostrando datos del cliente ' + nombreCliente)
}
cliente('Fede');
*/

/*
// Parametros por default en las funciones (Método: Function Declaration)
function actividad(nombre = 'Walter White', actividad = 'Enseñando Química') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Fede', 'Aprender Jacascript');
actividad('Juan', 'Creando un sitio web');
actividad('Antonio')
actividad();
*/

/*
// Parametros por default en las funciones (Método: Function Expression)
const actividad = function(nombre = 'Walter White', actividad = 'Enseñando Química') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Fede', 'Aprender Jacascript');
actividad('Juan', 'Creando un sitio web');
actividad('Antonio')
actividad();
*/


// Arrow functions (Utilizando function expression)
/*
let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);
*/


// Arrow functions
/*
let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona');

console.log(viaje);
*/

/*
let viajando = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} por ${duracion}`;
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Londres');
viaje = viajando('Barcelona', '9 dias');

console.log(viaje);
*/

// Objetos

// Object Literals
/*
const persona = {
    nombre: 'Federico',
    profesion: 'Desarrollador Web',
    edad: 50
};

const persona2 = {
    nombre: 'Seba',
    profesion: 'Desarrollador Web',
    edad: 35
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['edad']);
console.log(persona2);
*/

// Object constructor
/*
function Tarea(nombre, urgencia) {
    this.nombre = nombre,
    this.urgencia = urgencia
}

// crear nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Preparar cafe', 'Urgente');
const tarea3 = new Tarea('Pasear perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
*/

// Prototypes
/*
// Object Literals

const persona = {
    nombre: 'Federico',
    profesion: 'Desarrollador Web',
    edad: 50
};
//console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);

// Object constructor

function Tarea(nombre, urgencia) {
    this.nombre = nombre,
    this.urgencia = urgencia
}

// Agregar un prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

// crear nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Pasear al perro', 'media');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea());
*/

// Destructuring de objetos
/*
const aprendiendoJS ={
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
} 

// Destructuring es extraer valores de un objeto
// console.log(aprendiendoJS);

// Version anterior

let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[1];
console.log(version);
console.log(framework);

// Destructuring forma nueva

let {anterior} = aprendiendoJS.version;

let {frameworks} = aprendiendoJS;
console.log(anterior);
console.log(frameworks[1]);
*/

/*
// Object literal enhancement

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones =  ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Forma anterior
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// console.log(metallica);

// Forma nueva

const metallica = {banda, genero, canciones};

console.log(metallica);
*/

/*
// metodos o funciones en un objeto

const persona = {
    nombre: 'Fede',
    trabajo: 'Web Developer',
    edad: 38,
    musicaRock: true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona.mostrarInformacion();
*/

/*
// Arreglos y .map

carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// con forEach
const appContenedor = document.querySelector('#app');
let html = '';
carrito.forEach(producto => {
    html += `<li>${producto}</li>`
        
})

appContenedor.innerHTML = html;


// con map
carrito.map(producto => {
    return 'El producto es ' + producto;
});
*/

/*
// Object keys
const persona = {
    nombre: 'Fede',
    profesion: 'Web Developer',
    edad: 38,
}

console.log(Object.keys(persona)); // Muestra todos los keys del objeto
console.log(Object.values(persona)); // Muestra todos los values de objeto
*/


// Spread operator ...
/*
let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

 unir los arreglos en uno solo
// Metodo ES5
let combinacion = lenguajes.concat(frameworks);

// Metodo ES6 en adelante
let combinacion = [...lenguajes, ...frameworks];
 Si deseo crear una copia del array lenguajes
let nuevoArray = [...lenguajes]

 Seleccionar un valor de array cambiando el orden de los valores pero sin alterar permanentemente el array

let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);

// En una operacion matematica, metodo ES5
function suma(a,b,c) {
    console.log(a+b+c)
}
suma(1,2,3);

// Metodo ES6 en adelante
const numeros = [1,2,3];
suma(...numeros);
*/

/*
// Metodos en arrays

const personas = [
    {nombre: 'Federico', edad: 38, aprendiendo: 'JavaScript'},
    {nombre: 'Juan', edad: 18, aprendiendo: 'PHPt'},
    {nombre: 'Pablo', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Alejandra', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'}
]


console.log(personas);

const mayores = personas.filter(persona => {
    return persona.edad > 28;
})

/console.log(mayores);

// Que aprende alejandra y su edad

const alejandra = personas.find(persona => {
    return persona.nombre = 'Alejandra';
})

console.log(`Alejandra esta aprendiendo: ${alejandra.aprendiendo}`);

// Saber el total de las edades de todas las personas

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total); // sumatoria de todas las edades
console.log(total / 5); // promedio de la sumatoria de todas las edades
console.log(total / personas.length); // cual es su tamaño tomando el total del array en vez de un valor unico
*/

/*
// Promises
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;

        if(descuento) {
            resolve('Descuento aplicado!');
        } else {
            reject('No se puede aplicar el descuento!');
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})
*/

/*
// Promises con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // pasar a cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=ES`;

    // llamado a Ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText))
        }
    }

    // Abrir la conexion
    xhr.onerror = error => reject(error);

    // send
    xhr.send();
});

descargarUsuarios(20)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.log(new Error(`Hubo un error ${error}`)
        )
    )

function imprimirHTML(usuarios) {
    let html = ';'
    usuarios.forEach(usuario => {
        html += `
                <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    País: ${usuario.nat}
                    Imagen: 
                        <img src="${usuario.picture.medium}" >
                </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}
*/

/*
// Clases
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }  
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad} y la cantidad de ${this.cantidad}`);
    }
    hola() {
        console.log('Hola!')
    } 
}

// crear los objetos
let tarea1 = new Tarea('Aprender Javascript', 'Alta')
let tarea2 = new Tarea('Preparar cafe', 'Alta')
let tarea3 = new Tarea('Pasear al perro', 'Media')
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja')

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();
tarea4.mostrar();

// Compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);

compra1.mostrar();
compra1.hola();
*/

/*
// Modulos en ES6 (importar variables)
import nombreTarea from './tareas.js';

console.log(nombreTarea);
*/

/*
// Modulos en ES6 (importar funciones)
import {nombreTarea, crearTarea, tareaCompletada} from './tareas.js';

const tarea1 = crearTarea('Pasear al perro', 'Media')
console.log(tarea1);
tareaCompletada();
*/

// Modulos en ES6 (importando clases)
import Tarea from './tareas.js';

const tarea1 = new Tarea('Aprender JavaScript', 'Urgente');

console.log(tarea1);

tarea1.mostrar();

