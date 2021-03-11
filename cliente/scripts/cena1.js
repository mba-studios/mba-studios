/*
File: cena1.js
Author: Arthur Cadore(IFSC)
Date: 26 / 12 / 2020
Brief: second import archive.
*/

// [Arthur] importando a cena seguinte do arquivo "cena2.js"
import { cena2 } from "./cena2.js";

// [Arthur] Adicionando variáveis ao código para execução dos comandos. 
var player;
var player2;
var platforms;
var cursors;
var water;
var water2;
var water3;
var gate;
var trilha;
var pular;
var life = 0;
var lifeText;
var timedEvent;
var timer;
var timerText;
var cena1 = new Phaser.Scene("Cena 1");

// ===============================================================================
// [Arthur] Iniciando a função Preload, para carregar os arquivos iniciais da cena. 
cena1.preload = function () {

    // [Arthur] Carregando imagens para a cena.
    this.load.image("sky", "./assets/plano de fundo.png");
    this.load.image("ground", "./assets/plataformagelo.png");
    this.load.image("wall", "./assets/plataformagelovertical.png");
    this.load.image("slab", "./assets/plataformagelohorizontalmeiobloco.png");




    // [Arthur] Carregando audios para a cena. 
    this.load.audio("musica", "./assets/musica0.mp3");
    this.load.audio("pular", "./assets/pular.mp3");



    // [Arthur] Carregando sprites para a cena. 
    this.load.spritesheet("dude", "./assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });
    this.load.spritesheet("dude2", "./assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });
    this.load.spritesheet("water", "./assets/liquido.agua.png", {
        frameWidth: 128,
        frameHeight: 16,
    });
    this.load.spritesheet("gate", "./assets/Portal.agua1.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
    this.load.spritesheet("fullscreen", "./assets/fullscreen.png", {
        frameWidth: 64,
        frameHeight: 64,
    });

};


// ===============================================================================
// [Arthur] Iniciando a função create, para montar os componentes da cena. 
cena1.create = function () {

    // [Arthur] Incluido o som da musica a cena, e em seguida dando play. 
    trilha = this.sound.add("musica");
    trilha.play();

    // [Arthur] Incluindo os sons de efeito a cena. 
    pular = this.sound.add("pular");


    // [Arthur] Incluindo a imagem de fundo a cena. 
    this.add.image(400, 300, "sky");


    // [Arthur] Incluido a sprite do portal a cena e em seguida, criando a animação. 
    gate = this.physics.add.sprite(736, 120, "gate");
    this.anims.create({
        key: "gateon",
        frames: this.anims.generateFrameNumbers("gate", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    gate.anims.play("gateon");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação. 
    water = this.physics.add.sprite(222, 382, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação.
    water2 = this.physics.add.sprite(382, 574, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water2", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water2.anims.play("wateron");

    // [Arthur] Incluindo a sprite de água a cena e em seguinda, criando a animação.
    water3 = this.physics.add.sprite(572, 254, "water");
    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water3", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });
    water3.anims.play("wateron");

    // ================================================
    // [Arthur] Incluindo o grupo de plataformas a cena, grupo definido como estático. 

    platforms = this.physics.add.staticGroup();

    // [Arthur] Incluindo grupo de plataformas do piso. 
    platforms.create(64, 582, "ground");
    platforms.create(256, 582, "ground");
    platforms.create(192, 582, "ground");
    platforms.create(384, 590, "slab");
    platforms.create(512, 582, "ground");
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
    platforms.create(224, 486, "ground");
    platforms.create(704, 486, "ground");


    // [Arthur] Incluindo grupo de plataformas do 2º andar. 
    platforms.create(96, 390, "ground");
    platforms.create(224, 398, "slab");
    platforms.create(352, 390, "ground");
    platforms.create(480, 390, "ground");
    platforms.create(544, 390, "ground");


    // [Arthur] Incluindo grupo de plataformas do 3º andar. 
    platforms.create(32, 294, "ground");


    // [Arthur] Incluindo grupo de plataformas do 4º andar. 
    platforms.create(704, 262, "ground");
    platforms.create(576, 270, "slab");
    platforms.create(448, 262, "ground");
    platforms.create(352, 230, "ground");
    platforms.create(224, 230, "ground");


    // [Arthur] Incluindo grupo de plataformas do 5º andar. 
    platforms.create(704, 166, "ground");


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
    player = this.physics.add.sprite(128, 500, "dude");
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
    player2 = this.physics.add.sprite(128, 400, "dude2");
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
            this.scene.start(cena2);
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

    // Conectar no servidor via WebSocket
    this.socket = io();

    // Disparar evento quando jogador entrar na partida
    var self = this;
    var physics = this.physics;
    var cameras = this.cameras;
    var time = this.time;

    this.socket.on("jogadores", function (jogadores) {
        if (jogadores.primeiro === player) {
            // Define jogador como o primeiro
            jogador = 1;

            /* Personagens colidem com os limites da cena
            player1.setCollideWorldBounds(true);

            // Detecção de colisão: terreno
            physics.add.collider(player1, terreno, hitCave, null, this);

            // Detecção de colisão e disparo de evento: ARCas
            physics.add.collider(player1, ARCas, hitARCa, null, this);

            // Câmera seguindo o personagem 1
            cameras.main.startFollow(player1); */

        } else if (jogadores.segundo === player2) {
            // Define jogador como o segundo
            jogador = 2;
            /*
           // Personagens colidem com os limites da cena
           player2.setCollideWorldBounds(true);

           // Detecção de colisão: terreno
           physics.add.collider(player2, terreno, hitCave, null, this);

           // Detecção de colisão e disparo de evento: ARCas
           physics.add.collider(player2, ARCas, hitARCa, null, this);

           // Câmera seguindo o personagem 2 
            cameras.main.startFollow(player2);*/
        }
    });

};


// ================================================
// [Arthur] Iniciando a função update a cena, a função é executada em loop para algumas mecânicas da fase. 
cena1.update = function () {


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
// [Arthur] Exportando cena 1 para o index.js.
export { cena1 };
