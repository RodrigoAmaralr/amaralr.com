var jogadores = [];

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    var win = wineer(jogadores);
    for (var i = 0; i < jogadores.length; i++) {
        if (i == win)
            elemento += "<tr><td>" + "&#127942;" + jogadores[i].nome + "</td>";
        else
            elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td class='tdPontos'>" + jogadores[i].pontos + "</td>";
        elemento +=
            "<td><button onClick='adicionarVitoria(" + i + ")' title='Incrementar Vitorias'>Vitória</button></td>";
        elemento +=
            "<td><button onClick='adicionarEmpate(" + i + ")' title='Incrementar Empates'>Empate</button></td>";
        elemento +=
            "<td><button onClick='adicionarDerrota(" + i + ")' title='Incrementar Derrotas'>Derrota</button></td>";
        elemento += "<td><button onClick='exluir(" + i + ")' title='Exluir'>X</button>"
        elemento += "<button onClick='reiniciar(" + i + ")' title='Reiniciar'>0</button></td>";
        elemento += "</tr>";
    }
    document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function wineer(jogadores) {
    var win = null;
    var maiorPontos = 0;
    var somaPontos = 0;
    for (var i = 0; i < jogadores.length; i++) {
        if (jogadores[i].pontos > maiorPontos) {
            maiorPontos = jogadores[i].pontos;
            win = i;
        }
        somaPontos += jogadores[i].pontos;
    }
    if ((somaPontos / jogadores.length) == maiorPontos) {
        return null
    } else {
        return win;
    }
}


function adicionarParticipante(index) {
    var nomeNovoJogador = document.getElementById("inputAddNew").value;
    if (nomeNovoJogador != "") {
        jogadores.push({ nome: nomeNovoJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 })
        exibeJogadoresNaTela(jogadores);
        document.getElementById("inputAddNew").value = "";
    }
}

function adicionarVitoria(index) {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        if (i == index) {
            jogador.vitorias++;
        } else {
            jogador.derrotas++;
        }
        jogador.pontos = calculaPontos(jogador);
    }
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
    }
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(index) {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        if (i == index) {
            jogador.derrotas++;
        } else {
            jogador.vitorias++;
        }
        jogador.pontos = calculaPontos(jogador);
    }
    exibeJogadoresNaTela(jogadores);
}

function exluir(i) {
    jogadores.splice(i, 1);
    exibeJogadoresNaTela(jogadores);
}

function reiniciar(i) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
}

function resetarTabela() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
}