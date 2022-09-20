function adicionarFilme(){
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg") == true){
      listaFimesNaTela(filmeFavorito);
    }
    else{
      console.error("Endereço de filme inválido");
    }
  
    document.getElementById("filme").value = "";
  }
  
  function listaFimesNaTela(filme){
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
  }
  
  // remover filme
  // colocar o nome do filme junto com o filme
  // guardar a lista de filmes