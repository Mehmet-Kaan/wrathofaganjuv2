class UpgradeScene extends Phaser.Scene{
    constructor() {
        super('UpgradeScene');
    }

    init(data){
        this.skillData = data;
    }
    preload(){
        //Laddar bakgrund bilden
        this.load.image('updateSceneBackground', './assets/tilemap/updateSceneBackground.png');

        this.cameras.main.fadeIn(1000, 0, 0, 0);
    }

    create(){
        //Background image for Pause Scene 
        this.bgPause = this.add.image(0,0,'updateSceneBackground').setOrigin(0);

        this.mainTheme = this.sound.sounds[0];
        this.mainTheme.resume();

        this.click = this.sound.add('click');

        //Definierar variabeln keyESC = "ESC"
        this.keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //Sounds
        this.skillMastered = this.sound.add('skillMastered');
        this.skillLearned = this.sound.add('skillLearned');
        this.skillUpgraded1 = this.sound.add('skillUpgraded1');
        this.skillUpgraded2 = this.sound.add('skillUpgraded2');

        //Placeholder for skills
        this.skillPlaceHolderRegeneration1 = this.add.image(100,500, 'skillPlaceHolder');
        this.skillPlaceHolderRegeneration1.setScale(0.8);
        this.skillPlaceHolderRegeneration1.setDepth(1);

        this.skillPlaceHolderStrenght = this.add.image(100,380, 'skillPlaceHolder');
        this.skillPlaceHolderStrenght.setScale(0.8);
        this.skillPlaceHolderStrenght.setDepth(1);

        this.skillPlaceHolderShield = this.add.image(100,260, 'skillPlaceHolder');
        this.skillPlaceHolderShield.setScale(0.8);
        this.skillPlaceHolderShield.setDepth(1);

        this.skillPlaceHolderEquipedSword = this.add.image(100,140, 'skillPlaceHolder');
        this.skillPlaceHolderEquipedSword.setScale(0.8);
        this.skillPlaceHolderEquipedSword.setDepth(1);

        //Pace Skills
        this.skillPlaceHolderSpeedBoost = this.add.image(300,500, 'skillPlaceHolder');
        this.skillPlaceHolderSpeedBoost.setScale(0.8);
        this.skillPlaceHolderSpeedBoost.setDepth(1);

        this.skillPlaceHolderBulletTime = this.add.image(300,380, 'skillPlaceHolder');
        this.skillPlaceHolderBulletTime.setScale(0.8);
        this.skillPlaceHolderBulletTime.setDepth(1);

        this.skillPlaceHolderUntouchable = this.add.image(300,260, 'skillPlaceHolder');
        this.skillPlaceHolderUntouchable.setScale(0.8);
        this.skillPlaceHolderUntouchable.setDepth(1);

        this.skillPlaceHolderFreeze = this.add.image(300,140, 'skillPlaceHolder');
        this.skillPlaceHolderFreeze.setScale(0.8);
        this.skillPlaceHolderFreeze.setDepth(1);

        //Shooting-Skills
        this.skillPlaceHolderFireball = this.add.image(500,500, 'skillPlaceHolder');
        this.skillPlaceHolderFireball.setScale(0.8);
        this.skillPlaceHolderFireball.setDepth(1);

        this.skillPlaceHolderBullet = this.add.image(500,380, 'skillPlaceHolder');
        this.skillPlaceHolderBullet.setScale(0.8);
        this.skillPlaceHolderBullet.setDepth(1);

        this.skillPlaceHolderDagger = this.add.image(500,260, 'skillPlaceHolder');
        this.skillPlaceHolderDagger.setScale(0.8);
        this.skillPlaceHolderDagger.setDepth(1);

        this.skillPlaceHolderLaser = this.add.image(500,140, 'skillPlaceHolder');
        this.skillPlaceHolderLaser.setScale(0.8);
        this.skillPlaceHolderLaser.setDepth(1);

        //DropDown-Skills
        this.skillPlaceHolderLightning = this.add.image(700,500, 'skillPlaceHolder');
        this.skillPlaceHolderLightning.setScale(0.8);
        this.skillPlaceHolderLightning.setDepth(1);

        this.skillPlaceHolderWaterblast = this.add.image(700,380, 'skillPlaceHolder');
        this.skillPlaceHolderWaterblast.setScale(0.8);
        this.skillPlaceHolderWaterblast.setDepth(1);

        this.skillPlaceHolderMeteor = this.add.image(700,260, 'skillPlaceHolder');
        this.skillPlaceHolderMeteor.setScale(0.8);
        this.skillPlaceHolderMeteor.setDepth(1);

        this.skillPlaceHolderFireblast = this.add.image(700,140, 'skillPlaceHolder');
        this.skillPlaceHolderFireblast.setScale(0.8);
        this.skillPlaceHolderFireblast.setDepth(1);

        //Creates back button
        let backToPause = this.add.text(20, 10, "Back", {font: "20px arcade"});
        backToPause.setShadow(2, 2, '#000000', 0);

        //Creates back button
        let resumeGameButton = this.add.text(720, 10, "Resume", {font: "20px arcade"});
        resumeGameButton.setShadow(2, 2, '#000000', 0);

        //Creates Title "Skills"
        let skills = this.add.text(300, 2, "Skills", {font:'60px arcade'});
        skills.setShadow(2, 2, '#000000', 0);

        //Creates "Coins"
        this.coins = this.add.text(20, 40, '',{font: "20px arcade"});
        this.coins.setShadow(2, 2, '#000000', 0);

        //Skill notification
        this.info = this.add.text(230, 65, '', {fill: 'white', font: "25px arcade"});
        this.info.setShadow(2, 2, '#000000', 0);
        this.info.setVisible(false);
        this.info.setDepth(2);

        //Category 1
        let regeneration = this.add.text(35, 550, "Regeneration", {font: "20px arcade"});
        regeneration.setShadow(2, 2, '#000000', 0);
        let strenght = this.add.text(59, 430, "Strenght", {font: "20px arcade"});
        strenght.setShadow(2, 2, '#000000', 0);
        let shield = this.add.text(67, 310, "Shield", {font: "20px arcade"});
        shield.setShadow(2, 2, '#000000', 0);
        let sword = this.add.text(72, 190, "Sword", {font: "20px arcade"});
        sword.setShadow(2, 2, '#000000', 0);

        //Category 2
        let untouchable = this.add.text(240, 550, "Untouchable", {font: "20px arcade"});
        untouchable.setShadow(2, 2, '#000000', 0);
        let bulletTime = this.add.text(245, 430, "Bullet Time", {font: "20px arcade"});
        bulletTime.setShadow(2, 2, '#000000', 0);
        let speedBoost = this.add.text(248, 310, "SpeedBoost", {font: "20px arcade"});
        speedBoost.setShadow(2, 2, '#000000', 0);
        let freeze = this.add.text(268, 190, "Freeze", {font: "20px arcade"});
        freeze.setShadow(2, 2, '#000000', 0);

        //ShootingSkills text
        let fireball = this.add.text(451,550, "Fireballs", {font: "20px arcade"});
        fireball.setShadow(2, 2, '#000000', 0);
        let bullet = this.add.text(462, 430, "Bullets", {font: "20px arcade"});
        bullet.setShadow(2, 2, '#000000', 0);
        let Daggers = this.add.text(462, 310, "Daggers", {font: "20px arcade"});
        Daggers.setShadow(2, 2, '#000000', 0);
        let Laser = this.add.text(467, 190, "Lasers", {font: "20px arcade"});
        Laser.setShadow(2, 2, '#000000', 0);

        //Dropskills text
        let lightning = this.add.text(652, 550, "Lightning", {font: "20px arcade"});
        lightning.setShadow(2, 2, '#000000', 0);
        let waterblast = this.add.text(649, 430, "Waterblast", {font: "20px arcade"});
        waterblast.setShadow(2, 2, '#000000', 0);
        let meteor = this.add.text(665, 310, "Meteor", {font: "20px arcade"});
        meteor.setShadow(2, 2, '#000000', 0);
        let fireblast = this.add.text(652, 190, "Fireblast", {font: "20px arcade"});
        fireblast.setShadow(2, 2, '#000000', 0);
       
        //Information about the skill
        let learnInfo = this.add.text(160,500, 'Info:', {font: "20px arcade"});
        learnInfo.setDepth(1);
        learnInfo.setVisible(false);

        //Cost of the skill
        let skillCost = this.add.text(165,520, 'Cost:', {font: "20px arcade"});
        skillCost.setDepth(1);
        skillCost.setVisible(false);

        /////////////////////////////////////////////////////////////////////////
                                //Skill - Regeneration

        //Creates regeneration skill image
        let learnRegeneration = this.add.image(100,500,'healthIconNotActive');
        learnRegeneration.setScale(0.8);

        //Current level of regeneration skill
        this.regenerationLevelCircle = this.add.circle(70, 470, 13, "black");
        this.regenerationLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.regenerationLevelCircle.setVisible(false);
        this.regenerationLevelCircle.setDepth(4);
        this.regenerationsLevel = this.add.text(64.5,460.5, '1', {font: "18px arcade", fill:"orange"});
        this.regenerationsLevel.setVisible(false);
        this.regenerationsLevel.setDepth(5);

        if(this.skillData.regenerationCurrentLevelFactor > 10){
            this.regenerationLevelCircle.setVisible(true);
            this.regenerationsLevel.setVisible(true);

            if(this.skillData.regenerationCurrentLevelFactor == 20){
                this.regenerationsLevel.text = 1;
            }else if(this.skillData.regenerationCurrentLevelFactor == 40){
                this.regenerationsLevel.text = 2;
            }else if(this.skillData.regenerationCurrentLevelFactor == 80){
                this.regenerationsLevel.text = 3;
            }
        }

        learnRegeneration.setInteractive({ cursor: 'pointer' });

        //Mouse on - Regeneration skill icon
        learnRegeneration.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 148;
            learnInfo.y = 480;
            learnInfo.text = '+10 Health';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 153;
            skillCost.y = 500;
            skillCost.text = 'Cost: 100';
        });

        //Mouse out - Regeneration skill icon
        learnRegeneration.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - Regeneration skill icon
        learnRegeneration.on("pointerdown", () => {
            if(this.skillData.regenerationLearned == false){
                if(this.skillData.totalCoins >= 100){
                    this.skillData.totalCoins -= this.skillData.baseCostForRegenerationUpgrade;
                    this.skillData.baseCostForRegenerationUpgrade = this.skillData.baseCostForRegenerationUpgrade * 2;
                    this.skillData.regenerationCurrentLevelFactor = 10;
                    this.skillData.regenerationLearned = true;
                    
                    learnRegeneration.destroy();
                    regenerationActive.setVisible(true);

                    learnInfo.text = '+20 Health';
                    skillCost.text = 'Cost: 200';

                    this.skillLearned.play();
                    
                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned, +10 Health!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);
                    }, 2000);
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //Creates regeneration1 skill image
        let regenerationActive = this.add.image(100,500,'healthIcon');
        regenerationActive.setScale(0.8);
        regenerationActive.setVisible(false);

        if(this.skillData.regenerationLearned == true){
            learnRegeneration.destroy();
            regenerationActive.setVisible(true);
        }

        regenerationActive.setInteractive({ cursor: 'pointer' });

        //Mouse on - Regeneration skill icon
        regenerationActive.on("pointerover", () => {
            if(this.skillData.regenerationCurrentLevelFactor == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 480;
                learnInfo.text = '+20 Health';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 500;
                skillCost.text = 'Cost: 200';
            }
            else if(this.skillData.regenerationCurrentLevelFactor == 20){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 480;
                learnInfo.text = '+40 Health';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 500;
                skillCost.text = 'Cost: 400';
            }else if(this.skillData.regenerationCurrentLevelFactor == 40){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 480;
                learnInfo.text = '+80 Health';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 500;
                skillCost.text = 'Cost: 800';
            }else if(this.skillData.regenerationCurrentLevelFactor == 80){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 170;
               learnInfo.y = 480;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 153;
               skillCost.y = 500;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - Regeneration skill icon
        regenerationActive.on("pointerout", () => {
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - Regeneration skill icon
        regenerationActive.on("pointerdown", () => {
            if(this.skillData.regenerationLearned == true){
                if(this.skillData.totalCoins >= this.skillData.baseCostForRegenerationUpgrade){
                    //////////////////////////////////////////
                    //Regeneration - First Upgrade
                    if(this.skillData.regenerationCurrentLevelFactor == 10){
                        this.skillData.totalCoins -= this.skillData.baseCostForRegenerationUpgrade;
                        this.skillData.baseCostForRegenerationUpgrade = this.skillData.baseCostForRegenerationUpgrade * 2;
                        this.skillData.regenerationCurrentLevelFactor = this.skillData.regenerationCurrentLevelFactor * 2;

                        this.regenerationLevelCircle.setVisible(true);
                        this.regenerationsLevel.setVisible(true);

                        this.regenerationsLevel.text = 1;

                        learnInfo.text = '+40 Health';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +20 health!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //////////////////////////////////////////
                    //Regeneration - Second Upgrade
                    else if(this.skillData.regenerationCurrentLevelFactor == 20){
                        if(this.skillData.totalCoins >= this.skillData.baseCostForRegenerationUpgrade){
                            this.skillData.totalCoins -= this.skillData.baseCostForRegenerationUpgrade;
                            this.skillData.baseCostForRegenerationUpgrade = this.skillData.baseCostForRegenerationUpgrade * 2;
                            this.skillData.regenerationCurrentLevelFactor = this.skillData.regenerationCurrentLevelFactor * 2;

                            this.regenerationsLevel.text = 2;

                            learnInfo.text = '+80 Health';
                            skillCost.text = 'Cost: 800';

                            this.skillUpgraded2.play();

                            //Display inline "Second level reached!"
                            this.info.text = 'Skill upgraded +40 health!';
                            this.info.setVisible(true);
                            setTimeout(() => {
                                //Display none => "Max level reached"
                                this.info.setVisible(false);
                            }, 2000);
                        }else{
                            //Display inline "Not enough coins to upgrade!"
                            this.info.text = 'Not enough coins to upgrade!';
                            this.info.setVisible(true);
                            setTimeout(() => {
                                //Display none => "Not enough coins to upgrade!"
                                this.info.setVisible(false);;
                            }, 2000);
                        }
                    }

                    //////////////////////////////////////////
                    //Regeneration - Third Upgrade
                    else if(this.skillData.regenerationCurrentLevelFactor == 40){
                            if(this.skillData.totalCoins >= this.skillData.baseCostForRegenerationUpgrade){
                                this.skillData.totalCoins -= this.skillData.baseCostForRegenerationUpgrade;
                                this.skillData.baseCostForRegenerationUpgrade = this.skillData.baseCostForRegenerationUpgrade * 2;
                                this.skillData.regenerationCurrentLevelFactor = this.skillData.regenerationCurrentLevelFactor * 2;
        
                                this.regenerationsLevel.text = 3;

                                learnInfo.x = 170;
                                learnInfo.text = 'Skill';
                                skillCost.text = 'Mastered';

                                this.skillMastered.play();

                                //Display inline "Second level reached!"
                                this.info.text = 'Skill upgraded +80 health!';
                                this.info.setVisible(true);
                                setTimeout(() => {
                                    //Display none => "Max level reached"
                                    this.info.setVisible(false);
                                }, 2000);
                            }else{
                                //Display inline "Not enough coins to upgrade!"
                                this.info.text = 'Not enough coins to upgrade!';
                                this.info.setVisible(true);
                                setTimeout(() => {
                                    //Display none => "Not enough coins to upgrade!"
                                    this.info.setVisible(false);;
                                }, 2000);
                            }
                    }

                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }   
        });

                        // PHSYCAL SKILL - STRENGHT

        //Skapar Strenght skill icon
        let learnStrenghtSkill = this.add.image(99, 380,'strenghtIconNotLearned');
        learnStrenghtSkill.setScale(0.83);

        //Current level of laser skill
        this.strenghtLevelCircle = this.add.circle(70, 350, 13, "black");
        this.strenghtLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.strenghtLevelCircle.setVisible(false);
        this.strenghtLevelCircle.setDepth(4);
        this.strenghtsLevel = this.add.text(64.5,340.5, '1', {font: "18px arcade", fill:"orange"});
        this.strenghtsLevel.setVisible(false);
        this.strenghtsLevel.setDepth(5);

        if(this.skillData.powerOfStrenght > 1){
            this.strenghtLevelCircle.setVisible(true);
            this.strenghtsLevel.setVisible(true);

            if(this.skillData.powerOfStrenght == 10){
                this.strenghtsLevel.text = 1;
            }
            if(this.skillData.powerOfStrenght == 20){
                this.strenghtsLevel.text = 2;
            }
            if(this.skillData.powerOfStrenght == 35){
                this.strenghtsLevel.text = 3;
            }
        }
       
        if(this.skillData.strenghtSkillLearned == true){
            learnStrenghtSkill.setVisible(false);
        }else{
            learnStrenghtSkill.setVisible(true);
        }

        learnStrenghtSkill.setInteractive({ cursor: 'pointer' });
       
        learnStrenghtSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 145;
            learnInfo.y = 360;
            learnInfo.text = '+5 Strenght';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 153;
            skillCost.y = 380;
            skillCost.text = 'Cost: 500';
        });
        learnStrenghtSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnStrenghtSkill.on("pointerdown", () => {
            if(this.skillData.strenghtSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForStrenghtLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForStrenghtLearn;
                    this.skillData.baseCostForStrenghtUpgrade =  this.skillData.baseCostForStrenghtUpgrade * 2;

                    this.skillData.strenghtSkillLearned = true; 

                    this.skillData.powerOfStrenght = 1;
                    this.skillData.strenghtUpgraded = true;

                    learnStrenghtSkill.destroy();
                    strenghtLearned.setVisible(true);
                    strenghtLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +5 Strenght!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Strenght - Upgrades

        //Creates strenghtLearned skill image
        let strenghtLearned = this.add.image(99, 380,'strenghtIconLearned');
        strenghtLearned.setScale(0.83);
        strenghtLearned.setVisible(false);
        strenghtLearned.setDepth(-1);

        if(this.skillData.strenghtSkillLearned  !== true){
            strenghtLearned.setVisible(false);
        }else{
            strenghtLearned.setVisible(true);
            strenghtLearned.setDepth(0);
        }

        strenghtLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - strenghtLearned skill icon
        strenghtLearned.on("pointerover", () => {

              if(this.skillData.strenghtSkillLearned == true && this.skillData.powerOfStrenght == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 160;
                learnInfo.y = 360;
                learnInfo.text = '+10 Str';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 380;
                skillCost.text = 'Cost: 100';

            } else if (this.skillData.strenghtSkillLearned == true && this.skillData.powerOfStrenght == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 160;
                learnInfo.y = 360;
                learnInfo.text = '+10 Str';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 380;
                skillCost.text = 'Cost: 200';
            }
            else if (this.skillData.strenghtSkillLearned == true && this.skillData.powerOfStrenght == 20){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 160;
                learnInfo.y = 360;
                learnInfo.text = '+15 Str';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 380;
                skillCost.text = 'Cost: 400';
            }
            else if (this.skillData.strenghtSkillLearned == true && this.skillData.powerOfStrenght == 35){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 170;
                learnInfo.y = 360;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 380;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - strenghtLearned skill icon
        strenghtLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - strenghtLearned skill icon
        strenghtLearned.on("pointerdown", () => {
            if(this.skillData.strenghtSkillLearned == true){

                if(this.skillData.totalCoins >= this.skillData.baseCostForStrenghtUpgrade){

                    //Strenght first upgrade
                    if(this.skillData.powerOfStrenght  == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForStrenghtUpgrade;
                        this.skillData.baseCostForStrenghtUpgrade = this.skillData.baseCostForStrenghtUpgrade * 2;
                        this.skillData.powerOfStrenght = 10;

                        this.skillData.strenghtUpgraded = true;

                        this.strenghtLevelCircle.setVisible(true);
                        this.strenghtsLevel.setVisible(true);
                        this.strenghtsLevel.text = 1;

                        learnInfo.text = '+10 Str';
                        skillCost.text = 'Cost: 200';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +10 Strenght!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    
                    //Strenght second upgrade
                    else if(this.skillData.powerOfStrenght == 10){
                        this.skillData.totalCoins -= this.skillData.baseCostForStrenghtUpgrade;
                        this.skillData.baseCostForStrenghtUpgrade = this.skillData.baseCostForStrenghtUpgrade * 2;
                        this.skillData.powerOfStrenght = 20;

                        this.skillData.strenghtUpgraded = true;

                        this.strenghtsLevel.text = 2;

                        learnInfo.text = '+15 Str';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +20 Strenght!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //Strenght third upgrade
                    else if(this.skillData.powerOfStrenght == 20){
                        this.skillData.totalCoins -= this.skillData.baseCostForStrenghtUpgrade;
                        this.skillData.baseCostForStrenghtUpgrade = this.skillData.baseCostForStrenghtUpgrade * 2;
                        this.skillData.powerOfStrenght = 35;
                        
                        this.skillData.strenghtUpgraded = true;
                        
                        this.strenghtsLevel.text = 3;

                        learnInfo.x = 170;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +35 Strenght!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });


                           // PHSYCAL SKILL - SHIELD

        //Skapar shield skill icon
        let learnShieldSkill = this.add.image(100, 260,'shieldIconNotLearned');
        learnShieldSkill.setScale(0.8);

        //Current level of laser skill
        this.shieldLevelCircle = this.add.circle(70, 230, 13, "black");
        this.shieldLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.shieldLevelCircle.setVisible(false);
        this.shieldLevelCircle.setDepth(4);
        this.shieldsLevel = this.add.text(64.5,220.5, '1', {font: "18px arcade", fill:"orange"});
        this.shieldsLevel.setVisible(false);
        this.shieldsLevel.setDepth(5);

        if(this.skillData.powerOfShield > 1){
            this.shieldLevelCircle.setVisible(true);
            this.shieldsLevel.setVisible(true);

            if(this.skillData.powerOfShield == 10){
                this.shieldsLevel.text = 1;
            }
            if(this.skillData.powerOfShield == 20){
                this.shieldsLevel.text = 2;
            }
            if(this.skillData.powerOfShield == 35){
                this.shieldsLevel.text = 3;
            }
        }
       
        if(this.skillData.shieldSkillLearned == true){
            learnShieldSkill.setVisible(false);
        }else{
            learnShieldSkill.setVisible(true);
        }

        learnShieldSkill.setInteractive({ cursor: 'pointer' });
       
        learnShieldSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 165;
            learnInfo.y = 240;
            learnInfo.text = '100%';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 153;
            skillCost.y = 260;
            skillCost.text = 'Cost: 500';
        });
        learnShieldSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnShieldSkill.on("pointerdown", () => {
            if(this.skillData.shieldSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForShieldLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForShieldLearn;
                    this.skillData.baseCostForShieldUpgrade =  this.skillData.baseCostForShieldUpgrade * 2;

                    this.skillData.shieldSkillLearned = true; 
                    this.skillData.shieldActivated = false; 

                    this.skillData.powerOfShield = 1;
                    this.skillData.shieldHealth = 100;

                    learnShieldSkill.destroy();
                    shieldLearned.setVisible(true);
                    shieldLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - 100% Shield!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Shield - Upgrades

        //Creates shieldLearned skill image
        let shieldLearned = this.add.image(100, 260,'shieldIconLearned');
        shieldLearned.setScale(0.8);
        shieldLearned.setVisible(false);
        shieldLearned.setDepth(-1);

        if(this.skillData.shieldSkillLearned  !== true){
            shieldLearned.setVisible(false);
        }else{
            shieldLearned.setVisible(true);
            shieldLearned.setDepth(0);
        }

        shieldLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - shieldLearned skill icon
        shieldLearned.on("pointerover", () => {

              if(this.skillData.shieldSkillLearned == true && this.skillData.powerOfShield == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 165;
                learnInfo.y = 240;
                learnInfo.text = '150%';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 260;
                skillCost.text = 'Cost: 100';

            } else if (this.skillData.shieldSkillLearned == true && this.skillData.powerOfShield == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 165;
                learnInfo.y = 240;
                learnInfo.text = '200%';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 260;
                skillCost.text = 'Cost: 200';
            }
            else if (this.skillData.shieldSkillLearned == true && this.skillData.powerOfShield == 20){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 165;
                learnInfo.y = 240;
                learnInfo.text = '300%';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 260;
                skillCost.text = 'Cost: 400';
            }
            else if (this.skillData.shieldSkillLearned == true && this.skillData.powerOfShield == 35){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 170;
                learnInfo.y = 240;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 256;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - shieldLearned skill icon
        shieldLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - shieldLearned skill icon
        shieldLearned.on("pointerdown", () => {
            if(this.skillData.shieldSkillLearned == true){

                if(this.skillData.totalCoins >= this.skillData.baseCostForShieldUpgrade){

                    //Shields first upgrade
                    if(this.skillData.powerOfShield  == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForShieldUpgrade;
                        this.skillData.baseCostForShieldUpgrade = this.skillData.baseCostForShieldUpgrade * 2;
                        this.skillData.powerOfShield = 10;

                        this.shieldLevelCircle.setVisible(true);
                        this.shieldsLevel.setVisible(true);
                        this.shieldsLevel.text = 1;

                        this.skillData.shieldHealth = 150;
                        this.skillData.shieldActivated = false; 

                        learnInfo.text = '200%';
                        skillCost.text = 'Cost: 200';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, 150% Shield!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    
                    //Shields second upgrade
                    else if(this.skillData.powerOfShield == 10){
                        this.skillData.totalCoins -= this.skillData.baseCostForShieldUpgrade;
                        this.skillData.baseCostForShieldUpgrade = this.skillData.baseCostForShieldUpgrade * 2;
                        this.skillData.powerOfShield = 20;

                        this.shieldsLevel.text = 2;
                        this.skillData.shieldHealth = 200;
                        this.skillData.shieldActivated = false; 

                        learnInfo.text = '300%';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, 200% Shield!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //Shields third upgrade
                    else if(this.skillData.powerOfShield == 20){
                        this.skillData.totalCoins -= this.skillData.baseCostForShieldUpgrade;
                        this.skillData.baseCostForShieldUpgrade = this.skillData.baseCostForShieldUpgrade * 2;
                        this.skillData.powerOfShield = 35;
                        
                        this.shieldsLevel.text = 3;
                        this.skillData.shieldHealth = 300;
                        this.skillData.shieldActivated = false; 

                        learnInfo.x = 170;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, 300% Shield!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                        
                    }

                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });

        //////////////////////////////////////////////////////////////////////////////
                                 // PHSYCAL SKILL - SWORD

        //Skapar sword skill icon
        let learnSwordSkill = this.add.image(100, 140,'swordIconNotLearned');
        learnSwordSkill.setScale(0.8);

        //Current level of sword skill
        this.swordLevelCircle = this.add.circle(70, 110, 13, "black");
        this.swordLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.swordLevelCircle.setVisible(false);
        this.swordLevelCircle.setDepth(4);
        this.swordLevel = this.add.text(64.5,100.5, '1', {font: "18px arcade", fill:"orange"});
        this.swordLevel.setVisible(false);
        this.swordLevel.setDepth(5);

        if(this.skillData.powerOfSword > 1){
            this.swordLevelCircle.setVisible(true);
            this.swordLevel.setVisible(true);

            if(this.skillData.powerOfSword == 10){
                this.swordLevel.text = 1;
            }
            if(this.skillData.powerOfSword == 20){
                this.swordLevel.text = 2;
            }
            if(this.skillData.powerOfSword == 35){
                this.swordLevel.text = 3;
            }
        }
       
        if(this.skillData.swordSkillLearned == true){
            learnSwordSkill.setVisible(false);
        }else{
            learnSwordSkill.setVisible(true);
        }

        learnSwordSkill.setInteractive({ cursor: 'pointer' });
       
        learnSwordSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 148;
            learnInfo.y = 120;
            learnInfo.text = '+10 Damage';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 153;
            skillCost.y = 140;
            skillCost.text = 'Cost: 500';
        });
        learnSwordSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnSwordSkill.on("pointerdown", () => {
            if(this.skillData.swordSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForSwordLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForSwordLearn;
                    this.skillData.baseCostForSwordUpgrade =  this.skillData.baseCostForSwordUpgrade * 2;

                    this.skillData.swordSkillLearned = true; 
                    this.skillData.swordUpgraded = true; 

                    this.skillData.powerOfSword = 1;
                    this.skillData.swordDamage = 20;

                    learnSwordSkill.destroy();
                    swordLearned.setVisible(true);
                    swordLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +10 Damage!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Sword - Upgrades

        //Creates swordLearned skill image
        let swordLearned = this.add.image(100, 140,'swordIconLearned');
        swordLearned.setScale(0.8);
        swordLearned.setVisible(false);
        swordLearned.setDepth(-1);

        if(this.skillData.swordSkillLearned  !== true){
            swordLearned.setVisible(false);
        }else{
            swordLearned.setVisible(true);
            swordLearned.setDepth(0);
        }

        swordLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - swordLearned skill icon
        swordLearned.on("pointerover", () => {

              if(this.skillData.swordSkillLearned == true && this.skillData.powerOfSword == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 120;
                learnInfo.text = '+15 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 140;
                skillCost.text = 'Cost: 100';

            } else if (this.skillData.swordSkillLearned == true && this.skillData.powerOfSword == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 120;
                learnInfo.text = '+20 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 140;
                skillCost.text = 'Cost: 200';
            }
            else if (this.skillData.swordSkillLearned == true && this.skillData.powerOfSword == 20){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 148;
                learnInfo.y = 120;
                learnInfo.text = '+30 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 140;
                skillCost.text = 'Cost: 400';
            }
            else if (this.skillData.swordSkillLearned == true && this.skillData.powerOfSword == 35){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 170;
                learnInfo.y = 120;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 153;
                skillCost.y = 140;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - swordLearned skill icon
        swordLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - swordLearned skill icon
        swordLearned.on("pointerdown", () => {
            if(this.skillData.swordSkillLearned == true){

                if(this.skillData.totalCoins >= this.skillData.baseCostForSwordUpgrade){

                    //Shields first upgrade
                    if(this.skillData.powerOfSword == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForSwordUpgrade;
                        this.skillData.baseCostForSwordUpgrade = this.skillData.baseCostForSwordUpgrade * 2;
                        this.skillData.powerOfSword = 10;

                        this.skillData.swordUpgraded = true; 

                        this.swordLevelCircle.setVisible(true);
                        this.swordLevel.setVisible(true);
                        this.swordLevel.text = 1;

                        this.skillData.swordDamage = 25;

                        learnInfo.text = '+20 Damage';
                        skillCost.text = 'Cost: 200';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +15 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    
                    //Shields second upgrade
                    else if(this.skillData.powerOfSword == 10){
                        this.skillData.totalCoins -= this.skillData.baseCostForSwordUpgrade;
                        this.skillData.baseCostForSwordUpgrade = this.skillData.baseCostForSwordUpgrade * 2;
                        this.skillData.powerOfSword = 20;

                        this.swordLevel.text = 2;
                        this.skillData.swordDamage = 30;
                        this.skillData.swordUpgraded = true; 

                        learnInfo.text = '+30 Damage';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +20 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //Shields third upgrade
                    else if(this.skillData.powerOfSword == 20){
                        this.skillData.totalCoins -= this.skillData.baseCostForSwordUpgrade;
                        this.skillData.baseCostForSwordUpgrade = this.skillData.baseCostForSwordUpgrade * 2;
                        this.skillData.powerOfSword = 35;
                        
                        this.swordLevel.text = 3;
                        this.skillData.swordDamage = 40;
                        this.skillData.swordUpgraded = true; 

                        learnInfo.x = 170;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +30 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                        
                    }

                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });


        /////////////////////////////////////////////////////////////////////////
                                //Skill - Untouchable

        this.selectedPhysicalSkill = this.add.image(339, 472, 'selected');
        this.selectedPhysicalSkill.setVisible(false);
        this.selectedPhysicalSkill.setDepth(3);

        //Creates untouchable skill image
        let learnUntouchable = this.add.image(300,500,'untouchableIconNotLearned');
        learnUntouchable.setScale(0.8);

        //Current level of laser skill
        this.untouchableLevelCircle = this.add.circle(270, 470, 13, "black");
        this.untouchableLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.untouchableLevelCircle.setVisible(false);
        this.untouchableLevelCircle.setDepth(4);
        this.untouchableLevel = this.add.text(264.5,460.5, '1', {font: "18px arcade", fill:"orange"});
        this.untouchableLevel.setVisible(false);
        this.untouchableLevel.setDepth(5);

        if(this.skillData.untouchableMiliSeconds > 2000){
            this.untouchableLevelCircle.setVisible(true);
            this.untouchableLevel.setVisible(true);

            if(this.skillData.untouchableMiliSeconds == 4000){
                this.untouchableLevel.text = 1;
            }else if(this.skillData.untouchableMiliSeconds == 8000){
                this.untouchableLevel.text = 2;
            }else if(this.skillData.untouchableMiliSeconds == 16000){
                this.untouchableLevel.text = 3;
            }
        }

        learnUntouchable.setInteractive({ cursor: 'pointer' });
       
        learnUntouchable.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 345;
            learnInfo.y = 480;
            learnInfo.text = '+2 Seconds';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 345;
            skillCost.y = 500;
            skillCost.text = 'Cost: 3000';
        });
        learnUntouchable.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnUntouchable.on("pointerdown", () => {
            if(this.skillData.untouchableSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForUntouchableLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForUntouchableLearn;
                    this.skillData.baseCostForUntouchableUpgrade = this.skillData.baseCostForUntouchableUpgrade * 2;
                    
                    this.skillData.untouchableSkillLearned = true;
                    this.skillData.untouchableMiliSeconds = 2000;

                    this.skillData.activePhysicalSkill = 'untouchable';

                    learnUntouchable.destroy();
                    untouchableLearned.setVisible(true);
                    untouchableLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned - +2 Seconds!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Untouchable - First Upgrade

        //Creates untouchableLearned skill image
        let untouchableLearned = this.add.image(300,500,'untouchableIconLearned');
        untouchableLearned.setScale(0.8);
        untouchableLearned.setVisible(false);
        untouchableLearned.setDepth(-1);

        if(this.skillData.untouchableSkillLearned == true){
            learnUntouchable.destroy();
            untouchableLearned.setVisible(true);
            untouchableLearned.setDepth(0);
        }

        untouchableLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - untouchableLearned skill icon
        untouchableLearned.on("pointerover", () => {

            if(this.skillData.untouchableMiliSeconds == 2000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 480;
                learnInfo.text = '+2 Seconds';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 500;
                skillCost.text = 'Cost: 1000';
            }
            else if(this.skillData.untouchableMiliSeconds == 4000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 480;
                learnInfo.text = '+4 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 500;
                skillCost.text = 'Cost: 2000';
            }else if(this.skillData.untouchableMiliSeconds == 8000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 480;
                learnInfo.text = '+8 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 500;
                skillCost.text = 'Cost: 4000';
            }else if(this.skillData.untouchableMiliSeconds == 16000){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 370;
               learnInfo.y = 480;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 353;
               skillCost.y = 500;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - untouchableLearned skill icon
        untouchableLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - untouchableLearned skill icon
        untouchableLearned.on("pointerdown", () => {
            if(this.skillData.untouchableSkillLearned == true){
                this.skillData.activePhysicalSkill = 'untouchable';
                if(this.skillData.totalCoins >= this.skillData.baseCostForUntouchableUpgrade){
                    //////////////////////////////////////////
                    //untouchable - First Upgrade
                    if(this.skillData.untouchableMiliSeconds == 2000){
                        this.skillData.totalCoins -= this.skillData.baseCostForUntouchableUpgrade;
                        this.skillData.baseCostForUntouchableUpgrade = this.skillData.baseCostForUntouchableUpgrade * 2;
                        this.skillData.untouchableMiliSeconds = 4000;

                        this.untouchableLevelCircle.setVisible(true);
                        this.untouchableLevel.setVisible(true);
                        this.untouchableLevel.text = 1;

                        learnInfo.text = '+4 Seconds';
                        skillCost.text = 'Cost: 2000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +2 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //untouchable - Second Upgrade
                    else if(this.skillData.untouchableMiliSeconds == 4000){
                        this.skillData.totalCoins -= this.skillData.baseCostForUntouchableUpgrade;
                        this.skillData.baseCostForUntouchableUpgrade = this.skillData.baseCostForUntouchableUpgrade * 2;
                        this.skillData.untouchableMiliSeconds = 8000;

                        this.untouchableLevel.text = 2;

                        learnInfo.text = '+8 Seconds';
                        skillCost.text = 'Cost: 4000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +4 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //untouchable - Third Upgrade
                    else if(this.skillData.untouchableMiliSeconds == 8000){
                        this.skillData.totalCoins -= this.skillData.baseCostForUntouchableUpgrade;
                        this.skillData.baseCostForUntouchableUpgrade = this.skillData.baseCostForUntouchableUpgrade * 2;
                        this.skillData.untouchableMiliSeconds = 16000;

                        this.untouchableLevel.text = 3;

                        learnInfo.x = 370;
                        learnInfo.y = 480;
                        learnInfo.text = 'Skill';
         
                        skillCost.x = 353;
                        skillCost.y = 500;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, *5 SpeedBoost!"
                        this.info.text = 'Skill upgraded!, +8 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, *5 SpeedBoost!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            } 
        });

        /////////////////////////////////////////////////////////////////////////
                                //Skill - Bullet Time

        //Creates bulleTime skill image
        let learnBulletTime = this.add.image(300,380,'bulletTimeIconNotLearned');
        learnBulletTime.setScale(0.8);

        //Current level of freeze skill
        this.bulletTimeLevelCircle = this.add.circle(270, 350, 13, "black");
        this.bulletTimeLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.bulletTimeLevelCircle.setVisible(false);
        this.bulletTimeLevelCircle.setDepth(4);
        this.bulletTimeLevel = this.add.text(264.5,340.5, '1', {font: "18px arcade", fill:"orange"});
        this.bulletTimeLevel.setVisible(false);
        this.bulletTimeLevel.setDepth(5);

        if(this.skillData.bulletTimeMiliSeconds > 2000){
            this.bulletTimeLevelCircle.setVisible(true);
            this.bulletTimeLevel.setVisible(true);

            if(this.skillData.bulletTimeMiliSeconds  == 4000){
                this.bulletTimeLevel.text = 1;
            }else if(this.skillData.bulletTimeMiliSeconds == 8000){
                this.bulletTimeLevel.text = 2;
            }else if(this.skillData.bulletTimeMiliSeconds == 16000){
                this.bulletTimeLevel.text = 3;
            }
        }

        learnBulletTime.setInteractive({ cursor: 'pointer' });
       
        learnBulletTime.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 345;
            learnInfo.y = 360;
            learnInfo.text = '+2 seconds';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 345;
            skillCost.y = 380;
            skillCost.text = 'Cost: 2000';
        });
        learnBulletTime.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnBulletTime.on("pointerdown", () => {
            if(this.skillData.bulletTimeSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForBulletTimeLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForBulletTimeLearn;
                    this.skillData.baseCostForBulletTimeUpgrade = this.skillData.baseCostForBulletTimeUpgrade * 2;
                    this.skillData.bulletTimeMiliSeconds = 2000;
                    
                    this.skillData.activePhysicalSkill = 'bulletTime';
                    this.skillData.bulletTimeSkillLearned = true;

                    learnBulletTime.destroy();
                    bulletTimeLearned.setVisible(true);
                    bulletTimeLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned - +2 Seconds!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //BulletTime - First Upgrade

        //Creates bulletTimeLearned skill image
        let bulletTimeLearned = this.add.image(300,380,'bulletTimeIconLearned');
        bulletTimeLearned.setScale(0.8);
        bulletTimeLearned.setVisible(false);
        bulletTimeLearned.setDepth(-1);

        if(this.skillData.bulletTimeSkillLearned == true){
            learnBulletTime.destroy();
            bulletTimeLearned.setVisible(true);
            bulletTimeLearned.setDepth(0);
        }

        bulletTimeLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - bulletTimeLearned skill icon
        bulletTimeLearned.on("pointerover", () => {

            if(this.skillData.bulletTimeMiliSeconds == 2000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 360;
                learnInfo.text = '+2 Seconds';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 380;
                skillCost.text = 'Cost: 1000';
            }
            else if(this.skillData.bulletTimeMiliSeconds == 4000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 360;
                learnInfo.text = '+4 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 380;
                skillCost.text = 'Cost: 2000';
            }else if(this.skillData.bulletTimeMiliSeconds == 8000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 360;
                learnInfo.text = '+8 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 380;
                skillCost.text = 'Cost: 4000';
            }else if(this.skillData.bulletTimeMiliSeconds == 16000){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 370;
               learnInfo.y = 360;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 353;
               skillCost.y = 380;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - bulletTimeLearned skill icon
        bulletTimeLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - bulletTimeLearned skill icon
        bulletTimeLearned.on("pointerdown", () => {
            if(this.skillData.bulletTimeSkillLearned == true){
                this.skillData.activePhysicalSkill = 'bulletTime';
                if(this.skillData.totalCoins >= this.skillData.baseCostForBulletTimeUpgrade){
                    //////////////////////////////////////////
                    //BulletTime - First Upgrade
                    if(this.skillData.bulletTimeMiliSeconds == 2000){
                        this.skillData.totalCoins -= this.skillData.baseCostForBulletTimeUpgrade;
                        this.skillData.baseCostForBulletTimeUpgrade = this.skillData.baseCostForBulletTimeUpgrade * 2;
                        this.skillData.bulletTimeMiliSeconds = this.skillData.bulletTimeMiliSeconds * 2;

                        this.bulletTimeLevelCircle.setVisible(true);
                        this.bulletTimeLevel.setVisible(true);
                        this.bulletTimeLevel.text = 1;

                        learnInfo.text = '+4 Seconds';
                        skillCost.text = 'Cost: 2000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +2 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //BulletTime - Second Upgrade
                    else if(this.skillData.bulletTimeMiliSeconds == 4000){
                        this.skillData.totalCoins -= this.skillData.baseCostForBulletTimeUpgrade;
                        this.skillData.baseCostForBulletTimeUpgrade = this.skillData.baseCostForBulletTimeUpgrade * 2;
                        this.skillData.bulletTimeMiliSeconds = this.skillData.bulletTimeMiliSeconds * 2;

                        this.bulletTimeLevel.text = 2;

                        learnInfo.text = '+8 Seconds';
                        skillCost.text = 'Cost: 4000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +4 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //BulletTime - Third Upgrade
                    else if(this.skillData.bulletTimeMiliSeconds == 8000){

                        this.skillData.totalCoins -= this.skillData.baseCostForBulletTimeUpgrade;
                        this.skillData.baseCostForBulletTimeUpgrade = this.skillData.baseCostForBulletTimeUpgrade * 2;
                        this.skillData.bulletTimeMiliSeconds = this.skillData.bulletTimeMiliSeconds * 2;

                        this.bulletTimeLevel.text = 3;

                        learnInfo.x = 370;
                        learnInfo.y = 360;
                        learnInfo.text = 'Skill';
         
                        skillCost.x = 353;
                        skillCost.y = 380;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!,!"
                        this.info.text = 'Skill upgraded!, +8 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!,!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            } 
        });

        /////////////////////////////////////////////////////////////////////////
                                //Skill - SpeedBoost

        //Creates speedBoost skill image
        let learnSpeedBoost = this.add.image(300,260,'flashIconNotLearned');
        learnSpeedBoost.setScale(0.8);

        //Current level of laser skill
        this.speedBoostLevelCircle = this.add.circle(270, 230, 13, "black");
        this.speedBoostLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.speedBoostLevelCircle.setVisible(false);
        this.speedBoostLevelCircle.setDepth(4);
        this.speedBoostLevel = this.add.text(264.5,220.5, '1', {font: "18px arcade", fill:"orange"});
        this.speedBoostLevel.setVisible(false);
        this.speedBoostLevel.setDepth(5);

        if(this.skillData.speedBoostCurrentLevelFactor > 2){
            this.speedBoostLevelCircle.setVisible(true);
            this.speedBoostLevel.setVisible(true);

            if(this.skillData.speedBoostCurrentLevelFactor  == 2.50){
                this.speedBoostLevel.text = 1;
            }else if(this.skillData.speedBoostCurrentLevelFactor == 3.75){
                this.speedBoostLevel.text = 2;
            }else if(this.skillData.speedBoostCurrentLevelFactor == 5){
                this.speedBoostLevel.text = 3;
            }
        }

        learnSpeedBoost.setInteractive({ cursor: 'pointer' });
       
        learnSpeedBoost.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 345;
            learnInfo.y = 240;
            learnInfo.text = 'x1.25 Speed';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 345;
            skillCost.y = 260;
            skillCost.text = 'Cost: 500';
        });
        learnSpeedBoost.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnSpeedBoost.on("pointerdown", () => {
            if(this.skillData.speedBoostLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForSpeedBoostUpgrade){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForSpeedBoostUpgrade;
                    this.skillData.baseCostForSpeedBoostUpgrade = this.skillData.baseCostForSpeedBoostUpgrade * 2;
                    this.skillData.speedBoostCurrentLevelFactor = this.skillData.speedBoostCurrentLevelFactor * 1.25;
                    this.skillData.speedBoostLearned = true;

                    this.skillData.activePhysicalSkill = 'speedBoost';

                    learnSpeedBoost.destroy();
                    speedLearned.setVisible(true);
                    speedLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned - *1.25 SpeedBoost!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //SpeedBoost - First Upgrade

        //Creates speedLearned skill image
        let speedLearned = this.add.image(300,260,'flashIconLearned');
        speedLearned.setScale(0.8);
        speedLearned.setVisible(false);
        speedLearned.setDepth(-1);

        if(this.skillData.speedBoostLearned == true){
            learnSpeedBoost.destroy();
            speedLearned.setVisible(true);
            speedLearned.setDepth(0);
        }

        speedLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - speedLearned skill icon
        speedLearned.on("pointerover", () => {

            if(this.skillData.speedBoostCurrentLevelFactor == 1.25){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 240;
                learnInfo.text = 'X2.5 Speed';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 260;
                skillCost.text = 'Cost: 500';
            }
            else if(this.skillData.speedBoostCurrentLevelFactor == 2.50){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 240;
                learnInfo.text = 'X3.75 Speed';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 260;
                skillCost.text = 'Cost: 1000';
            }else if(this.skillData.speedBoostCurrentLevelFactor == 3.75){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 355;
                learnInfo.y = 240;
                learnInfo.text = 'X5 Speed';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 260;
                skillCost.text = 'Cost: 2000';
            }else if(this.skillData.speedBoostCurrentLevelFactor == 5){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 370;
               learnInfo.y = 240;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 353;
               skillCost.y = 260;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - speedLearned skill icon
        speedLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - speedLearned skill icon
        speedLearned.on("pointerdown", () => {
            if(this.skillData.speedBoostLearned == true){
                this.skillData.activePhysicalSkill = 'speedBoost';
                if(this.skillData.totalCoins >= this.skillData.baseCostForSpeedBoostUpgrade){
                    //////////////////////////////////////////
                    //SpeedBoost - First Upgrade
                    if(this.skillData.speedBoostCurrentLevelFactor == 1.25){
                        this.skillData.totalCoins -= this.skillData.baseCostForSpeedBoostUpgrade;
                        this.skillData.baseCostForSpeedBoostUpgrade = this.skillData.baseCostForSpeedBoostUpgrade * 2;
                        this.skillData.speedBoostCurrentLevelFactor += 1.25;

                        this.speedBoostLevelCircle.setVisible(true);
                        this.speedBoostLevel.setVisible(true);
                        this.speedBoostLevel.text = 1;

                        learnInfo.text = "X3.75 Speed";
                        skillCost.text = 'Cost: 1000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, *2.5 SpeedBoost!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //SpeedBoost - Second Upgrade
                    else if(this.skillData.speedBoostCurrentLevelFactor == 2.5){
                        this.skillData.totalCoins -= this.skillData.baseCostForSpeedBoostUpgrade;
                        this.skillData.baseCostForSpeedBoostUpgrade = this.skillData.baseCostForSpeedBoostUpgrade * 2;
                        this.skillData.speedBoostCurrentLevelFactor += 1.25;

                        this.speedBoostLevel.text = 2;

                        learnInfo.x = 355;
                        learnInfo.text = "X5 Speed";
                        skillCost.text = 'Cost: 2000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, *3.75 SpeedBoost!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //SpeedBoost - Third Upgrade
                    else if(this.skillData.speedBoostCurrentLevelFactor == 3.75){
                        this.skillData.totalCoins -= this.skillData.baseCostForSpeedBoostUpgrade;
                        this.skillData.baseCostForSpeedBoostUpgrade = this.skillData.baseCostForSpeedBoostUpgrade * 2;
                        this.skillData.speedBoostCurrentLevelFactor += 1.25;

                        this.speedBoostLevel.text = 3;
                        learnInfo.x = 370;
                        skillCost.x = 353;
                        learnInfo.text = "Skill";
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, *5 SpeedBoost!"
                        this.info.text = 'Skill upgraded!, *5 SpeedBoost!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, *5 SpeedBoost!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            } 
        });

        /////////////////////////////////////////////////////////////////////////
                                //Skill - Freeze

        //Creates freeze skill image
        let learnFreeze = this.add.image(299.5,140,'freezeIconNotLearned');
        learnFreeze.setScale(0.735);

        //Current level of freeze skill
        this.freezeLevelCircle = this.add.circle(270, 110, 13, "black");
        this.freezeLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.freezeLevelCircle.setVisible(false);
        this.freezeLevelCircle.setDepth(4);
        this.freezeLevel = this.add.text(264.5,100.5, '1', {font: "18px arcade", fill:"orange"});
        this.freezeLevel.setVisible(false);
        this.freezeLevel.setDepth(5);

        if(this.skillData.freezingMiliSeconds > 2000){
            this.freezeLevelCircle.setVisible(true);
            this.freezeLevel.setVisible(true);

            if(this.skillData.freezingMiliSeconds  == 4000){
                this.freezeLevel.text = 1;
            }else if(this.skillData.freezingMiliSeconds == 8000){
                this.freezeLevel.text = 2;
            }else if(this.skillData.freezingMiliSeconds == 16000){
                this.freezeLevel.text = 3;
            }
        }

        learnFreeze.setInteractive({ cursor: 'pointer' });
       
        learnFreeze.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 345;
            learnInfo.y = 120;
            learnInfo.text = '+2 seconds';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 345;
            skillCost.y = 140;
            skillCost.text = 'Cost: 2000';
        });
        learnFreeze.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnFreeze.on("pointerdown", () => {
            if(this.skillData.freezeSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForFreezeLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForFreezeLearn;
                    this.skillData.baseCostForFreezeUpgrade = this.skillData.baseCostForFreezeUpgrade * 2;
                    this.skillData.freezingMiliSeconds = 2000;
                    
                    this.skillData.activePhysicalSkill = 'freeze';
                    this.skillData.freezeSkillLearned = true;

                    learnFreeze.destroy();
                    freezeLearned.setVisible(true);
                    freezeLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned - +2 Second!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Freeze - First Upgrade

        //Creates freezeLearned skill image
        let freezeLearned = this.add.image(299.5,140,'freezeIconLearned');
        freezeLearned.setScale(0.735);
        freezeLearned.setVisible(false);
        freezeLearned.setDepth(-1);

        if(this.skillData.freezeSkillLearned == true){
            learnFreeze.destroy();
            freezeLearned.setVisible(true);
            freezeLearned.setDepth(0);
        }

        freezeLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - freezeLearned skill icon
        freezeLearned.on("pointerover", () => {

            if(this.skillData.freezingMiliSeconds == 2000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 120;
                learnInfo.text = '+2 Seconds';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 140;
                skillCost.text = 'Cost: 1000';
            }
            else if(this.skillData.freezingMiliSeconds == 4000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 120;
                learnInfo.text = '+4 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 140;
                skillCost.text = 'Cost: 2000';
            }else if(this.skillData.freezingMiliSeconds == 8000){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 345;
                learnInfo.y = 120;
                learnInfo.text = '+8 Seconds';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 345;
                skillCost.y = 140;
                skillCost.text = 'Cost: 4000';
            }else if(this.skillData.freezingMiliSeconds == 16000){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 370;
               learnInfo.y = 120;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 353;
               skillCost.y = 140;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - freezeLearned skill icon
        freezeLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - freezeLearned skill icon
        freezeLearned.on("pointerdown", () => {
            if(this.skillData.freezeSkillLearned == true){
                this.skillData.activePhysicalSkill = 'freeze';
                if(this.skillData.totalCoins >= this.skillData.baseCostForFreezeUpgrade){
                    //////////////////////////////////////////
                    //Freeze - First Upgrade
                    if(this.skillData.freezingMiliSeconds == 2000){
                        this.skillData.totalCoins -= this.skillData.baseCostForFreezeUpgrade;
                        this.skillData.baseCostForFreezeUpgrade = this.skillData.baseCostForFreezeUpgrade * 2;
                        this.skillData.freezingMiliSeconds = this.skillData.freezingMiliSeconds * 2;

                        this.freezeLevelCircle.setVisible(true);
                        this.freezeLevel.setVisible(true);
                        this.freezeLevel.text = 1;

                        learnInfo.text = '+4 Seconds';
                        skillCost.text = 'Cost: 2000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +2 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //Freeze - Second Upgrade
                    else if(this.skillData.freezingMiliSeconds == 4000){
                        this.skillData.totalCoins -= this.skillData.baseCostForFreezeUpgrade;
                        this.skillData.baseCostForFreezeUpgrade = this.skillData.baseCostForFreezeUpgrade * 2;
                        this.skillData.freezingMiliSeconds = this.skillData.freezingMiliSeconds * 2;

                        this.freezeLevel.text = 2;

                        learnInfo.text = '+8 Seconds';
                        skillCost.text = 'Cost: 4000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +4 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //Freeze - Third Upgrade
                    else if(this.skillData.freezingMiliSeconds == 8000){

                        this.skillData.totalCoins -= this.skillData.baseCostForFreezeUpgrade;
                        this.skillData.baseCostForFreezeUpgrade = this.skillData.baseCostForFreezeUpgrade * 2;
                        this.skillData.freezingMiliSeconds = this.skillData.freezingMiliSeconds * 2;

                        this.freezeLevel.text = 3;

                        learnInfo.x = 370;
                        learnInfo.y = 120;
                        learnInfo.text = 'Skill';
         
                        skillCost.x = 353;
                        skillCost.y = 140;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!,!"
                        this.info.text = 'Skill upgraded!, +8 Seconds!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!,!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            } 
        });

        /////////////////////////////////////////////////////////////////////////
                                //SHOOTING SKILLS

        this.selectedShootingSkill = this.add.image(539, 472, 'selected');
        this.selectedShootingSkill.setVisible(false);
        this.selectedShootingSkill.setDepth(3);

                                //Shooting skill - Lasers

        //Skapar laser skill icon
        let learnLaserSkill = this.add.image(500, 140,'laserIconNotLearned');
        learnLaserSkill.setScale(0.8);

        //Current level of laser skill
        this.laserLevelCircle = this.add.circle(470, 110, 13, "black");
        this.laserLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.laserLevelCircle.setVisible(false);
        this.laserLevelCircle.setDepth(4);
        this.lasersLevel = this.add.text(464.5,100.5, '1', {font: "18px arcade", fill:"orange"});
        this.lasersLevel.setVisible(false);
        this.lasersLevel.setDepth(5);

        if(this.amountShootingLasers > 1){
            this.laserLevelCircle.setVisible(true);
            this.lasersLevel.setVisible(true);

            if(this.amountShootingLasers == 3){
                this.lasersLevel.text = 1;
            }else if(this.amountShootingLasers == 5){
                this.lasersLevel.text = 2;
            }else if(this.amountShootingLasers == 10){
                this.lasersLevel.text = 3;
            }
        }

        if(this.skillData.laserShootingLearned == true){
            learnLaserSkill.setVisible(false);
        }else{
            learnLaserSkill.setVisible(true);
        }

        learnLaserSkill.setInteractive({ cursor: 'pointer' });
       
        learnLaserSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 553;
            learnInfo.y = 119;
            learnInfo.text = '+1 Laser';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 139;
            skillCost.text = 'Cost: 500';
        });
        learnLaserSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnLaserSkill.on("pointerdown", () => {
            if(this.skillData.laserShootingLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForLaserLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForLaserLearn;
                    this.skillData.baseCostForLaserUpgrade =  this.skillData.baseCostForLaserUpgrade * 2;

                    this.skillData.shootingObject = 'laser';
                    this.skillData.laserShootingLearned = true; 
                    this.skillData.activeShootingMiliSeconds = 10000;

                    this.skillData.shootingSkillLearned = true;
                    this.skillData.shootingSkillActive = true;
                    this.amountShootingLasers = 1;

                    learnLaserSkill.destroy();
                    laserLearned.setVisible(true);
                    laserLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +1 Laser !';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Lasers - First Upgrade

        //Creates laserlearned skill image
        let laserLearned = this.add.image(500, 140,'laserIconLearned');
        laserLearned.setScale(0.8);
        laserLearned.setVisible(false);
        laserLearned.setDepth(-1);

        if(this.skillData.laserShootingLearned  !== true){
            laserLearned.setVisible(false);
        }else{
            laserLearned.setVisible(true);
            laserLearned.setDepth(0);
        }

        laserLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - laserLearned skill icon
        laserLearned.on("pointerover", () => {

              if(this.skillData.laserShootingLearned == true && this.amountShootingLasers == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 119;
                learnInfo.text = '+2 Lasers';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 139;
                skillCost.text = 'Cost: 100';

            } else if (this.skillData.laserShootingLearned == true && this.amountShootingLasers == 3){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 119;
                learnInfo.text = '+2 Laser';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 139;
                skillCost.text = 'Cost: 200';
            }
            else if (this.skillData.laserShootingLearned == true && this.amountShootingLasers == 5){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 119;
                learnInfo.text = '+5 Lasers';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 139;
                skillCost.text = 'Cost: 400';
            }
            else if (this.skillData.laserShootingLearned == true && this.amountShootingLasers == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 568;
                learnInfo.y = 119;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 139;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - laserLearned skill icon
        laserLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - laserLearned skill icon
        laserLearned.on("pointerdown", () => {
            if(this.skillData.laserShootingLearned == true){
                this.skillData.shootingObject = 'laser';
                if(this.skillData.totalCoins >= this.skillData.baseCostForLaserUpgrade){

                    if(this.amountShootingLasers  == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForLaserUpgrade;
                        this.skillData.baseCostForLaserUpgrade = this.skillData.baseCostForLaserUpgrade * 2;
                        this.amountShootingLasers = 3;

                        this.skillData.activeShootingMiliSeconds = 15000;

                        this.lasersLevel.text = 1;

                        learnInfo.text = '+2 Lasers';
                        skillCost.text = 'Cost: 200';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Lasers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingLasers == 3){
                        this.skillData.totalCoins -= this.skillData.baseCostForLaserUpgrade;
                        this.skillData.baseCostForLaserUpgrade = this.skillData.baseCostForLaserUpgrade * 2;
                        this.amountShootingLasers = 5;

                        this.skillData.activeShootingMiliSeconds = 20000;
                        this.lasersLevel.text = 2;

                        learnInfo.text = '+5 Lasers';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Lasers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingLasers == 5){
                        this.skillData.totalCoins -= this.skillData.baseCostForLaserUpgrade;
                        this.skillData.baseCostForLaserUpgrade = this.skillData.baseCostForLaserUpgrade * 2;
                        this.amountShootingLasers = 10;
                        
                        this.skillData.activeShootingMiliSeconds = 25000;
                        this.lasersLevel.text = 3;

                        learnInfo.x = 568;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +5 Lasers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });
        
                                    //Shooting skill - Daggers

        //Skapar dagger skill icon
        let learnDaggerSkill = this.add.image(500, 260,'daggerIconNotLearned');
        learnDaggerSkill.setScale(0.8);

        //Current level of dagger skill
        this.daggerLevelCircle = this.add.circle(470, 230, 13, "black");
        this.daggerLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.daggerLevelCircle.setVisible(false);
        this.daggerLevelCircle.setDepth(4);
        this.daggersLevel = this.add.text(464.5,220.5, '1', {font: "18px arcade", fill:"orange"});
        this.daggersLevel.setVisible(false);
        this.daggersLevel.setDepth(5);

        if(this.amountShootingDaggers > 1){
            this.daggerLevelCircle.setVisible(true);
            this.daggersLevel.setVisible(true);

            if(this.amountShootingDaggers == 3){
                this.daggersLevel.text = 1;
            }else if(this.amountShootingDaggers == 5){
                this.daggersLevel.text = 2;
            }else if(this.amountShootingDaggers == 10){
                this.daggersLevel.text = 3;
            }
        }

        if(this.skillData.daggerShootingLearned == true){
            learnDaggerSkill.setVisible(false);
        }else{
            learnDaggerSkill.setVisible(true);
        }

        learnDaggerSkill.setInteractive({ cursor: 'pointer' });
       
        learnDaggerSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 553;
            learnInfo.y = 239;
            learnInfo.text = '+1 Dagger';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 259;
            skillCost.text = 'Cost: 1000';
        });
        learnDaggerSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnDaggerSkill.on("pointerdown", () => {
            if(this.skillData.daggerShootingLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForDaggerLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForDaggerLearn;
                    this.skillData.baseCostForDaggerUpgrade =  this.skillData.baseCostForDaggerUpgrade * 2;

                    this.skillData.shootingObject = 'dagger';
                    this.skillData.daggerShootingLearned = true; 
                    this.skillData.activeShootingMiliSeconds = 10000;

                    this.skillData.shootingSkillLearned = true;
                    this.skillData.shootingSkillActive = true;
                    this.amountShootingDaggers = 1;

                    learnDaggerSkill.destroy();
                    daggerLearned.setVisible(true);
                    daggerLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +1 Dagger!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Dagger - First Upgrade

        //Creates daggerlearned skill image
        let daggerLearned = this.add.image(500, 260,'daggerIconLearned');
        daggerLearned.setScale(0.8);
        daggerLearned.setVisible(false);
        daggerLearned.setDepth(-1);

        if(this.skillData.daggerShootingLearned  !== true){
            daggerLearned.setVisible(false);
        }else{
            daggerLearned.setVisible(true);
            daggerLearned.setDepth(0);
        }

        daggerLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - daggerLearned skill icon
        daggerLearned.on("pointerover", () => {

              if(this.skillData.daggerShootingLearned == true && this.amountShootingDaggers == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 239;
                learnInfo.text = '+2 Daggers';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 259;
                skillCost.text = 'Cost: 200';

            } else if (this.skillData.daggerShootingLearned == true && this.amountShootingDaggers == 3){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 239;
                learnInfo.text = '+2 Daggers';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 259;
                skillCost.text = 'Cost: 400';
            }
            else if (this.skillData.daggerShootingLearned == true && this.amountShootingDaggers == 5){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 239;
                learnInfo.text = '+5 Daggers';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 259;
                skillCost.text = 'Cost: 800';
            }
            else if (this.skillData.daggerShootingLearned == true && this.amountShootingDaggers == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 568;
                learnInfo.y = 239;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 259;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - daggerLearned skill icon
        daggerLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - daggerLearned skill icon
        daggerLearned.on("pointerdown", () => {
            if(this.skillData.daggerShootingLearned == true){
                this.skillData.shootingObject = 'dagger';
                if(this.skillData.totalCoins >= this.skillData.baseCostForDaggerUpgrade){

                    if(this.amountShootingDaggers  == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForDaggerUpgrade;
                        this.skillData.baseCostForDaggerUpgrade = this.skillData.baseCostForDaggerUpgrade * 2;
                        this.amountShootingDaggers = 3;

                        this.skillData.activeShootingMiliSeconds = 15000;

                        this.daggerLevelCircle.setVisible(true);
                        this.daggersLevel.setVisible(true);
                        this.daggersLevel.text = 1;

                        learnInfo.text = '+2 Daggers';
                        skillCost.text = 'Cost: 400';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Daggers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingDaggers == 3){
                        this.skillData.totalCoins -= this.skillData.baseCostForDaggerUpgrade;
                        this.skillData.baseCostForDaggerUpgrade = this.skillData.baseCostForDaggerUpgrade * 2;
                        this.amountShootingDaggers = 5;

                        this.skillData.activeShootingMiliSeconds = 20000;
                        this.daggersLevel.text = 2;

                        learnInfo.text = '+5 Daggers';
                        skillCost.text = 'Cost: 800';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Daggers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingDaggers == 5){
                        this.skillData.totalCoins -= this.skillData.baseCostForDaggerUpgrade;
                        this.skillData.baseCostForDaggerUpgrade = this.skillData.baseCostForDaggerUpgrade * 2;
                        this.amountShootingDaggers = 10;
                        
                        this.skillData.activeShootingMiliSeconds = 25000;
                        this.daggersLevel.text = 3;

                        learnInfo.x = 568;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +5 Daggers!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });

                             //Shooting skill - Bullets

        //Skapar bullet skill icon
        let learnBulletSkill = this.add.image(500, 380,'bulletIconNotLearned');
        learnBulletSkill.setScale(0.8);

        //Current level of bullet skill
        this.bulletLevelCircle = this.add.circle(470, 350, 13, "black");
        this.bulletLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.bulletLevelCircle.setVisible(false);
        this.bulletLevelCircle.setDepth(4);
        this.bulletsLevel = this.add.text(464.5,340.5, '1', {font: "18px arcade", fill:"orange"});
        this.bulletsLevel.setVisible(false);
        this.bulletsLevel.setDepth(5);

        if(this.amountShootingBullets > 1){
            this.bulletLevelCircle.setVisible(true);
            this.bulletsLevel.setVisible(true);

            if(this.amountShootingBullets == 3){
                this.bulletsLevel.text = 1;
            }else if(this.amountShootingBullets == 5){
                this.bulletsLevel.text = 2;
            }else if(this.amountShootingBullets == 10){
                this.bulletsLevel.text = 3;
            }
        }

        if(this.skillData.bulletShootingLearned == true){
            learnBulletSkill.setVisible(false);
        }else{
            learnBulletSkill.setVisible(true);
        }

        learnBulletSkill.setInteractive({ cursor: 'pointer' });
       
        learnBulletSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 553;
            learnInfo.y = 359;
            learnInfo.text = '+1 Bullet';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 379;
            skillCost.text = 'Cost: 1500';
        });
        learnBulletSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnBulletSkill.on("pointerdown", () => {
            if(this.skillData.bulletShootingLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForBulletLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForBulletLearn;
                    this.skillData.baseCostForBulletUpgrade =  this.skillData.baseCostForBulletUpgrade * 2;

                    this.skillData.shootingObject = 'bullet';
                    this.skillData.bulletShootingLearned = true; 
                    this.skillData.activeShootingMiliSeconds = 10000;

                    this.skillData.shootingSkillLearned = true;
                    this.skillData.shootingSkillActive = true;
                    this.amountShootingBullets = 1;

                    learnBulletSkill.destroy();
                    bulletLearned.setVisible(true);
                    bulletLearned.setDepth(1);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +1 Bullet!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //////////////////////////////////////////
        //Bullet - First Upgrade

        //Creates bulletLearned skill image
        let bulletLearned = this.add.image(500, 380,'bulletIconLearned');
        bulletLearned.setScale(0.8);
        bulletLearned.setVisible(false);
        bulletLearned.setDepth(-1);

        if(this.skillData.bulletShootingLearned  !== true){
            bulletLearned.setVisible(false);
        }else{
            bulletLearned.setVisible(true);
            bulletLearned.setDepth(0);
        }

        bulletLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - bulletLearned skill icon
        bulletLearned.on("pointerover", () => {

              if(this.skillData.bulletShootingLearned == true && this.amountShootingBullets == 1){
                 //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 359;
                learnInfo.text = '+2 Bullets';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 379;
                skillCost.text = 'Cost: 300';

            } else if (this.skillData.bulletShootingLearned == true && this.amountShootingBullets == 3){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 359;
                learnInfo.text = '+2 Bullets';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 379;
                skillCost.text = 'Cost: 600';
            }
            else if (this.skillData.bulletShootingLearned == true && this.amountShootingBullets == 5){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 359;
                learnInfo.text = '+5 Bullets';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 379;
                skillCost.text = 'Cost: 1200';
            }
            else if (this.skillData.bulletShootingLearned == true && this.amountShootingBullets == 10){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 568;
                learnInfo.y = 359;
                learnInfo.text = 'Skill';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 379;
                skillCost.text = 'Mastered';
            }
        });

        //Mouse out - bulletLearned skill icon
        bulletLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - bulletLearned skill icon
        bulletLearned.on("pointerdown", () => {
            if(this.skillData.bulletShootingLearned == true){
                this.skillData.shootingObject = 'bullet';
                if(this.skillData.totalCoins >= this.skillData.baseCostForBulletUpgrade){

                    if(this.amountShootingBullets  == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForBulletUpgrade;
                        this.skillData.baseCostForBulletUpgrade = this.skillData.baseCostForBulletUpgrade * 2;
                        this.amountShootingBullets = 3;
                        this.skillData.activeShootingMiliSeconds = 15000;

                        this.bulletLevelCircle.setVisible(true);
                        this.bulletsLevel.setVisible(true);
                        this.bulletsLevel.text = 1;

                        learnInfo.text = '+2 Bullets';
                        skillCost.text = 'Cost: 600';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Bullets!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingBullets == 3){
                        this.skillData.totalCoins -= this.skillData.baseCostForBulletUpgrade;
                        this.skillData.baseCostForBulletUpgrade = this.skillData.baseCostForBulletUpgrade * 2;
                        this.amountShootingBullets = 5;
                        this.skillData.activeShootingMiliSeconds = 20000;

                        this.bulletsLevel.text = 2;

                        learnInfo.text = '+5 Bullets';
                        skillCost.text = 'Cost: 1200';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Bullets!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else if(this.amountShootingBullets == 5){
                        this.skillData.totalCoins -= this.skillData.baseCostForBulletUpgrade;
                        this.skillData.baseCostForBulletUpgrade = this.skillData.baseCostForBulletUpgrade * 2;
                        this.amountShootingBullets = 10;
                        this.skillData.activeShootingMiliSeconds = 25000;
                        
                        this.bulletsLevel.text = 3;

                        learnInfo.x = 568;
                        learnInfo.text = 'Skill';
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +5 Bullets!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }  
        });

                                //ShootingSkill - Fireballs

        //Skapar fireball skill icon
        let learnFireballSkill = this.add.image(500, 500,'fireballIconNotLearned');
        learnFireballSkill.setScale(0.8);

        //Current level of laser skill
        this.fireballLevelCircle = this.add.circle(470, 471, 13, "black");
        this.fireballLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.fireballLevelCircle.setVisible(false);
        this.fireballLevelCircle.setDepth(4);
        this.fireballsLevel = this.add.text(464.5,461.5, '1', {font: "18px arcade", fill:"orange"});
        this.fireballsLevel.setVisible(false);
        this.fireballsLevel.setDepth(5);

        if(this.amountShootingFireballs > 1){
            this.fireballLevelCircle.setVisible(true);
            this.fireballsLevel.setVisible(true);

            if(this.amountShootingFireballs == 3){
                this.fireballsLevel.text = 1;
            }else if(this.amountShootingFireballs == 5){
                this.fireballsLevel.text = 2;
            }else if(this.amountShootingFireballs == 10){
                this.fireballsLevel.text = 3;
            }
        }

        learnFireballSkill.setInteractive({ cursor: 'pointer' });
       
        learnFireballSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 542;
            learnInfo.y = 480;
            learnInfo.text = '+1 Fireball';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 542;
            skillCost.y = 500;
            skillCost.text = 'Cost: 2000';
        });
        learnFireballSkill.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnFireballSkill.on("pointerdown", () => {
            if(this.skillData.fireballShootingLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForFireballLearn){
                    this.skillData.totalCoins = this.skillData.totalCoins - this.skillData.baseCostForFireballLearn;
                    this.skillData.baseCostForfireballUpgrade = 3000;
                    this.skillData.activeShootingMiliSeconds = 10000;

                    this.skillData.fireballShootingLearned = true;
                    this.skillData.shootingObject = 'fireball';

                    this.skillData.shootingSkillLearned = true;
                    this.skillData.shootingSkillActive = true;

                    this.amountShootingFireballs = 1;

                    learnFireballSkill.destroy();
                    fireballLearned.setVisible(true);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned! - +1 Fireball and 40 Damage!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                    
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }else{
                //Display inline "Skill already learned!"
                this.info.text = 'Skill already learned!';
                this.info.setVisible(true);
                setTimeout(() => {
                    //Display none => "Skill learned!"
                    this.info.setVisible(false);
                }, 2000);
            }
        });

        //////////////////////////////////////////
        //Fireballs - First Upgrade

        //Creates speedBoost1 skill image
        let fireballLearned = this.add.image(500, 500,'fireballIconLearned');
        fireballLearned.setScale(0.8);
        fireballLearned.setVisible(false);

        if(this.skillData.fireballShootingLearned == true){
            learnFireballSkill.destroy();
            fireballLearned.setVisible(true);
        }

        fireballLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - fireballLearned skill icon
        fireballLearned.on("pointerover", () => {
            if(this.skillData.fireballShootingLearned == true){
                learnFireballSkill.destroy();
                fireballLearned.setVisible(true);

                if(this.amountShootingFireballs == 1){

                    //Updates information about the skill
                    learnInfo.setVisible(true);
                    learnInfo.x = 542;
                    learnInfo.y = 480;
                    learnInfo.text = '+2 Fireball';

                    //Updates and showes cost of the skill
                    skillCost.setVisible(true);
                    skillCost.x = 542;
                    skillCost.y = 500;
                    skillCost.text = 'Cost: 3000';
                }

                if(this.amountShootingFireballs == 3){
                    //Updates information about the skill
                    learnInfo.setVisible(true);
                    learnInfo.x = 542;
                    learnInfo.y = 480;
                    learnInfo.text = '+2 Fireball';

                    //Updates and showes cost of the skill
                    skillCost.setVisible(true);
                    skillCost.x = 542;
                    skillCost.y = 500;
                    skillCost.text = 'Cost: 4500';
                }

                if(this.amountShootingFireballs == 5){

                    //Updates information about the skill
                    learnInfo.setVisible(true);
                    learnInfo.x = 542;
                    learnInfo.y = 480;
                    learnInfo.text = '+5 Fireball';

                    //Updates and showes cost of the skill
                    skillCost.setVisible(true);
                    skillCost.x = 542;
                    skillCost.y = 500;
                    skillCost.text = 'Cost: 10000';
                }

                if(this.amountShootingFireballs == 10){
                    //Updates information about the skill
                    learnInfo.setVisible(true);
                    learnInfo.x = 565;
                    learnInfo.y = 480;
                    learnInfo.text = 'Skill';

                    //Updates and showes cost of the skill
                    skillCost.setVisible(true);
                    skillCost.x = 550;
                    skillCost.y = 500;
                    skillCost.text = 'Mastered';
                }
            }
        });

        //Mouse out - fireballLearned skill icon
        fireballLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - fireballLearned skill icon
        fireballLearned.on("pointerdown", () => {
            if(this.skillData.fireballShootingLearned == true){
                this.skillData.shootingObject = 'fireball';
                if(this.skillData.totalCoins >= this.skillData.baseCostForfireballUpgrade){
                    //////////////////////////////////////////
                    //Fireballs - First Upgrade
                    if(this.amountShootingFireballs == 1){
                        this.skillData.totalCoins -= this.skillData.baseCostForfireballUpgrade;
                        this.skillData.baseCostForfireballUpgrade = 1500;
                        
                        this.skillData.activeShootingMiliSeconds = 15000;
                        this.amountShootingFireballs = 3;

                        this.fireballLevelCircle.setVisible(true);
                        this.fireballsLevel.setVisible(true);
                        this.fireballsLevel.text = 1;

                        learnInfo.text = '+2 Fireball';
                        skillCost.text = 'Cost: 4500';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +2 Fireballs!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //Fireballs - Second Upgrade
                    else if(this.amountShootingFireballs == 3){
                        this.skillData.totalCoins -= this.skillData.baseCostForfireballUpgrade;
                        this.skillData.baseCostForfireballUpgrade = 10000;
                        this.amountShootingFireballs = 5;
                        this.skillData.activeShootingMiliSeconds = 20000;

                        this.fireballsLevel.text = 2;

                        learnInfo.text = '+5 Fireball';
                        skillCost.text = 'Cost: 10000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!, +2 Fireballs!"
                        this.info.text = 'Skill upgraded!, +2 Fireballs!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, +2 Fireballs!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    //////////////////////////////////////////
                    //Fireballs - Third Upgrade
                    else if(this.amountShootingFireballs == 5){
                        this.skillData.totalCoins -= this.skillData.baseCostForfireballUpgrade;
                        this.skillData.baseCostForfireballUpgrade = 25000;

                        this.amountShootingFireballs = 10;
                        this.skillData.activeShootingMiliSeconds = 25000;

                        this.fireballsLevel.text = 3;

                        learnInfo.x = 565;
                        learnInfo.text = 'Skill';
                        skillCost.x = 550;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, +5 Fireballs!"
                        this.info.text = 'Skill upgraded!, +5 Fireballs!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, +5 Fireballs!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });


        /////////////////////////////////////////////////////////////////////////
                                   //Drop-Skills
        //Skill - Lightning

        this.selectedDropSkill = this.add.image(740, 72, 'selected');
        this.selectedDropSkill.setVisible(false);
        this.selectedDropSkill.setDepth(3);

        //Creates lightningSkill icon
        let learnLightningSkill = this.add.image(700, 500, 'lightningIconNotLearned');
        learnLightningSkill.setScale(0.82);

        //Current level of lightning skill
        this.lightningLevelCircle = this.add.circle(670, 470, 13, "black");
        this.lightningLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.lightningLevelCircle.setVisible(false);
        this.lightningLevelCircle.setDepth(4);
        this.lightningsLevel = this.add.text(664.5,460.5, '1', {font: "18px arcade", fill:"orange"});
        this.lightningsLevel.setVisible(false);
        this.lightningsLevel.setDepth(5);

        if(this.skillData.lightningDamage > 50){
            this.lightningLevelCircle.setVisible(true);
            this.lightningsLevel.setVisible(true);

            if(this.skillData.lightningDamage == 100){
                this.lightningsLevel.text = 1;
            }else if(this.skillData.lightningDamage == 150){
                this.lightningsLevel.text = 2;
            }else if(this.skillData.lightningDamage == 200){
                this.lightningsLevel.text = 3;
            }
        }

        learnLightningSkill.setInteractive({ cursor: 'pointer' });
       
        learnLightningSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 550;
            learnInfo.y = 480;
            learnInfo.text = '+50 damage';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 500;
            skillCost.text = 'Cost: 1500';
        });
        learnLightningSkill.on("pointerout", () => {
        
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnLightningSkill.on("pointerdown", () => {
            
            if(this.skillData.lightningSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForLightningSkill){
                    this.skillData.totalCoins -= this.skillData.baseCostForLightningSkill;
                    this.skillData.baseCostForLightningSkill = this.skillData.baseCostForLightningSkill * 2;
                    this.skillData.lightningSkillLearned = true;
                    this.skillData.activeDropSkill = 'lightning';

                    learnLightningSkill.destroy();
                    lightningLearned.setVisible(true);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned!, +50 Damage';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }else{
                //Display inline "Skill already learned!"
                this.info.text = 'Skill already learned!';
                this.info.setVisible(true);
                setTimeout(() => {
                    //Display none => "Skill already learned!"
                    this.info.setVisible(false);;
                }, 2000);
            }

        });

        //////////////////////////////////////////
        //Lightning - First Upgrade

        //Creates lightningLearned skill image
        let lightningLearned = this.add.image(700,500,'lightningIconLearned');
        lightningLearned.setScale(0.82);
        lightningLearned.setVisible(false);


        if(this.skillData.lightningSkillLearned == true){
            learnLightningSkill.destroy();
            lightningLearned.setVisible(true);
        }

        lightningLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - lightningLearned skill icon
        lightningLearned.on("pointerover", () => {

            if(this.skillData.lightningDamage == 50){

                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 480;
                learnInfo.text = '+50 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 500;
                skillCost.text = 'Cost: 3000';
            }
            else if(this.skillData.lightningDamage == 100){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 480;
                learnInfo.text = '1.5x  Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 500;
                skillCost.text = 'Cost: 6000';
            }else if(this.skillData.lightningDamage == 150){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 560;
                learnInfo.y = 480;
                learnInfo.text = '2x Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 500;
                skillCost.text = 'Cost: 12000';
            }else if(this.skillData.lightningDamage == 200){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 578;
               learnInfo.y = 480;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 560;
               skillCost.y = 500;
               skillCost.text = 'Mastered';
            }
        });

        //Mouse out - lightningLearned skill icon
        lightningLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - lightningLearned skill icon
        lightningLearned.on("pointerdown", () => {
            if(this.skillData.lightningSkillLearned == true){
                this.skillData.activeDropSkill = 'lightning';
                if(this.skillData.totalCoins >= this.skillData.baseCostForLightningSkill){

                    //////////////////////////////////////////
                    //Lightning - First Upgrade
                    if(this.skillData.lightningDamage == 50){
                        this.skillData.totalCoins -= this.skillData.baseCostForLightningSkill;
                        this.skillData.baseCostForLightningSkill = this.skillData.baseCostForLightningSkill * 2;
                        this.skillData.lightningDamage = 100;

                        this.lightningLevelCircle.setVisible(true);
                        this.lightningsLevel.setVisible(true);
                        this.lightningsLevel.text = 1;

                        learnInfo.text = '1.5x   Range';
                        skillCost.text = 'Cost: 6000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +50 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    } 

                    //////////////////////////////////////////
                    //Lightning - Second Upgrade

                    else if(this.skillData.lightningDamage == 100){
                        this.skillData.totalCoins -= this.skillData.baseCostForLightningSkill;
                        this.skillData.baseCostForLightningSkill = this.skillData.baseCostForLightningSkill * 2;
                        this.skillData.lightningDamage = 150;
                        this.skillData.lightningRange = 1.5;

                        this.lightningsLevel.text = 2;

                        learnInfo.x = 560;
                        learnInfo.text = '2x Range';
                        skillCost.text = 'Cost: 12000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Upgraded!, 1.5x Range + 20% INTANST CHARGE';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //////////////////////////////////////////
                    //Lightning - Third Upgrade
                    else if(this.skillData.lightningDamage == 150){
                        this.skillData.totalCoins -= this.skillData.baseCostForLightningSkill;
                        this.skillData.baseCostForLightningSkill = this.skillData.baseCostForLightningSkill * 2;
                        this.skillData.lightningDamage = 200;
                        this.skillData.lightningRange = 2;

                        this.lightningsLevel.text = 3;

                        learnInfo.x = 578;
                        learnInfo.text = 'Skill';
                        skillCost.x = 560;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, 2x Range!"
                        this.info.text = "Upgraded!, 2x Range + 35% INTANST CHARGE!";
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, +50% Range!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        /////////////////////////////////////////////////////////////////////
                                //WATERBLAST - SKILL

        //Creates waterblastSkill icon
        let learnWaterblastSkill = this.add.image(700, 380, 'waterblastIconNotLearned');
        learnWaterblastSkill.setScale(0.8);

        //Current level of waterblast skill
        this.waterblastLevelCircle = this.add.circle(670, 350, 13, "black");
        this.waterblastLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.waterblastLevelCircle.setVisible(false);
        this.waterblastLevelCircle.setDepth(4);
        this.waterblastLevel = this.add.text(664.5, 340.5, '1', {font: "18px arcade", fill:"orange"});
        this.waterblastLevel.setVisible(false);
        this.waterblastLevel.setDepth(5);

        if(this.skillData.waterblastDamage > 100){
            this.waterblastLevelCircle.setVisible(true);
            this.waterblastLevel.setVisible(true);

            if(this.skillData.waterblastDamage == 150){
                this.waterblastLevel.text = 1;
            }else if(this.skillData.waterblastDamage == 200){
                this.waterblastLevel.text = 2;
            }else if(this.skillData.waterblastDamage == 250){
                this.waterblastLevel.text = 3;
            }
        }

        learnWaterblastSkill.setInteractive({ cursor: 'pointer' });
       
        learnWaterblastSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 545;
            learnInfo.y = 360;
            learnInfo.text = '+100 damage';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 380;
            skillCost.text = 'Cost: 2000';
        });
        learnWaterblastSkill.on("pointerout", () => {
        
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnWaterblastSkill.on("pointerdown", () => {
            
            if(this.skillData.waterblastSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForWaterblastSkill){
                    this.skillData.totalCoins -= this.skillData.baseCostForWaterblastSkill;
                    this.skillData.baseCostForWaterblastSkill = 3000;
                    this.skillData.waterblastSkillLearned = true;

                    this.skillData.activeDropSkill = 'waterblast';

                    learnWaterblastSkill.destroy();
                    waterblastLearned.setVisible(true);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned!, +100 Damage';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }else{
                //Display inline "Skill already learned!"
                this.info.text = 'Skill already learned!';
                this.info.setVisible(true);
                setTimeout(() => {
                    //Display none => "Skill already learned!"
                    this.info.setVisible(false);;
                }, 2000);
            }

        });

        //////////////////////////////////////////
        //waterblast - First Upgrade

        //Creates waterblastLearned skill image
        let waterblastLearned = this.add.image(700,380,'waterblastIconLearned');
        waterblastLearned.setScale(0.8);
        waterblastLearned.setVisible(false);

        if(this.skillData.waterblastSkillLearned == true){
            learnWaterblastSkill.destroy();
            waterblastLearned.setVisible(true);
        }

        waterblastLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - waterblastLearned skill icon
        waterblastLearned.on("pointerover", () => {

            if(this.skillData.waterblastDamage == 100){

                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 545;
                learnInfo.y = 360;
                learnInfo.text = '+150 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 380;
                skillCost.text = 'Cost: 3000';
            }
            else if(this.skillData.waterblastDamage == 150){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 545;
                learnInfo.y = 360;
                learnInfo.text = '1.25x  Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 380;
                skillCost.text = 'Cost: 6000';
            }else if(this.skillData.waterblastDamage == 200){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 360;
                learnInfo.text = '1.5x Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 548;
                skillCost.y = 380;
                skillCost.text = 'Cost: 12000';
            }else if(this.skillData.waterblastDamage == 250){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 578;
               learnInfo.y = 360;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 560;
               skillCost.y = 380;
               skillCost.text = 'Mastered';
            }
        });

        //Mouse out - waterblastLearned skill icon
        waterblastLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - waterblastLearned skill icon
        waterblastLearned.on("pointerdown", () => {
            if(this.skillData.waterblastSkillLearned == true){
                this.skillData.activeDropSkill = 'waterblast';
                if(this.skillData.totalCoins >= this.skillData.baseCostForWaterblastSkill){

                    //////////////////////////////////////////
                    //Fireblast - First Upgrade
                    if(this.skillData.waterblastDamage == 100){
                        this.skillData.totalCoins -= this.skillData.baseCostForWaterblastSkill;
                        this.skillData.baseCostForWaterblastSkill = this.skillData.baseCostForWaterblastSkill * 2;
                        this.skillData.waterblastDamage = 150;

                        this.waterblastLevelCircle.setVisible(true);
                        this.waterblastLevel.setVisible(true);
                        this.waterblastLevel.text = 1;

                        learnInfo.x = 545;
                        learnInfo.text = '1.25x  Range';
                        skillCost.text = 'Cost: 6000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +50 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    } 

                    //////////////////////////////////////////
                    //Lightning - Second Upgrade

                    else if(this.skillData.waterblastDamage == 150){
                        this.skillData.totalCoins -= this.skillData.baseCostForWaterblastSkill;
                        this.skillData.baseCostForWaterblastSkill = this.skillData.baseCostForWaterblastSkill * 2;
                        this.skillData.waterblastDamage = 200;
                        this.skillData.waterblastRange = 1.25;

                        this.waterblastLevel.text = 2;

                        learnInfo.x = 550;
                        learnInfo.text = '1.5x Range';
                        skillCost.x = 548;
                        skillCost.text = 'Cost: 12000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Upgraded!, 1.5x Range + 20% INTANST CHARGE';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //////////////////////////////////////////
                    //Lightning - Third Upgrade
                    else if(this.skillData.waterblastDamage == 200){
                        this.skillData.totalCoins -= this.skillData.baseCostForWaterblastSkill;
                        this.skillData.baseCostForWaterblastSkill = this.skillData.baseCostForWaterblastSkill * 2;
                        this.skillData.waterblastDamage = 250;
                        this.skillData.waterblastRange = 1.5;

                        this.waterblastLevel.text = 3;

                        learnInfo.x = 578;
                        learnInfo.text = 'Skill';
                        skillCost.x = 560;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, 2x Range!"
                        this.info.text = "Upgraded!, 2x Range + 35% INTANST CHARGE!";
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, +50% Range!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        /////////////////////////////////////////////////////////////////////////
                                //DROPSKILL - Meteor

        //Creates regeneration skill image
        let learnMeteor = this.add.image(699.5,260,'meteorIconNotActive');
        learnMeteor.setScale(0.8);

        //Current level of lightning skill
        this.meteorLevelCircle = this.add.circle(670, 231, 13, "black");
        this.meteorLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.meteorLevelCircle.setVisible(false);
        this.meteorLevelCircle.setDepth(4);
        this.meteorsLevel = this.add.text(664.5,221.5, '1', {font: "18px arcade", fill:"orange"});
        this.meteorsLevel.setVisible(false);
        this.meteorsLevel.setDepth(5);

        if(this.skillData.meteorDamage > 100){
            this.meteorLevelCircle.setVisible(true);
            this.meteorsLevel.setVisible(true);

            if(this.skillData.meteorDamage == 150){
                this.meteorsLevel.text = 1;
            }else if(this.skillData.meteorDamage == 200){
                this.meteorsLevel.text = 2;
            }else if(this.skillData.meteorDamage == 400){
                this.meteorsLevel.text = 3;
            }
        }

        learnMeteor.setInteractive({ cursor: 'pointer' });

        //Mouse on - Regeneration skill icon
        learnMeteor.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 545;
            learnInfo.y = 240;
            learnInfo.text = '+100 Damage';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 260;
            skillCost.text = 'Cost: 3000';
        });

        //Mouse out - Regeneration skill icon
        learnMeteor.on("pointerout", () => {
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - Regeneration skill icon
        learnMeteor.on("pointerdown", () => {
            this.skillData.activeDropSkill = 'meteor';
            if(this.skillData.meteorSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForMeteorSkill){
                    this.skillData.totalCoins -= this.skillData.baseCostForMeteorSkill;
                    this.skillData.baseCostForMeteorSkill = this.skillData.baseCostForMeteorSkill * 2;
                    this.skillData.meteorDamage = 100;
                    this.skillData.meteorSkillLearned = true;
                    
                    learnMeteor.destroy();
                    meteorActive.setVisible(true);

                    learnInfo.text = '+150 Damage';
                    skillCost.text = 'Cost: 6000';

                    this.skillLearned.play();
                    
                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned, +100 Damage!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);
                    }, 2000);
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        //Creates regeneration1 skill image
        let meteorActive = this.add.image(699.5,261,'meteorIconA');
        meteorActive.setScale(0.8);
        meteorActive.setVisible(false);

        if(this.skillData.meteorSkillLearned == true){
            learnMeteor.destroy();
            meteorActive.setVisible(true);
        }

        meteorActive.setInteractive({ cursor: 'pointer' });

        //Mouse on - Meteor skill icon
        meteorActive.on("pointerover", () => {
            if(this.skillData.meteorDamage == 100){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 545;
                learnInfo.y = 240;
                learnInfo.text = '+150 Damage';
    
                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 260;
                skillCost.text = 'Cost: 6000';
            }
            else if(this.skillData.meteorDamage == 150){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 560;
                learnInfo.y = 240;
                learnInfo.text = '2x Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 260;
                skillCost.text = 'Cost: 12000';
            }
            else if(this.skillData.meteorDamage == 200){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 560;
                learnInfo.y = 240;
                learnInfo.text = '3x Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 260;
                skillCost.text = 'Cost: 24000';
            }
            else if(this.skillData.meteorDamage == 400){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 575;
               learnInfo.y = 240;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 560;
               skillCost.y = 260;
               skillCost.text = 'Mastered';
            }

        });

        //Mouse out - Meteor skill icon
        meteorActive.on("pointerout", () => {
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - Meteor skill icon
        meteorActive.on("pointerdown", () => {
            this.skillData.activeDropSkill = 'meteor';
            if(this.skillData.meteorSkillLearned == true){
                if(this.skillData.totalCoins >= this.skillData.baseCostForMeteorSkill){
                    //////////////////////////////////////////
                    //Regeneration - First Upgrade
                    if(this.skillData.meteorDamage == 100){
                        this.skillData.totalCoins -= this.skillData.baseCostForMeteorSkill;
                        this.skillData.baseCostForMeteorSkill = this.skillData.baseCostForMeteorSkill * 2;
                        this.skillData.meteorDamage = 150;

                        this.meteorLevelCircle.setVisible(true);
                        this.meteorsLevel.setVisible(true);
                        this.meteorsLevel.text = 1;

                        learnInfo.text = '2X Range';
                        skillCost.text = 'Cost: 12000';
                        learnInfo.x = 560;

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded, +200 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //////////////////////////////////////////
                    //Regeneration - Second Upgrade
                    else if(this.skillData.meteorDamage == 150){
                        if(this.skillData.totalCoins >= this.skillData.baseCostForMeteorSkill){
                            this.skillData.totalCoins -= this.skillData.baseCostForMeteorSkill;
                            this.skillData.baseCostForMeteorSkill = this.skillData.baseCostForMeteorSkill * 2;
                            this.skillData.meteorRange = 2;
                            this.skillData.meteorDamage = 200;

                            this.meteorsLevel.text = 2;

                            learnInfo.text = '3X Range';
                            skillCost.text = 'Cost: 24000';

                            this.skillUpgraded2.play();

                            //Display inline "Second level reached!"
                            this.info.text = '+200 Damage  &  2x Range!';
                            this.info.setVisible(true);
                            setTimeout(() => {
                                //Display none => "Max level reached"
                                this.info.setVisible(false);
                            }, 2000);
                        }else{
                            //Display inline "Not enough coins to upgrade!"
                            this.info.text = 'Not enough coins to upgrade!';
                            this.info.setVisible(true);
                            setTimeout(() => {
                                //Display none => "Not enough coins to upgrade!"
                                this.info.setVisible(false);;
                            }, 2000);
                        }
                    }

                    //////////////////////////////////////////
                    //Regeneration - Third Upgrade
                    else if(this.skillData.meteorDamage == 200){
                            if(this.skillData.totalCoins >= this.skillData.baseCostForMeteorSkill){
                                this.skillData.totalCoins -= this.skillData.baseCostForMeteorSkill;
                                this.skillData.baseCostForMeteorSkill = this.skillData.baseCostForMeteorSkill * 2;
                                this.skillData.meterRange = 3;
                                this.skillData.meteorDamage = 400;

                                this.meteorsLevel.text = 3;

                                learnInfo.x = 575;
                                learnInfo.text = 'Skill';
                                skillCost.x = 560;
                                skillCost.text = 'Mastered';

                                this.skillMastered.play();

                                //Display inline "Second level reached!"
                                this.info.text = '+400 Damage  &  3x Range!';
                                this.info.setVisible(true);
                                setTimeout(() => {
                                    //Display none => "Max level reached"
                                    this.info.setVisible(false);
                                }, 2000);
                            }else{
                                //Display inline "Not enough coins to upgrade!"
                                this.info.text = 'Not enough coins to upgrade!';
                                this.info.setVisible(true);
                                setTimeout(() => {
                                    //Display none => "Not enough coins to upgrade!"
                                    this.info.setVisible(false);;
                                }, 2000);
                            }
                    }else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }   
        });

        /////////////////////////////////////////////////////////////////////
                                //FIREBLAST - SKILL

        //Creates fireblastSkill icon
        let learnFireblastSkill = this.add.image(700, 140, 'fireblastIconNotLearned');
        learnFireblastSkill.setScale(0.8);

        //Current level of fireblast skill
        this.fireblastLevelCircle = this.add.circle(670, 110, 13, "black");
        this.fireblastLevelCircle.setStrokeStyle(2, 0xefc53f);
        this.fireblastLevelCircle.setVisible(false);
        this.fireblastLevelCircle.setDepth(4);
        this.fireblastLevel = this.add.text(664.5, 100.5, '1', {font: "18px arcade", fill:"orange"});
        this.fireblastLevel.setVisible(false);
        this.fireblastLevel.setDepth(5);

        if(this.skillData.fireblastDamage > 100){
            this.fireblastLevelCircle.setVisible(true);
            this.fireblastLevel.setVisible(true);

            if(this.skillData.fireblastDamage == 150){
                this.fireblastLevel.text = 1;
            }else if(this.skillData.fireblastDamage == 200){
                this.fireblastLevel.text = 2;
            }else if(this.skillData.fireblastDamage == 250){
                this.fireblastLevel.text = 3;
            }
        }

        learnFireblastSkill.setInteractive({ cursor: 'pointer' });
       
        learnFireblastSkill.on("pointerover", () => {

            //Updates information about the skill
            learnInfo.setVisible(true);
            learnInfo.x = 545;
            learnInfo.y = 120;
            learnInfo.text = '+100 damage';

            //Updates and showes cost of the skill
            skillCost.setVisible(true);
            skillCost.x = 550;
            skillCost.y = 140;
            skillCost.text = 'Cost: 2000';
        });
        learnFireblastSkill.on("pointerout", () => {
        
            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });
        learnFireblastSkill.on("pointerdown", () => {
            
            if(this.skillData.fireblastSkillLearned == false){
                if(this.skillData.totalCoins >= this.skillData.baseCostForFireblastSkill){
                    this.skillData.totalCoins -= this.skillData.baseCostForFireblastSkill;
                    this.skillData.baseCostForFireblastSkill = 3000;
                    this.skillData.fireblastSkillLearned = true;

                    this.skillData.activeDropSkill = 'fireblast';

                    learnFireblastSkill.destroy();
                    fireblastLearned.setVisible(true);

                    this.skillLearned.play();

                    //Display inline "Skill learned!"
                    this.info.text = 'Skill learned!, +100 Damage';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Skill learned!"
                        this.info.setVisible(false);;
                    }, 2000);
                }else{
                    //Display inline "Not enough coins to learn!"
                    this.info.text = 'Not enough coins to learn!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to learn!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }else{
                //Display inline "Skill already learned!"
                this.info.text = 'Skill already learned!';
                this.info.setVisible(true);
                setTimeout(() => {
                    //Display none => "Skill already learned!"
                    this.info.setVisible(false);;
                }, 2000);
            }

        });

        //////////////////////////////////////////
        //Lightning - First Upgrade

        //Creates fireblastLearned skill image
        let fireblastLearned = this.add.image(700,140,'fireblastIconLearned');
        fireblastLearned.setScale(0.8);
        fireblastLearned.setVisible(false);

        if(this.skillData.fireblastSkillLearned == true){
            learnFireblastSkill.destroy();
            fireblastLearned.setVisible(true);
        }

        fireblastLearned.setInteractive({ cursor: 'pointer' });

        //Mouse on - fireblastLearned skill icon
        fireblastLearned.on("pointerover", () => {

            if(this.skillData.fireblastDamage == 100){

                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 545;
                learnInfo.y = 120;
                learnInfo.text = '+150 Damage';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 140;
                skillCost.text = 'Cost: 3000';
            }
            else if(this.skillData.fireblastDamage == 150){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 550;
                learnInfo.y = 120;
                learnInfo.text = '1.5x  Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 550;
                skillCost.y = 140;
                skillCost.text = 'Cost: 6000';
            }else if(this.skillData.fireblastDamage == 200){
                //Updates information about the skill
                learnInfo.setVisible(true);
                learnInfo.x = 560;
                learnInfo.y = 120;
                learnInfo.text = '2x Range';

                //Updates and showes cost of the skill
                skillCost.setVisible(true);
                skillCost.x = 548;
                skillCost.y = 140;
                skillCost.text = 'Cost: 12000';
            }else if(this.skillData.fireblastDamage == 250){
               //Updates information about the skill
               learnInfo.setVisible(true);
               learnInfo.x = 578;
               learnInfo.y = 120;
               learnInfo.text = 'Skill';

               //Updates and showes cost of the skill
               skillCost.setVisible(true);
               skillCost.x = 560;
               skillCost.y = 140;
               skillCost.text = 'Mastered';
            }
        });

        //Mouse out - fireblastLearned skill icon
        fireblastLearned.on("pointerout", () => {

            learnInfo.setVisible(false);
            skillCost.setVisible(false);
        });

        //Mouse down - fireblastLearned skill icon
        fireblastLearned.on("pointerdown", () => {
            if(this.skillData.fireblastSkillLearned == true){
                this.skillData.activeDropSkill = 'fireblast';
                if(this.skillData.totalCoins >= this.skillData.baseCostForFireblastSkill){

                    //////////////////////////////////////////
                    //Fireblast - First Upgrade
                    if(this.skillData.fireblastDamage == 100){
                        this.skillData.totalCoins -= this.skillData.baseCostForFireblastSkill;
                        this.skillData.baseCostForFireblastSkill = this.skillData.baseCostForFireblastSkill * 2;
                        this.skillData.fireblastDamage = 150;

                        this.fireblastLevelCircle.setVisible(true);
                        this.fireblastLevel.setVisible(true);
                        this.fireblastLevel.text = 1;

                        learnInfo.x = 550;
                        learnInfo.text = '1.5x   Range';
                        skillCost.text = 'Cost: 6000';

                        this.skillUpgraded1.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Skill upgraded!, +50 Damage!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    } 

                    //////////////////////////////////////////
                    //Lightning - Second Upgrade

                    else if(this.skillData.fireblastDamage == 150){
                        this.skillData.totalCoins -= this.skillData.baseCostForFireblastSkill;
                        this.skillData.baseCostForFireblastSkill = this.skillData.baseCostForFireblastSkill * 2;
                        this.skillData.fireblastDamage = 200;
                        this.skillData.fireblastRange = 0.75;

                        this.fireblastLevel.text = 2;

                        learnInfo.x = 560;
                        learnInfo.text = '2x Range';
                        skillCost.x = 548;
                        skillCost.text = 'Cost: 12000';

                        this.skillUpgraded2.play();

                        //Display inline "Skill upgraded!"
                        this.info.text = 'Upgraded!, 1.5x Range + 20% INTANST CHARGE';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Max level reached"
                            this.info.setVisible(false);;
                        }, 2000);
                    }

                    //////////////////////////////////////////
                    //Lightning - Third Upgrade
                    else if(this.skillData.fireblastDamage == 200){
                        this.skillData.totalCoins -= this.skillData.baseCostForFireblastSkill;
                        this.skillData.baseCostForFireblastSkill = this.skillData.baseCostForFireblastSkill * 2;
                        this.skillData.fireblastDamage = 250;
                        this.skillData.fireblastRange = 1;

                        this.fireblastLevel.text = 3;

                        learnInfo.x = 578;
                        learnInfo.text = 'Skill';
                        skillCost.x = 560;
                        skillCost.text = 'Mastered';

                        this.skillMastered.play();

                        //Display inline "Skill upgraded!, 2x Range!"
                        this.info.text = "Upgraded!, 2x Range + 35% INTANST CHARGE!";
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Skill upgraded!, +50% Range!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                    else{
                        //Display inline "Not enough coins to upgrade!"
                        this.info.text = '                       Skill Mastered!';
                        this.info.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Not enough coins to upgrade!"
                            this.info.setVisible(false);;
                        }, 2000);
                    }
                }else{
                    //Display inline "Not enough coins to upgrade!"
                    this.info.text = 'Not enough coins to upgrade!';
                    this.info.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Not enough coins to upgrade!"
                        this.info.setVisible(false);;
                    }, 2000);
                }
            }
        });

        ///////////////////////////////////////////////////////////////////////
        backToPause.setInteractive({ cursor: 'pointer' });

        backToPause.on("pointerover", () => {
            backToPause.style.setColor('black');
            backToPause.setShadow(2, 2, 'white', 0);
        });
        backToPause.on("pointerout", () => {
            backToPause.style.setColor('white');
            backToPause.setShadow(2, 2, 'black', 0);
        });
        backToPause.on("pointerdown", () => {
            this.click.play();
            //Starts the menu scene
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start("PauseScene", this.skillData);
            })
        });

        resumeGameButton.setInteractive({ cursor: 'pointer' });

        resumeGameButton.on("pointerover", () => {
            resumeGameButton.style.setColor('black');
            resumeGameButton.setShadow(2, 2, 'white', 0);
        });
        resumeGameButton.on("pointerout", () => {
            resumeGameButton.style.setColor('white');
            resumeGameButton.setShadow(2, 2, 'black', 0);
        });
        resumeGameButton.on("pointerdown", () => {
            this.click.play();
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.mainTheme.pause();
                //Stops pause scene
                this.scene.stop();
                //Resumes game scene
                this.scene.resume(this.skillData.nameOfThisScene, this.skillData);
            })
        });

    }

    update(){
        this.coins.text = 'Coins: ' + this.skillData.totalCoins;

        //On press to ESC, Resume the game
        if(this.keyESC.isDown){
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.mainTheme.pause();
                //Stops pause scene
                this.scene.stop();
                //Resumes game scene
                this.scene.resume(this.skillData.nameOfThisScene, this.skillData);
            })
        }
        
                                //PHYSICAL SKILL
        //ACTIVE - PHYSICALSKILL
        if(this.skillData.activePhysicalSkill == 'untouchable'){
            if(this.skillData.untouchableSkillLearned == true){
                this.selectedPhysicalSkill.y = 472;
                this.selectedPhysicalSkill.setVisible(true);
            }
        }else if(this.skillData.activePhysicalSkill == 'bulletTime'){
            if(this.skillData.bulletTimeSkillLearned == true){
                this.selectedPhysicalSkill.y = 352;
                this.selectedPhysicalSkill.setVisible(true);
            }
        }else if(this.skillData.activePhysicalSkill == 'speedBoost'){
            if(this.skillData.speedBoostLearned == true){
                this.selectedPhysicalSkill.y = 232;
                this.selectedPhysicalSkill.setVisible(true);
            }
        }else if(this.skillData.activePhysicalSkill == 'freeze'){
            if(this.skillData.freezeSkillLearned == true){
                this.selectedPhysicalSkill.y = 112;
                this.selectedPhysicalSkill.setVisible(true);
            }
        }else{
            this.selectedDropSkill.setVisible(false);
        }

                                //SHOOTING SKILLS
        //ACTIVE - SHOOTINGSKILL
        if(this.skillData.shootingObject == 'fireball'){
            this.skillData.amountShootingObjects = this.amountShootingFireballs;
            this.selectedShootingSkill.y = 472;
            this.selectedShootingSkill.setVisible(true);
   
            if(this.amountShootingFireballs == 3){
                    this.fireballLevelCircle.setVisible(true);
                    this.fireballsLevel.setVisible(true);

                    this.fireballsLevel.text = 1;
            }else if(this.amountShootingFireballs == 5){
                    this.fireballsLevel.text = 2;
            }else if(this.amountShootingFireballs == 10){
                    this.fireballsLevel.text = 3;
            }

        }else if(this.skillData.shootingObject == 'bullet'){
            this.skillData.amountShootingObjects = this.amountShootingBullets;
            this.selectedShootingSkill.y = 352;
            this.selectedShootingSkill.setVisible(true);
            
        }else if(this.skillData.shootingObject == 'dagger'){
            this.skillData.amountShootingObjects = this.amountShootingDaggers;
            this.selectedShootingSkill.y = 232;
            this.selectedShootingSkill.setVisible(true);
            
        }else if(this.skillData.shootingObject == 'laser'){

            this.skillData.amountShootingObjects = this.amountShootingLasers;
            this.selectedShootingSkill.y = 112;
            this.selectedShootingSkill.setVisible(true);

            if(this.amountShootingLasers == 3){
                this.laserLevelCircle.setVisible(true);
                this.lasersLevel.setVisible(true);
                
                this.lasersLevel.text = 1;

            }else if(this.amountShootingLasers == 5){
                this.lasersLevel.text = 2;
            }else if(this.amountShootingLasers == 10){
                this.lasersLevel.text = 3;
            }
        }else{
            this.selectedShootingSkill.setVisible(false);
        }

                                //DROP SKILLS
        //ACTIVE - DROPSKILL
        if(this.skillData.activeDropSkill == 'lightning'){
            if(this.skillData.lightningSkillLearned == true){
                this.selectedDropSkill.y = 473;
                this.selectedDropSkill.setVisible(true);
            }
            
        }else if(this.skillData.activeDropSkill == 'waterblast'){
            if(this.skillData.waterblastSkillLearned == true){
                this.selectedDropSkill.y = 353;
                this.selectedDropSkill.setVisible(true);
            }
        }else if(this.skillData.activeDropSkill == 'meteor'){
            if(this.skillData.meteorSkillLearned == true){
                this.selectedDropSkill.y = 233;
                this.selectedDropSkill.setVisible(true);
            }
        }else if(this.skillData.activeDropSkill == 'fireblast'){
            if(this.skillData.fireblastSkillLearned == true){
                this.selectedDropSkill.y = 113;
                this.selectedDropSkill.setVisible(true);
            }
        }
        else{
            this.selectedDropSkill.setVisible(false);
        }
    }

}

export default UpgradeScene;