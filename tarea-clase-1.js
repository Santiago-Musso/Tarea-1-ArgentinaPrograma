// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
function calcularEdadUsuario(anioActual,anioNacimiento){
    return anioActual - anioNacimiento
}

const anioActual = parseInt(prompt("En qué año estamos?"))
const anioNacimiento = parseInt(prompt("En qué año naciste?"))

console.log(calcularEdadUsuario(anioActual,anioNacimiento))

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

const salarioAnual = Number(prompt("Cual es tu salario anual?"))

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12
}
alert(`Tu salario mensual es de: $${Number(calcularSalarioMensual(salarioAnual)).toFixed(2)}`)

const salarioMensual = Number(prompt("Cual es tu salario mensual?"))
calcularSalario(salarioMensual)

function calcularSalario(salarioMensual){
    const salarioAnual = salarioMensual*12
    const salarioSemanal = salarioAnual / 52
    const salarioDiario = salarioSemanal / 5
    const salarioHora = salarioDiario / 8
    return alert(`Tu salario anual es de $${Number(salarioAnual).toFixed(2)}, el semanal de $${Number(salarioSemanal).toFixed(2)}, el diario de $${Number(salarioDiario).toFixed(2)} y por hora de $${Number(salarioHora).toFixed(2)}:`);
}
