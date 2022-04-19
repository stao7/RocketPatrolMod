//Siwen Tao, Rocket Patrol Mod, 4/18/2022, it took me about 8 hours.
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

//10 points-----Display the time remaining (in seconds) on the screen (10): I used the timeEvent in phaser to display the time left for the player
// 5 points-----Allow the player to control the Rocket after it's fired (5): I deleted requirement of move, which say rocket can only move when not fired
//20 points-----Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)：I designed new assets of rocket spaceships and explosion to make it look more modern.
//20 points-----Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20): The top and middle ship will reward both 1 sec, and the lowest will reward nothing because giving too much time will be unbalanced and too easy for player.
//20 points-----Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20): Added a spaceship which is a lot faster and give 50 points and reward 2 sec of game time.
// 5 points-----Add your own (copyright-free) background music to the Play scene (5): I find the free music from opengameart and here is the link. https://opengameart.org/content/crystal-cave-song18.
// 5 points-----Implement the 'FIRE' UI text from the original game (5): I implemented the UI of FIRE.
// 5 points-----Create a new scrolling tile sprite for the background (5): I edited the background tile spirit and add a couple of stars like moon in it.
//10 points-----Create a new title screen (e.g., new artwork, typography, layout) (10): I displayed the tile spirit in the title screen as well and changed the color and background color of the text to let it fit more in the scene, and I changed some of the text.
// Also I slow downed the speed of both easy and hard mode because I think the previous version will be difficult to play.

