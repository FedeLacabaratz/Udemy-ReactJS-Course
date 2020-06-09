/*
// Modulos en ES6 - exportar variables - (si hago 'export default', entonces no utilizo las llaves del lado del import y puedo hasta cambiar el nombre, cuando hago export antes de escribir la variable si necesitare las llaves y el nombre debera de ser exactamente el de la variable en ambos lados)

export const nombreTarea = 'Pasear al perro';

// Modulos en ES6 - exportar una funcion

export const crearTarea = (tarea, urgencia) => {
    return `La Tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completó');
}
*/

// Modulos en ES6 - exportar clases
// Clases
export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}