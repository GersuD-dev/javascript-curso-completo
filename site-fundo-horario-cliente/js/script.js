function carregar(){
    var horarioatual = document.getElementById('hora');
    var imagem = document.getElementById('imagem');

    var data = new Date();
   var hora = data.getHours();
    horarioatual.innerHTML = `Agora são ${hora} hora(s)`;

    if(hora >= 6 && hora < 12){
        // bom dia
        imagem.src = 'img/manha.png';
        document.body.style.background = '#7f99a0';
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#c55403';
    }else{
        //boa noite
        imagem.src = 'img/noite.png'
        document.body.style.background = '#033752';
    }
}