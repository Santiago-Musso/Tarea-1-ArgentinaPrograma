function desafioProgramacion1 (){
    console.log("Desafio de programacion #1: ")
    //Desafío de programación #1: Imprimí los números del 1 al 10 
    //Resultado: 10 9 8 7 6 5 4 3 2 1

    const NUMEROS_MINIMOS = 1
    const NUMEROS_MAXIMOS = 10

    function imprimirNumeros(){
        for (let i = NUMEROS_MAXIMOS; i >= NUMEROS_MINIMOS; i--){
            console.log(i)
        }
    }

    imprimirNumeros()
}

function desafioProgramacion2(){
    console.log("Desafio de programacion #2: ")
    //Desafìo de programación  #2: Imprimí los números impares del 1 al 100

    const NUMEROS_MINIMOS = 1
    const NUMEROS_MAXIMOS = 100

    function imprimirNumerosImpares(){
        for (let i = NUMEROS_MINIMOS; i <= NUMEROS_MAXIMOS; i += 2){
            console.log(i)
        }
    }
    imprimirNumerosImpares()
}

function desafioProgramacion3(numeroMultiplicar){
    console.log("Desafio de programacion #3: ")
    //Desafío de programación #3: Imprimí la tabla de multiplicación del 7

    const INICIO_TABLA = 0
    const FIN_TABLA = 9

    function mostrarTabla(numeroMultiplicar = 7){
        for (let i = INICIO_TABLA; i <= FIN_TABLA; i++){
            console.log(`${numeroMultiplicar}x${i}=${numeroMultiplicar*i}`)
        }
    }
    mostrarTabla(numeroMultiplicar)
}

function desafioProgramacion4(){
    console.log("Desafio de programacion #4:")
    //Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

    const NUMERO_INICIO = 1 
    const NUMERO_FIN = 9

    for (let i = NUMERO_INICIO; i <= NUMERO_FIN; i++){
        desafioProgramacion3(i)
    }
    
}

function desafioProgramacion5(){
    console.log("Desafio de programacion #5: ")
    //Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.

    const ARREGLO_NUMEROS = [1,2,3,4,5,6,7,8,9,10]

    function sumarArreglo(){
        let resultado = 0
        for(let i = 0; i < ARREGLO_NUMEROS.length; i++){
            resultado += ARREGLO_NUMEROS[i]
        }
        return resultado
    }
    console.log(sumarArreglo())
}

function desafioProgramacion6(){
    console.log("Desafio de programacion #6: ")
    //Desafío de programación #6: Calcula 10! (10 factorial)

    const NUMERO_FACTORIAL = 10

    function hacerFactorialNumero(){
        let resultado = NUMERO_FACTORIAL
        for(let i = NUMERO_FACTORIAL; i > 1; i--){
            resultado *= (i - 1)
        }
        return resultado
    }
    console.log(`El resultado del factorial de ${NUMERO_A_FACTOREAR} es: ${hacerFactorialNumero()}`)
}

function desafioProgramacion7(){
    console.log("Desafio de programacion #7: ")
    //Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

    const NUMEROS_MAYOR_QUE = 10
    const NUMEROS_MENOR_QUE = 15

    function sumarImparesMayorQue(){
        let resultado = 0
        for(let i = NUMEROS_MAYOR_QUE; i <= NUMEROS_MENOR_QUE; i++){
            if( i%2 === 1){
                resultado += i
            }
        }
        return resultado
    }
    console.log(sumarImparesMayorQue())
}

function desafioProgramacion8(){
    console.log("Desafio de programacion #8: ")
    //Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

    const CELSIUS_A_CONVERTIR = 26

    function convertidorAFahrenheit(){
        return (CELSIUS_A_CONVERTIR * 9/5) + 32
    }
    console.log(convertidorAFahrenheit())
}

function desafioProgramacion9(){
    console.log("Desafio de programacion #9: ")
    //Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

    const FAHRENHEIT_A_CONVERTIR = 77

    function convertidorACelsius(){
        return (FAHRENHEIT_A_CONVERTIR - 32) * 5/9
    }
    console.log(convertidorACelsius())
}

//Desafío de programación #10: Calcula la suma de todos los números en un array de números
//Resuelto en el desafio #5

function desafioProgramacion11(){
    console.log("Desafio de programacion #11: ")
    //Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

    const ARREGLO_NUMEROS = [1,2,3,4,5,6,7,8,9,10,12]

    function promediarArreglo(){
        let resultado = 0
        for(let i = 0; i < ARREGLO_NUMEROS.length; i++){
            resultado += ARREGLO_NUMEROS[i]
        }
        return resultado / ARREGLO_NUMEROS.length
    }
    console.log(promediarArreglo().toFixed(2))

}

