const intro =
  "Você é um(a) escritoro(a) que vive uma vida isolada desde que perdeu sua audição quando era adolescente, se colando em um mundo de total silêncio.";

const elementoImagem = document.getElementById("imagem");
const elementoBotao1 = document.getElementById("botao1");
const elementoBotao2 = document.getElementById("botao2");

let passoAtual = historia.inicio;

function atualizarTela() {
  elementoImagem.setAttribute("src", passoAtual.imagem);
  if (passoAtual.botao1) {
    elementoBotao1.textContent = passoAtual.botao1.texto;
  } else {
    elementoBotao1.remove();
  }
  if (passoAtual.botao2) {
    elementoBotao2.textContent = passoAtual.botao2.texto;
  } else {
    elementoBotao2.remove();
  }
}
elementoBotao1.addEventListener("click", aoClicarNoBotao);
elementoBotao2.addEventListener("click", aoClicarNoBotao);

function aoClicarNoBotao() {
  const elementoBotao = this;
  const botaoClicado = elementoBotao.id;
  const proximoPasso = passoAtual[botaoClicado].passo;
  passoAtual = historia[proximoPasso];
  if (!passoAtual) {
    alert("Passo " + proximoPasso + " não encontrado!");
  } else {
    atualizarTela();
  }
}

atualizarTela();