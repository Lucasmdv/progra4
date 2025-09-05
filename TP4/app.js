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
            // let lista = document.getElementById('lista');
            // if (lista.lastElementChild) {
            //     lista.removeChild(lista.lastElementChild);
            // }
        })

// 4- Formulario interactivo:
// Validar que los campos no estén vacíos al hacer clic en “Enviar”.

        let email = document.getElementById("email")
        let nombre = document.getElementById("nombre")
        let submit = document.getElementById("enviar")
        let formulario = document.getElementById("formulario")

        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            if(email.value.length == 0  || nombre.value.length == 0){
                alert("TODOS LOS CAMPOS DEBEN ESTAR COMPLETOS");
            }else if(!esEmailValido(email.value)){
                alert("El mail no tiene un formato valido")
            }
            agregarALista(nombre.value,email.value)
            borrarCampos()
        })

        function esEmailValido(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

// Mostrar los datos ingresados en la lista <ul>.

        const listaResultados = document.getElementById('listaResultados');

        function agregarALista(nombre,email) {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${nombre}     |     Email: ${email}`;
            listaResultados.appendChild(li);
        }
        

// Limpiar los campos después de enviar.

        function borrarCampos(){
            formulario.reset();
        }
        
