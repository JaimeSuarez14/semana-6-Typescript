interface Producto {
  nombre: string,
  precio: number
}

const listaProducto: Producto[] = [
  {
    nombre: "Producto 1",
    precio: 100
  },
  {
    nombre: "Producto 2",
    precio: 200
  },
  {
    nombre: "Producto 3",
    precio: 150
  }
]
console.log("Lista de productos Inicial: ");
listaProducto.forEach( p => console.log(p.nombre +" - " + p.precio))
const listaProductoDescuento : Producto[] = listaProducto.map( p => ({nombre: p.nombre ,  precio: p.precio * 0.9}));
console.log("\nLista de productos con Descuento: ");
listaProductoDescuento.forEach( p => console.log(p.nombre +" - " + p.precio))
