function desafioProgramacion1 (){
    console.log("Desafio de programacion #1: ")

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
    const NUMERO_INICIO = 1 
    const NUMERO_FIN = 9

    for (let i = NUMERO_INICIO; i <= NUMERO_FIN; i++){
        desafioProgramacion3(i)
    }
    
}

function desafioProgramacion5(){
    console.log("Desafio de programacion #5: ")
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
    const CELSIUS_A_CONVERTIR = 26

    function convertidorAFahrenheit(){
        return (CELSIUS_A_CONVERTIR * 9/5) + 32
    }
    console.log(convertidorAFahrenheit())
}

function desafioProgramacion9(){
    console.log("Desafio de programacion #9: ")
        const FAHRENHEIT_A_CONVERTIR = 77

        function convertidorACelsius(){
            return (FAHRENHEIT_A_CONVERTIR - 32) * 5/9
        }
    console.log(convertidorACelsius())
}

function desafioProgramacion11(){
    console.log("Desafio de programacion #11: ")
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
