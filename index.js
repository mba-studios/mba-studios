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

var game = new Phaser.Game(config);

function preload() {
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
    });
    this.load.spritesheet("dude2", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
    });
}

function create() {
    this.add.image(400, 300, "sky");

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, "ground").setScale(2).refreshBody();

    platforms.create(600, 450, "ground");
    platforms.create(400, 450, "ground");
    platforms.create(600, 250, "ground");
    platforms.create(400, 250, "ground");
    platforms.create(50, 350, "ground");
    platforms.create(200, 350, "ground");
    platforms.create(50, 150, "ground");
    platforms.create(200, 150, "ground");

    player = this.physics.add.sprite(100, 450, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 4 }],
        frameRate: 20,
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    player2 = this.physics.add.sprite(300, 450, "dude2");

    player2.setBounce(0.2);
    player2.setCollideWorldBounds(true);

    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude2", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: "turn",
        frames: [{ key: "dude2", frame: 4 }],
        frameRate: 20,
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude2", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1,
    });

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: "star",
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 },
    });



    scoreText = this.add.text(16, 16, "score: 0", {
        fontSize: "32px",
        fill: "#000",
    });

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player2, platforms);
    this.physics.add.overlap(player2, stars, collectStar, null, this);
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player2.setVelocityX(-160);

        player.anims.play("left", true);
        player2.anims.play("left", true);

    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player2.setVelocityX(160);

        player.anims.play("right", true);
        player2.anims.play("right", true);
    } else {
        player.setVelocityX(0);
        player2.setVelocityX(0);

        player.anims.play("turn");
        player2.anims.play("turn");
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-2000);
        player2.setVelocityY(-2000);
    }
}



function collectStar(player, star) {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText("Score: " + score);
}
