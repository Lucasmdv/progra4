/*  Parte 1:
Crear un arreglo llamado productos que contenga al menos 5 objetos literales con las propiedades: id, nombre, precio y stock.*/

class Producto{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const pc = {
    id: 1,
    nombre: "pc",
    precio: 2000,
    stock: 5
};

const banana ={
    id: 2,
    nombre: "banana",
    precio: 2.5,
    stock: 120
}

const camara ={
    id: 3,
    nombre: "camara",
    precio: 500,
    stock: 10
}

const bulones ={
    id: 4,
    nombre: "bulones",
    precio: 4.25,
    stock: 150
}

const bolsaCarbon ={
    id: 5,
    nombre: "bolsa de carbon",
    precio: 15,
    stock: 30
}

var productos = [pc,banana,camara,bulones,bolsaCarbon];

// console.log(productos);

//Agregar un nuevo producto usando push().
    // console.log(productos.push(banana));
//Eliminar el último producto con pop().
    // console.log(productos.pop());
//Mostrar el listado final en consola.
    // console.log(productos);


//Usar filter() con una función anónima para obtener los productos cuyo stock sea mayor a 10. Luego, guardar el resultado en un nuevo arreglo productosEnStock y mostrarlo.
    // productosEnStock = productos.filter(n => n.stock > 10);
    // console.log(productosEnStock);

//Usar find() con una función callback para encontrar un producto por su nombre. Si lo encuentra, mostrarlo en la consola. Si no, mostrar el mensaje "Producto no encontrado".

    // function respuesta(nombre){
    // return productos.find(p => p.nombre == nombre);
    // }

    // function buscarPorNombre(callback,nombre) {
    //     let productoEncontrado = callback(nombre);
    //     if (productoEncontrado) {
    //         console.log(productoEncontrado.nombre);
    //     } else {
    //         console.log("Producto no encontrado");
    //     }
    // }

    // buscarPorNombre(respuesta,"pera");

//Usar reduce() con una arrow function para calcular el precio total de todos los productos. Luego, realizar una función anónima que calcule el promedio de precios.
    // let precioTotal = 0
    // precioTotal = productos.reduce((precioTotal,p) => precioTotal + p.precio,0)
    // console.log(precioTotal)

    // function promedioPrecios(total,arreglo){
    //     return total / arreglo.length
    // }

    // console.log(promedioPrecios(precioTotal,productos))

//Usar some() para verificar si existe al menos un producto con stock igual a 0. Luego, usar every() para comprobar si todos los productos cuestan más de 100. Mostrar ambos resultados.

    // console.log(productos.some(p => p.stock == 0))
    // console.log(productos.every(p => p.precio>100))

//Crear un arreglo clientes con al menos 3 objetos literales que tengan las propiedades: id, nombre, edad, compras (array de strings). Usar forEach() para mostrar en consola el nombre de cada cliente junto con la cantidad de compras que realizó.

    let cliente1 = {
        id: 1,
        nombre: "marta",
        edad: 56,
        compras: ["banana","manzana","pera","arroz","fideo"]
    }

    let cliente2 = {
        id: 2,
        nombre: "marcos",
        edad: 40,
        compras: ["pollo","tapa de asado","mondongo"]
    }

    let cliente3 = {
        id: 3,
        nombre: "silvina",
        edad: 36,
        compras: ["tintura para pelo","delineador","pastel de papa"]
    }

    let clientes = [cliente1,cliente2,cliente3]

    clientes.forEach(c => console.log("cliente: "+c.nombre+"\ncantidad de compras: "+c.compras.length))



//Parte 2:
//Crear una función procesarClientes(clientes, callback) que reciba el arreglo de clientes y una función de callback. Llamar a procesarClientes con distintos callbacks:

//Un callback que muestre solo los nombres.

    function procesarClientes(clientes, callback){
        callback(clientes)
    }

    function mostrarNombres(arreglo){
        arreglo.forEach(a => console.log(a.nombre))
    }

    procesarClientes(clientes,mostrarNombres)

//Otro callback que muestre solo la cantidad total de compras.

    function cantidadDeObjetosEnArreglo(arreglo){
        console.log(arreglo.length)
    }

    procesarClientes(clientes,cantidadDeObjetosEnArreglo)
 
// Crear un arreglo de números y ordenarlo en forma ascendente con sort() y una arrow function. Ordenar los mismos números en forma descendente.

let numeros = [5,2,8,3,6,3,7,0,5,3]

console.log(numeros.sort((a,b) => a-b ))
console.log(numeros.sort((a,b) => b-a ))

// Crear un objeto literal tienda que tenga:
// Un arreglo productos.
// Un método vender(idProducto, cantidad) que:
// Busque el producto por id usando find().
// Si hay stock suficiente, reste la cantidad al stock y muestre "Venta realizada".
// Si no hay stock, muestre "Stock insuficiente".
// Probar el método vendiendo algunos productos.
    tienda = {
        arregloProductos : productos,
        vender : function(idProducto, cantidad){
            let prod = productos.find(p => idProducto === p.id)
            if(prod.stock>= cantidad){
                prod.stock-=cantidad
                console.log("venta realizada")
            } else{
                console.log("stock insuficiente")
            }
        }
    }

