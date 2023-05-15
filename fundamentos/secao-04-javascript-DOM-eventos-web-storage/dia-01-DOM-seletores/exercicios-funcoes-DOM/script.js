
document.getElementById("paragrafo").innerText = "Daqui a dois anos quero estar trabalhando com programação";
document.querySelector(".main-content").style.backgroundColor = "rgb(76, 164, 109)";
document.querySelector(".main-content .center-content").style.backgroundColor = "white";
document.getElementsByClassName("title")[0].innerText = "Desafio - JavaScript";
document.getElementById("maiusculas").innerText = document.getElementById("maiusculas").innerText.toUpperCase();

function exibindoTags() {
  const paragrafos = document.querySelectorAll('p');
  let conteudo = '';
  
  paragrafos.forEach((paragrafo) => {
    conteudo += `${paragrafo.innerHTML} `;
  });
  const rodape = document.querySelector('footer p');
  rodape.innerHTML = conteudo;
}
exibindoTags();




