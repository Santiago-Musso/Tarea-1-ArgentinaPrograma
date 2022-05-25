// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
function edadUsuario(anioActual,anioNacimiento){
    return anioActual - anioNacimiento
}

const anioActual = parseInt(prompt("En qué año estamos?"))
const anioNacimiento = parseInt(prompt("En qué año naciste?"))

console.log(edadUsuario(anioActual,anioNacimiento))

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioAnual = parseInt(prompt("Cual es tu salario anual?"))

function calcularSalarioAnual(salarioAnual){
    return salarioAnual / 12
}
alert(`Tu salario mensual es de: $${parseInt(calcularSalarioAnual(salarioAnual))}`)

const salarioMensual = parseInt(prompt("Cual es tu salario mensual?"))
calcularSalario(salarioMensual)

function calcularSalario(salarioMensual){
    const $salarioAnual = salarioMensual*12
    const salarioSemanal = $salarioAnual / 52
    const salarioDiario = salarioSemanal / 5
    const salarioHora = salarioDiario / 8
    return alert(`Tu salario anual es de $${parseInt($salarioAnual)}, el semanal de $${parseInt(salarioSemanal)}, el diario de $${parseInt(salarioDiario)} y por hora de $${parseInt(salarioHora)}:`);
}
