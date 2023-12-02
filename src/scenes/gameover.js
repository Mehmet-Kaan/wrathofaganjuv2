class GameoverScene extends Phaser.Scene{
    constructor() {
        super('GameoverScene');
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

        let gameOver = this.add.text(190, 100, "Game Over!", {font:'100px arcade'});

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
        
        //Total coins
        let totalCoins = 0;
        //Score
        let score = 0;
        //Lives
        let lives = 3;
        let totalKills = 0;
        let amountHasturKillToClearTheRoom = 10;
        let amountHasturKillToWinTheGame = 1000;
        let hasturFireballsAmout = 1;
        let currentLevel = 0;
        let nameOfThisScene = '';
        let nameOfNextScene = '';

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
        let strenghtUpgraded = false;
        //Kostnaden för uppgradering
        let baseCostForStrenghtUpgrade = 50;

        //SHIELD SKILL
        let shieldSkillLearned = false;
        let baseCostForShieldLearn = 500;
        let powerOfShield = 0;
        let shieldHealth = 0;
        let shieldActivated = false;
        //Kostnaden för uppgradering
        let baseCostForShieldUpgrade = 50;

        //SWORD SKILL
        let swordSkillLearned = false;
        let baseCostForSwordLearn = 500;
        let powerOfSword = 0;
        let swordDamage = 0;
        let swordUpgraded = false; 
        //Kostnaden för uppgradering
        let baseCostForSwordUpgrade = 50;


        //SPEEDBOOST SKILL
        let activePhysicalSkill = '';

        //UNTOUCHABLE SKILL
        //Untouchable skill learned
        let untouchableSkillLearned = false;
        //Freeze skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let untouchableCoolDown = false;
        let untouchableMiliSeconds = 0;
        let baseCostForUntouchableLearn = 3000;
        //Kostnaden för uppgradering
        let baseCostForUntouchableUpgrade = 500;
        let untouchableDamage = 0;

        //BULLETTIME SKILL
        //BulletTime skill learned
        let bulletTimeSkillLearned = false;
        //Freeze skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let bulletTimeCoolDown = false;
        let bulletTimeMiliSeconds = 0;
        let baseCostForBulletTimeLearn = 2000;
        //Kostnaden för uppgradering
        let baseCostForBulletTimeUpgrade = 500;
        let bulletTimeDamage = 0;

        //SpeedBoost skill learned
        let speedBoostLearned = false;
        //SpeedBoost skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let speedCoolDown = false;
        //Level upgrades faktor för regeneration-skill
        let speedBoostCurrentLevelFactor = 1;
        //Kostnaden för uppgradering
        let baseCostForSpeedBoostUpgrade = 500;

        //FREEZE SKILL
        //Freeze skill learned
        let freezeSkillLearned = false;
        //Freeze skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let freezeCoolDown = false;
        let freezingMiliSeconds = 0;
        let baseCostForFreezeLearn = 2000;
        //Kostnaden för uppgradering
        let baseCostForFreezeUpgrade = 500;
        let freezeDamage = 0;


                            //SHOOTING SKILLS (OBJECTS)

        let shootingObject = "";
        // let shootingObject = "bullet";
        // let shootingObject = "laser";
        // let shootingObject = "dagger";
        // let shootingObject = "fireball";
        let activeShootingMiliSeconds = 0;
        let shootingCoolDown = false;

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
        let activeDropSkill = '';

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

        //WATERBLAST
        //Waterblast skill learned
        let waterblastSkillLearned = false;
        let baseCostForWaterblastSkill = 2000;
        let waterblastDamage = 100;
        let waterblastRange = 1;
        //If fireblast ability in use
        let waterblastSkillActive = false;
        //Fireblast skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let waterblastCoolDown = false;

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

        //FIREBLAST
        //Fireblast skill learned
        let fireblastSkillLearned = false;
        let baseCostForFireblastSkill = 2000;
        let fireblastDamage = 100;
        let fireblastRange = 0.5;
        //If fireblast ability in use
        let fireblastSkillActive = false;
        //Fireblast skillen behöver inte cooldownas, 
        //spelaren har inte använt den än
        let fireblastCoolDown = false;

        this.newGameData = {
            nameOfThisScene,
            nameOfNextScene,
            currentLevel,
            totalCoins,
            score,
            lives,
            totalKills,
            amountHasturKillToClearTheRoom,
            amountHasturKillToWinTheGame,
            hasturFireballsAmout,

            swordSkillLearned,
            baseCostForSwordLearn,
            powerOfSword,
            swordDamage,
            baseCostForSwordUpgrade,
            swordUpgraded,

            shieldSkillLearned,
            baseCostForShieldLearn,
            powerOfShield,
            shieldHealth,
            shieldActivated,
            baseCostForShieldUpgrade,

            strenghtSkillLearned,
            baseCostForStrenghtLearn,
            powerOfStrenght,
            baseCostForStrenghtUpgrade,
            strenghtUpgraded,

            regenerationLearned,
            regenerationCurrentLevelFactor,
            baseCostForRegenerationUpgrade,
            regenerationCoolDown,

            activePhysicalSkill,
            untouchableSkillLearned,
            untouchableCoolDown,
            untouchableMiliSeconds,
            baseCostForUntouchableLearn,
            baseCostForUntouchableUpgrade,
            untouchableDamage,

            bulletTimeSkillLearned,
            bulletTimeCoolDown,
            bulletTimeMiliSeconds,
            baseCostForBulletTimeLearn,
            baseCostForBulletTimeUpgrade,
            bulletTimeDamage,

            speedBoostLearned,
            speedCoolDown,
            speedBoostCurrentLevelFactor,
            baseCostForSpeedBoostUpgrade,

            freezeSkillLearned,
            freezeCoolDown,
            freezingMiliSeconds,
            baseCostForFreezeLearn,
            baseCostForFreezeUpgrade,
            freezeDamage,

            shootingObject,
            shootingSkillLearned,
            shootingSkillActive,
            amountShootingObjects,
            activeShootingMiliSeconds,
            shootingCoolDown,

            baseCostForLaserLearn,
            baseCostForLaserUpgrade,
            laserShootingLearned,

            baseCostForDaggerLearn,
            baseCostForDaggerUpgrade,
            daggerShootingLearned,

            baseCostForBulletLearn,
            baseCostForBulletUpgrade,
            bulletShootingLearned,

            baseCostForFireballLearn,
            baseCostForfireballUpgrade,
            fireballShootingLearned,

            activeDropSkill,

            lightningSkillLearned,
            lightningDamage,
            baseCostForLightningSkill,
            lightningSkillActive,
            lightningCoolDown,
            lightningRange,

            waterblastSkillLearned,
            waterblastDamage,
            baseCostForWaterblastSkill,
            waterblastSkillActive,
            waterblastCoolDown,
            waterblastRange,
            
            meteorSkillLearned,
            meteorDamage,
            baseCostForMeteorSkill,
            meteorSkillActive,
            meteorCoolDown,
            meteorRange,

            fireblastSkillLearned,
            fireblastDamage,
            baseCostForFireblastSkill,
            fireblastSkillActive,
            fireblastCoolDown,
            fireblastRange,
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
export default GameoverScene;