"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    nombre;
    notas;
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }
    calcularPromedio() {
        const promedio = this.notas.reduce((sum, nota) => sum + nota, 0) / this.notas.length;
        return promedio.toFixed(2);
    }
    mostrarPromedio() {
        console.log(`El promedio de ${this.nombre} es: ${this.calcularPromedio()}`);
    }
}
const listaEstudiantes = [
    new Estudiante("Juan", [12, 20, 15]),
    new Estudiante("María", [18, 19, 15]),
    new Estudiante("Pedro", [18, 20, 19])
];
console.log("Estudiantes:");
// Mostrar promedios de todos los estudiantes
listaEstudiantes.map(estudiante => estudiante.mostrarPromedio());
