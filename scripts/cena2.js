/*
File: cena2.js
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: third import archive.
*/

// [Arthur] importando a cena seguinte do arquivo "cena3.js"
import { cena3 } from "./gameover.js";

// [Arthur] Adicionando variáveis ao código para execução dos comandos. 
var player;
var player2;
var platforms;
var cursors;
var water;
var water2;
var water3;
var water4;
var water5;
var gate;
var trilha;
var pular;
var life = 0;
var lifeText;
var timedEvent;
var timer;
var timerText;
var cena2 = new Phaser.Scene("Cena 2");

// ===============================================================================
// [Arthur] Iniciando a função Preload, para carregar os arquivos iniciais da cena. 
cena2.preload = function () {

    // [Arthur] Carregando imagens para a cena.
    this.load.image("sky", "../assets/plano de fundo.png");
    this.load.image("ground", "../assets/plataformagelo.png");
    this.load.image("wall", "../assets/plataformagelovertical.png");
    this.load.image("slab", "../assets/plataformagelohorizontalmeiobloco.png");
    this.load.image("bomb", "../assets/bomb.png");



    // [Arthur] Carregando audios para a cena. 
    this.load.audio("musica", "../assets/musica0.mp3");
    this.load.audio("pular", "../assets/pular.mp3");



    // [Arthur] Carregando sprites para a cena. 
    this.load.spritesheet("dude", "../assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });
    this.load.spritesheet("dude2", "../assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });
    this.load.spritesheet("water", "../assets/liquido.agua.png", {
        frameWidth: 128,
        frameHeight: 16,
    });
    this.load.spritesheet("gate", "../assets/Portal.agua1.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
    this.load.spritesheet("fullscreen", "../assets/fullscreen.png", {
        frameWidth: 64,
        frameHeight: 64,
    });

};


// ===============================================================================
// [Arthur] Iniciando a função create, para montar os componentes da cena. 
cena2.create = function () {

    // [Arthur] Incluido o som da musica a cena, e em seguida dando play. 
    trilha = this.sound.add("musica");
    trilha.play();

    // [Arthur] Incluindo os sons de efeito a cena. 
    pular = this.sound.add("pular");


    // [Arthur] Incluindo a imagem de fundo a cena. 
    this.add.image(400, 300, "sky");


    // [Arthur] Incluido a sprite do portal a cena e em seguida, criando a animação. 
    gate = this.physics.add.sprite(736, 530, "gate");
    this.anims.create({
        key: "gateon",
        frames: this.anims.generateFrameNumbers("gate", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    gate.anims.play("gateon");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação. 
    water = this.physics.add.sprite(512, 574, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação.
    water2 = this.physics.add.sprite(384, 574, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water2", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water2.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação.
    water3 = this.physics.add.sprite(256, 574, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water3", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water3.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação. 
    water4 = this.physics.add.sprite(512, 382, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water4.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação. 
    water5 = this.physics.add.sprite(352, 254, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water5.anims.play("wateron");


    // ================================================
    // [Arthur] Incluindo o grupo de plataformas a cena, grupo definido como estático. 

    platforms = this.physics.add.staticGroup();

    // [Arthur] Incluindo grupo de plataformas do piso. 
    platforms.create(256, 590, "slab");
    platforms.create(384, 590, "slab");
    platforms.create(512, 590, "slab");
    platforms.create(64, 582, "ground");
    platforms.create(128, 582, "ground");
    platforms.create(640, 582, "ground");
    platforms.create(768, 582, "ground");


    // [Arthur] Incluindo grupo de plataformas do teto.
    platforms.create(64, 8, "ground");
    platforms.create(256, 8, "ground");
    platforms.create(192, 8, "ground");
    platforms.create(384, 8, "ground");
    platforms.create(512, 8, "ground");
    platforms.create(640, 8, "ground");
    platforms.create(768, 8, "ground");


    // [Arthur] Incluindo grupo de plataformas do 1º andar. 
    platforms.create(96, 486, "ground");
    platforms.create(384, 486, "ground");
    platforms.create(768, 486, "ground");


    // [Arthur] Incluindo grupo de plataformas do 2º andar. 
    platforms.create(768, 390, "ground");
    platforms.create(640, 390, "ground");
    platforms.create(512, 398, "slab");
    platforms.create(384, 390, "ground");


    // [Arthur] Incluindo grupo de plataformas do 4º andar. 
    platforms.create(96, 262, "ground");
    platforms.create(224, 262, "ground");
    platforms.create(352, 270, "slab");
    platforms.create(480, 262, "ground");
    platforms.create(544, 262, "ground");
    platforms.create(592, 214, "wall");


    // [Arthur] Incluindo grupo de plataformas do 5º andar. 
    platforms.create(96, 166, "ground");
    platforms.create(224, 166, "ground");
    platforms.create(480, 166, "ground");
    platforms.create(544, 166, "ground");


    // [Arthur] Incluindo grupo de plataformas da parede esquerda. 
    platforms.create(16, 534, "wall");
    platforms.create(16, 406, "wall");
    platforms.create(16, 278, "wall");
    platforms.create(16, 150, "wall");
    platforms.create(16, 22, "wall");


    // [Arthur] Incluindo grupo de plataformas da parede direita. 
    platforms.create(784, 534, "wall");
    platforms.create(784, 406, "wall");
    platforms.create(784, 278, "wall");
    platforms.create(784, 150, "wall");
    platforms.create(784, 22, "wall");

    // ================================================
    // [Arthur] Incluindo grupo de sprites a cena. 

    // [Arthur] Incluindo sprites do player Nº 1. 
    player = this.physics.add.sprite(64, 130, "dude");
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);


    // [Arthur] Incluindo as funções de movimentação do personagem Nº1.
    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 1 }],
        frameRate: 20,
    });


    // [Arthur] Incluindo sprites do player Nº 1. 
    player2 = this.physics.add.sprite(96, 130, "dude2");
    player2.setBounce(0.2);
    player2.setCollideWorldBounds(true);


    // [Arthur] Incluindo as funções de movimentação do personagem Nº2. 
    this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers("dude2", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers("dude2", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: "turn2",
        frames: [{ key: "dude2", frame: 1 }],
        frameRate: 20,
    });


    // [Arthur] Igualando as funções de sprite aos cursores da funçao seguinte. 
    cursors = this.input.keyboard.createCursorKeys();


    // [Arthur] Adicionando sistema de colisão a fase. 
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player2, platforms);
    this.physics.add.collider(water, platforms);
    this.physics.add.collider(water2, platforms);
    this.physics.add.collider(water3, platforms);
    this.physics.add.collider(water4, platforms);
    this.physics.add.collider(water5, platforms);
    this.physics.add.collider(gate, platforms);


    // [Arthur] Incluindo movimentação dos personagens e ativando a função dos sprites. 
    this.input.keyboard.on(
        "keydown_A",
        function () {
            player2.setVelocityX(-160);
            player2.anims.play("left2", true);
        },
        this
    );
    this.input.keyboard.on(
        "keyup_A",
        function () {
            player2.setVelocityX(0);
            player2.anims.play("turn2", true);
        },
        this
    );
    this.input.keyboard.on(
        "keydown_D",
        function () {
            player2.setVelocityX(+160);
            player2.anims.play("right2", true);
        },
        this
    );
    this.input.keyboard.on(
        "keyup_D",
        function () {
            player2.setVelocityX(0);
            player2.anims.play("turn2", true);
        },
        this
    );
    this.input.keyboard.on(
        "keydown_W",
        function () {
            if (player2.body.touching.down == 1) {
                player2.setVelocityY(-300);
                pular.play();
            }
        },
        this
    );


    // [Arthur] Função para avançar a cena, posteriormente será trocada por um evento de colisão. 
    this.input.keyboard.on(
        "keydown_X",
        function () {
            trilha.stop();
            this.scene.start(cena3);
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


    // [Arthur] Adicionando contador a fase do jogo. 
    lifeText = this.add.text(20, 24, life, {
        fontSize: "32px",
        fill: "#cccccc",
    });
    lifeText.setScrollFactor(0);
    timerText = this.add.text(16, 16, timer, {
        fontSize: "32px",
        fill: "#000",
        fill: "#000000",
    });
    timerText.setScrollFactor(0);

};


// ================================================
// [Arthur] Iniciando a função update a cena, a função é executada em loop para algumas mecânicas da fase. 
cena2.update = function () {


    // [Arthur] Incluindo as funções de movimentação do personagem Nº1. 
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play("left", true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play("right", true);
    } else {
        player.setVelocityX(0);
        player.anims.play("turn");
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-300);
        pular.play();
    }
};


// ================================================
// [Arthur] Iniciando a função contdown, para fazer a contagem do tempo da cena. 
function countdown() {
    life += 1;
    lifeText.setText(life);
    timer -= 1;
    timerText.setText(timer);
    if (timer === 0) {
        trilha.stop();
        this.scene.start(cena2);
    }
}
// [Arthur] Exportando cena 2 para o index.js.
export { cena2 };
