/*
File: cena0.html
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: inital import archive. 
*/

// [Arthur] importando a cena seguinte do arquivo "cena1.js"
import { cena1 } from "./cena1.js";


// [Arthur] Adicionando variáveis ao código para execução da transição de cena. 
var cena0 = new Phaser.Scene("Cena 0");

// [Arthur] Adicionando as imagens para a tela de inicio do jogo. 
cena0.preload = function () {

    // [Arthur] Adicionando imagem de fundo 
    this.load.image("cadeado", "../assets/tela-de-inicio-td.png");
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
};

cena0.update = function () { };

// [Arthur] Exportando a cena0 para o HTML. 
export { cena0 };
