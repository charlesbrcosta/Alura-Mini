const keyList = document.querySelectorAll('.tecla');

function tocaSom(selector) {
    const element = document.querySelector(selector);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.error('Elemento ou seletor não encontrado ou inválidos');
    }
}

keyList.forEach(key => {
    const instrument = key.classList[1];
    const idAudio = `#som_${ instrument }`;
    
    key.addEventListener('click', () => {
        tocaSom(idAudio);
    });

    key.addEventListener('keydown', event =>{
        if(event.code === 'Enter' || event.code === 'Space'){
            key.classList.add('ativa');
        }
    });

    key.addEventListener('keyup', () => {
        key.classList.remove('ativa');
    });
});
    
    
    
    
    
    
    

    
    
    
    
    
    // const listaDeTeclas = document.querySelectorAll('.tecla');

    // function tocaSom(seletor){
    //     const elemento = document.querySelector(seletor);

    //     if(elemento && elemento.localName === 'audio'){
        
    //         elemento.play();
        
    //     } else {
    //         console.error('Elemento não encontrado');
    //     }
    // }

    // for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //     const tecla = listaDeTeclas[contador];
    //     const instrumento = tecla.classList[1];
    //     const idAudio = `#som_${ instrumento }`;

    //     tecla.onclick = function() {
    //         tocaSom(idAudio);
    //     };

    //     tecla.onkeydown = function(evento) {

    //        if(evento.code === 'Enter'  || evento.code === 'Space'){
    //            tecla.classList.add('ativa');
    //        } 
    //     }

    //     tecla.onkeyup = function(){
    //         tecla.classList.remove('ativa');
    //     }
    // }


