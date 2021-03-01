/*
File: cena0.js
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: first import archive. 
*/

// [Arthur] importando a cena seguinte do arquivo "cena1.js"
import { cena1 } from "./cena1.js";


// [Arthur] Adicionando variáveis ao código para execução da transição de cena. 
var cena0 = new Phaser.Scene("Cena 0");

// [Arthur] Adicionando as imagens para a tela de inicio do jogo. 
cena0.preload = function () {

    // [Arthur] Adicionando imagem de fundo 
    this.load.image("cadeado", "./assets/tela-de-inicio-td.png");

    this.load.spritesheet("fullscreen", "./assets/fullscreen.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
};


// [Arthur] Criando função para executar o comando de troca de cena. 
cena0.create = function () {
    var button = this.add.image(400, 300, "cadeado", 0).setInteractive();
    button.on(
        "pointerdown",

        // [Arthur] Ao executar a função abaixo, a cena atual inicia a cena1. 
        function () {
            this.scene.start(cena1);
        },
        this
    );

    // [Arthur] Adicionando a função de ligar / desligar a tela cheia. 
    var button = this.add
        .image(800 - 16, 16, "fullscreen", 0)
        .setOrigin(1, 0)
        .setInteractive()
        .setScrollFactor(0);
    button.on(
        "pointerup",
        function () {
            if (this.scale.isFullscreen) {
                button.setFrame(0);
                this.scale.stopFullscreen();
            } else {
                button.setFrame(1);
                this.scale.startFullscreen();
            }
        },
        this
    );


    // [Arthur] Adiconando a função de tela cheia a partir da tecla F. 
    var FKey = this.input.keyboard.addKey("F");
    FKey.on(
        "down",
        function () {
            if (this.scale.isFullscreen) {
                button.setFrame(0);
                this.scale.stopFullscreen();
            } else {
                button.setFrame(1);
                this.scale.startFullscreen();
            }
        },
        this
    );
};

cena0.update = function () { };

// [Arthur] Exportando a cena0 para o HTML. 
export { cena0 };
