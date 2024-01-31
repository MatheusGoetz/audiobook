const playEPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');

const quantidadeCapitulo = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    playEPause.classList.remove('bi-play-circle-fill');
    playEPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa() {
    audioCapitulo.pause();
    playEPause.classList.remove('bi-pause-circle-fill');
    playEPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if ( taTocando === 0 ){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa () {
    nomeCapitulo.innerHTML = "Capítulo " + capituloAtual;
}

function proximaFaixa() {
    if(capituloAtual === quantidadeCapitulo){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    trocarNomeFaixa();
    taTocando = 1;
}

function voltarFaixa() {
    if(capituloAtual === 1){
        capituloAtual = quantidadeCapitulo;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    trocarNomeFaixa();
    taTocando = 1;
}


playEPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa); 