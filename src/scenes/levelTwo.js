import {
    createHasturAnims
} from '../enemies/enemyAnims.js';
import Hastur from '../enemies/hastur.js';

import{
    loadAllGameObjects,
    createGameObjects,
    createEnemiesDamageTakingAnimations,
    createAganjusAnimations,
    createSwordAnimations,
    createAganjuAndSwordAndShield,
    createSkillsAnimations,
    createControllers,
    createSkillPlaceHoldersAndSkillIcon,
    createSpawnHasturFunction,
    createsCollidersBetweenAganjuAndShieldAndHasturProjectiles,
    createHasturOnSceneDependOnScoreReached,
    createPauseNextLevelVictoryAndGameover,
    createUpdaterOfScoreLiveHealhtCoinsKillsAndPositions,
    createBasicAttackAndShield,
    createAganjuAndSwordMovement,
    createsUpdateableBODYSKILLS,
    createsUpdateablePHYSICALKILLS,
    createsUpdateableSHOOTINGSKILLS,
    createsUpdateableDROPSKILLS,
}from './gameObjects.js';

class levelTwo extends Phaser.Scene{
    constructor() {
        super('levelTwo');
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
        //Skapar spelplanen
        let bg = this.add.image(0,0,'background').setOrigin(0);
        bg.setScale(2.1);
        //Sets world bounds
        this.scene.scene.physics.world.setBounds(15,10,770,600);
        //Defines name of this scene
        this.startData.nameOfThisScene = this.scene.key;
        //Defines name of next scene
        this.startData.nameOfNextScene = 'LoungeScene';

        //Creates walls and pause icon of the scene
        createGameObjects(this);

        //Create Smoke, Explosion, Flame, Bleeding, BloodExplosion, Freeze Animations
        createEnemiesDamageTakingAnimations(this);

        //Creates placeholders and icons for skills
        createSkillPlaceHoldersAndSkillIcon(this);

        //Creates skill animations
        createSkillsAnimations(this);

        ////////////////////////////////////////////////////////////////////
        //Kontroller
        createControllers(this);

        ////////////////////////////////////////////////////////////////////
        //Player, Sword and Shield
        createAganjuAndSwordAndShield(this);

        ////////////////////////////////////////////////////////////////////
        //Animationer
        createAganjusAnimations(this);
        createSwordAnimations(this);


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

        this.hasturProjectilesSpeed = 300;
        var HasturProjectile = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function Bullet (scene)
        {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'fireball');

            this.incX = 0;
            this.incY = 0;
            this.lifespan = 0;

            this.speed = Phaser.Math.GetSpeed(this.scene.hasturProjectilesSpeed, 1);
        },

