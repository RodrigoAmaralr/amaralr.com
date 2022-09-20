var listaFilmes = [
    "https://m.media-amazon.com/images/M/MV5BMjQ0NTI0NjkyN15BMl5BanBnXkFtZTgwNzY0MTE0NzM@._V1_.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://i.ytimg.com/vi/eAry-ZV_gfs/movieposter.jpg"
  ];
  
for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
  
function adicionar() {
  var getLink = document.getElementById("link").value;
  if (listaFilmes.includes(getLink)) {
    alert("Este link já foi adicionado.");
  } else if (getLink == "") {
    alert("Entre com um Link.");
  } else if (getLink.includes(".jpg") == false) {
    alert("Link não é valido.");
  } else {
    listaFilmes.push(getLink);
    document.getElementById("imgTela").innerHTML +=
      "<img src=" + listaFilmes[listaFilmes.length - 1] + ">";
  }
}
  