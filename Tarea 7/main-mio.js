const $formulario = document.getElementById('carta-a-santa')
const regalo = $formulario['descripcion-regalo'].value
const comportamiento = $formulario.comportamiento.value

$formulario.onsubmit = validarFormulario

function validarNombre(nombre){
    if (nombre.length <= 1){
        return 'Este campo debe tener al menos 1 caracteres'
    }else if (nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'   
    }else{
        return ''
    }
    
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return 'Este campo debe completarse'
    }else{
        return ''
    }
}

function validarRegalo(regalo){
    if (regalo.length <= 10){
        return 'Este campo debe tener al menos 10 caracteres'
    }else if (regalo.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }else{
        return ''
    }
}

function validarFormulario(event){
    const $formulario = document.getElementById('carta-a-santa')
    const nombre = $formulario.nombre.value
    const ciudad = $formulario.ciudad.value
    const regalo = $formulario['descripcion-regalo'].value
    
    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorRegalo = validarRegalo(regalo)

    const errores = {
        nombre : errorNombre,
        ciudad : errorCiudad,
        'descripcion-regalo' : errorRegalo
    }
    for (error in errores){
        if (errores[error] != ''){
            $formulario[error].className = 'error'
        }else{
            $formulario[error].className = ''
        }
    }

    event.preventDefault()
}