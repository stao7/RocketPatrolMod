//Siwen Tao, Rocket Patrol Mod, 4/18/2022, it took me about 8 hours.
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
      // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship1', './assets/spaceship.png');
        this.load.image('spaceship2', './assets/newspaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        
    }

    create() {
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        this.add.text(100, 10, 'Edited by Siwen Tao').setOrigin(0.5);
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#e0fbff',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize*2 - borderPadding, 'ROCKET PATROL 2.0', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/4, game.config.height/2 - borderUISize, 'Move the Rocket: ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/1.5, game.config.height/2 - borderUISize, 'Use ←→ arrows', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/4.0, game.config.height/2 + borderUISize , 'Fire the Rocket: ', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/1.7, game.config.height/2 + borderUISize , 'Use (F) ', menuConfig).setOrigin(0.5);
        //this.add.text(game.config.width/8, game.config.height/2 - borderUISize, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#000000';
        menuConfig.color = '#ff9696';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize*6 + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 2,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");   
        }
      }
}