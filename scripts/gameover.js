/*
File: gameover.js
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: fourth import archive.
*/

// [Arthur] importando a cena inicial do arquivo "cena0.js"
import { cena0 } from "./cena0.js";


// [Arthur] Adicionando variáveis ao código para execução da transição de cena. 
var cena3 = new Phaser.Scene("Cena 3");


// [Arthur] Adicionando as imagens para a tela de inicio do jogo. 
cena3.preload = function () {

    // [Arthur] Adicionando imagem de fundo 
    this.load.image("perdeu", "../assets/gameovertela.png");

    this.load.spritesheet("fullscreen", "../assets/fullscreen.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
};


// [Arthur] Criando função para executar o comando de troca de cena. 
cena3.create = function () {
    var button = this.add.image(400, 300, "perdeu", 0).setInteractive();
    button.on(
        "pointerdown",

        // [Arthur] Ao executar a função abaixo, a cena atual inicia o jogo novamente. 
        function () {
            this.scene.start(cena0);
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

cena3.update = function () { };

// [Arthur] Exportando a cena3 para o HTML. 
export { cena3 };