        fire: function (x1, y1, x2, y2)
        {
            this.setActive(true);
            this.setVisible(true);
            this.name = 'hasturProjectile';

            //  Bullets fire from the middle of the screen to the given x/y
            this.setPosition(x1, y1);

            var angle = Phaser.Math.Angle.Between(x1, y1, x2, y2);

            this.setRotation(angle);

            this.incX = Math.cos(angle);
            this.incY = Math.sin(angle);

            this.lifespan = 2500;
        },
        update: function (time, delta)
                {
                    this.lifespan -= delta;
            
                    this.x += this.incX * (this.speed * delta);
                    this.y += this.incY * (this.speed * delta);

                    this.speed = Phaser.Math.GetSpeed(this.scene.hasturProjectilesSpeed, 1);
            
                    if (this.lifespan <= 0)
                    {
                        this.setActive(false);
                        this.setVisible(false);
                    }
                }
            
            
        });

        this.hasturProjectiles = this.physics.add.group({
            classType: HasturProjectile,
            createCallback:(gameObj) =>{

                gameObj.body.onCollide = true;
                gameObj.damage = 5;

                //creates collision between projectile and aganju
                this.physics.add.collider(this.aganju, gameObj);

                this.physics.add.collider(this.shield, gameObj);
                
            },
            maxSize: 1,
            runChildUpdate: true,
        });

        //Creates Colliders between aganju, shield and hastur projectiles
        createsCollidersBetweenAganjuAndShieldAndHasturProjectiles(this);

        ////////////////////////////////////////////////////////////////////
        // Hastur
        //Creates hastur animations
        createHasturAnims(this.anims); //skapas i annan fil
        
        this.hasturs = this.physics.add.group({
            classType: Hastur,
            createCallback: (gameObj) => { // hastur objects properties
                gameObj.name = 'hastur';
                gameObj.body.onCollide = true;

                gameObj.body.mass = 2;
                gameObj.body.collideWorldBounds = true;
                gameObj.body.onWorldBounds = true;
                gameObj.onOverlap = true;
                gameObj.setBodySize(17.5,32,true);

                //Updates the amount of the hastur that can be on screen 
                //At the same depending on the score
                if(this.startData.score < 1000){
                    //Hasturs health
                    gameObj.health = 100;
                    gameObj.damage = 25;
                }
                if(this.startData.score > 1000){
                    gameObj.health = 150;
                    gameObj.damage = 30;
        
                }
                if (this.startData.score > 2000){
                    gameObj.health = 200;
                    gameObj.damage  = 40;
        
                }
                if(this.startData.score > 4000){
                    gameObj.health = 300;
                    gameObj.damage = 50;
        
                }
                if(this.startData.score > 8000){
                    gameObj.health = 350;
                    gameObj.damage = 75;
        
                }
                if(this.startData.score > 10000){
                    gameObj.health = 400;
                    gameObj.damage = 100;
        
                }
                if(this.startData.score > 15000){
                    gameObj.health = 450;
                    gameObj.damage = 200;
        
                }
                if(this.startData.score > 20000){
                    gameObj.health = 500;
                    gameObj.damage = 300;
        
                }
                if(this.startData.score > 30000){ 
                    gameObj.health = 750;                   
                    gameObj.damage = 350;
                }
                
                //Creates collision between Aganju and Hasturs
                this.physics.add.collider(this.aganju, gameObj);

                //creates collision between sword and hasturs
                this.physics.add.collider(this.sword, gameObj);
                
                //creates collision between shield and hasturs
                this.physics.add.collider( gameObj, this.shield);

                //creates collision between fireballs and hasturs
                this.physics.add.collider(this.fireballs, gameObj);

                //creates collision between lightning and hasturs
                this.physics.add.collider(this.lightningDropPlace, gameObj);

                //creates collision between meteor and hasturs
                this.physics.add.collider(this.meteorDropPlace, gameObj);
                
                //creates collision between fireblast and hasturs
                this.physics.add.collider(this.fireblastDropPlace, gameObj);

                //creates collision between waterblast and hasturs
                this.physics.add.collider(this.waterblastDropPlace, gameObj);

                //Gör Hastur orörlig
                gameObj.setImmovable(true);
            }
        });
        
        this.roomCleared = false;
        //Creates new hastur creator function
        createSpawnHasturFunction(this);

    }

    // Update gameplay 
    // Uppdaterar spelet var 16 ms
    // Körs kontunierlig efter create() är färdig
    update(time, delta){

            // this.allHasturs = this.hasturs.children.entries;

            // this.allHasturs.forEach(hast => {
            //     console.log(hast.damage);
            // });

            // //To create smoke animation for all, lenght of hastur can be used
            // console.log(this.allHasturs.length);    

        //Updates the amount of the hastur that can be on screen 
        //At the same depending on the score
        createHasturOnSceneDependOnScoreReached(this);

        //Creates pause nextlevel victory and gameover scene passing
        createPauseNextLevelVictoryAndGameover(this);
        
        //Creates score,livecounter, health, coins, totalkills, positions uppdater
        createUpdaterOfScoreLiveHealhtCoinsKillsAndPositions(this);
        
        //Player attack and shield
        createBasicAttackAndShield(this);
 
        //Aganjus movement (with and without sword)
        createAganjuAndSwordMovement(this);
       
        ///////////////////////////////////////////////////////////////////////////
        //Players skills and cooldowns
        
        //Creates BODY-SKILLS
        createsUpdateableBODYSKILLS(this);

        //Creates PHYSICAL-SKILLS
        createsUpdateablePHYSICALKILLS(this);
        
        //Creates SHOOTING-SKILLS
        createsUpdateableSHOOTINGSKILLS(this);
        
        //Creates DROP-SKILLS
        createsUpdateableDROPSKILLS(this);

    }
}

export default levelTwo;
