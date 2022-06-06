function probarValidarNombre(){
    console.assert(validarNombre("ab") === '', 'La funcion no acepto un nombre válido')
    console.assert(validarNombre("") === 'Este campo debe tener al menos 1 caracteres', 'validarNombre no funciono con un string vacío')
    console.assert(validarNombre("dklasjdlkajdaksjdasjdsakdjasdjadjadlkdsadasdsajsda") === 'Este campo debe tener menos de 50 caracteres', 'validarNombre no funciono con mas de 50 caracteres')    
}

function probarValidarCiudad(){
    console.assert(validarCiudad("San Juan") === '', 'La funcion no acepto una ciudad válida')
    console.assert(validarCiudad('') === 'Este campo debe completarse', 'validarCiudad no funciono con un string vacío')
}

function probarValidarRegalo(){
    console.assert(validarRegalo("kdasjddasdadasdlksa") === '', 'La funcion no acepto un regalo válido')
    console.assert(validarRegalo('') === 'Este campo debe tener al menos 10 caracteres', 'validarCiudad no funciono con un string vacío')
    console.assert(validarRegalo('dklasjdlkajdaksjdasjdsakdjasdjadjadlkdsadasdsajsda') === 'Este campo debe tener menos de 50 caracteres', 'validarCiudad no funciono con mas de 50 caracteres')
}
probarValidarRegalo()
probarValidarNombre()
probarValidarCiudad()