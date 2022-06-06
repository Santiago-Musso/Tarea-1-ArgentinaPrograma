const $formulario = document.querySelector('#mi-formulario')
const $textoResultado = document.querySelector('#mostrar-resultado')


function crearInputs(familiares){
    for (let i = 1; i <= familiares; i++){
        const $familiar = document.createElement('div')
        const $edadFamiliar = document.createElement('input')
        const $labelFamiliar = document.createElement('label')
        $labelFamiliar.innerText = `Edad familiar #${i}`
        $labelFamiliar.setAttribute("for",`Familiar-${i}`)
        $edadFamiliar.className = "edad-familiar"
        $familiar.append($labelFamiliar,$edadFamiliar)
        $formulario.appendChild($familiar)
    }
    const $botonCalcular = document.createElement('input')
    const $botonLimpiar = document.createElement('input')

    $botonLimpiar.setAttribute("type","button")
    $botonLimpiar.setAttribute("id","limpiar")
    $botonLimpiar.value = "Limpiar"
    $botonCalcular.setAttribute("type",'button')
    $botonCalcular.setAttribute("id","calcular")
    $botonCalcular.value = "Calcular"
    $botonCalcular.onclick = mostrarResultados
    $botonLimpiar.onclick = limpiarDocumento
    $formulario.append($botonCalcular,$botonLimpiar)
    $textoResultado.classList = ""
}

function consultarFamiliares(){
    let validadorNumeroFamiliares = true

    while(validadorNumeroFamiliares){
        const familiares = Number(prompt("Cuanta gente hay en tu grupo familiar?"))

        if (!isNaN(familiares)){
            crearInputs(familiares)
            validadorNumeroFamiliares = false
        }else {
            alert("No ha introducido un valor correcto")
        }
    }
}

function calcularMayor(){
    const $listaEdades = document.querySelectorAll('.edad-familiar')
    let mayor = Number($listaEdades[0].value)

    for (let i = 0; i < $listaEdades.length; i++){
        if ($listaEdades[i].value > mayor){
            mayor = $listaEdades[i].value
        }
    }
    return mayor
}

function calcularMenor(){
    const $listaEdades = document.querySelectorAll('.edad-familiar')
    let menor = Number($listaEdades[0].value)

    for (let i = 0; i < $listaEdades.length; i++){
        if ($listaEdades[i].value < menor){
            menor = Number($listaEdades[i].value)
        }
    }
    return menor
}

function calcularPromedio(){
    const $listaEdades = document.querySelectorAll('.edad-familiar')
    let promedio = 0

    for (let i = 0; i < $listaEdades.length; i++){
        promedio += Number($listaEdades[i].value)
    }
    return (promedio / $listaEdades.length).toFixed(2)
}

function mostrarResultados() {
    $textoResultado.innerHTML = `El integrante con mayor edad de la familia tiene: ${calcularMayor()} \n`
    $textoResultado.innerHTML += `El integrante con menor edad de la familia tiene: ${calcularMenor()} \n`
    $textoResultado.innerHTML += `El promedio de edad de la familia es: ${calcularPromedio()} \n`
    return false
}   

function limpiarDocumento(){
    const $botonCalcular = document.querySelector('#calcular')
    const $botonLimpiar = document.querySelector('#limpiar')
    const $listaFamiliar = document.querySelectorAll('div')
    let $divEliminar

    $formulario.removeChild($botonCalcular)
    $formulario.removeChild($botonLimpiar)    
    $textoResultado.className = 'ocultar'
    $textoResultado.innerText = ''
    
    for (let i = 0; i < $listaFamiliar.length; i++){
        $divEliminar = $listaFamiliar[i]
        $formulario.removeChild($divEliminar)
    }
    consultarFamiliares()
}