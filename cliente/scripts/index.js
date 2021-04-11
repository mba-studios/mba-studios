/*
File: index.js
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: initial import archive.
*/

// [Arthur] importando a sequencia de cenas dos arquvis .js
import { cena0 } from "./cena0.js";
import { cena1 } from "./cena1.js";
import { cena2 } from "./cena2.js";
import { gameover } from "./gameover.js";

// [Arthur] Adicionando pré configurações do jogo. 
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
        },
    },

    scale: {
        mode: Phaser.Scale.FIT,
        parent: "game",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },


    // [Arthur] Adicionando sequencia de fases. 
    scene: [cena0, cena1, cena2, gameover],
};

const game = new Phaser.Game(config);
