document.getElementById("buttons").addEventListener("click", () =>{
document.getElementById("start").innerHTML = `<header>
  <img class="logo" src="./Imagens/Logo/logo.png">
</header>

 <div>
        <section class="gameblock">
            <h1 id="historia" class="imgblock"></h1>
            <img id="imagem" class="imgblock" src= "" alt="Imagens do jogo">
        </section>
       <div>

<section>
 <div class = click-button>
        <button id="button1" class="buttons-question"></button>   
        <button id="button2" class="buttons-question"></button>
      </div>
</section>`; 

  const elementoHistoria = document.getElementById("historia");
  const elementoImagem = document.getElementById("imagem");
  const elementoButton1 = document.getElementById("button1");
  const elementoButton2 = document.getElementById("button2");

  let passoAtual = intro.inicio;

  function atualizarTela() {
    elementoHistoria.innerText = passoAtual.historia;
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
});
