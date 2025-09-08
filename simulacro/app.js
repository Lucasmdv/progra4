let url = "http://localhost:3000/extraterrestres"
let postNombre = document.getElementById("postNombre")
let postPlaneta = document.getElementById("postPlaneta")
let postPoder = document.getElementById("postPoder")
let pPost = document.getElementById("postText")
let putId = document.getElementById("putId")
let putNombre = document.getElementById("putNombre")
let putPlaneta = document.getElementById("putPlaneta")
let putPoder = document.getElementById("putPoder")
let pPut = document.getElementById("putText")
let lista = document.getElementById("lista-et")

async function getFunction() {
    try {
        let response = await fetch(url)
        let postObtenido = await response.json()
        console.log(postObtenido)
        return postObtenido
    } catch (error) {
        pGet.textContent = "Error: " + error
        return []
    }
}

async function agregarALista() {
    let aliens = await getFunction();
    lista.innerHTML = "";
    aliens.forEach(element => {
        const li = document.createElement('li');
        li.textContent = `ID: ${element.id} -- Nombre: ${element.nombre} -- Planeta: ${element.planeta} -- Nivel de poder: ${element.nivelPoder} `;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click",async () => {
            await deleteFunction(element.id)
            agregarALista()
        })

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

async function postFunction() {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: postNombre.value,
                planeta: postPlaneta.value,
                nivelPoder: Number(postPoder.value)
            })
        })
        let data = await response.json()
        pPost.textContent = "Post creado: "+JSON.stringify(data,null,2)
        console.log(data)
        agregarALista()
        document.getElementById("postForm").reset()
    } catch (error) {
        pPost.textContent = "Error: " + error
    }
}

async function putFunction() {
    try {
        let response = await fetch(url + "/" + putId.value, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: putId.value,
                nombre: putNombre.value,
                planeta: putPlaneta.value,
                nivelPoder: Number(putPoder.value)
            })
        })
        if (!response.ok) {
            throw new Error("en el servidor: " + response.status);
        }
        let data = await response.json()
        pPut.textContent = "post elegido ha sido reemplazado por los siguientes datos: "+JSON.stringify(data,null,2)
        console.log(data)
        agregarALista()
        document.getElementById("putForm").reset()
    } catch (error) {
        pPut.textContent = error
    }
}

async function deleteFunction(id) {
    try {
        let response = await fetch(url + "/" + id, {
            method: "DELETE"
        });
        if (response.ok) {
            pDelete.textContent = "Post: " + id + " eliminado.";
        } else {
            pDelete.textContent = "Error al eliminar el post";
        }
    } catch (error) {
        pDelete.textContent = "Error: " + error;
    }
}

agregarALista()


document.getElementById("postBtn").addEventListener("click",postFunction)
document.getElementById("putBtn").addEventListener("click",putFunction)