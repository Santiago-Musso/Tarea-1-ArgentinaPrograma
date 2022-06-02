const $lista = document.querySelectorAll('li')
const arregloNumeros = []

function convertirArreglo(){
    for(let i = 0; i < $lista.length; i++){
        arregloNumeros[i] = Number($lista[i].innerText)
    }
    return
}
function calcularPromedio(){
    let sumador = 0
    for(let i = 0; i < $lista.length; i++){
        sumador += arregloNumeros[i]
    }
    return sumador / $lista.length
}
function obtenerMenor(){
    menor = arregloNumeros[0]
    for(let i = 0; i < $lista.length; i++){
        if(arregloNumeros[i] < menor){
            menor = arregloNumeros[i]
        }
    }
    return menor
}
function obtenerMayor(){
    mayor = arregloNumeros[0]
    for(let i = 0; i < $lista.length; i++){
        if(arregloNumeros[i] > mayor){
            mayor = arregloNumeros[i]
        }
    }
    return mayor
}
function obtenerRepetido(){
    let numeroRepetido = 0
    for (let i = 0; i < arregloNumeros.length; i++){
        let repeticion = 0
        let mayorRepeticion = 0
        for (let j = 0; j < arregloNumeros.length; j++){
            const repeticiones = new Object()
            if (arregloNumeros[i] === arregloNumeros[j]){
                repeticion++
                repeticiones.numero = arregloNumeros[i],
                repeticiones.vecesRepetido = repeticion
            }
            if (repeticiones.vecesRepetido > mayorRepeticion){
                mayorRepeticion = repeticiones.vecesRepetido
                numeroRepetido = repeticiones.numero
            }
        }
    }
    return numeroRepetido
}


convertirArreglo()
console.log(`El promedio de los numeros es: ${calcularPromedio()}`)
console.log(`El mayor de los numeros es: ${obtenerMayor()}`)
console.log(`El menor de los numeros es: ${obtenerMenor()}`)
console.log(`El mas repetido de los numeros es: ${obtenerRepetido()}`)