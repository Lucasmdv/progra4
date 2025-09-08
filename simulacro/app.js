let url = "http://localhost:3000/extraterrestres"
let getID = document.getElementById("getId")
let pGet = document.getElementById("getText")
let postNombre = document.getElementById("postNombre")
let postPlaneta = document.getElementById("postPlaneta")
let postPoder = document.getElementById("postPoder")
let pPost = document.getElementById("postText")
let putId = document.getElementById("putId")
let putNombre = document.getElementById("putNombre")
let putPlaneta = document.getElementById("putPlaneta")
let putPoder = document.getElementById("putPoder")
let pPut = document.getElementById("putText")
let deleteId = document.getElementById("deleteId")
let pDelete = document.getElementById("deleteText")

async function getFunction() {
    let id = getID.value
    try {
        let response = await fetch(url + "/" + id)
        let postObtenido = await response.json()
        pGet.textContent = JSON.stringify(postObtenido,null,2)
        console.log(postObtenido)
    } catch (error) {
        pGet.textContent = "Error: " + error
    }
}

document.getElementById("getBtn").addEventListener("click",getFunction)

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
        let data =await response.json()
        pPut.textContent = "post elegido ha sido reemplazado por los siguientes datos: "+JSON.stringify(data,null,2)
        console.log(data)
    } catch (error) {
        pPut.textContent = error
    }
}

async function deleteFunction() {

    let response = fetch(url + "/" + deleteId.value, {
        method: "DELETE"
    })
    pDelete.textContent = response.ok ? "Post: " + deleteId.value + " eliminado." : "Error al eliminar el post"
}