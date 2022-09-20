var numeroSecreto = parseInt(Math.random() * 11);
var numeroDeTentativasPermitidas = 3;
var numeroDeChutes = 1;
var elementoResultado;
var elementoDica;

function Chutar() {
  elementoResultado = document.getElementById("resultado");
  elementoDica = document.getElementById("dica");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    elementoDica.innerHTML = "";
    document.getElementById("btnChutar").disabled = true;
  } else if (numeroDeChutes >= numeroDeTentativasPermitidas) {
    elementoResultado.innerHTML = "Você perdeu, reinicie o Jogo";
    document.getElementById("btnChutar").disabled = true;
    elementoDica.innerHTML = "Numeoro secreto: " + numeroSecreto;
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Você errou, tentativa " +
      numeroDeChutes +
      " de " +
      numeroDeTentativasPermitidas;
    if (numeroSecreto > chute) {
      elementoDica.innerHTML = "O número secreto é maior que " + chute;
    } else {
      elementoDica.innerHTML = "O número secreto é menor que " + chute;
    }
    numeroDeChutes++;
  }
}

function Reiniciar() {
  numeroSecreto = parseInt(Math.random() * 11);
  document.getElementById("btnChutar").disabled = false;
  numeroDeChutes = 1;
  document.getElementById("valor").value = "";
  elementoResultado.innerHTML = "";
  elementoDica.innerHTML = "";
}

// fazer com 3 tentativas while
// implementar dica que o numero é maior ou menor que o chute
