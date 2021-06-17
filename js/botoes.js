const elementoButton = document.getElementById("buttons");

function atualizarTela(elementoHistoria, elementoImagem, elementoButton1, elementoButton2, passoAtual) {
  
<<<<<<< HEAD
  elementoHistoria.innerText = passoAtual.historia;
  
=======

  elementoHistoria.innerText = passoAtual.historia;

>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
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
<<<<<<< HEAD
  passoAtual){
  let botaoClicado = elementoBotao.id;
  let proximoPasso = passoAtual[botaoClicado].passo;
=======
  passoAtual)
  {
  const botaoClicado = elementoBotao.id;
  const proximoPasso = passoAtual[botaoClicado].passo;
>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
  passoAtual = intro[proximoPasso];
  if (!passoAtual) {
    alert("Passo " + proximoPasso + " não encontrado!");
  } else {
<<<<<<< HEAD

    
=======
>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
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
<<<<<<< HEAD

  let start = document.getElementById("start","Logo");
  let passoAtual = intro.inicio;

  start.innerHTML = `<header>
  <img id="Logo" class="logo" src="./Imagens/Logo/logo.png">
</header>
  <div>
=======
  let start = document.getElementById("start");
  let passoAtual = intro.inicio;

  start.innerHTML = `<div>
>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
        <section class="gameblock">
            <h1 id="historia" class="imgblock"></h1>
            <img id="imagem" class="imgblock" src= "" alt="Imagens do jogo">
        </section>
       <div>
<<<<<<< HEAD
=======

>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
<section>
 <div class = click-button>
        <button id="button1" class="buttons-question"></button>   
        <button id="button2" class="buttons-question"></button>
      </div>
<<<<<<< HEAD
</section>`

=======
</section>`;
>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
  const elementoHistoria = document.getElementById("historia");
  const elementoImagem = document.getElementById("imagem");
  const elementoButton1 = document.getElementById("button1");
  const elementoButton2 = document.getElementById("button2");
<<<<<<< HEAD

  elementoButton1.addEventListener("click", () => {
=======
  elementoButton1.addEventListener("click", function() {
>>>>>>> 6cc1af6fd31b13b64c3cdc6348c82a2012286ce1
    
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
