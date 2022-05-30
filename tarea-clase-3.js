// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt("Cual es su nombre?").toLowerCase()
const nombreAmigo = "benjamin"
const nombreAdmin = "santiago"
if (nombreUsuario === nombreAdmin){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`)
}else if (nombreUsuario === nombreAmigo){
    console.log(`Hola ${nombreUsuario} te llamás igual que mi amigo`)
}else {
    console.log(`Hola ${nombreUsuario}!`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt("Cuantos años tienes?"))
const edadAdmin = 22
if (edadUsuario === edadAdmin){
    console.log("Tienes la misma edad que yo!")
}else if (edadUsuario >= edadAdmin){
    console.log("Eres mas grande que yo!")
}else if (edadUsuario <= edadAdmin){
    console.log("Eres menor que yo!")
}else {
    console.log("No he entendido lo que me dices")
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const tieneDocumento = prompt("Tienes documento? (Si/No)")
const EDAD_MINIMA_INGRESO = 18
const TIENE_DOCUMENTO = "si"
const NO_TIENE_DOCUMENTO = "no"

if (tieneDocumento.toLowerCase() === TIENE_DOCUMENTO){
    let edadUsuario = Number(prompt("Cuantos años tienes?"))
    if (edadUsuario >= EDAD_MINIMA_INGRESO){
        console.log("Puedes entrar al bar")
    }else if (edadUsuario < EDAD_MINIMA_INGRESO){
        console.log("No puedes entrar al bar")
    }else {
        console.log("No he entendido lo que me dices")
    }
}else if (tieneDocumento.toLowerCase() === NO_TIENE_DOCUMENTO){
    console.log("No puedes entrar al bar")
}else {
    console.log("No he entendido lo que me dices")
}