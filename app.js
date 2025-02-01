// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // 1- crear array "amigos"

function agregarAmigo() // 2- Crear Funcion agregarAmigo()
{
    // 2.1- Capturar el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();

    // 2.2- Validar la entrada
    //si es igual a "" enviar alerta
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 2.3- Actualizar el array de amigos
    amigos.push(nombre);
    // Para verificar que se agregan correctamente
    console.log(amigos); 

    // 2.4- Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista
    lista.innerHTML = ""; // Limpiar la lista

    for (let i = 0; i < amigos.length; i++) { // Recorrer el array
        let li = document.createElement("li"); // Crear <li>
        li.textContent = amigos[i]; // Asignar el nombre
        lista.appendChild(li); // Agregar <li> a la lista
    }
}