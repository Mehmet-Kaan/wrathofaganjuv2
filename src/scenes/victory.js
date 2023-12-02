class VictoryScene extends Phaser.Scene{
    constructor() {
        super('VictoryScene');
    }

    init(data){
        this.endData = data;
    }
    preload(){
        this.load.image('backgroundGameover', './assets/tilemap/backgroundGameOver.png');
    }
    create(){
        //Background image for Pause Scene 
        this.bgGameOver = this.add.image(0,0,'backgroundGameover').setOrigin(0);
        this.bgGameOver.setScale(0.57);
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        let gameOver = this.add.text(250, 100, "Victory!", {font:'100px arcade'});

        let endScore = this.add.text(255, 250, "Your Score: ", {font:'30px arcade'});
        endScore.text = 'Your Score: ' + this.endData.score;

        let backToMenuBtn = this.add.text(350, 325, "Back to Menu", {font:'20px arcade', color:'white'});
        let playAgainBtn = this.add.text(355, 375, "Play Again", {font:'20px arcade', color:'white'});
        
        //Back to menu button
        backToMenuBtn.setInteractive({cursor: 'pointer'});
        backToMenuBtn.on("pointerover", ()=>{
            backToMenuBtn.style.setColor('black');
        });
        backToMenuBtn.on("pointerout", ()=>{
            backToMenuBtn.style.setColor('white');
        });
        backToMenuBtn.on("pointerdown", ()=>{
            this.cameras.main.fadeOut(500, 0, 0, 0);
            //Starts the menu scene
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start("MainMenuScene");
            })
        });

        ///////////////////////////////////////////////////////////////
        //Start data
        //Data to start game with // Data for skills

        //Total coins
        let totalCoins = 0;
        //Score
        let score = 0;
        //Lives
        let lives = 3;

        let totalKills = 0;

        let amountHasturKillToWinTheGame = 1000;

                           //PSHYCAL SKILLS

        //REGENERETAION SKILL
        //Regeneration skill learned
        let regenerationLearned = false;
        //Regeneration skillen behöver inte cooldownas
        //För att den har inte använts än
        let regenerationCoolDown = false;
        //Level upgrades faktor för regeneration-skill
        let regenerationCurrentLevelFactor = 0;
        //Kostnaden för uppgradering
        let baseCostForRegenerationUpgrade = 100;

        //STRENGHT SKILL
        let strenghtSkillLearned = false;
        let baseCostForStrenghtLearn = 500;
        let powerOfStrenght = 0;
        //Kostnaden för uppgradering
        let baseCostForStrenghtUpgrade = 50;

        //SPEEDBOOST SKILL
        //SpeedBoost skill learned
        let speedBoostLearned = false;
        //SpeedBoost skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let speedCoolDown = false;
        //Level upgrades faktor för regeneration-skill
        let speedBoostCurrentLevelFactor = 1;
        //Kostnaden för uppgradering
        let baseCostForSpeedBoostUpgrade = 500;


                            //SHOOTING SKILLS (OBJECTS)

        // let shootingObject = "bullet";
        let shootingObject = "";
        // let shootingObject = "laser";
        // let shootingObject = "dagger";
        // let shootingObject = "fireball";

        //Amount shootingObjects to shoot
        let amountShootingObjects = 0;
        //Shooting skill learned 
        let shootingSkillLearned = false;
        //Shooting skill active
        let shootingSkillActive = false;

        //LASERS
        let baseCostForLaserLearn = 500;
        let baseCostForLaserUpgrade = 50;
        let laserShootingLearned = false;
        
        //DAGGERS
        let baseCostForDaggerLearn = 1000;
        let baseCostForDaggerUpgrade = 100;   
        let daggerShootingLearned = false;

        //BULLETS
        let baseCostForBulletLearn = 1500;
        let baseCostForBulletUpgrade = 150;
        let bulletShootingLearned = false;

        //FIREBALLS
        let baseCostForFireballLearn = 2000;
        let baseCostForfireballUpgrade = 200;
        let fireballShootingLearned = false;
    
        
        //Drop-Skills
        let activeDropSkill = 'lightning';

        //LIGHTNING

        //Lightning skill learned
        let lightningSkillLearned = false;
        let baseCostForLightningSkill = 1500;
        let lightningDamage = 50;
        let lightningRange = 1;
        //If lightning ability in use
        let lightningSkillActive = false;
        //Lightning skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let lightningCoolDown = false;

        //METEOR

        //Meteor skill learned
        let meteorSkillLearned = false;
        let baseCostForMeteorSkill = 3000;
        let meteorDamage = 0;
        let meteorRange = 1;
        //If Meteor ability in use
        let meteorSkillActive = false;
        //Meteor skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let meteorCoolDown = false;

        this.newGameData = {
            totalCoins,
            score,
            lives,
            totalKills,
            amountHasturKillToWinTheGame,
            regenerationLearned,
            regenerationCurrentLevelFactor,
            baseCostForRegenerationUpgrade,
            regenerationCoolDown,
            strenghtSkillLearned,
            baseCostForStrenghtLearn,
            powerOfStrenght,
            baseCostForStrenghtUpgrade,
            speedBoostLearned,
            speedCoolDown,
            speedBoostCurrentLevelFactor,
            baseCostForSpeedBoostUpgrade,
            shootingObject,
            shootingSkillLearned,
            shootingSkillActive,
            baseCostForBulletLearn,
            baseCostForBulletUpgrade,
            bulletShootingLearned,
            baseCostForLaserLearn,
            baseCostForLaserUpgrade,
            laserShootingLearned,
            baseCostForDaggerLearn,
            baseCostForDaggerUpgrade,
            daggerShootingLearned,
            baseCostForFireballLearn,
            baseCostForfireballUpgrade,
            fireballShootingLearned,
            amountShootingObjects,
            activeDropSkill,
            lightningSkillLearned,
            lightningDamage,
            baseCostForLightningSkill,
            lightningSkillActive,
            lightningCoolDown,
            lightningRange,
            meteorSkillLearned,
            meteorDamage,
            baseCostForMeteorSkill,
            meteorSkillActive,
            meteorCoolDown,
            meteorRange
        }
        
////////////////////////////////////////////////////////////////////////////////////////////////////

        //Play again button
        playAgainBtn.setInteractive({cursor: 'pointer'});
        playAgainBtn.on("pointerover", ()=>{
            playAgainBtn.style.setColor('black');
        });
        playAgainBtn.on("pointerout", ()=>{
            playAgainBtn.style.setColor('white');
        });
        playAgainBtn.on("pointerdown", ()=>{
            //Restarts game scene
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start("GameScene", this.newGameData);
            })
            
        });
    }

}

export default VictoryScene;