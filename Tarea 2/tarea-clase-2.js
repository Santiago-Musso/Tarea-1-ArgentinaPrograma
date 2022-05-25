function sumar(numero1, numero2){
    return alert("El resultado de la suma es: " + (numero1 + numero2).toFixed(2))
}
function restar(numero1,numero2){
    return alert("El resultado de la resta es: " + (numero1 - numero2).toFixed(2))
}
function multiplicar(numero1,numero2){
    return alert("El resultado de la multiplicacion es: " + (numero1 * numero2).toFixed(2))
}
function dividir(numero1,numero2){
    return alert("El resultado de la division es: " + (numero1 / numero2).toFixed(2))
}

// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
var salir = false
do {
    operador = prompt("Que operacion desea realizar? (+)sumar, (-)restar, (*)multiplicar, (/)dividir o (S)salir")
    if(operador == "+" || operador == "-" || operador == "*" || operador == "/"){
        salir = true
    }else if (operador != "S" && operador != "s"){
        alert("Ingrese una opcion válida")
    }else{
        salir = true
    }
}while(salir == false)

if (operador == "+" || operador == "-" || operador == "*" || operador == "/"){    
    do{
        numero1 = parseFloat(prompt("Inserte el primer numero"))
        numero2 = parseFloat(prompt("Inserte el segundo numero"))
        if (numero1 == NaN || numero2 == NaN){
            alert("No ha introducido un valor correcto")
            salir = false
        }
    }while(salir == false)

    if (operador == "+"){
        sumar(numero1, numero2)
    }else if (operador == "-"){
        restar(numero1,numero2)
    }else if (operador == "*"){
        multiplicar(numero1,numero2)
    }else{
        if(numero2 == 0){
            alert("No se puede dividir por 0")
        }else{
            dividir(numero1,numero2)
        }
    }
}
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.