function desafioProgramacion12(){
    console.log("Desafio de programacion #12: ")
    //Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

    const ARREGLO_A_CONVERTIR = [1,3,6,-8,8,-15,-5]

    function convertirSoloPositivos(){
        let resultado = []
        for (let i = 0; i <= ARREGLO_A_CONVERTIR.length; i++){
            if (ARREGLO_A_CONVERTIR[i] >= 0){
                resultado.push(ARREGLO_A_CONVERTIR[i])
            }
        }
        return resultado
    }
    console.log(convertirSoloPositivos())
}

function desafioProgramacion13(){
    console.log("Desafio de programacion #13: ")
    //Desafío de programación #13: Find the maximum number in an array of numbers

    const ARREGLO_NUMEROS = [1,25,6356,3,85,756]

    function buscarMaximoArreglo(){
        let resultado = ARREGLO_NUMEROS[0]
        for(let i = 0; i <= ARREGLO_NUMEROS.length; i++){
            if (ARREGLO_NUMEROS[i] > resultado){
                resultado = ARREGLO_NUMEROS[i]
            }
        }
        return resultado
    }
    console.log(buscarMaximoArreglo())
}

function desafioProgramacion14(){
    console.log("Desafio de programacion #14: ")
    //Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

    const NUMEROS_A_IMPRIMIR = 16

    function imprimirFibonacciHasta(){
        let resultado = 0
        let contador = 0
        let $contador = 0
        for(let i = 0; i <= NUMEROS_A_IMPRIMIR; i++){
            if (i === 0){
                console.log(resultado)
                resultado = 1
            }else {
                console.log(resultado)
                contador = $contador
                $contador = resultado
                resultado = contador + $contador
            }
        }
    }
    imprimirFibonacciHasta()
}

function desafioProgramacion15(){
    console.log("Desafio de programacion #15: ")
    //Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

    function imprimirFibonacci(NUMERO_N = 5){
        if (NUMERO_N === 0){
            return 0
        }else if (NUMERO_N === 1){
            return 1
        }else{
            return imprimirFibonacci(NUMERO_N - 1) + imprimirFibonacci(NUMERO_N - 2)
        }
    }
    console.log(imprimirFibonacci())
}

function desafioProgramacion17(){
    console.log("Desafio de programacion #17: ")
    //Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo

    const NUMERO_A_SUMAR = "100000000005"
    let resultado = 0
    
    function sumarDigitos(){
            for (let i = 0; i <= NUMERO_A_SUMAR.length; i++){
            if (Number(NUMERO_A_SUMAR) > 0){
                resultado += Number(NUMERO_A_SUMAR.slice(i,i + 1))
            }
        }
        return resultado
    }
    console.log(sumarDigitos())
}

function desafioProgramacion20(){
    console.log("Desafio de programacion #20: ")
    //Desafío de programación #20: Rotar un array hacia la izquierda una posición

    const ARREGLO_A_ROTAR = [4,3,2,1]
    let resultado = []

    function rotarArregloIzquierda(){
        for (let i = 0; i < ARREGLO_A_ROTAR.length; i++){
            if (i === 0){
                resultado[ARREGLO_A_ROTAR.length - 1] = ARREGLO_A_ROTAR[i]
            }else{
                resultado[i-1] = ARREGLO_A_ROTAR[i]
            }
        }
        return resultado        
    }
    console.log(rotarArregloIzquierda())
}

function desafioProgramacion21(){
    console.log("Desafio de programacion #21: ")
    //Desafío de programación #21: Rotar un array a la derecha una posición

    const ARREGLO_A_ROTAR = [2,3,4,1]
    let resultado = []

    function rotarArregloDerecha(){
        for (let i = 0; i < ARREGLO_A_ROTAR.length; i++){
            if (i === 0){
                resultado[i] = ARREGLO_A_ROTAR [ARREGLO_A_ROTAR.length - 1]
            }else{
                resultado[i] = ARREGLO_A_ROTAR[i - 1]
            }
        }
        return resultado 
    }
    console.log(rotarArregloDerecha())
}

function desafioProgramacion22(){
    console.log("Desafio de programacion #22: ")
    //Desafío de programación #22: Invertir un array

    const ARREGLO_A_ROTAR = [1,2,3,4]
    let resultado = []
    
    function rotarArregloCompleto(){
        for (let i = 0; i < ARREGLO_A_ROTAR.length; i++){
            if (i === 0){
                resultado[ARREGLO_A_ROTAR.length - 1] = ARREGLO_A_ROTAR[i]
            }else{
                resultado[i - 1] = ARREGLO_A_ROTAR[ARREGLO_A_ROTAR.length - i]
            }
        }
        return resultado
    }
    console.log(rotarArregloCompleto())
}

