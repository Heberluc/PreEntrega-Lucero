const carrito = [

]

const perfumes = [
    {codigo:1, nombre: 'ESPARTA VICTORY', precio: 4500 },
    {codigo:2, nombre: 'LAS VEGAS', precio: 4300 },
    {codigo:3, nombre: 'PARÍS', precio: 4350 },
    {codigo:4, nombre: 'DETROIT', precio: 4600 },
    {codigo:5, nombre: 'MANHATTAN', precio: 4689 },
    {codigo:6, nombre: 'NEW YORK HEROES', precio: 4999 },
]

class Compra { 
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal (){
        if (this.carrito.length > 0 ) {
            return this.carrito.reduce((acc, perfume)=> acc + perfume.precio, 0)
        }
    }    
} 

function buscarPerfume(codigo) {
        let resultado = perfumes.find((perfume)=> perfume.codigo === parseInt(codigo))
        return resultado 
}       

function finalizarCompra() {
    const comprar = new Compra(carrito)
    console.log (`El valor total de su compra es de $ ${comprar.obtenerSubtotal()}. Gracias por su compra!.🤩`)
}

function ordenarPerfumes() {
    perfumes.sort((a, b)=>{
        if (a.codigo > b.codigo) {
            return 1
        }
        if (a.codigo < b.codigo) {
            return -1
        }
        return 0
    })
    console.table(perfumes)
}

function ordenarCarrito() {
    carrito.sort((a, b)=>{
        if (a.codigo > b.codigo) {
            return 1
        }
        if (a.codigo < b.codigo) {
            return -1
        }
        return 0
    })
    console.table(carrito)
}



function comprar() {
    let codigo = prompt('Ingresa el codigo de tu perfume elegido 👌' )
    let perfumeElegido = buscarPerfume(codigo)
    if(perfumeElegido !== undefined) {
        carrito.push(perfumeElegido)
        alert(perfumeElegido.nombre + ' se agrego a tu carrito.✅')
        let respuesta = confirm('¿Quieres agregar otro perfume?')
        if (respuesta === true) {
            comprar()
        } else {
            ordenarCarrito()
            finalizarCompra()
        }
    } else{
        console.error('😯Error en el codigo ingresado. Vuelve a empezar su compra');
    } 
}
