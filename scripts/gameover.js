const iniciar = document.getElementById("replay");

const home = document.getElementById("menu");


var clicou = "ok";


iniciar.addEventListener("click", function () {
    alert(clicou);
});

home.addEventListener("click", function () {
    alert(clicou);
});

//------------------------------//

import { cena1 } from "../scripts/index.js";

var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = function () {
    // Imagem de fundo
    this.load.image("perdeu", "../assets/gameovertela.png");
};

iniciar.on(
    "pointerdown",
    function () {
        this.scene.start(cena1);
    },
    this
);

home.on(
    "pointerdown",
    function () {
        this.scene.start(cena0);
    },
    this
);


cena2.update = function () { };

// Exportar a cena
export { cena2 };