/*
File: cena6.js
Author: Bruna Silveira (IFSC)
Date: 10 / 04 / 2021
Brief: fourth import archive.
*/

// [Bruna] importando a cena seguinte do arquivo;
import { cena7 } from "./cena7.js";

// Adicionando variáveis ao código para execução da transição de cena.
var cena6 = new Phaser.Scene("Cena 6");

// [Bruna] Iniciando a função Preload, para carregar os arquivos iniciais da cena;
cena6.preload = function () {
  // [Bruna] Carregando imagens para a cena.
  this.load.image("sky", "./assets/win4.png");

  // [Bruna] Incluindo a imagem de fundo a cena.
  this.add.image(400, 300, "sky");
};

// [Bruna] Criando função para executar o comando de troca de cena.
cena6.create = function () {
  var button = this.add.image(400, 300, "sky", 0).setInteractive();
  button.on(
    "pointerdown",

    // [Bruna] Ao executar a função abaixo, a cena atual inicia a cena1.
    function () {
      this.scene.start(cena7);
    },
    this
  );
};

export { cena6 };