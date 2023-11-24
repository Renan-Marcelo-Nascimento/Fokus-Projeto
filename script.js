//constantes que armazenam valores dos query selectors
const html = document.querySelector('html');
const botaoFoco = document.querySelector('.app__card-button--foco');
const botaoCurto = document.querySelector('.app__card-button--curto');
const botaoLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const somPlay = new Audio('/sons/play.wav');
const somPause = new Audio('/sons/pause.mp3');
const somZero = new Audio('/sons/beep.mp3');
const botaoStartPause = document.querySelector('#start-pause');

musica.loop = true;
somPlay.pause = true;

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    }
    else{
        musica.pause();
    }
});

//cria um evento de clique para os botoes, no qual ao clicarmos muda o atributo da html
botaoFoco.addEventListener('click', () =>{
    alterarContexto('foco');
    botaoFoco.classList.add('active');
    
});

botaoCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    botaoCurto.classList.add('active');
    
});

botaoLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    botaoLongo.classList.add('active');
    
});

function alterarContexto(contexto){

    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;    

            break;
        case  'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>`; 
        default:
            break;
    }

}

const contagemRegressiva = () => {
    //ao chegar em 0 no temporizador além de tocar o som e interromper a execução do interval ele reseta o tempo  
    if(tempoDecorridoEmSegundos <= 0){
        somZero.play();
        zerar();
        alert("Tempo Finalizado!");
        tempoDecorridoEmSegundos = 5;
        return
        
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador:' + tempoDecorridoEmSegundos);
}

botaoStartPause.addEventListener('click', iniciarPausar);

function iniciarPausar(){
    //se houver algum valor no intervaloId ele tocará o som e interromperá a execução da contagem
    if(intervaloId){
        somPause.play();
        zerar();
        return
    }
    //irá tocar um som ao clique do botão e executará a subtração do tempo a cada 1000 milisegundos 1s
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

//interrompe a execução da contagem assim que for chamada a função
function zerar(){
    clearInterval(intervaloId);
    intervaloId = null;
    
}