// a magica começa aqui!

function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours()
    msg.innerHTML = `AGORA SÃO ${hora}  HORAS.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'MANHA.jpg'
    }else if(hora >= 12 && hora < 18){
        // boa tarde!
        img.src = 'TARDE.jpg'
    }else{
        // boa noite !
        img.src = 'NOITE.jpg'
    }
}

