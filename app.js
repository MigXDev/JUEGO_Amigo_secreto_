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

    actualizarLista(); // 4- Funcion agregadaMostrar los nombres en la lista
}

function actualizarLista() // 3- Funcion de lista de amigos
{
    let lista = document.getElementById("listaAmigos"); //3.1- Obtener la lista <ul>
    lista.innerHTML = ""; //3.2-  Limpiar la lista

    for (let i = 0; i < amigos.length; i++) //3.3- funcion FOR
    {
        // 3.3.1- document.createElement("li") --> Crea un nuevo elemento <li>.
        let li = document.createElement("li"); 
        // 3.3.2- li.textContent = amigos[i] --> Le pone el nombre del amigo.
        li.textContent = amigos[i];
        // 3.3.3- lista.appendChild(li) --> Agrega el <li> dentro de la lista en el HTML.
        lista.appendChild(li);
    }
}