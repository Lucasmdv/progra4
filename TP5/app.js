// 1 - Crear una promesa que se resuelva después de 2 segundos con el mensaje "Proceso completado". Usar .then() y .catch() para mostrar el resultado en consola.

    function promesa1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Proceso completado");
                reject("proceso fallo")
            }, 2000);
        });
    }

    // promesa1()
    // .then((result) => console.log(result))
    // .catch((error) => console.log(error))

// 2 - Hacer una función que reciba un número por parámetro: si el número es par, la promesa se resuelve mostrando el mensaje "El número es par"; Si el número es impar, la promesa se rechaza con el mensaje “El número es impar”. Usar .then() y .catch(). 

    function parImpar(numero){
        return new Promise((resolve,reject) => {
            if(esPar(numero)){
                resolve("El numero es par")
            }else{
                reject("El numero es impar")
            }
        })
    }

    function esPar(numero){
        return numero%2==0
    }

    parImpar(2356)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

// 3 - Crear una promesa que devuelva un número. Encadenar .then() para:
// a. Sumarle 5
// b. Multiplicar por 2
// c. Mostrar el resultado final

    function devuelveNro(){
        return new Promise((resolve) => {
            resolve(Math.random()*100)
        }
        )
    }

    devuelveNro()
        .then(result =>  result + 5 )
        .then(result =>  result * 2 )
        .then(result =>  console.log(result) )

// 4 - Hacer una función que simule “cargar datos” con setTimeout (por ejemplo, tarda 3 segundos en resolverse). Mostrar "Cargando..." antes de la promesa y "Datos cargados" al resolverla.

    function cargarDatos(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("Datos cargados succesfully")
            },3000)
            console.log('Cargando...');
        })
    }

    cargarDatos()
        .then(result => console.log(result))

// 5 - Reutilizar el ejercicio 1, pero en lugar de .then(), crear una función async y usar await para esperar la promesa. Mostrar el mensaje en consola. 

    async function promesaAsync() {
        try {
            const resultado = await promesa1();
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    }

    promesaAsync()

// 6 - Reutilizar el ejercicio 2 (número par/impar), pero ahora implementarlo usando async/await, y capturar el error con try/catch.
//  - Recordá que cuando trabajamos con .then() se usa .catch() para manejar errores.
//  - En cambio, cuando usamos async/await, los errores de una promesa rechazada se capturan con try/catch, igual que las excepciones en código sincrónico.
// Dicho esto, Implementar la función de verificación usando async/await y capturar el error con try/catch.

    async function ej2(num) {
        try {
            console.log(await parImpar(num))
        } catch (error) {
            console.log(error);
        }
    }

    ej2(7)

// 7 - Crear 3 funciones que devuelvan promesas con un setTimeout distinto (por ejemplo: 1s, 2s y 3s). Llamarlas en una función async usando await para ejecutarlas en orden y mostrar los resultados.

// 8 - Tomar las 3 funciones del ejercicio anterior, pero ahora ejecutarlas con Promise.all (investigar). Mostrar todos los resultados juntos cuando se resuelvan.
