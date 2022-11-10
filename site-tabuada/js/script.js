var data = new Date().getFullYear();

var idnascimento = document.getElementById("nascimento");

var idsexo = document.getElementsByName("sexo");

var imagem = document.getElementById("imagem");

var texto = document.getElementById("texto");

function clicar() {
  if (idnascimento.value.length == 0 || idnascimento.value > data) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var idade = data - idnascimento.value;
    var genero = "";
    if (idsexo[0].checked) {
      genero = "masculino";

      if (idade < 14) {
        imagem.src = "img/Menino.jpg";
      } else if (idade < 50) {
        imagem.src = "img/Adulto.jpg";
      } else {
        imagem.src = "img/Idoso.jpg";
      }
    } else {
      genero = "feminino";

      if (idade < 14) {
        imagem.src = "img/Menina.jpg";
      } else if (idade < 50) {
        imagem.src = "img/Adulta.jpg";
      } else {
        imagem.src = "img/Idosa.jpg";
      }
    }

    texto.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos.`;
  }
}
