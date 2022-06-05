const botao = document.getElementById('switch');
const conteudo = document.getElementById('conteudo');

botao.addEventListener('click', mudaTema);


function mudaTema(){
    conteudo.classList.toggle('dark') 
    if(botao.innerHTML != "Light Theme"){
        botao.innerHTML = "Light Theme";
    } else {
        botao.innerHTML = "Dark Theme";
    }
}


