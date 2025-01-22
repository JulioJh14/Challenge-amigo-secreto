// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Declarar  array para almacenar los nombres

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
     // Obtener el valor del campo directamente
    const nombre = input.value;

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.'); // Mostrar mensaje de error
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Actualizar la lista en la interfaz
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    input.value = '';
}

function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Construir el contenido de la lista como HTML
    let contenidoHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        contenidoHTML += `${amigos[i]}`;
    }

    // Asignar el contenido generado a la lista
    listaAmigos.innerHTML = contenidoHTML;
}

function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade al menos uno.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es:${amigoSorteado}`;
}






























/*function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function validarNombre () {
    let nombreAmigo  = prompt(document.getElementById('amigo').value);
    console.log (intentos);
    }
*/