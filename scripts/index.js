import { cena0 } from "../scripts/cena0";
//import { cena1 } from "../scripts/cena1";
//import { cena2 } from "../scripts/cena2";
import { cena3 } from "../scripts/gameover";

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
    scene: [cena0, cena3],
};

const game = new Phaser.Game(config);