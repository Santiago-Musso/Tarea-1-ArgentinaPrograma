// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

console.log("Parte 1:")
function parte1(){
    const NUMERO_MINIMO = 3
    const NUMERO_MAXIMO = 22
    const SECUENCIA_IMPRESION = 3

    for(let i = NUMERO_MINIMO; i <= NUMERO_MAXIMO; i += SECUENCIA_IMPRESION){    
            console.log(i)
    }
}
parte1()

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

console.log("Parte 2:")
function parte2(){
    const NUMERO_MINIMO = 1
    let contadorMaximo = 10

    while(contadorMaximo >= NUMERO_MINIMO){
        console.log(contadorMaximo)
        contadorMaximo--
    }
}
parte2()

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

console.log("Parte 3:")
function parte3(){
    const INICIO_FIZZBUZZ = 1
    const FINAL_FIZZBUZZ = 50

    for (let i = INICIO_FIZZBUZZ; i <= FINAL_FIZZBUZZ; i++){
        let impresorFizzBuzz = ""
        if (i%3 == 0){
            impresorFizzBuzz = "Fizz"
        }
        if (i%5 == 0){
            impresorFizzBuzz += "Buzz"
            }
        console.log(impresorFizzBuzz || i)
    }
}
parte3()

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

console.log("Parte 4:")
function parte4(){
    const ARREGLO_NUMEROS = [10,5,4,2,8]

    function calcularPromedio(arregloNumeros){
        let sumador = 0
        for (let i = 0; i < arregloNumeros.length; i++){
            sumador += arregloNumeros[i]
        }
        return (sumador / arregloNumeros.length)
    }

    console.log(`Tu promedio es: ${calcularPromedio(ARREGLO_NUMEROS)}`)
}
parte4()
