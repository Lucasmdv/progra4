let url = "http://localhost:3000/dioses"
let idEditando = null


async function getFunction() {
    try {
        let response = await fetch(url)
        let data = await response.json()
        return data
    } catch (error) {
        console.log("Error: " + error)
        return []
    }
}

async function agregarALista(atributo) {
    let datosLista = await getFunction()
    let lista = document.getElementById("listaDioses")
    lista.innerHTML = ""

    if (atributo && atributo.trim() !== "") {
        datosLista.forEach(element => {
            let li = document.createElement("li");
            if (element.hasOwnProperty(atributo)) {
                li.textContent = atributo.charAt(0).toUpperCase() + atributo.slice(1) + ": " + element[atributo];
            } else {
                li.textContent = "El atributo '" + atributo + "' no existe en este registro.";
            }
            lista.appendChild(li);
        });
        return;
    }

    if (datosLista.length === 0) {
        let p = document.createElement("p");
        p.textContent = "No se encontraron registros";
        lista.appendChild(p);
    } else {
        datosLista.forEach(element => {
            let li = document.createElement("li")
            if (document.getElementById("nombreYdominio").checked) {
                //li.textContent = "Nombre: " + element.nombre + " -- Dominio: " + element.dominio
                li.textContent = JSON.stringify(element,["nombre","dominio"],2)
            } else {
                //li.textContent = "Nombre: " + element.nombre + " -- Dominio: " + element.dominio + " -- Poder: " + element.poder + " -- Simbolo: " + element.simbolo + " -- Ciudad: " + element.ciudad
                li.textContent = JSON.stringify(element,["nombre","dominio","simbolo","poder","ciudad"],2)
            }
            let div = document.createElement("div")
            div.classList.add("botones")

            let bEditar = document.createElement("button")
            bEditar.textContent = "Editar"
            bEditar.addEventListener("click", async () => {
                await editFunction(element)
                agregarALista(document.getElementById("atributoEsp").value)
            })

            let bEliminar = document.createElement("button")
            bEliminar.textContent = "Eliminar"
            bEliminar.addEventListener("click", async () => {
                await deleteFunction(element.id)
                agregarALista(document.getElementById("atributoEsp").value)
            })

            li.appendChild(div)
            div.appendChild(bEditar)
            div.appendChild(bEliminar)
            lista.appendChild(li)
        });
    }
}

async function postFunction() {
    let form = document.getElementById("postForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        alert("Todos los campos son obligatorios.");
        return;
    }

    try {
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: document.getElementById("postNombre").value,
                dominio: document.getElementById("postDominio").value,
                simbolo: document.getElementById("postSimbolo").value,
                poder: Number(document.getElementById("postPoder").value),
                ciudad: document.getElementById("postCiudad").value
            })
        })
    } catch (error) {
        console.log("Error: " + error)
    }
}

async function editFunction(element) {
    let nombre = document.getElementById("putNombre")
    let dominio = document.getElementById("putDominio")
    let simbolo = document.getElementById("putSimbolo")
    let poder = document.getElementById("putPoder")
    let ciudad = document.getElementById("putCiudad")

    nombre.value = element.nombre
    dominio.value = element.dominio
    simbolo.value = element.simbolo
    poder.value = element.poder
    ciudad.value = element.ciudad

    nombre.disabled = false
    dominio.disabled = false
    simbolo.disabled = false
    poder.disabled = false
    ciudad.disabled = false
    document.getElementById("editBtn").disabled = false

    idEditando = element.id
}

async function putFunction(id) {
    let form = document.getElementById("putForm");
    if (!form.checkValidity()) {
        form.reportValidity();
        alert("Todos los campos son obligatorios.");
        return;
    }
    const nombre = document.getElementById("putNombre").value;
    const dominio = document.getElementById("putDominio").value;
    const simbolo = document.getElementById("putSimbolo").value;
    const poder = document.getElementById("putPoder").value;
    const ciudad = document.getElementById("putCiudad").value;

    try {
        let response = await fetch(url + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                dominio,
                simbolo,
                poder: Number(poder),
                ciudad
            })
        })
        console.log(response.json)
    } catch (error) {
        console.log("Error: " + error)
    }
}

async function deleteFunction(id) {
    try {
        await fetch(url + "/" + id, {
            method: "DELETE"
        })
    } catch (error) {
        console.log("Error: " + error)
    }
}

agregarALista()

document.getElementById("addBtn").addEventListener("click", postFunction)
document.getElementById("editBtn").addEventListener("click", async () => {
    if (idEditando !== null) {
        await putFunction(idEditando);
        document.getElementById("putForm").reset();
        idEditando = null;
        agregarALista(document.getElementById("atributoEsp").value);
    }
})
document.getElementById("nombreYdominio").addEventListener("change", () => {
    agregarALista(document.getElementById("atributoEsp").value);
});
document.getElementById("atributoEsp").addEventListener("input", () => {
    agregarALista(document.getElementById("atributoEsp").value)
});