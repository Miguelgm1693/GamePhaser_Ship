class BootLoader extends Phaser.Scene {
    constructor(){
        super("BootLoader");         
    }


    preload() {
        this.load.image('background','assets/background.png')
        this.load.image('brain', 'assets/stars.png');
  
        this.load.image("blue", "assets/blue.png");
        this.load.image("cyan", "assets/black.png");
        this.load.image("green", "assets/green.png");
        this.load.image("lime", "assets/grey.png");
        this.load.image("red", "assets/red.png");
        
    }

    create(){
        this.scene.start("Menu", {socket:this.socket, fromgame:false});
    }

}

export default BootLoader;