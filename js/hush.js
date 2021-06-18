const intro = {
  inicio: {
    historia:
      "Você é uma escritora que vive uma vida isolada desde que perdeu sua audição quando era adolescente, se colocando em um mundo de total silêncio. Sua amiga e vizinha Sarah, à visitar em um dia para devolver uma cópia de um de seus livros, e sarah diz que quer treinar um pouco mais sobre libras...",
    imagem: "Imagens/imagens/sarah.jpg",
    button1: {
      texto: "Vocês ensina libras para Sarah.",
      passo: "h1",
    },
    button2: {
      texto: "Você rejeita ajudar Sarah e diz que está muito ocupada.",
      passo: "h1",
    },
  },
  h1: {
    historia: "Sarah se despede, e vai embora.",
    imagem: "Imagens/imagens/sarah-indo-embora.png",
    button1: {
      texto: "Você se despede de Sarah, e em entra para dentro de casa.",
      passo: "h2",
    },
    button2: {
      texto:
        "Você não fala nada, e da as costas, e voltando para dentro de casa.",
      passo: "h2",
    },
  },
  h2: {
    historia:
      "Um pouco mais tarde, você vai a cozinha, lavar o restante da louça, Sarah aparece batendo na porta de vidro da cozinha. Então o assassino aparece e começa a esfaquear Sarah.",
    imagem: "Imagens/imagens/sarah-morre.png",
    button1: {
      texto: "Proxímo.",
      passo: "h3",
    },
    button2: {
      texto: "Proxímo.",
      passo: "h3",
    },
  },
  h3: {
    historia:
      "O assassino percebe que você ignorou Sarah, e começa a bater o corpo dela para ver sua reação, mas você não o percebe, e ele nota que tem algo diferente em você.",
    imagem: "Imagens/gifs/observando.gif",
    button1: {
      texto: "Proxímo.",
      passo: "h4",
    },
    button2: {
      texto: "Proxímo.",
      passo: "h4",
    },
  },
  h4: {
    historia:
      "Em seguida você vai para o sofá e abre o Macbook, para continuar escrevendo seu livro, e o assassino entra em sua casa e vai se aproximando de você, e nesse exato momento sua irmã Max te liga.",
    imagem: "Imagens/imagens/trabalhando.png",
    button1: {
      texto: "Você aceita a ligação de Max.",
      passo: "h5",
    },
    button2: {
      texto: "Você Recusa a liga de Max.",
      passo: "h4t",
    },
  },
  h4t: {
    historia:
      "O assassino se aproximou de você, e vocÊ o vê pelo reflexo da tela do Macbook.",
    imagem: "Imagens/imagens/assasino-se-aproxima.jpg",
    button1: {
      texto: "Você tenta ir pra cima dele.",
      passo: "h4tt",
    },
    button2: {
      texto: "Você tenta correr.",
      passo: "h4tt",
    },
  },
  h4tt: {
    historia:
      "O assassino esfaqueia sua perna e te joga no chão. E em seguida começa a te sufocar.",
    imagem: "Imagens/imagens/matando.png",
    button1: {
      texto: "Você tenta sair, mais não consegue.",
      passo: "h4f",
    },
    button2: {
      texto: "Você tenta sair, mais não consegue.",
      passo: "h4f",
    },
  },
  h4f: {
    historia:
      "O assassino consegue tirar todo o seu folego, e você morre, e ele vai embora.",
    imagem: "Imagens/imagens/morta-3.png",
    button1: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
    button2: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
  },
  h5: {
    historia:
      "Ao decorrer da conversa com Max, o assasino se esconde e furta seu celular, então Max diz que vê algo se movimentando atrás de você.",
    imagem: "Imagens/imagens/furtando-celular.png",
    button1: {
      texto: "Você olha para trás para ver o que é.",
      passo: "h5tt",
    },
    button2: {
      texto: "Você diz que é só gato.",
      passo: "h6",
    },
  },
  h5tt: {
    historia:
      "Você vê o assassino, ele vai pra cima de você e segura no seu pescoço com as duas mão e te joga no chão, e começa a te sufocar. E Max assistindo tudo.",
    imagem: "Imagens/imagens/matando.png",
    button1: {
      texto: "Você tenta sair mais não consegue.",
      passo: "h5f",
    },
    button2: {
      texto: "Você tenta sair mais não consegue.",
      passo: "h5f",
    },
  },
  h5f: {
    historia:
      "O assassino consegue tirar todo o seu ar, e você morre, ele desliga a ligação de Max e vai embora.",
    imagem: "Imagens/imagens/morta-3.png",
    button1: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
    button2: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
  },
  h6: {
    historia:
      "Assim que você desliga a chamada de vídeo com Max, o assassino envia várias fotos suas para seu Macbook, andando pela casa, e fotos de agora sentada no sofá, todas enviadas pelo seu celular.",
    imagem: "Imagens/imagens/ve-o-assasino.jpg",
    button1: {
      texto:
        "Você manda mensagem pra saber se era a Sarah que pegou seu celular, e está brincando com você.",
      passo: "h6tt",
    },
    button2: {
      texto: "Você se levanta, e vai até próximo a porta de entrada.",
      passo: "h7",
    },
  },
  h6tt: {
    historia: "Então o assassino vê mensagem e entra dentro da casa.",
    imagem: "Imagens/imagens/correr.png",
    button1: {
      texto: "E você se assusta tenta correr.",
      passo: "h6tf",
    },
    button2: {
      texto: "Você tenta bater nele com o Macbook.",
      passo: "h6ft",
    },
  },
  h6tf: {
    historia:
      "O assassino vai atrás de você e atira com a besta na sua perna, e você cai no chão.",
    imagem: "Imagens/imagens/atirando.png",
    button1: {
      texto: "Você tenta ir se arrastando até o carro.",
      passo: "h6f",
    },
    button2: {
      texto: "Você começa a gritar pedindo ajuda.",
      passo: "h6f",
    },
  },
  h6f: {
    historia:
      "O assassino pega uma pedra bate várias vezes na sua cabeça até você morrer.",
    imagem: "Imagens/imagens/morta.png",
    button1: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
    button2: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "inicio",
    },
  },
  h6ft: {
    historia: "O assassino te mata, então ele se levanta, em vai embora",
    imagem: "Imagens/imagens/matando.png",
    button1: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "h6ff",
    },
    button2: {
      texto: "Você perdeu. Voltar para o Início.",
      passo: "h6ff",
    },
  },
  h6ff: {
    historia:
      "O assassino te joga contra a parede, e te sufoca, até você perder a respiraçã. Você tenta fazer alguma coisa mais não consegue, e morre. O assassino rouba o MacBook e vai embora.",
    imagem: "Imagens/imagens/morta-3.png",
    button1: {
      texto: "Você tenta fazer alguma coisa mais não consegue.",
      passo: "inicio",
    },
    button2: {
      texto: "Você tenta fazer alguma coisa mais não consegue.",
      passo: "inicio",
    },
  },
  h7: {
    historia: "Você vê o um cara de mascará com uma besta na costas.",
    imagem: "Imagens/imagens/assasino-com-celular.jpg",
    button1: {
      texto: "Você se levanta até a porta de entrada e tranca rapidamente.",
      passo: "h8",
    },
    button2: {
      texto: "Você vai na cozinha e pega uma faca.",
      passo: "h8",
    },
  },
  h8: {
    historia: "O assassino começa a andar para próxima porta.",
    imagem: "Imagens/imagens/assassino-movimentado.png",
    button1: {
      texto: "Você o segue, e tranca todas as portas.",
      passo: "h9",
    },
    button2: {
      texto: "Você abre a porta e sai correndo.",
      passo: "h9",
    },
  },
  h9: {
    historia: "O assassino vai para trás da casa, e desliga toda energia casa.",
    imagem: "Imagens/imagens/desligando-a-energia.png",
    button1: {
      texto: "Você vai até a cozinha e pega uma faca.",
      passo: "h10",
    },
    button2: {
      texto: "Você senta no chão e começa a fica desesperada e chora.",
      passo: "h10",
    },
  },
  h10: {
    historia: "Ele volta e começa a te encarar, e tira a máscara.",
    imagem: "Imagens/gifs/tirando-a-mascara.gif",
    button1: {
      texto: "Você tenta se enconde em algum lugar seguro.",
      passo: "h11",
    },
    button2: {
      texto: "Você começa a encarar de volta.",
      passo: "h11",
    },
  },
  h11: {
    historia:
      "O assassino vai até seu carro e pega uma ferramenta, e volra até a porta de entrada, e começa a quebrar o vidro da porta.",
    imagem: "Imagens/imagens/quebrando-o-vidro.png",
    button1: {
      texto: "Você se esconde dentrodo banheiro.",
      passo: "h12",
    },
    button2: {
      texto: "Você se esconde no quarto do andar de cima.",
      passo: "h12",
    },
  },
  h12: {
    historia:
      "O assassino entra pela janela banheiro, e acaba suspirando na suas costas. E tenta dar um facado no seu pescoço",
    imagem: "Imagens/imagens/acertando-o-assassino.png",
    button1: {
      texto: "Você desvia e acerta ele com a sua faça, e sai correndo.",
      passo: "h13",
    },
    button2: {
      texto: "Você desvia e acerta ele com a sua faça, e tenta matá-lo.",
      passo: "h13",
    },
  },
  h13: {
    historia:
      "Perto da cozinha, você tropeça e machuca sua perna, e o assassino esta indo até você, mas você esta longe das facas, e tem um inseticida perto de você.",
    imagem: "Imagens/imagens/indo-ate-voce.png",
    button1: {
      texto: "Você fingue bateu a cabeça e desmaio",
      passo: "h14",
    },
    button2: {
      texto: "Você levante e tenta pegar faca.",
      passo: "h14",
    },
  },
  h14: {
    historia:
      "O assassino te vê e acaba te jogando no chão, e tenta te esfaquear.",
    imagem: "Imagens/imagens/desmaiada.png",
    button1: {
      texto: "Você joga o veno nos olhos dele.",
      passo: "h15",
    },
    button2: {
      texto: "Você tenta levantar pra correr.",
      passo: "h15",
    },
  },
  h15: {
    historia:
      "O assassino se fasta de você e derruma a faca dele e o saca rolhas que estava em cima da mesa, você tenta se levanta e ele vai pra cima de você e te derruba no chão e tenta te enforcar.",
    imagem: "Imagens/imagens/enforcando.png",
    button1: {
      texto: "Você tenta pegar o saca rolhas pra para acertar ele ",
      passo: "h16",
    },
    button2: {
      texto: "Você morder a mão do ele.",
      passo: "h16",
    },
  },
  h16: {
    historia: "Você acertou a jugular do assassino e mata ele.",
    imagem: "Imagens/imagens/assassino-morto.png",
    button1: {
      texto: "Você liga pra polícia.",
      passo: "h18",
    },
    button2: {
      texto: "Você tenta liga o Carro.",
      passo: "h17",
    },
  },
  h17: {
    historia: "O assassino firou os pneus do carro.",
    imagem: "Imagens/imagens/pneu",
    button1: {
      texto: "Você tenta ligar para a polícia.",
      passo: "h18",
    },
  },

  h18: {
    historia:
      "A polícia está chegando, e você sobreviveu a um ataque de um louco, Parabéns.",
    imagem: "Imagens/imagens/fim.png",
    botao1: {},
  },
};
