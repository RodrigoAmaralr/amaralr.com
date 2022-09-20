// Imersao DEV 5
// Nome: Rodrigo Amaral
// Data: 07/09/2022
// Versão: 1.3

var nome = "Rodrigo Amaral";
console.log("Bem vindo: " + nome);

function mediaDasProvas(){
  var notaDoPrimeiroBimestre = parseFloat(document.getElementById("n1").value);
  var notaDoSegundoBimestre = parseFloat(document.getElementById("n2").value);
  var notaDoTerceiroBimestre = parseFloat(document.getElementById("n3").value);
  var notaDoQuartoBimestre = parseFloat(document.getElementById("n4").value);

  var quantidadeDeBimestre = 4;

  var notaSoma =
    notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre;

  var notaFinal = (notaSoma / quantidadeDeBimestre).toFixed(2);
  var result = "";
  if(notaFinal >= 6){
    result = "Você foi aprovado, sua nota é " + notaFinal;
  }
  else{
    result = "Você foi reprovado, sua nota é " + notaFinal;
  }
  Resultado.innerHTML = result;
  console.log(result);
}

function conversorDeTemperatura(){
  var result = "";
  var valorTemp = parseFloat(document.getElementById("valorTemp").value);
  if(document.getElementById("radioC").checked == true){
    result = valorTemp.toFixed(2) + "°C = " + ((valorTemp * 9/5) + 32).toFixed(2) + "°F";
    resultadoTemp.innerHTML = result;
    console.log(result);
  }
  else if(document.getElementById("radioF").checked == true){
    result = valorTemp.toFixed(2) + "°F = " + ((valorTemp - 32) * 5/9).toFixed(2)  + "°C";
    resultadoTemp.innerHTML = result;
    console.log(result);
  }
}

function conversorAnosLuzParaKm(){
  var result = "";
  var valorEmAnosLuz = parseFloat(document.getElementById("valorEmAnosLuz").value);
  result = valorEmAnosLuz * 9460528405000.02 + " Km";
  resultadoEmkm.innerHTML = result;
  console.log(result);
}
