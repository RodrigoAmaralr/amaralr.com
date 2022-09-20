var carta1 = {
    nome: "Bulbasauro",
    imagem: "https://pbs.twimg.com/media/B6HKS19IAAQ7d0o.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem:
        "https://cdn.singulart.com/artworks/v2/cropped/5877/main/fhd/713867_6ed990ab826a4975c232711091e55cdc.jpeg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de dragao",
    imagem:
        "http://images6.fanpop.com/image/photos/40000000/Dragon-Shiryu-shiryu-the-dragon-saint-seiya-fans-40065841-640-800.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

var cartas = [carta1, carta2, carta3];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        var numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado")
    var htmlResultado = "";

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você venceu</p>"
    } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true

    exibirCartaMaquina();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i, radioAtributos.length; i++) {
        if (radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}