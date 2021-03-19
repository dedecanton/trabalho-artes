const palavras = document.querySelectorAll('.palavra')
const section = document.querySelector('.autoretrato')
const datas = {
    'Animais': './gifs/animals.gif',
    'Família': './gifs/familia.webp',
    'Tecnologia': './gifs/tecnologia.gif',
    'Estudo': './gifs/estudo.gif',
    'Curiosidade': './gifs/curioso.gif',
    'Motivação': './gifs/motivate.gif'
}


function click(){
    palavras.forEach(palavra => {
            palavra.addEventListener('click', ()=> setImage(palavra.innerText))
    })
}

function setImage(palavra){
    section.style.backgroundImage = `url(${datas[palavra]})`;
}

click()




