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
import { cena3 } from "./cena3.js";
import { cena4 } from "./cena4.js";
import { cena5 } from "./cena5.js";
import { cena6 } from "./cena6.js";
import { cena7 } from "./cena7.js";
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
    scene: [cena0, cena1, cena2, cena3, cena4, cena5, cena6, cena7, gameover],
};

const game = new Phaser.Game(config);
