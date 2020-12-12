const play = document.getElementById("startGame");

var start = "ok"

play.addEventListener("click", function () {
    alert(start);
});

//---------------------------//

import { cena3 } from "../scripts/index.js";

var cena0 = new Phaser.Scene("Cena 0");

cena0.preload = function () {
    // Imagem de fundo
    this.load.image("cadeado", "../assets/tela-de-inicio-td.png");

    play.on(
        "pointerdown",
        function () {
            this.scene.start(cena3);
        },
        this
    );
};

cena0.update = function () { };

// Exportar a cena
export { cena0 };