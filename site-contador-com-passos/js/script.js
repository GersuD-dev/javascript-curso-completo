var idinicio = document.getElementById("inicio");
var idfim = document.getElementById("fim");
var idpasso = document.getElementById("passo");

var texto = document.getElementById("texto");

function clicar() {
  if (
    idinicio.value.length == 0 ||
    idfim.value.length == 0 ||
    idpasso.value.length == 0
  ) {
    alert("[ERRO] Falta dados!");
  } else {
    texto.innerHTML = "Contando: ";

    var i = Number(idinicio.value);
    var f = Number(idfim.value);
    var p = Number(idpasso.value);

    if (i < f) {
      for (var c = i; c <= f; c += p) {
        if (c > f || c + p > f) {
          texto.innerHTML += c + " 🚩";
        } else {
          texto.innerHTML += c + " 👉";
        }
      }
    } else {
      for (var c = i; c >= f; c -= p) {
        if (c > f || c - p > f) {
          texto.innerHTML += c + " 👉";
        } else {
          texto.innerHTML += c + " 🚩";
        }
      }
    }
  }
}