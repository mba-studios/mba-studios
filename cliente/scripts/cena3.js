/*
File: cena3.js
Author: Bruna Silveira (IFSC)
Date: 10 / 04 / 2021
Brief: fourth import archive.
*/

// [Bruna] importando a cena seguinte do arquivo;
import { cena4 } from "./cena4.js";

// [Bruna] Iniciando a função Preload, para carregar os arquivos iniciais da cena;

cena1.preload = function () {

    // [Bruna] Carregando imagens para a cena.
    this.load.image("sky", "./assets/win1.png");
}

// [Bruna] Incluindo a imagem de fundo a cena.
this.add.image(400, 300, "sky");

// [Bruna] Criando função para executar o comando de troca de cena. 
cena0.create = function () {
    var button = this.add.image(400, 300, "sky", 0).setInteractive();
    button.on(
        "pointerdown",

        // [Bruna] Ao executar a função abaixo, a cena atual inicia a cena1. 
        function () {
            this.scene.start(cena4);
        },
        this
    );
}