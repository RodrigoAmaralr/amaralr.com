function ConverterParaReal() {
    var valorNumerico = parseFloat(document.getElementById("valor").value);
  
    var valorConversao = valorNumerico * 5;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorConversao;
    console.log(valorConvertido);
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var valorEmBitcoin = valorConversao * 0.0000099;
    var elementoValorConvertidoBitcoin = document.getElementById("valorBitcoin");
    var valorConvertidoBitcoin =
      "O resultado em Bitcoin " + valorEmBitcoin.toFixed(10);
    console.log(valorConvertidoBitcoin);
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  
  function ConverterParaEuro() {
    var valorNumerico = parseFloat(document.getElementById("valor").value);
  
    var valorConversao = valorNumerico * 0.99;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em euro é € " + valorConversao;
    console.log(valorConvertido);
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var valorEmBitcoin = valorConversao * 0.000052;
    var elementoValorConvertidoBitcoin = document.getElementById("valorBitcoin");
    var valorConvertidoBitcoin =
      "O resultado em Bitcoin " + valorEmBitcoin.toFixed(10);
    console.log(valorConvertidoBitcoin);
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }
  