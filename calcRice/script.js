function calcRice(){
    var elementResult = document.getElementById("result");
    var qtdDias = document.getElementById("qtdDias").value;
    var qtdPessoas = document.getElementById("qtdPessoas").value;
    var qtdArroz = document.getElementById("qtdArroz").value;
    var textResult = "Você precisa cozinhar " + ((qtdDias * qtdPessoas * qtdArroz) / 2.9).toFixed(2) + "g de arroz cru"
    elementResult.innerHTML = textResult;
}