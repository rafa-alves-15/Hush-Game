const elementoHistoria = document.getElementById("historia");
const elementoImagem = document.getElementById("imagem");
const elementoButton1 = document.getElementById("button1");
const elementoButton2 = document.getElementById("button2");
// const elementoButton = document.getElementsById("buttons");

let passoAtual = intro.inicio;
// let count = 0;

function atualizarTela() {
        elementoHistoria.setAttribute("inicio", passoAtual.historia);
        elementoImagem.setAttribute("src", passoAtual.imagem);

  if (passoAtual.button1) {

    elementoButton1.innerText = passoAtual.button1.texto;
  } else {
    elementoButton1.remove();
  }
  if (passoAtual.button2) {
    elementoButton2.innerText = passoAtual.button2.texto;
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


// elementoButton.addEventListener("click", () => {
//     if (count === 1) {
//       aoClicarNoBotao();
//     }
//     count++;
// });
