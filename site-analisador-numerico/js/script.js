let numero  = document.getElementById('idnum');
let tab = document.getElementById("idtab");
let texto = document.getElementById('texto');

let numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    }else{
        return false;
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, numeros)){
        numeros.push(Number(numero.value));

        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        tab.appendChild(item);
        texto.innerHTML = ''
    }else{
        alert('[ERRO] Valor inválido ou já encontrado na lista.');
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if(numeros.length == 0){
        alert('[ERRO] Adicione valores antes de finalizar.');
    }else{
        let total = numeros.length;
        let maior = Math.max.apply(null, numeros);
        let menor = Math.min.apply(null, numeros);
        var soma = numeros.reduce(function(soma, i) {
            return soma + i;
        });

        texto.innerHTML = '';
        texto.innerHTML += `<p>Ao todo, temos ${total} números cadastrados<p/>`
        texto.innerHTML += `<p>O maior valor informado foi: ${maior}.<p/>`
        texto.innerHTML += `<p>O menor valor informado foi: ${menor}.<p/>`
        texto.innerHTML += `<p>Somando todos os valores temos: ${soma}.<p/>`
        texto.innerHTML += `<p>A média é: ${soma/numeros.length}.<p/>`
    }
}