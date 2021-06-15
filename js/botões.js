const elementoHistoria = document.getElementById("historia");
const elementoImagem = document.getElementById("imagem");
const elementoButton1 = document.getElementById("button1");
const elementoButton2 = document.getElementById("button2");

let passoAtual = intro.inicio;

function atualizarTela() {

  elementoImagem.setAttribute("src", passoAtual.imagem);

  if (passoAtual.button1) {
    elementoButton1.textContent = passoAtual.button1.texto;
  } else {
    elementoButton1.remove();
  }
  if (passoAtual.button2) {
    elementoButton2.textContent = passoAtual.button2.texto;
  } else {
    elementoButton2.remove();
  }
}
elementoButton1.addEventListener("click", aoClicarNoBotao);
elementoButton2.addEventListener("click", aoClicarNoBotao);

function aoClicarNoBotao() {
  const elementoBotao = this;
  const botaoClicado = elementoBotao.id;
  const proximoPasso = passoAtual[botaoClicado].passo;
  passoAtual = intro[proximoPasso];
  if (!passoAtual) {
    alert("Passo " + proximoPasso + " não encontrado!");
  } else {
    atualizarTela();
  }
}
atualizarTela();