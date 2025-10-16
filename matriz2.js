"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    nombre;
    notas;
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }
}
const listaEstudiantes = [
    { nombre: "Jaime", notas: [20, 19, 20] },
    { nombre: "Pedro", notas: [20, 19, 20] },
    { nombre: "Jacinto", notas: [15, 15, 12] },
];
console.log("Promedio de cada estudiante:");
const promedioEstudiante = listaEstudiantes.forEach((e) => {
    const promedio = e.notas.reduce((a, b) => a + b) / e.notas.length;
    console.log(e.nombre, promedio.toFixed(2));
});
