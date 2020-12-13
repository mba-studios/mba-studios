import { cena0 } from "./cena0.js";

var cena3 = new Phaser.Scene("Cena 3");

cena3.preload = function () {
  // Imagem de fundo
  this.load.image("perdeu", "../assets/gameovertela.png");
};

cena3.create = function () {
   var button = this.add.image(400, 300, "perdeu", 0).setInteractive();
   button.on(
     "pointerdown",
     function () {
       this.scene.start(cena0);
     },
     this
   );
};

cena3.update = function () {};

// Exportar a cena
export { cena3 };
