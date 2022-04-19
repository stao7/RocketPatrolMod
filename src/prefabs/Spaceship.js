// Spaceship prefab
//Siwen Tao, Rocket Patrol Mod, 4/18/2022, it took me about 8 hours.
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, t, level) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.bonusTime = t;
        this.moveSpeed = game.settings.spaceshipSpeed + level;         // pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}