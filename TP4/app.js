// 1- Cambiar el contenido de <p id="mensaje"> a “Hola [nombre del alumno]” usando JS.

        let mensajeParrafo = document.getElementById("mensaje")
        mensajeParrafo.innerText = "Hola Lucas"

// 2- Cambiar color de fondo y color de texto del <p> al hacer clic en él.

        mensajeParrafo.addEventListener("click", () => {
            mensajeParrafo.style.color = "white";
            mensajeParrafo.style.backgroundColor = "black";
        })

// 3- Agregar las funciones necesarias para que al presionar: 
// Botón “Agregar elemento”: añadir un <li> con texto “Nuevo elemento” a la lista.
// Botón “Eliminar último”: eliminar el último <li>

        let botonAgregar = document.getElementById("btnAgregar")
        botonAgregar.addEventListener("click", () => {
            let nuevoElemento = document.createElement("li");
            nuevoElemento.textContent = "Nuevo Elemento";
            document.getElementById("lista").appendChild(nuevoElemento);
        })

        let botonEliminar = document.getElementById("btnEliminar")
        botonEliminar.addEventListener("click", () => {
            let ultimo = document.querySelector("#lista li:last-child");
            if (ultimo) {
                document.getElementById("lista").removeChild(ultimo);
            }
        })

// 4- Formulario interactivo:
// Validar que los campos no estén vacíos al hacer clic en “Enviar”.

// Mostrar los datos ingresados en la lista <ul>.

// Limpiar los campos después de enviar.
