const modalContacto = new bootstrap.Modal(document.getElementById('modalContacto'))
const modalContactoBusqueda = new bootstrap.Modal(document.getElementById('modalContactoBusqueda'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}
async function upsertContact(event) {
    event.preventDefault(); 
    const imageInput = document.querySelector("#imageInput");
    const file = imageInput.files[0];
        
    const { url } = await fetch("/s3Url").then((res) => res.json());
    document.querySelector("#imagen").value = url.split("?")[0];

    await fetch(url, {
    method: "PUT",
    headers: {
        "Content-Type": "multipart/form-data",
    },
    body: file,
    });

    //const imageUrl = url.split("?")[0];

    const {target} = event
    console.log(target[0].value)
    console.log(target[1].value)
    console.log(target[2].value)
    console.log(target[3].value)
    console.log(target[4].value)
    console.log(target[5].value)
    console.log(target[6].value)

    const dataForm = JSON.stringify( {
    nombre: target[0].value,
    apellido: target[1].value,
    imagen: target[3].value,
    email: target[4].value,
    telefono: target[5].value,
    direccion: target[6].value
    })

    const response = await fetch("/crear", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: dataForm,
    })
    console.log("Aqui --> 5")
    const data = await response.json()

    if (data.ok ) {
        console.log("Aqui --> 6")
        window.location.reload()
      } else {
        console.log("Aqui --> 7")
        alert("Ha ocurrido un error, no se pudo enviar tu imagen, prueba mas tarde")
      }
      console.log("Aqui --> 8")

}


on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode

    //console.log(fila.children[3].children[0].src)

    id_editar.value = fila.children[0].innerHTML
    nombre_editar.value = fila.children[1].innerHTML
    apellido_editar.value = fila.children[2].innerHTML
    imagen_editar.value = fila.children[3].children[0].src
    email_editar.value = fila.children[4].innerHTML
    telefono_editar.value = fila.children[5].innerHTML
    direccion_editar.value = fila.children[6].innerHTML
    modalContacto.show()
})

on(document, 'click', '.btnBusqueda', e =>{
    //const fila = e.target.parentNode.parentNode

    //console.log(fila.children[3].children[0].src)

    //apellido_buscar.value = fila.children[0].innerHTML
    modalContactoBusqueda.show()
})