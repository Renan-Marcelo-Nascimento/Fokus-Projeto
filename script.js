//constantes que armazenam valores dos query selectors
const html = document.querySelector('html');
const botaoFoco = document.querySelector('.app__card-button--foco');
const botaoCurto = document.querySelector('.app__card-button--curto');
const botaoLongo = document.querySelector('.app__card-button--longo');

//cria um evento de clique para os botoes, no qual ao clicarmos muda o atributo da html
botaoFoco.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
});

botaoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
});

botaoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
});