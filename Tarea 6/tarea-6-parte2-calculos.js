const $formulario = document.querySelector('form')
const $textoMostrarResultados = document.getElementById('mostrar-resultado')
const $textoResultados = document.getElementById('texto-resultado')
const $botonAgregarFamiliar = document.getElementById('agregar-familiar')
const $botonBorrarFamiliar = document.getElementById('borrar-familiar')
const $botonCalcularSalario = document.getElementById('calcular')
let contadorFamiliares = 1

$botonAgregarFamiliar.onclick = agregarFamiliar
$botonBorrarFamiliar.onclick = borrarFamiliar
$botonCalcularSalario.onclick = calcularSalario

function agregarFamiliar(){
    const $agregarLabel = document.createElement('label') 
    const $agregarInput = document.createElement('input')
    const $agregarDiv = document.createElement('div')

    $agregarLabel.innerText = `Salario anual Familiar #${contadorFamiliares}`
    contadorFamiliares++
    $agregarDiv.className = 'familiar'
    $agregarInput.className = 'salario-familiar'
    $agregarDiv.append($agregarLabel,$agregarInput)
    $formulario.appendChild($agregarDiv)    
}

function borrarFamiliar(){
    const $listaFamiliar = document.querySelectorAll('.familiar')
    const $cantidadFamiliares = $listaFamiliar.length

    $textoMostrarResultados.className = 'ocultar'
    
    if ($cantidadFamiliares > 0){
        $listaFamiliar[$cantidadFamiliares - 1].remove()
        contadorFamiliares--
    }
}

function calcularMayorSalario(){
    const $listaSalarios = document.querySelectorAll('.salario-familiar')
    let mayorSalario = Number($listaSalarios[0].value)

    for (let i = 0; i < $listaSalarios.length; i++){
        if ($listaSalarios[i].value != ''){
            if ($listaSalarios[i].value > mayorSalario){
                mayorSalario = Number($listaSalarios[i].value)
            }
        }
    }
    return mayorSalario
}

function calcularMenorSalario(){
    const $listaSalarios = document.querySelectorAll('.salario-familiar')
    let menorSalario

    for (let i = 0; i < $listaSalarios.length; i++){
        if ($listaSalarios[i].value != ''){
            menorSalario = $listaSalarios[i].value
            break
        }

    }

    for (let i = 0; i < $listaSalarios.length; i++){
        if ($listaSalarios[i].value != ''){
            if ($listaSalarios[i].value < menorSalario){
                menorSalario = Number($listaSalarios[i].value)
            }
        }
    }
    return menorSalario
}

function calcularSalarioAnualPromedio(){
    const $listaSalarios = document.querySelectorAll('.salario-familiar')
    let promedio = 0
    let familiares = 0

    for (let i = 0; i < $listaSalarios.length; i++){
        if ($listaSalarios[i].value != ''){
            promedio += Number($listaSalarios[i].value)
            familiares++
        }
    }
    return (promedio / familiares).toFixed(2)
}

function calcularSalarioMensualPromedio(){
    return (calcularSalarioAnualPromedio()/12).toFixed(2)
}

function calcularSalario(){
    const $listaSalarios = document.querySelectorAll('.salario-familiar')
    let validadorInputsVacios = false

    for (let i = 0; i < $listaSalarios.length; i++){
        if($listaSalarios[i].value != ''){
            validadorInputsVacios = true
        }
    }
    if (contadorFamiliares > 1 && validadorInputsVacios){
        $textoResultados.innerHTML = (`El mayor salario anual es: ${calcularMayorSalario()} \n`)
        $textoResultados.innerHTML += (`El menor salario anual es: ${calcularMenorSalario()} \n`)
        $textoResultados.innerHTML += (`El salario promedio anual es: ${calcularSalarioAnualPromedio()} \n`)
        $textoResultados.innerHTML += (`El salario promedio mensual es: ${calcularSalarioMensualPromedio()}`)
        $textoMostrarResultados.className = ''
    }
}
