// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos el array para la lista de nuestros amigos.
let listaAmigos = [];

// Implementar una función para agregar amigos.
function agregarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value.trim(); 

    if (nombre === "") {
        alert('El espacio no puede estar en blanco');
        return;
    }

    listaAmigos.push(nombre); 
    actualizarLista(); 
    document.getElementById('nombreAmigo').value = ""; 
}

// Implementar una función para actualizar la lista.
function actualizarLista() {
    let listaElementos = document.getElementById('listaAmigos'); 
    listaElementos.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLi = document.createElement("li"); 
        elementoLi.textContent = listaAmigos[i];
        listaElementos.appendChild(elementoLi); 
    }
}

// Implementar una función para sortear un amigo.
function sortearAmigo() {
    let nombreElemento = document.getElementById("nombreSorteado"); 

    if (listaAmigos.length === 0) {
        nombreElemento.innerHTML = "No hay amigos en la lista";
        return;
    }

    // Generar nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar nombre sorteado
    nombreElemento.innerHTML = "El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
}
