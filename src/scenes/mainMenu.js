class MainMenuScene extends Phaser.Scene {

    constructor () {
        super('MainMenuScene');
    }

    init(){
            
    }

    preload(){
        this.load.image('backgroundPause', './assets/tilemap/backgroundPause.png');
        this.load.image('scroll-top', '/assets/images/scrolls_top.png');
        this.load.image('scroll-content', '/assets/images/scrolls_content.png');
        this.load.image('scroll-bottom', '/assets/images/scrolls_bottom.png');
        
        this.load.image('volumeOn', '/assets/images/volumeOn.png');
        this.load.image('volumeOff', '/assets/images/volumeOff.png');
    }

    create(){
        this.bgPause = this.add.image(0,0,'backgroundPause').setOrigin(0);

        this.mainTheme = this.sound.sounds[0];
        this.click = this.sound.add('click');

        this.volumeOn = this.add.image(20,20,'volumeOn');
        this.volumeOn.setScale(0.06);
        this.volumeOn.setDepth(3);

        this.volumeOn.setInteractive();

        this.volumeOn.on("pointerdown", ()=> {
            this.click.play();
            this.volumeOn.setVisible(false);
            this.volumeOff.setVisible(true);
            this.mainTheme.mute = true;
        });

        this.volumeOff = this.add.image(20,20,'volumeOff');
        this.volumeOff.setScale(0.06);
        this.volumeOff.setDepth(3);
        this.volumeOff.setVisible(false);

        this.volumeOff.setInteractive();
        this.volumeOff.on("pointerdown", ()=> {
            this.click.play();
            this.volumeOff.setVisible(false);
            this.volumeOn.setVisible(true);
            this.mainTheme.mute = false;
        });

        if(this.mainTheme.mute == true){
            this.volumeOn.setVisible(false);
            this.volumeOff.setVisible(true);
        }else{
            this.volumeOff.setVisible(false);
            this.volumeOn.setVisible(true);
        }

        this.cameras.main.fadeIn(1000, 0, 0, 0);

        this.scrltop = this.add.image(400,100,'scroll-top');
        this.scrltop.scale = 0.8;
        this.scrlcontent1 = this.add.image(400,170,'scroll-content');
        this.scrlcontent1.scale = 0.8;
        this.scrlcontent2 = this.add.image(400,270,'scroll-content');
        this.scrlcontent2.scale = 0.8;
        this.scrlcontent3 = this.add.image(400,370,'scroll-content');
        this.scrlcontent3.scale = 0.8;
        this.scrlbottom = this.add.image(400, 450,'scroll-bottom');
        this.scrlbottom.scale = 0.8;
        // Based on your game size, it may "stretch" and distort.
        let isLoggedIn = sessionStorage["userID"];
        if( isLoggedIn ) {
            let profileBtn = this.add.text(335, 300, "Profile", {font: "30px arcade", color: 'black'});
            profileBtn.setShadow(2, 2, 'white', 0);
            let logoutBtn = this.add.text(345, 375, "Logout", {font: "30px arcade", color: 'black'});
            logoutBtn.setShadow(2, 2, 'white', 0);

            profileBtn.setInteractive({ cursor: 'pointer' });
            
            profileBtn.on("pointerdown", ()=> {
                this.click.play();
                this.cameras.main.fadeOut(500, 0, 0, 0);
                this.scene.start("ProfileScene");
            })
            profileBtn.on("pointerover", () => {
                profileBtn.style.setColor('white');
                profileBtn.setShadow(2, 2, 'black', 0);
            })
            profileBtn.on("pointerout", () => {
                profileBtn.style.setColor('black');
                profileBtn.setShadow(2, 2, 'white', 0);
            })

            logoutBtn.setInteractive({ cursor: 'pointer' });
            
            logoutBtn.on("pointerdown", () => {
                let rqst = new Request("backend/logout.php");
                fetch(rqst, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET",
                    //body: JSON.stringify(data)
                })
                .then( response => {
                    if( response.status === 200 ){
                        sessionStorage.clear();
                        this.cameras.main.fadeOut(500, 0, 0, 0);
                        this.click.play();
                        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                            this.scene.start("MainMenuScene");
                        })
                    }
                })
                /* sessionStorage.clear();
                this.scene.start("MainMenuScene"); */
            })
            logoutBtn.on("pointerover", () => {
                logoutBtn.style.setColor('white');
                logoutBtn.setShadow(2, 2, 'black', 0);
            })
            logoutBtn.on("pointerout", () => {
                logoutBtn.style.setColor('black');
                logoutBtn.setShadow(2, 2, 'white', 0);
            })
        }else{
            let signupBtn = this.add.text(342, 375, "Sign Up", {font: "30px arcade", color: 'black'});
            signupBtn.setShadow(2, 2, 'white', 0);
            let loginBtn = this.add.text(350, 300, "Login", {font: "30px arcade", color: 'black'});
            loginBtn.setShadow(2, 2, 'white', 0);

            signupBtn.setInteractive({ cursor: 'pointer' });
            signupBtn.on("pointerdown", ()=> {
                this.click.play();
                this.cameras.main.fadeOut(500, 0, 0, 0);
                this.scene.start("SignupScene");
            })
            signupBtn.on("pointerover", () => {
                signupBtn.style.setColor('white');
                signupBtn.setShadow(2, 2, 'black', 0);
            })
            signupBtn.on("pointerout", () => {
                signupBtn.style.setColor('black');
                signupBtn.setShadow(2, 2, 'white', 0);
            })

            loginBtn.setInteractive({ cursor: 'pointer' });
	        loginBtn.on("pointerdown", ()=> {
                this.click.play();
                this.cameras.main.fadeOut(500, 0, 0, 0);
        	    this.scene.start("LoginScene");
        	})
            loginBtn.on("pointerover", () => {
                loginBtn.style.setColor('white');
                loginBtn.setShadow(2, 2, 'black', 0);
            })
            loginBtn.on("pointerout", () => {
                loginBtn.style.setColor('black');
                loginBtn.setShadow(2, 2, 'white', 0);
            })
	}


        let startGameBtn = this.add.text(275, 100, "Start Game", {font: "50px arcade", color: 'black'});
        startGameBtn.setShadow(2, 2, 'white', 0);
        //let leaderboardBtn = this.add.text(100, 560, "Leaderboard", {font: "20px arcade"});
        let howToBtn = this.add.text(350, 225, "How To", {font: "30px arcade", color: 'black'});
        howToBtn.setShadow(2, 2, 'white', 0);

        //let aboutBtn = this.add.text(650, 560, "About", {font: "20px arcade"});

        startGameBtn.setInteractive({ cursor: 'pointer' });
        //leaderboardBtn.setInteractive({ cursor: 'pointer' });
        
        //aboutBtn.setInteractive({ cursor: 'pointer' });
        howToBtn.setInteractive({ cursor: 'pointer' });

        //Data to start game with // Data for skills

        //Total coins
        let totalCoins = 100000;
        //Score
        let score = 900;
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

        this.data = {
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

        startGameBtn.on("pointerdown", ()=> {
            this.click.play();

            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                // this.mainTheme.mute = true;
                this.mainTheme.pause();
                this.scene.start("GameScene", this.data);
            })
        })
        startGameBtn.on("pointerover", () => {
            startGameBtn.style.setColor('white');
            startGameBtn.setShadow(2, 2, 'black', 0);
        })
        startGameBtn.on("pointerout", () => {
            startGameBtn.style.setColor('black');
            startGameBtn.setShadow(2, 2, 'white', 0);
        })

        /* leaderboardBtn.on("pointerdown", ()=> {
            this.scene.start("LeaderboardScene");
        })
        leaderboardBtn.on("pointerover", () => {
            leaderboardBtn.style.setColor('black');
        })
        leaderboardBtn.on("pointerout", () => {
            leaderboardBtn.style.setColor('white');
        }) */

        /* aboutBtn.on("pointerdown", ()=> {
            this.scene.start("AboutScene");
        })
        aboutBtn.on("pointerover", () => {
            aboutBtn.style.setColor('black');
        })
        aboutBtn.on("pointerout", () => {
            aboutBtn.style.setColor('white');
        }) */

        howToBtn.on("pointerdown", ()=> {
            this.click.play();

            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start("HowToScene");
            })
        })
        howToBtn.on("pointerover", () => {
            howToBtn.style.setColor('white');
            howToBtn.setShadow(2, 2, 'black', 0);
        })
        howToBtn.on("pointerout", () => {
            howToBtn.style.setColor('black');
            howToBtn.setShadow(2, 2, 'white', 0);
        })
    }

    update(time, delta){

    }
}

export default MainMenuScene;
