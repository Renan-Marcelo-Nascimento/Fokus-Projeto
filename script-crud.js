//encontrar o botão de tarefas

const btn_addTarefa = document.querySelector('.app__button--add-task');
const formAddTarefas = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');


btn_addTarefa.addEventListener('click', ()=>{
    formAddTarefas.classList.toggle('hidden'); 
})

formAddTarefas.addEventListener('submit', (evento) =>{
    //evento.preventDefault();
})
