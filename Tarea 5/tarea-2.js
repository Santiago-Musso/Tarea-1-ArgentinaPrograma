const formulario = document.querySelector('form')
const CANTIDAD_VIDEOS = 5

function crearInputs(){
    for (let i = 0; i < CANTIDAD_VIDEOS; i++){
        inputHoras = document.createElement('input')
        inputMinutos = document.createElement('input')
        inputSegundos = document.createElement('input')
        divVideos = document.createElement('div')
        inputHoras.className = `input-horas`
        inputHoras.setAttribute("placeholder",`Horas clase#${i+1}`)
        inputMinutos.className = `input-minutos`
        inputMinutos.setAttribute("placeholder",`Minutos clase#${i+1}`)
        inputSegundos.className = `input-segundos`
        inputSegundos.setAttribute("placeholder",`Segundos clase#${i+1}`)
        divVideos.setAttribute("id",`div-video-${i}`)
        divVideos.innerText = `Clase #${i+1}`
        divVideos.append(inputHoras,inputMinutos,inputSegundos)
        formulario.appendChild(divVideos)
    }
    inputCalcular = document.createElement('input')
    inputCalcular.setAttribute("type",'button')
    inputCalcular.setAttribute("id",'calcular-total')
    inputCalcular.value = 'Calcular'
    formulario.appendChild(inputCalcular)
}

crearInputs()

const calcular = document.querySelector('#calcular-total')

calcular.onclick = function(){
    const listaHoras = document.querySelectorAll('.input-horas')
    const listaMinutos = document.querySelectorAll('.input-minutos')
    const listaSegundos = document.querySelectorAll('.input-segundos')
    let totalHoras = 0
    let totalMinutos = 0
    let totalSegundos = 0

    for(let i = 0; i < CANTIDAD_VIDEOS; i++){
        totalHoras += Number(listaHoras[i].value)
        totalMinutos += Number(listaMinutos[i].value)
        totalSegundos += Number(listaSegundos[i].value)
    }
    totalHoras += totalMinutos/60
    totalMinutos = totalMinutos%60 + totalSegundos/60
    totalSegundos = totalSegundos%60
    
    
    const textoResultado = document.createElement('h1')
    textoResultado.innerHTML = `El tiempo total de los videos es <strong>${parseInt(totalHoras)} horas ${parseInt(totalMinutos)} minutos ${parseInt(totalSegundos)} segundos <strong>.`
    formulario.appendChild(textoResultado)

}

