var player;
var player2;
var stars;
var platforms;
var cursors;
var score = 0;
var scoreText;

var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = function () {
  this.load.image("sky", "../assets/planodefundofogo3.png");
  this.load.image("ground", "../assets/plataformafogohorizontal2.png");
  this.load.image("slab", "../assets/plataformafogohorizontalmeiobloco.png");
  this.load.image("wall", "../assets/plataformafogovertical2certa.png");
  this.load.image("star", "../assets/star.png");
  this.load.image("bomb", "../assets/bomb.png");
  this.load.spritesheet("dude", "../assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
  this.load.spritesheet("dude2", "../assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
};

cena2.create = function () {
  this.add.image(400, 300, "sky");

  platforms = this.physics.add.staticGroup();

  platforms.create(64, 582, "ground");
  platforms.create(256, 590, "slab");
  platforms.create(128, 582, "ground");
  platforms.create(384, 590, "slab");
  platforms.create(512, 590, "slab");
  platforms.create(640, 582, "ground");
  platforms.create(768, 582, "ground");

  platforms.create(64, 18, "ground");
  platforms.create(256, 18, "ground");
  platforms.create(192, 18, "ground");
  platforms.create(384, 18, "ground");
  platforms.create(512, 18, "ground");
  platforms.create(640, 18, "ground");
  platforms.create(768, 18, "ground");

  platforms.create(96, 166, "ground");
  platforms.create(224, 166, "ground");

  platforms.create(480, 166, "ground");
  platforms.create(544, 166, "ground");

  platforms.create(96, 262, "ground");
  platforms.create(224, 262, "ground");
  platforms.create(352, 270, "slab");
  platforms.create(480, 262, "ground");
  platforms.create(544, 262, "ground");

  platforms.create(592, 214, "wall");

  platforms.create(768, 390, "ground");
  platforms.create(640, 390, "ground");
  platforms.create(512, 398, "slab");
  platforms.create(384, 390, "ground");

  platforms.create(96, 486, "ground");
  platforms.create(384, 486, "ground");
  platforms.create(768, 486, "ground");

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

  player = this.physics.add.sprite(128, 100, "dude");

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

  player2 = this.physics.add.sprite(192, 100, "dude2");

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
    setXY: { x: 100, y: 200 },
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
};

cena2.update = function () {
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
    player.setVelocityY(-300);
    player2.setVelocityY(-300);
  }
};

function collectStar(player, star) {
  star.disableBody(true, true);

  score += 10;
  scoreText.setText("Score: " + score);
}

export { cena2 };
