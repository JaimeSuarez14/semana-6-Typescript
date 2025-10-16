const tareas : string[] = [
  "Hacer la compra",
  "Llamar al médico",
  "Estudiar para el examen",
  
];
//lista inicial
console.log("Lista Inicial de Tareas");
tareas.forEach( l => {
  console.log(l);
})

//agregamos un tarea nueva a la pila de tareas;
tareas.push("Ir al supermercado");
tareas.push("Hacer ejercicio"),
tareas.push("Lavar la ropa");

//eliminamos la ultima tarea de la pila de tareas;
tareas.pop();
console.log("----------------------------------");

console.log("Lista Final de Tareas");
tareas.forEach( l => {
  console.log(l);
})