function desafioProgramacion23(){
    console.log("Desafio de programacion #23: ")
    //Desafío de programación #23: Invertir una cadena de caracteres

    const STRING_A_ROTAR = "dabale arroz a la zorra el abad"
    let resultado = []

    function invertirString(){
        for (let i = 0; i < STRING_A_ROTAR.length; i++){
            resultado += STRING_A_ROTAR.slice(STRING_A_ROTAR.length -1 - i, STRING_A_ROTAR.length - i)
        }
        return resultado
    }
    console.log(invertirString())
}

function desafioProgramacion24(){
    console.log("Desafio de programacion #24: ")
    //Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo

    const STRING_A_ENVIAR_1 = [1,2,3]
    const STRING_A_ENVIAR_2 = ["a","b","c"]
    let resultado = []

    function combinarArreglos(){
        for (let i = 0; i < STRING_A_ENVIAR_1.length; i++){
            for (let j = 0; j < STRING_A_ENVIAR_2.length; j++){
                resultado [i] = STRING_A_ENVIAR_1[i]
                resultado[j + STRING_A_ENVIAR_1.length] = STRING_A_ENVIAR_2[j]
            }
        }
        return resultado
    }
    console.log(combinarArreglos())
}

function desafioProgramacion25(){
    console.log("Desafio de programacion #25: ")
    //Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.

    const ARREGLO_NUMEROS_1 = [5,10,3]
    const ARREGLO_NUMEROS_2 = [10,1]
    let resultado = []
    

    function combinarArreglosDiferenciaSimetrica(){
        for (let i = 0; i < ARREGLO_NUMEROS_1.length; i++){
            let j = 0
            let igualdad = false

            while (j != ARREGLO_NUMEROS_2.length){
                if (ARREGLO_NUMEROS_1[i] === ARREGLO_NUMEROS_2[j]){
                    igualdad = true
                    break
                }
                j++    
            }
            if (!igualdad){
                    resultado.push(ARREGLO_NUMEROS_1[i])
                }
        }
        for (let i = 0; i < ARREGLO_NUMEROS_2.length; i++){
            let j = 0
            let igualdad = false

            while (j != ARREGLO_NUMEROS_1.length){
                if (ARREGLO_NUMEROS_2[i] === ARREGLO_NUMEROS_1[j]){
                    igualdad = true
                    break
                }
                j++
            }
            if (!igualdad){
                resultado.push(ARREGLO_NUMEROS_2[i])
            }
        }
        return resultado
    }
    console.log(combinarArreglosDiferenciaSimetrica())
}

function desafioProgramacion26(){
    console.log("Desafio de programacion #26: ")
    //Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo

    const ARREGLO_A_RESTAR_1 = [5,1,2,3,4]
    const ARREGLO_A_RESTAR_2 = [3,4]
    let resultado = []

    function restarArreglos(){
        for (let i = 0; i < ARREGLO_A_RESTAR_1.length; i++){
            let j = 0
            let igualdad = false
            
            while (j != ARREGLO_A_RESTAR_2.length){
                if (ARREGLO_A_RESTAR_2[j] === ARREGLO_A_RESTAR_1[i]){
                    igualdad = true
                    break
                }
                j++                
            }
            if(!igualdad){
                    resultado.push(ARREGLO_A_RESTAR_1[i])
                }
        }
        for (let i = 0; i < ARREGLO_A_RESTAR_2.length; i++){
            let j = 0
            let igualdad = false
        
            while (j != ARREGLO_A_RESTAR_1.length){
                if (ARREGLO_A_RESTAR_1[j] === ARREGLO_A_RESTAR_2[i]){
                    igualdad = true
                    break
                }
                j++                
            }
            if (!igualdad){
                    resultado.push(ARREGLO_A_RESTAR_2[i])
                }
        }
        return resultado
    }
    console.log(restarArreglos())
}

function desafioProgramacion27(){
    console.log("Desafio de programacion #27: ")
    //Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos

    const ARREGLO = [1,2,3,4,5,4,3,2,1,0]
    let resultado = []

    function restarElementosDistintos(){
        resultado[0] = ARREGLO[0]
        for (let i = 0; i < ARREGLO.length; i++){
            let j = 0
            let igualdad = false 
            while (j != resultado.length){
                if (resultado[j] === ARREGLO[i]){
                    igualdad = true
                    break
                }
                j++
            }
            if (!igualdad){
                resultado.push(ARREGLO[i])
            }   
        }
        return resultado
    }
    console.log(restarElementosDistintos())
}
