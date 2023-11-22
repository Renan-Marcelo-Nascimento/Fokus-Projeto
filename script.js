const html = document.querySelector('html');
const botaoFoco = document.querySelector('.app__card-button--foco');
const botaoCurto = document.querySelector('.app__card-button--curto');

botaoFoco.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco')
});

botaoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})