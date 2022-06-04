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



/*const add = document.getElementById('increment');
const remove = document.getElementById('decrement');
const contador = document.getElementById('contador');

add.addEventListener("click",somaContador);
remove.addEventListener("click",subtraiContador);

function somaContador(){
    contador.innerHTML = parseInt(contador.innerHTML) +1;
    if(parseInt(contador.innerHTML) >= 0){
        contador.style.color = "#FF5D5D";
    }
}

function subtraiContador() {
    contador.innerHTML = parseInt(contador.innerHTML) -1;
    if(parseInt(contador.innerHTML) < 0){
        contador.style.color = "red";
    } 
}

 */