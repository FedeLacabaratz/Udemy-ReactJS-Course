// Modulos en ES6 - exportar variables - (si hago 'export default', entonces no utilizo las llaves del lado del import y puedo hasta cambiar el nombre, cuando hago export antes de escribir la variable si necesitare las llaves y el nombre debera de ser exactamente el de la variable en ambos lados)

export const nombreTarea = 'Pasear al perro';

// Modulos en ES6 - exportar una funcion

export const crearTarea = (tarea, urgencia) => {
    return `La Tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completó');
}

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
// let tarea1 = new Tarea('Aprender Javascript', 'Alta')
// let tarea2 = new Tarea('Preparar cafe', 'Alta')
// let tarea3 = new Tarea('Pasear al perro', 'Media')
// let tarea4 = new Tarea('Conocer a mis suegros', 'Baja')

// tarea1.mostrar();
// tarea2.mostrar();
// tarea3.mostrar();
// tarea4.mostrar();

// Compras

// let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);

// compra1.mostrar();
// compra1.hola();