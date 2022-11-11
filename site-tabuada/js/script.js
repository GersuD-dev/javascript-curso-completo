var numero = document.getElementById("idnum");

var tab = document.getElementById("seltab");

function clicar() {
  if (numero.value.length == 0) {
    alert("[ERRO] Digite um número!");
  } else {
    for(var i = 0; i <= 10; i++){
      var item = document.createElement('option');
      item.text = `${numero.value} x ${i} = ${numero.value * i}`;
      item.value = `tab${i}`
      tab.appendChild(item);
    }
  }
}
