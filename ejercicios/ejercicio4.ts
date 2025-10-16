//vamos  crear un arreglo bidimensional donde cada fila representa ur curso y cada columna un estudiante con su nombre y nota

// Definir la interfaz para un estudiante
interface Estudiante {
    nombre: string;
    nota: number;
}

// Definir el tipo para un curso (array de estudiantes)
type Curso = Estudiante[];

// Definir el tipo para la matriz de cursos
type MatrizCursos = Curso[];

// Crear la matriz de cursos
const matrizCursos: MatrizCursos = [
    // Curso: Matemáticas
    [
        { nombre: "Juan", nota: 85 },
        { nombre: "María", nota: 92 },
        { nombre: "Pedro", nota: 78 }
    ],
    // Curso: Física
    [
        { nombre: "Ana", nota: 88 },
        { nombre: "Carlos", nota: 75 },
        { nombre: "Sofía", nota: 95 }
    ],
    // Curso: Programación
    [
        { nombre: "Luis", nota: 90 },
        { nombre: "Elena", nota: 82 },
        { nombre: "Miguel", nota: 87 }
    ]
];

// Función para mostrar la información de todos los cursos
function mostrarInformacionCursos(matriz: MatrizCursos): void {
    const nombresCursos = ["Matemáticas", "Física", "Programación"];
    
    matriz.forEach((curso, indiceCurso) => {
        console.log(`\n--- Curso: ${nombresCursos[indiceCurso]} ---`);
        curso.forEach(estudiante => {
            console.log(`Estudiante: ${estudiante.nombre}, Nota: ${estudiante.nota}`);
        });
        
        // Calcular promedio del curso
        const promedio = curso.reduce((sum, estudiante) => sum + estudiante.nota, 0) / curso.length;
        console.log(`Promedio del curso: ${promedio.toFixed(2)}`);
    });
}

// Mostrar la información
mostrarInformacionCursos(matrizCursos);

// Ejemplo de acceso a un elemento específico
const estudianteEspecifico = matrizCursos[1]?.[2] ?? { nombre: "Desconocido", nota: 0 }; // Accede al tercer estudiante del segundo curso
console.log(`\nAcceso directo: ${estudianteEspecifico.nombre} tiene una nota de ${estudianteEspecifico.nota} en Física`);