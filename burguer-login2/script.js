function abrirMenu() {
    if (navbar.style.display == 'none'){
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none'
    }
}

function mudarTamanho(){
    if (window.innerWidth >= 768) {
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none'
    }
}