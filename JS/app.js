let tamaño = 'grande'

function redimensionar(objeto) {
    if (tamaño == 'grande') {
        objeto.style.width = '250px'
        objeto.style.height = '250px'
        tamaño = 'pequeño'
    } else {
        objeto.style.width = '800px'
        objeto.style.height = '70px'
        tamaño = 'grande'
    }
}