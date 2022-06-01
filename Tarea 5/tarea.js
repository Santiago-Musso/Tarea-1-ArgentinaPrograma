const nombreUsuario = document.querySelector('#nombre-usuario')
const apellidoUsuario = document.querySelector('#apellido-usuario')
const edadUsuario = document.querySelector('#edad-usuario')
const botonAccion = document.querySelector('#ingresar')
const mostrarInfo = document.querySelector('#mostrar-informacion')
const titulo = document.querySelector('h1')

botonAccion.onclick = function(){
    mostrarInfo.innerHTML = `Nombre: ${nombreUsuario.value} \nApellido: ${apellidoUsuario.value} \nEdad: ${edadUsuario.value}`
    titulo.innerText += ` ${nombreUsuario.value}!` 
    return false
}