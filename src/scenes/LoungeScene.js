import{
    createLoungeRoomObjects,
    createAganjusAnimations,
    createControllers,
    createPauseNextLevelVictoryAndGameover,
    createAganjuAndSwordMovement,

}from '../scenes/gameObjects.js';

class LoungeScene extends Phaser.Scene{
    constructor() {
        super('LoungeScene');
    }
    init(data){
        this.startData = data;
    }
    // Preload game assets 
    // Här laddas alla assets innan spethis är igång
    preload() {
        //Loads all game objects
        // loadAllGameObjects(this);
    }
    
    // Create game world 
    // Sätts igång när preload() är uppladdad
    create(){
        this.cameras.main.fadeIn(100, 0, 0, 0);
       
        //Sets world bounds
        this.scene.scene.physics.world.setBounds(15,10,770,600);
        //Defines name of this scene
        this.startData.nameOfThisScene = this.scene.key;
        //Defines name of next scene
        this.startData.nameOfNextScene = 'levelTwo';

        //Creates walls and pause icon of the scene
        createLoungeRoomObjects(this);

        ////////////////////////////////////////////////////////////////////
        //Kontroller
        createControllers(this);

        ////////////////////////////////////////////////////////////////////
        //Animationer
        createAganjusAnimations(this);

        //Skapar eldbollar
        this.fireball = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,

            initialize:

            function fireball (scene)
            {
                Phaser.GameObjects.Image.call(this, scene, 0, 0, scene.startData.shootingObject);
              
                this.incX = 0;
                this.incY = 0;
                this.lifespan = 0;
                this.name = 'shootingObject';

                this.speed = Phaser.Math.GetSpeed(300, 1);
            },

            fire: function (x,y)
            {
                this.setActive(true);
                this.setVisible(true);

                this.angle = Phaser.Math.Angle.Between(x, y, this.scene.aganju.x, this.scene.aganju.y);

                //Räknar x vinkeln
                this.incX = Math.cos(this.angle);
                //Räknar y vinkeln
                this.incY = Math.sin(this.angle);

                this.lifespan = 1000;

                //Rotates shooting object
                this.rotation = this.angle;
            },

            update: function (time, delta)
            {
                this.lifespan -= delta;

                this.x += -this.incX * (this.speed * delta);
                this.y += -this.incY * (this.speed * delta);

                if (this.lifespan <= 0)
                {
                    this.destroy()
                }

            }
            
        });

        //Gör eldbollar en group
        this.fireballs = this.physics.add.group({
            classType: this.fireball,
            maxSize: this.startData.amountShootingObjects,
            runChildUpdate: true
        });

    }
    // Update gameplay 
    // Uppdaterar spelet var 16 ms
    // Körs kontunierlig efter create() är färdig
    update(time, delta){

        // if(this.startData.totalKills > 5){
        //     //Creates the overlap between door and aganju to make possible pass between levels
        //     this.physics.add.overlap(this.aganju, this.door1, () => {
    
        //             this.startData.amountHasturKillToClearTheRoom = 15;

        //             //Stops the game this
        //             // this.scene.stop(this.startData.nameOfThisScene);
        //             this.scene.stop();
        //             // this.scene.pause();
        //             //Starts the next level
        //             this.scene.start(this.startData.nameOfNextScene, this.startData);
            
        //     });
        // }

        //Creates pause nextlevel victory and gameover scene passing
        createPauseNextLevelVictoryAndGameover(this);
 
        //Aganjus movement (with and without sword)
        createAganjuAndSwordMovement(this);
       
    }
}

export default LoungeScene;
