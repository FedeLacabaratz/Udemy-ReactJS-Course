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



