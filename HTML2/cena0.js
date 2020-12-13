import { cena3 } from "./gameover.js";

var cena0 = new Phaser.Scene("Cena 0");

cena0.preload = function () {
  // Imagem de fundo
  this.load.image("cadeado", "../assets/tela-de-inicio-td.png");
};

cena0.create = function () {
   var button = this.add.image(400, 300, "cadeado", 0).setInteractive();
   button.on(
     "pointerdown",
     function () {
       this.scene.start(cena3);
     },
     this
   );
};

cena0.update = function () {};

// Exportar a cena
export { cena0 };
