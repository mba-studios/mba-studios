var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

var player;
var player2;
var stars;
var platforms;
var cursors;
var score = 0;
var scoreText;
var water;
var water2;
var water3;
var gate;

var game = new Phaser.Game(config);

function preload() {
    this.load.image("sky", "../assets/plano de fundo.png");
    this.load.image("ground", "../assets/plataformagelo.png");
    this.load.image("wall", "../assets/plataformagelovertical.png");
    this.load.image("slab", "../assets/plataformagelohorizontalmeiobloco.png");
    this.load.image("star", "../assets/star.png");
    this.load.image("bomb", "../assets/bomb.png");

    //this.load.audio("pular", "../assets/pular.mp3");

    this.load.spritesheet("dude", "../assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });

    this.load.spritesheet("water", "../assets/liquido.agua.png", {
        frameWidth: 128,
        frameHeight: 16,
    });
    this.load.spritesheet("dude2", "../assets/dino1.png", {
        frameWidth: 24,
        frameHeight: 24,
    });

    this.load.spritesheet("gate", "../assets/Portal.agua1.png", {
        frameWidth: 64,
        frameHeight: 64,
    });
};

function create() {

    this.add.image(400, 300, "sky");

    gate = this.physics.add.sprite(736, 120, "gate");

    this.anims.create({
        key: "gateon",
        frames: this.anims.generateFrameNumbers("gate", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });

    gate.anims.play("gateon");

    water = this.physics.add.sprite(222, 382, "water");
    water2 = this.physics.add.sprite(382, 574, "water");
    water3 = this.physics.add.sprite(572, 254, "water");

    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water2", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "wateron",
        frames: this.anims.generateFrameNumbers("water3", { start: 1, end: 4 }),
        frameRate: 10,
        repeat: -1,
    });

    water.anims.play("wateron");
    water2.anims.play("wateron");
    water3.anims.play("wateron");


    platforms = this.physics.add.staticGroup();

    platforms.create(64, 582, "ground");
    platforms.create(256, 582, "ground");
    platforms.create(192, 582, "ground");
    platforms.create(384, 590, "slab");
    platforms.create(512, 582, "ground");
    platforms.create(640, 582, "ground");
    platforms.create(768, 582, "ground");

    platforms.create(64, 8, "ground");
    platforms.create(256, 8, "ground");
    platforms.create(192, 8, "ground");
    platforms.create(384, 8, "ground");
    platforms.create(512, 8, "ground");
    platforms.create(640, 8, "ground");
    platforms.create(768, 8, "ground");

    platforms.create(96, 486, "ground");
    platforms.create(224, 486, "ground");
    platforms.create(704, 486, "ground");

    platforms.create(96, 390, "ground");
    platforms.create(224, 398, "slab");
    platforms.create(352, 390, "ground");
    platforms.create(480, 390, "ground");
    platforms.create(544, 390, "ground");

    platforms.create(32, 294, "ground");

    platforms.create(704, 262, "ground");
    platforms.create(576, 270, "slab");
    platforms.create(448, 262, "ground");
    platforms.create(352, 230, "ground");
    platforms.create(224, 230, "ground");

    platforms.create(704, 166, "ground");

    platforms.create(16, 536, "wall");
    platforms.create(16, 408, "wall");
    platforms.create(16, 280, "wall");
    platforms.create(16, 152, "wall");
    platforms.create(16, 24, "wall");

    platforms.create(784, 536, "wall");
    platforms.create(784, 408, "wall");
    platforms.create(784, 280, "wall");
    platforms.create(784, 152, "wall");
    platforms.create(784, 24, "wall");

    player = this.physics.add.sprite(128, 500, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 1 }],
        frameRate: 20,
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    player2 = this.physics.add.sprite(128, 400, "dude2");

    player2.setBounce(0.2);
    player2.setCollideWorldBounds(true);

    this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers("dude2", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "turn2",
        frames: [{ key: "dude2", frame: 1 }],
        frameRate: 20,
    });

    this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers("dude2", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: "star",
        repeat: 11,
        setXY: {
            x: 64,
            y: 350,

            x: 128,
            y: 400,
        },
    });

    scoreText = this.add.text(16, 16, "score: 0", {
        fontSize: "32px",
        fill: "#000",
    });





    this.physics.add.collider(player, platforms);
    this.physics.add.collider(water, platforms);
    this.physics.add.collider(water2, platforms);
    this.physics.add.collider(water3, platforms);
    this.physics.add.collider(gate, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);
    this.physics.add.collider(player2, platforms);
    this.physics.add.overlap(player2, stars, collectStar, null, this);

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


                //pular.play(); ver com o professor ---------------------------------------------

            }
        },
        this
    );
}

function update() {
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


        //pular.play(); ver com o professor ---------------------------------------------
    }
}

function collectStar(player, star) {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText("Score: " + score);
}
