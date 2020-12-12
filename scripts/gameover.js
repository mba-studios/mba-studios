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

var cena3 = new Phaser.Scene("Cena 3");

cena3.preload = function () {
    // Imagem de fundo
    this.load.image("perdeu", "../assets/gameovertela.png");
};

iniciar.on(
    "pointerdown",
    function () {
        this.scene.start(cena0);
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


cena3.update = function () { };

// Exportar a cena
export { cena3 };