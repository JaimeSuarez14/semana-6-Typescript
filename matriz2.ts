class Estudiante {
  constructor( public nombre: string,public notas : number[]){
  }
}

const listaEstudiantes: Estudiante[]= [
  {nombre: "Jaime", notas: [ 20 ,19 , 20]},
  {nombre: "Pedro", notas: [ 20 ,19 , 20]},
  {nombre: "Jacinto", notas: [ 15 ,15 , 12]},
]

console.log("Promedio de cada estudiante:");

const promedioEstudiante = listaEstudiantes.forEach((e) => {
  const promedio: number =  e.notas.reduce((a,b) => a+b)/e.notas.length;
  console.log(e.nombre, promedio.toFixed(2));
})
