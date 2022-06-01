const CANTIDAD_VIDEOS = 5
const formulario = document.querySelector('form')
const calcular = document.querySelector('#calcular-total')

function crear$s(){
    for (let i = 0; i < CANTIDAD_VIDEOS; i++){
        $horas = document.createElement('input')
        $minutos = document.createElement('input')
        $segundos = document.createElement('input')
        $video = document.createElement('div')
        $horas.className = `input-horas`
        $horas.setAttribute("placeholder",`Horas clase#${i+1}`)
        $minutos.className = `input-minutos`
        $minutos.setAttribute("placeholder",`Minutos clase#${i+1}`)
        $segundos.className = `input-segundos`
        $segundos.setAttribute("placeholder",`Segundos clase#${i+1}`)
        $video.setAttribute("id",`div-video-${i}`)
        $video.innerText = `Clase #${i+1}`
        $video.append($horas,$minutos,$segundos)
        formulario.appendChild($video)
    }
    inputCalcular = document.createElement('input')
    inputCalcular.setAttribute("type",'button')
    inputCalcular.setAttribute("id",'calcular-total')
    inputCalcular.value = 'Calcular'
    formulario.appendChild(inputCalcular)
}

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

crear$s()