    tienda.vender(2,3)
    console.log(tienda.arregloProductos)
// Crear un arreglo carrito vacío.
// Usar push() para agregar objetos con las propiedades: producto, cantidad, precioUnitario.
// Usar reduce() para calcular el total a pagar.
// Usar map() para generar un arreglo con el detalle de cada ítem en formato: "Producto X - Cantidad Y - Subtotal Z".
// Mostrar el detalle y el total en consola.

    let carritoVacio = []
    carritoVacio.push(pc)
    carritoVacio.push(camara)
    carritoVacio.push(bolsaCarbon)

    let totalPagar=carritoVacio.reduce((total,p) => total+ p.precio*p.stock,0)

    console.log(carritoVacio.map(p => "Producto: "+p.nombre+" - Cantidad: "+p.stock+" - Subtotal = "+ p.precio*p.stock))
    console.log("Total a pagar = "+totalPagar)

// Crear un arreglo libros, cada elemento debe ser un objeto con: id, titulo, autor, genero, disponible (booleano). Luego:
// Usar filter() para obtener todos los libros de un género específico.
// Usar map() para generar un arreglo con solo los títulos en mayúscula.
// Crear una función prestarLibro(id) que:
// Busque el libro con find().
// Si está disponible, lo marque como no disponible.
// Si no, devuelva "No disponible".

    let libros = [{
        id:1,
        titutlo: "don quijote",
        autor: "servantes",
        genero: "ficcion",
        disponible: true
    },
    {
        id:2,
        titutlo: "don quijote2",
        autor: "servantes2",
        genero: "ficcionSi",
        disponible: true
    },
    {
        id:3,
        titutlo: "don quijote3",
        autor: "servantes3",
        genero: "ficcion3",
        disponible: true
    }]

    function librosXGenero(genero){
        return libros.filter(l => l.genero === genero)
    }

    function encontrarLibroXGenero(callback,genero){
        let libros = callback(genero)
        console.log(libros)
    }

    encontrarLibroXGenero(librosXGenero,"ficcionSi")

    function titulosEnMayus(arreglo){
        console.log(arreglo.map(l => "Titulo: "+l.titutlo.toUpperCase()))
    }

    titulosEnMayus(libros)

    function prestarLibro(id){
        let libroBuscado = libros.find(l => l.id === id)
        if(libroBuscado.disponible){
            libros[id].disponible = false
            console.log(libros[id])
        }else{
            console.log("No disponible")
        }
    }

    prestarLibro(2)
    prestarLibro(2)     //revisar
// Crear un objeto literal agenda con un arreglo contactos que guarde objetos { id, nombre, telefono }. Luego, implementar los siguientes métodos en la agenda:
// agregarContacto(contacto) usando push().
// eliminarContacto(id) usando filter(). (elimina todos los de mismo id por si hubiera repetidos)
// buscarContacto(nombre) usando find().
// listarContactos() que muestre todos.





// Crear un arreglo alumnos con objetos { id, nombre, notas: [números] }. Luego:
// Usar map() + reduce() para generar un nuevo array, que tenga guardado cada objeto con: el nombre del alumno, el id y el promedio de sus notas.
// Generar un nuevo arreglo con solo los aprobados (promedio >= 6).
// Mostrar en consola la lista de aprobados.


// Parte 3:
// Crear un arreglo productos con objetos { id, nombre, precio, stock }. Luego definir una función comprar(id, cantidad, callbackExito, callbackError) que:
// Si el producto no existe, ejecutar callbackError con un mensaje “Producto no encontrado”
// Si hay stock suficiente → que descuente y ejecute callbackExito mostrando el detalle de la compra.
// Si no hay stock → ejecute callbackError con mensaje “no hay stock suficiente.
// Probar la función con distintas compras.

// Utilizar el arreglo de productos del ejercicio anterior, y crear una función aplicarDescuento(id, porcentaje, callbackExito, callbackError) que haga lo siguiente:
// Buscar el producto por su id.
// Si no existe, ejecutar callbackError con un mensaje “Producto no encontrado”.
// Si el porcentaje de descuento no es válido (≤0 o >100), ejecutar callbackError con un mensaje “Porcentaje inválido”.
// Si todo es correcto, aplicar el descuento sobre el precio del producto y ejecutar callbackExito mostrando el nombre del producto y su nuevo precio.
// A continuación, invocar a aplicarDescuento() y dentro de su callback de éxito, llamar/invocar a comprar() con sus propios callbacks de éxito y error.

//   Crear una función filtrarPorStock(minStock, callbackExito, callbackError) que:
// Filtre todos los productos cuyo stock sea mayor o igual a minStock.
// Si existen productos que cumplen la condición, ejecutar callbackExito pasando el listado filtrado.
// Si no hay productos que cumplan la condición, ejecutar callbackError con un mensaje “No hay productos con ese stock”.
// Probar la función con distintos valores de minStock: Mostrar los productos disponibles usando un callback de éxito y Manejar los posibles errores usando un callback de error.
