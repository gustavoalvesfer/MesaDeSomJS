function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {    
        elemento.play();
    }
    else{
        console.log('elemento não encontrado ou seletor inválido');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < ListaDeTeclas.length; cont++) {
    const tecla = ListaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
           tecla.classList.add('ativa');    
        }

    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
