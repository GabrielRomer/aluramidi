function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado');
    }


    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
/* seletor de listas document.querySelectorAll('.tecla');*/

const listaDeTeclas = document.querySelectorAll('.tecla');


//enquanto *while estrutura de repetição ou *for - declaraçao do contador dentro do for
for (let contador = 0;contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`; 
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //console.log(contador);
    //console.log(idAudio);

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
       
    
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
 

alert ('esse ficou maneiro, faça seu beat');

