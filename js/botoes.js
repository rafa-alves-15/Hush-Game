const elementoButton = document.getElementById("buttons");

function atualizarTela(elementoHistoria, elementoImagem, elementoButton1, elementoButton2, passoAtual) {
  
  elementoHistoria.innerText = passoAtual.historia;
  
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

function aoClicarNoBotao(
  elementoBotao,
  elementoHistoria,
  elementoImagem,
  elementoButton1,
  elementoButton2,
  passoAtual){
  const botaoClicado = elementoBotao.id;
  const proximoPasso = passoAtual[botaoClicado].passo;
  passoAtual = intro[proximoPasso];
  if (!passoAtual) {
    alert("Passo " + proximoPasso + " não encontrado!");
  } else {

    
    atualizarTela(
      elementoHistoria,
      elementoImagem,
      elementoButton1,
      elementoButton2,
      passoAtual
    );
  }
  }

elementoButton.addEventListener("click", () => {
  let start = document.getElementById("start");
  let passoAtual = intro.inicio;

  start.innerHTML = `<header>
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

  elementoButton1.addEventListener("click", () => {
    
    aoClicarNoBotao(
      elementoButton1,
      elementoHistoria,
      elementoImagem,
      elementoButton2,
      passoAtual
    );
  });
  
  elementoButton2.addEventListener("click", () => {
    
    aoClicarNoBotao(
      elementoButton2,
      elementoHistoria,
      elementoImagem,
      elementoButton1,
      passoAtual
    );
  });


  atualizarTela(
    elementoHistoria,
    elementoImagem,
    elementoButton1,
    elementoButton2,
    passoAtual
  );
});
