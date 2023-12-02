//Loads all game objects
function loadAllGameObjects(scene) {
     //GAME SCENE OBJECTS
        //Laddar spelplanen
        scene.load.image('background', './assets/tilemap/background.png');
        scene.load.image('stoneBackground', './assets/tilemap/stoneBackground.png');
        
        //Loads walls
        scene.load.image('wallTop', './assets/tilemap/wallTop.png');
        scene.load.image('wallRight', './assets/tilemap/wallRight.png');
        scene.load.image('wallBottom', './assets/tilemap/wallBottom.png');
        scene.load.image('wallLeft', './assets/tilemap/wallLeft.png');
        //Laddar pause icon
        scene.load.image('pauseIcon', './assets/tilemap/pauseIcon.png');
        //Loads door
        scene.load.spritesheet('door', 'assets/tilemap/door.png', {frameWidth: 96, frameHeight: 96});

        //Laddar heart
        scene.load.spritesheet('heart', 'assets/tilemap/heart.png', {frameWidth: 150, frameHeight: 150});
        //Loads coinAnimation
        scene.load.spritesheet('coinsAnim', 'assets/tilemap/coinsAnim.png', {frameWidth: 32, frameHeight: 32});
        //Loads loading animation
        scene.load.spritesheet('loading', 'assets/player/loading.png', {frameWidth: 34, frameHeight: 34});
        //Loads respawn
        scene.load.spritesheet('respawn', 'assets/player/respawn.png', {frameWidth: 27, frameHeight: 47});
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Sounds 
        //Shooting Skill Sounds
        scene.load.audio('laser', 'assets/sounds/laser.mp3');
        scene.load.audio('laserExplode', 'assets/sounds/laserExplode.mp3');
        scene.load.audio('bullet', 'assets/sounds/bullet.mp3');
        scene.load.audio('smokeSound', 'assets/sounds/smoke.mp3');
        scene.load.audio('fireball', 'assets/sounds/fireball.mp3');
        scene.load.audio('fireballExplode', 'assets/sounds/fireballExplode.mp3');
        scene.load.audio('dagger', 'assets/sounds/dagger.mp3');
        scene.load.audio('daggerExplode', 'assets/sounds/daggerExplode.mp3');
        
        //Drop skills Sounds
        scene.load.audio('lightning', 'assets/sounds/lightning.mp3');
        scene.load.audio('lightningExplosion', 'assets/sounds/lightningExplosion.mp3');
        scene.load.audio('meteor', 'assets/sounds/meteor.mp3');
        scene.load.audio('waterblast', 'assets/sounds/waterblast.mp3');
        scene.load.audio('waterblastExplosion', 'assets/sounds/waterblastExplosion.mp3');
        scene.load.audio('fireblast', 'assets/sounds/fireblast.mp3');
        scene.load.audio('fireExplosion', 'assets/sounds/fireExplosion.mp3');
        
        //Body skills sounds
        scene.load.audio('regeneration', 'assets/sounds/regeneration.mp3');
        
        //Physical skills sounds
        scene.load.audio('freeze', 'assets/sounds/freeze.mp3');
        scene.load.audio('freezeKilling', 'assets/sounds/freezeKilling.mp3');
        scene.load.audio('speedBoostSound', 'assets/sounds/speedBoostSound.mp3');
        scene.load.audio('bulletExplode', 'assets/sounds/bulletExplode.mp3');
        
        //Hasturs sounds
        scene.load.audio('hasturFireball', 'assets/sounds/hasturFireball.mp3');
        scene.load.audio('hasturFireballHit', 'assets/sounds/hasturFireballHit.mp3');
        scene.load.audio('hasturHurt', 'assets/sounds/fireballHurtsAganju.mp3');
        scene.load.audio('hasturSpawns', 'assets/sounds/hasturSpawns.wav');
        scene.load.audio('collideShield', 'assets/sounds/collideShield.mp3');
        
        //Others sounds
        scene.load.audio('aganjuReborn', 'assets/sounds/aganjuReborn.mp3');
        scene.load.audio('step', 'assets/sounds/stepOnGrass.mp3');
        scene.load.audio('heartbeat', 'assets/sounds/heartbeat.mp3');
        scene.load.audio('shield', 'assets/sounds/shield.mp3');
        scene.load.audio('shieldCharging', 'assets/sounds/shieldCharging.mp3');
        scene.load.audio('sword', 'assets/sounds/sword.mp3');
        scene.load.audio('swordKilling', 'assets/sounds/swordKilling.mp3');
        scene.load.audio('getCoin', 'assets/sounds/getCoin.mp3');

        //Menu sounds
        scene.load.audio('transitionBetweenScenes', 'assets/sounds/transitionBetweenScenes.mp3');
        scene.load.audio('skillMastered', 'assets/sounds/skillMastered.mp3');
        scene.load.audio('skillLearned', 'assets/sounds/skillLearned.mp3');
        scene.load.audio('skillUpgraded1', 'assets/sounds/skillUpgraded1.mp3');
        scene.load.audio('skillUpgraded2', 'assets/sounds/skillUpgraded2.mp3');
        scene.load.audio('skillUnavaliable', 'assets/sounds/skillUnavaliable.wav');


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //PLAYER AND ENEMY
        //Laddar Aganju 
        scene.load.spritesheet('aganju', './assets/player/aganju.png', {frameWidth: 32, frameHeight: 32});

        //Laddar Hastur 
        scene.load.spritesheet('hastur', './assets/enemy/hastur_leg.png', {frameWidth: 32, frameHeight: 32});
        
        //Hasturs damageTaking animations
        scene.load.spritesheet('seperate', 'assets/player/seperate.png', {frameWidth: 188, frameHeight: 185});
        scene.load.spritesheet('smoke', 'assets/player/smoke.png', {frameWidth: 317, frameHeight: 310});
        scene.load.spritesheet('bulletExplosion', 'assets/player/bulletExplosion.png', {frameWidth: 108, frameHeight: 108});
        scene.load.spritesheet('explosition', 'assets/player/explosition.png', {frameWidth: 92.5, frameHeight: 91.7});
        scene.load.spritesheet('flame', 'assets/player/flame.png', {frameWidth: 103, frameHeight: 170});
        scene.load.spritesheet('bleeding', 'assets/player/bleeding.png', {frameWidth: 225, frameHeight: 225});
        scene.load.spritesheet('bloodExplosition', 'assets/player/bloodExplosition.png', {frameWidth: 512, frameHeight: 512});
        scene.load.spritesheet('freeze', 'assets/player/freeze.png', {frameWidth: 72, frameHeight: 72});
        scene.load.spritesheet('laserExplode', 'assets/player/laserExplode.png', {frameWidth: 218, frameHeight: 224});

        //ATTACK AND DEFENCE
        //Laddar svärd
        scene.load.spritesheet('sword', 'assets/player/sword.png', {frameWidth: 256, frameHeight: 194});
        //Laddar shield
        scene.load.spritesheet('shield', 'assets/player/shield.png', {frameWidth: 820, frameHeight: 817});
    
        //Laddar shield
        // scene.load.image('shieldIcon', 'assets/player/shieldIcon.png');

        ///////////////////////////////////////////////////////
        //SKILLS

        //Laddar pause icon
        scene.load.image('skillIcon', './assets/tilemap/skillUpIcon.png');
        //Loads placeholder for skills
        scene.load.image('skillPlaceHolder', './assets/tilemap/skillPlaceHolder.png');

        //Laddar Health Potion icon
        scene.load.image('healthPotion', './assets/player/health_potion.png');
        //Loads regeneration healing animation
        scene.load.spritesheet('healing', 'assets/player/healing.png', {frameWidth: 70, frameHeight: 70});

        //Laddar Speed Potion icon
        // scene.load.image('speedPotion', './assets/player/speed_potion.png');

        //Laddar no access/locked image for not learned skills
        scene.load.image('locked', './assets/player/locked.png');

        //Loads bullet
        scene.load.image('bullet', './assets/player/bullet.png');
        //Loads laser
        scene.load.image('laser', './assets/player/laser.png');

        //Loads shooting dagger
        scene.load.image('dagger', './assets/player/dagger.png');

        //Laddar eldbollar
        scene.load.image('fireball', './assets/player/fireball.png');
        //Loads missile
        scene.load.image('missile', './assets/player/missile.png');

        //DROP-Skill
        
        //Laddar lightnings skill icon
        scene.load.image('lightningIcon', './assets/player/lightningSkillIcon.png');
        //Laddar lightning
        scene.load.spritesheet('lightning', 'assets/player/lightning.png', {frameWidth: 184, frameHeight: 184});
        //Laddar lightningExplosion
        scene.load.spritesheet('lightningExplosion', 'assets/player/lightningExplosion.png', {frameWidth: 184, frameHeight: 184});
        //Laddar lightning drop image
        scene.load.image('lightningDrop', 'assets/player/lightningDrop.png', {frameWidth: 184, frameHeight: 184});

        //Loads meteor spritesheet
        scene.load.spritesheet('meteor', 'assets/player/meteor.png', {frameWidth: 190, frameHeight: 190});
        //Laddar meteorExplosion
        scene.load.spritesheet('meteorExplosion', 'assets/player/meteorExplosion.png', {frameWidth: 190, frameHeight: 190});
        //Laddar meteor drop image
        scene.load.image('meteorDrop', 'assets/player/meteorDrop.png', {frameWidth: 190, frameHeight: 190});
        //Laddar meteor skill icon
        scene.load.image('meteorIcon', './assets/player/meteorSkillIcon.png');
        scene.load.image('meteorIconNotActive', './assets/player/meteorIconNotActive.png');

        //Laddar fireblast
        scene.load.spritesheet('fireblast', 'assets/player/fireblast.png', {frameWidth: 331, frameHeight: 299});
        scene.load.spritesheet('fireblastExplosion', 'assets/player/fireblastExplosion.png', {frameWidth: 128, frameHeight: 128});
        //Laddar fireblast drop image
        scene.load.spritesheet('fireblastDrop', 'assets/player/fireblastDrop.png', {frameWidth: 145, frameHeight: 145});

        //Loads waterblast skill
        scene.load.spritesheet('waterblast', 'assets/player/waterblast.png', {frameWidth: 192, frameHeight: 192});
        scene.load.spritesheet('waterblastExplosion', 'assets/player/waterblastExplosion.png', {frameWidth: 267, frameHeight: 267});
        scene.load.image('waterblastDrop', 'assets/player/waterblastDrop.png');

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //Upgrade scene uploads

        //PHYSICAL SKILLS
        //Laddar Health icon
        scene.load.image('healthIcon', './assets/player/healthIcon.png');
        scene.load.image('healthIconNotActive', './assets/player/healthIconNotActive.png');
        //Loads Strenght Skill
        scene.load.image('strenghtIconNotLearned', './assets/player/strenghtIconNotLearned.png');
        scene.load.image('strenghtIconLearned', './assets/player/strenghtIconLearned.png');
        //Loads Shield Skill
        scene.load.image('shieldIconNotLearned', './assets/player/shieldIconNotLearned.png');
        scene.load.image('shieldIconLearned', './assets/player/shieldIconLearned.png');
        //Loads Sword Skill
        scene.load.image('swordIconNotLearned', './assets/player/swordIconNotLearned.png');
        scene.load.image('swordIconLearned', './assets/player/swordIconLearned.png');


        //Laddar SpeedBoost icon
        scene.load.image('flashIconNotLearned', './assets/player/flashIconNotLearned.png');
        scene.load.image('flashIconLearned', './assets/player/flashIconLearned.png');
        //Loads BulletTime Icon
        scene.load.image('bulletTimeIconNotLearned', './assets/player/bulletTimeIconNotLearned.png');
        scene.load.image('bulletTimeIconLearned', './assets/player/bulletTimeIconLearned.png');
        //Loads Untouchable skill icon
        scene.load.image('untouchableIconNotLearned', './assets/player/untouchableIconNotLearned.png');
        scene.load.image('untouchableIconLearned', './assets/player/untouchableIconLearned.png');
        //Loads Freeze skill icon
        scene.load.image('freezeIconNotLearned', './assets/player/freezeIconNotLearned.png');
        scene.load.image('freezeIconLearned', './assets/player/freezeIconLearned.png');

        
        //LOADS SHOOTING SKILLS ICONS
        //Loads fireballs
        scene.load.image('fireballIconNotLearned', './assets/player/fireballIconNotLearned.png');
        scene.load.image('fireballIconLearned', './assets/player/fireballIconLearned.png');
        //Loads lasers
        scene.load.image('laserIconNotLearned', './assets/player/laserIconNotLearned.png');
        scene.load.image('laserIconLearned', './assets/player/laserIconLearned.png');
        //Loads daggers
        scene.load.image('daggerIconNotLearned', './assets/player/daggerIconNotLearned.png');
        scene.load.image('daggerIconLearned', './assets/player/daggerIconLearned.png');
        //Loads bullets
        scene.load.image('bulletIconNotLearned', './assets/player/bulletIconNotLearned.png');
        scene.load.image('bulletIconLearned', './assets/player/bulletIconLearned.png');
        
        //LOADS DROPSKILLS ICONS
        //Laddar lightnings skill icon
        scene.load.image('lightningIconNotLearned', './assets/player/lightningIconNotLearned.png');
        scene.load.image('lightningIconLearned', './assets/player/lightningIconLearned.png');
        //Laddar meteor skill icon
        scene.load.image('meteorIconA', './assets/player/meteorIcon.png');
        scene.load.image('meteorIconNotActive', './assets/player/meteorIconNotActive.png');
        //Laddar fireblast skill icon
        scene.load.image('fireblastIconNotLearned', './assets/player/fireblastIconNotLearned.png');
        scene.load.image('fireblastIconLearned', './assets/player/fireblastIconLearned.png');
        //Laddar waterblast skill icon
        scene.load.image('waterblastIconNotLearned', './assets/player/waterblastIconNotLearned.png');
        scene.load.image('waterblastIconLearned', './assets/player/waterblastIconLearned.png');


        //Laddar up icon
        scene.load.image('cursorUp', './assets/tilemap/cursorUp.png');
        //Loads selected image
        scene.load.image('selected', './assets/player/selected.png');

        //Loads placeholder for skills
        scene.load.image('skillPlaceHolder', './assets/tilemap/skillPlaceHolder.png');
        
} 

//Creates the all objects for lounge room
function createLoungeRoomObjects(scen) {
    ////////////////////////////////////////////////////////////////////
    //Creates ground decors
    scen.add.image(20,160,'stoneBackground').setOrigin(0);
    scen.add.image(245,160,'stoneBackground').setOrigin(0);
    scen.add.image(470,160,'stoneBackground').setOrigin(0);
    scen.add.image(695,160,'stoneBackground').setOrigin(0);
    scen.add.image(20,385,'stoneBackground').setOrigin(0);
    scen.add.image(245,385,'stoneBackground').setOrigin(0);
    scen.add.image(470,385,'stoneBackground').setOrigin(0);
    scen.add.image(695,385,'stoneBackground').setOrigin(0);

    //Creates the top walls
    scen.add.image(0,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(128,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(256,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(384,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(512,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(640,0, 'wallTop').setOrigin(0).setScale(2.5);
    scen.add.image(768,0, 'wallTop').setOrigin(0).setScale(2.5);

    //Creates the left walls
    scen.add.image(0,5, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,96, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,192, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,288, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,384, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,480, 'wallLeft').setOrigin(0).setScale(2.5);
    scen.add.image(0,576, 'wallLeft').setOrigin(0).setScale(2.5);
    //Creates the right walls
    scen.add.image(792,5, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,96, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,192, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,288, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,384, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,480, 'wallRight').setOrigin(0).setScale(2.5);
    scen.add.image(792,576, 'wallRight').setOrigin(0).setScale(2.5);
    //Creates the bottom walls
    scen.add.image(0,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(128,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(256,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(384,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(512,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(640,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);
    scen.add.image(768,590, 'wallTop').setOrigin(0).setDepth(2).setScale(2.5);


////////////////////////////////////////////////////////////////////////////
    //SOUNDS
    //Shooting skills sound
    scen.laserSound = scen.sound.add('laser');
    scen.laserExplodeSound = scen.sound.add('laserExplode');
    scen.fireballSound = scen.sound.add('fireball');
    scen.fireballExplodeSound = scen.sound.add('fireballExplode');
    scen.bulletSound = scen.sound.add('bullet');
    scen.bulletExplodeSound = scen.sound.add('bulletExplode');
    scen.daggerSound = scen.sound.add('dagger');
    scen.daggerExplodeSound = scen.sound.add('daggerExplode');

    //Body skills sound
    scen.regenerationSound = scen.sound.add('regeneration');

    //Physical skills sound
    scen.freezeSound = scen.sound.add('freeze');
    scen.freezeKillingSound = scen.sound.add('freezeKilling');
   

    //Drop skills sounds
    scen.lightningSound = scen.sound.add('lightning');
    scen.lightningExplosionSound = scen.sound.add('lightningExplosion');
    scen.meteorSound = scen.sound.add('meteor');
    scen.fireblastSound = scen.sound.add('fireblast');
    scen.fireExplosionSound = scen.sound.add('fireExplosion');
    scen.waterblastSound = scen.sound.add('waterblast');
    scen.waterblastExplosionSound = scen.sound.add('waterblastExplosion');

    //Other sounds
    scen.step = scen.sound.add('step');
    scen.heartBeat = scen.sound.add('heartbeat');
    scen.shieldBlock = scen.sound.add('shield');
    scen.shieldCharging = scen.sound.add('shieldCharging');
    scen.swordAttack = scen.sound.add('sword');
    scen.swordKilling = scen.sound.add('swordKilling');
    scen.click = scen.sound.add('click');
    scen.skillUnavaliable = scen.sound.add('skillUnavaliable');

    //Hasturs
    scen.hasturHurt = scen.sound.add('hasturHurt');
    scen.hasturFireball = scen.sound.add('hasturFireball');
    scen.hasturFireballHit = scen.sound.add('hasturFireballHit');
    scen.hasturSpawns = scen.sound.add('hasturSpawns');
    scen.collideShield = scen.sound.add('collideShield');

    //Sound configs for generalsounds
    scen.musicConfig = {
        mute:false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    //Sound configs for hastur
    scen.soundConfigForHasturSpawn = {
        mute:false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    //Sound configs for aganjus step
    scen.stepConfigs = {
        mute:false,
        volume: 0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    

////////////////////////////////////////////////////////////////////
    //Level Doors
    //Skapar door animation
    scen.anims.create({
        key: 'doorOpen',
        frames: scen.anims.generateFrameNumbers('door', { 
            start: 0, 
            end: 11
        }),
        frameRate: 5,
        repeat: 0
    });

    scen.door1 = scen.physics.add.sprite(150, 1,'door').setOrigin(0);
    scen.door1.setScale(1.65); 
    // scen.door1.setBodySize(20,5,true);
    // scen.door1.setOffset(37,100,true);

    if(scen.startData.totalKills >= 5){
        setTimeout(() => {
            scen.door1.anims.play('doorOpen');
        }, 2000);
    }

    scen.door2 = scen.physics.add.sprite(350, 1,'door').setOrigin(0);
    scen.door2.setScale(1.65); 
    scen.door2.setBodySize(20,5,true);
    scen.door2.setOffset(37,10,true);

    if(scen.startData.totalKills >= 15){
        setTimeout(() => {
            scen.door1.anims.play('doorOpen');
        }, 2000);
    }

    //Creates the overlap between door and aganju to make possible pass between levels
    scen.physics.add.overlap(scen.aganju, scen.door2, () => {
        if(scen.startData.totalKills >= 15){
            //Stops the game scene
            // scen.scene.stop(scen.startData.nameOfThisScene);
            scen.scene.stop(scen.startData.nameOfThisScene);
            // scen.scene.pause();
            //Starts the next level
            scen.scene.start(scen.startData.nameOfNextScene, scen.startData);
        }
    });

    scen.door3 = scen.physics.add.sprite(550, 1,'door').setOrigin(0);
    scen.door3.setScale(1.65); 
    scen.door3.setBodySize(20,5,true);
    scen.door3.setOffset(37,10,true);

    if(scen.startData.totalKills >= 30){
        setTimeout(() => {
            scen.door1.anims.play('doorOpen');
        }, 2000);
    }

    //Creates the overlap between door and aganju to make possible pass between levels
    scen.physics.add.overlap(scen.aganju, scen.door3, () => {
        if(scen.startData.totalKills >= 30){
            //Stops the game scene
            // scen.scene.stop(scen.startData.nameOfThisScene);
            scen.scene.stop(scen.startData.nameOfThisScene);
            // scen.scene.pause();
            //Starts the next level
            scen.scene.start(scen.startData.nameOfNextScene, scen.startData);
        }
    });
   

    // ////////////////////////////////////////////////////////////////////
    // //Creates pause icon
    // scen.pauseIcon = scen.add.image(400,30, 'pauseIcon');
    // scen.pauseIcon.setScale(0.2);
    // //Opacity = 0.3
    // scen.pauseIcon.setAlpha(0.3);
    // scen.pauseIcon.setInteractive({ cursor: 'pointer' });
    // scen.pauseIcon.setDepth(1);

    // //Mouse hover pauseIcon
    // scen.pauseIcon.on('pointerover', ()=>{
    //     scen.pauseIcon.setAlpha(1);
    // });
    // //Mouse out pauseIcon
    // scen.pauseIcon.on('pointerout', ()=>{
    //     scen.pauseIcon.setAlpha(0.3);
    // });
    // //Onclick opens the puase screen
    // scen.pauseIcon.on('pointerdown', ()=>{
    //     scen.scene.pause();
    //     scen.scene.launch('PauseScene', scen.startData);
    // });

    ////////////////////////////////////////////////////////////////////
    //Creates skillUp icon
    scen.skillIcon = scen.add.image(770,440, 'skillIcon');
    scen.skillIcon.setScale(0.2);
    //Opacity = 0.3
    scen.skillIcon.setAlpha(0.3);
    scen.skillIcon.setInteractive({ cursor: 'pointer' });
    scen.skillIcon.setDepth(1);

    scen.textSkill = scen.add.text(738,400, 'Skills', {font: '15px arcade', fill: 'black'});
    scen.textSkill.setDepth(1);
    scen.textSkill.setVisible(false);

    //Mouse hover
    scen.skillIcon.on('pointerover', ()=>{
        scen.skillIcon.setAlpha(1);
        scen.textSkill.setVisible(true);
    });
    //Mouse out
    scen.skillIcon.on('pointerout', ()=>{
        scen.skillIcon.setAlpha(0.3);
        scen.textSkill.setVisible(false);
    });
    //Onclick opens the puase screen
    scen.skillIcon.on('pointerdown', ()=>{
        scen.scene.pause();
        scen.scene.launch('UpgradeScene', scen.startData);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////
     //Players score 
     scen.scoreText = scen.add.text(20, 10, 'Score: ', { font: '25px arcade', fill: '#ffffff'});
     scen.scoreText.setShadow(2, 2, '#000000', 0);
     scen.scoreText.setDepth(1);
     scen.scoreText.text += scen.startData.score;
     
    //CoinsTurn
     scen.coinsAnim = scen.physics.add.sprite(58, 565,'coinsAnim');
     scen.coinsAnim.setScale(2);
     scen.coinsAnim.setDepth(5);
     //Skapar coin animation
     scen.anims.create({
         key: 'coinTurn',
         frames: scen.anims.generateFrameNumbers('coinsAnim', { 
             start: 0, 
             end: 9
         }),
         frameRate: 10,
         repeat: -1
     });
     scen.coinsAnim.anims.play('coinTurn');

     //Coins
     scen.coins =  scen.add.text(88, 548.5, '', {fill: 'rgb(221, 171, 45)', font: "30px arcade"});
     scen.coins.setShadow(2, 2, '#000000', 0);
     scen.coins.setDepth(5);
     scen.coins.text = scen.startData.totalCoins;

     //Total killed hastur  
     scen.killedHasturImage = scen.add.sprite(35, 140, 'hastur');
     scen.killedHasturImage.setDepth(1);
     scen.killedHasturImage.setFrame(1);
     scen.killedHasturImage.setScale(1.2);
     scen.killedHasturImage.setTint(0x990000);

     scen.amountKilledHastur = scen.add.text(75, 125, '', {fill: 'black', font: "35px arcade"});
     scen.amountKilledHastur.setDepth(1);
     scen.amountKilledHastur.text = scen.startData.totalKills;

     scen.xBetween = scen.add.text(62.5, 142.5, 'x', {fill: 'black', font: "15px arcade"});
     scen.xBetween.setDepth(1);

     //Players lives
     scen.livescounter = scen.add.text(680,10, 'Lives: ', {font: '25px arcade', fill: 'deepskyblue', });
     scen.livescounter.setShadow(2, 2, '#000000', 0);
     scen.livescounter.setDepth(1);
     scen.livescounter.text += scen.startData.lives;

     //Creates Aganju
     scen.aganju = scen.physics.add.sprite(350, 500, 'aganju');
     scen.aganju.name = 'aganju';
     //Skalar upp Aganju
     scen.aganju.setScale(3);
     //Ger vikt på Aganju
     scen.aganju.body.mass = 2;
     //Begränsar Aganju inom spescens gränser
     scen.aganju.setCollideWorldBounds(true);
     //Aganjus body size
     scen.aganju.setBodySize(23,30,true);
     scen.aganju.setOffset(5,1.5, true);
 
     //Aganjus start hastighet
     scen.basicSpeed = 100;

    //Variabel för eldbollar
    scen.lastFired = 0;
}

//Creates the all objects for game/levels scene
 function createGameObjects(scene) {
    
    ///////////////////////////////////////////////////////////////////////
    //SOUNDS
    //Shooting skills sound
    scene.laserSound = scene.sound.add('laser');
    scene.laserExplodeSound = scene.sound.add('laserExplode');
    scene.fireballSound = scene.sound.add('fireball');
    scene.fireballExplodeSound = scene.sound.add('fireballExplode');
    scene.bulletSound = scene.sound.add('bullet');
    scene.smokeSound = scene.sound.add('smokeSound');
    scene.daggerSound = scene.sound.add('dagger');
    scene.daggerExplodeSound = scene.sound.add('daggerExplode');
    
    //Body skills sound
    scene.regenerationSound = scene.sound.add('regeneration');
    
    //Physical skills sound
    scene.freezeSound = scene.sound.add('freeze');
    scene.freezeKillingSound = scene.sound.add('freezeKilling');
    scene.speedBoostSound = scene.sound.add('speedBoostSound');
    scene.bulletExplodeSound = scene.sound.add('bulletExplode');

    //Drop skills sounds
    scene.lightningSound = scene.sound.add('lightning');
    scene.lightningExplosionSound = scene.sound.add('lightningExplosion');
    scene.meteorSound = scene.sound.add('meteor');
    scene.fireblastSound = scene.sound.add('fireblast');
    scene.fireExplosionSound = scene.sound.add('fireExplosion');
    scene.waterblastSound = scene.sound.add('waterblast');
    scene.waterblastExplosionSound = scene.sound.add('waterblastExplosion');

    //Other sounds
    scene.aganjuReborn = scene.sound.add('aganjuReborn');
    scene.step = scene.sound.add('step');
    scene.heartBeat = scene.sound.add('heartbeat');
    scene.shieldBlock = scene.sound.add('shield');
    scene.shieldCharging = scene.sound.add('shieldCharging');
    scene.swordAttack = scene.sound.add('sword');
    scene.swordKilling = scene.sound.add('swordKilling');
    scene.getCoin = scene.sound.add('getCoin');
    scene.click = scene.sound.add('click');
    scene.skillUnavaliable = scene.sound.add('skillUnavaliable');

    //Hasturs
    scene.hasturHurt = scene.sound.add('hasturHurt');
    scene.hasturFireball = scene.sound.add('hasturFireball');
    scene.hasturFireballHit = scene.sound.add('hasturFireballHit');
    scene.hasturSpawns = scene.sound.add('hasturSpawns');
    scene.collideShield = scene.sound.add('collideShield');

    //Sound configs for generalsounds
    scene.musicConfig = {
        mute:false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    //Sound configs for hastur
    scene.soundConfigForHasturSpawn = {
        mute:false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }

    //Sound configs for aganjus step
    scene.stepConfigs = {
        mute:false,
        volume: 0.5,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0
    }
    

    /////////////////////////////////////////////////////////////////////////////
    //Updates Current Level
    scene.startData.currentLevel += 1;

    ////////////////////////////////////////////////////////////////////
    //Creates the top walls
    scene.add.image(0,0, 'wallTop').setOrigin(0);
    scene.add.image(128,0, 'wallTop').setOrigin(0);
    scene.add.image(256,0, 'wallTop').setOrigin(0);
    scene.add.image(384,0, 'wallTop').setOrigin(0);
    scene.add.image(512,0, 'wallTop').setOrigin(0);
    scene.add.image(640,0, 'wallTop').setOrigin(0);
    scene.add.image(768,0, 'wallTop').setOrigin(0);

    //Creates the left walls
    scene.add.image(0,5, 'wallLeft').setOrigin(0);
    scene.add.image(0,96, 'wallLeft').setOrigin(0);
    scene.add.image(0,192, 'wallLeft').setOrigin(0);
    scene.add.image(0,288, 'wallLeft').setOrigin(0);
    scene.add.image(0,384, 'wallLeft').setOrigin(0);
    scene.add.image(0,480, 'wallLeft').setOrigin(0);
    scene.add.image(0,576, 'wallLeft').setOrigin(0);
    //Creates the right walls
    scene.add.image(792,5, 'wallRight').setOrigin(0);
    scene.add.image(792,96, 'wallRight').setOrigin(0);
    scene.add.image(792,192, 'wallRight').setOrigin(0);
    scene.add.image(792,288, 'wallRight').setOrigin(0);
    scene.add.image(792,384, 'wallRight').setOrigin(0);
    scene.add.image(792,480, 'wallRight').setOrigin(0);
    scene.add.image(792,576, 'wallRight').setOrigin(0);
    //Creates the bottom walls
    scene.add.image(0,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(128,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(256,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(384,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(512,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(640,590, 'wallTop').setOrigin(0).setDepth(2);
    scene.add.image(768,590, 'wallTop').setOrigin(0).setDepth(2);


    ////////////////////////////////////////////////////////////////////
    //Doors
     scene.door = scene.physics.add.sprite(600, 1,'door').setOrigin(0);
     scene.door.setScale(0.65); 
     scene.door.setBodySize(20,5,true);
     scene.door.setOffset(37,10,true);
     //Skapar door animation
     scene.anims.create({
         key: 'doorOpen',
         frames: scene.anims.generateFrameNumbers('door', { 
             start: 0, 
             end: 11
         }),
         frameRate: 5,
         repeat: 0
     });
    // scene.doorLv1.anims.play('doorOpen');


    ////////////////////////////////////////////////////////////////////
    //Creates pause icon
    scene.pauseIcon = scene.add.image(400,30, 'pauseIcon');
    scene.pauseIcon.setScale(0.2);
    //Opacity = 0.3
    scene.pauseIcon.setAlpha(0.3);
    scene.pauseIcon.setInteractive({ cursor: 'pointer' });
    scene.pauseIcon.setDepth(1);

    //Mouse hover pauseIcon
    scene.pauseIcon.on('pointerover', ()=>{
        scene.pauseIcon.setAlpha(1);
    });
    //Mouse out pauseIcon
    scene.pauseIcon.on('pointerout', ()=>{
        scene.pauseIcon.setAlpha(0.3);
    });
    //Onclick opens the puase screen
    scene.pauseIcon.on('pointerdown', ()=>{
        scene.click.play();
        scene.scene.pause();
        scene.scene.launch('PauseScene', scene.startData);
    });

    ////////////////////////////////////////////////////////////////////
    //Creates skillUp icon
    scene.skillIcon = scene.add.image(770,440, 'skillIcon');
    scene.skillIcon.setScale(0.2);
    //Opacity = 0.3
    scene.skillIcon.setAlpha(0.3);
    scene.skillIcon.setInteractive({ cursor: 'pointer' });
    scene.skillIcon.setDepth(1);

    scene.textSkill = scene.add.text(738,400, 'Skills', {font: '15px arcade', fill: 'black'});
    scene.textSkill.setDepth(1);
    scene.textSkill.setVisible(false);

    //Mouse hover
    scene.skillIcon.on('pointerover', ()=>{
        scene.skillIcon.setAlpha(1);
        scene.textSkill.setVisible(true);
    });
    //Mouse out
    scene.skillIcon.on('pointerout', ()=>{
        scene.skillIcon.setAlpha(0.3);
        scene.textSkill.setVisible(false);
    });
    //Onclick opens the puase screen
    scene.skillIcon.on('pointerdown', ()=>{
        scene.click.play();
        scene.scene.pause();
        scene.scene.launch('UpgradeScene', scene.startData);
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////
     //Players score 
     scene.scoreText = scene.add.text(20, 10, 'Score:', { font: '25px arcade', fill: '#ffffff'});
     scene.scoreText.setShadow(2, 2, '#000000', 0);
     scene.scoreText.setDepth(1);

    //CoinsTurn
     scene.coinsAnim = scene.physics.add.sprite(35, 60,'coinsAnim');
     scene.coinsAnim.setScale(1.5);
     scene.coinsAnim.setDepth(1);
     //Skapar heart animation
     scene.anims.create({
         key: 'coinTurn',
         frames: scene.anims.generateFrameNumbers('coinsAnim', { 
             start: 0, 
             end: 9
         }),
         frameRate: 10,
         repeat: -1
     });
     scene.coinsAnim.anims.play('coinTurn');

    //Respawn
     scene.respawn = scene.physics.add.sprite(300, 360,'respawn');
     scene.respawn.setScale(2);
     scene.respawn.setDepth(1);
     scene.respawn.setVisible(false);
     //Skapar heart animation
     scene.anims.create({
         key: 'respawn',
         frames: scene.anims.generateFrameNumbers('respawn', { 
             start: 0, 
             end: 4
         }),
         frameRate: 10,
         repeat: 1
     });
     scene.respawn.anims.play('respawn');

     //Coins
     scene.coins =  scene.add.text(60, 47, '', {fill: 'rgb(221, 171, 45)', font: "25px arcade"});
     scene.coins.setShadow(2, 2, '#000000', 0);
     scene.coins.setDepth(1);

     //Total killed hastur  
     scene.killedHasturImage = scene.add.sprite(35, 140, 'hastur');
     scene.killedHasturImage.setDepth(1);
     scene.killedHasturImage.setFrame(1);
     scene.killedHasturImage.setScale(1.2);
     scene.killedHasturImage.setTint(0x990000);

     scene.amountKilledHastur = scene.add.text(75, 125, '', {fill: 'black', font: "35px arcade"});
     scene.amountKilledHastur.setDepth(1);

     scene.xBetween = scene.add.text(62.5, 142.5, 'x', {fill: 'black', font: "15px arcade"});
     scene.xBetween.setDepth(1);

     //Players lives
     scene.livescounter = scene.add.text(680,10, 'Lives: ', {font: '25px arcade', fill: 'deepskyblue', });
     scene.livescounter.setShadow(2, 2, '#000000', 0);
     scene.livescounter.setDepth(1);

     //Players health
     scene.health =  scene.add.text(680,50, '', {font: '25px arcade', fill: 'red'});
     scene.health.setShadow(2, 2, '#000000', 0);
     scene.health.setDepth(1);

     //Heart
     scene.heart = scene.physics.add.sprite(760, 62.5,'heart');
     scene.heart.setScale(0.25);
     scene.heart.setDepth(1);
     //Skapar heart animation
     scene.anims.create({
         key: 'heartTurn',
         frames: scene.anims.generateFrameNumbers('heart', { 
             start: 0, 
             end: 5
         }),
         frameRate: 6,
         repeat: -1
     });
     scene.heart.anims.play('heartTurn');

     /////////////////////////////////////////////////////////////////////////
    //Loadings animations
    ////scene.regenerationSkillloading = scene.physics.add.sprite(700, 560,'loading');
    ////scene.regenerationSkillloading.setScale(0.5);
    ////scene.regenerationSkillloading.setDepth(2);
    ////scene.regenerationSkillloading.setVisible(false);

   // scene.shootingSkillloading = scene.physics.add.sprite(700, 500,'loading');
   // scene.shootingSkillloading.setScale(0.5);
   // scene.shootingSkillloading.setDepth(2);
   //// scene.shootingSkillloadingisible(false);

   ////scene.physicalSkillloading  = scene.physics.add.sprite(760, 500,'loading');
    ////scene.physicalSkillloading  .setScale(0.5);
    ////scene.physicalSkillloading  .setDepth(2);
    ////scene.physicalSkillloading  .setVisible(false);
  
    // scene.dropSkillloading = scene.physics.add.sprite(760, 560,'loading');
    // scene.dropSkillloading.setScale(0.5);
    // scene.dropSkillloading.setDepth(2);
    // scene.dropSkillloading.setVisible(false);

//     scene.anims.create({
//         key: 'loading',
//         frames: scene.anims.generateFrameNumbers('loading', { 
//             start: 0, 
//             end: 9
//         }),
//         frameRate: 10,
//         repeat: -1
//    });

    // ////scene.regenerationSkillloading.anims.play('loading');
    // ////scene.physicalSkillloading  .anims.play('loading');
    // scene.shootingSkillloading.anims.play('loading');
    // scene.dropSkillloading.anims.play('loading');

    //Shields health
    scene.shieldsHealthText =  scene.add.text(680,100, '', {font: '25px arcade', fill: 'rgb(146, 202, 221)'});
    scene.shieldsHealthText.setShadow(2, 2, '#000000', 0);
    scene.shieldsHealthText.setDepth(1);
    scene.shieldsHealthText.setVisible(false);

    //Skapar shield
    scene.shieldIcon = scene.physics.add.sprite(760, 112,'shield');
    scene.shieldIcon.setScale(0.048); 
    scene.shieldIcon.setDepth(1);
    scene.shieldIcon.setVisible(false);
    scene.shieldActivated = false;

    //Skill notification
    scene.info = scene.add.text(235,75, '', {font: '25px arcade', fill: 'white'});
    scene.info.setShadow(2, 2, '#000000', 0);
    scene.info.setVisible(false);
    scene.info.setDepth(1);

    //Skill Recharging..
    scene.skillCoolingDown = scene.add.text(345,555, 'Recharging...', {font: '20px arcade', fill: 'skyblue'});
    scene.skillCoolingDown.setShadow(2, 2, '#000000', 0);
    scene.skillCoolingDown.setVisible(false);
    scene.skillCoolingDown.setDepth(1);

    //Variabel för eldbollar
    scene.lastFired = 0;
}

function createEnemiesDamageTakingAnimations (scene){
        // //Smoke
        // scene.smoke = scene.physics.add.sprite(350, 350,'smoke');
        // scene.smoke.setDepth(1);
        // scene.smoke.setScale(0.4);
        // //Skapar heart animation
        scene.anims.create({
            key: 'smoke',
            frames: scene.anims.generateFrameNumbers('smoke', { 
                start: 0, 
                end: 8
            }),
            frameRate: 20,
            repeat: 0
        });

        //Explosion
        // scene.explosition = scene.physics.add.sprite(350, 350,'explosition');
        // scene.explosition.setDepth(1);
        //Skapar heart animation
        scene.anims.create({
            key: 'explosition',
            frames: scene.anims.generateFrameNumbers('explosition', { 
                start: 0, 
                end: 35
            }),
            frameRate: 35,
            repeat: 0
        });
        // scene.explosition.anims.play('explosition');

        //Flame
        // scene.flame = scene.physics.add.sprite(350, 350,'flame');
        // scene.flame.setDepth(1);
        // scene.flame.setScale(0.8);

        scene.anims.create({
            key: 'flame',
            frames: scene.anims.generateFrameNumbers('flame', { 
                start: 0, 
                end: 15
            }),
            frameRate: 10,
            repeat: 0
        });
        // scene.flame.anims.play('flame');

        // Bleeding
        // scene.hasturBleeding = scene.physics.add.sprite(350, 350,'bleeding');
        // scene.hasturBleeding.setDepth(1);
        // scene.hasturBleeding.setScale(0.5);

        scene.anims.create({
            key: 'bleeding',
            frames: scene.anims.generateFrameNumbers('bleeding', { 
                start: 2, 
                end: 15
            }),
            frameRate: 30,
            repeat: -1
        });
        // scene.hasturBleeding.anims.play('bleeding');

        // BloodExplosition
        // scene.bloodExplosition = scene.physics.add.sprite(350, 350,'bloodExplosition');
        // scene.bloodExplosition.setDepth(1);
        // scene.bloodExplosition.setScale(0.25);

        scene.anims.create({
            key: 'bloodExplosition',
            frames: scene.anims.generateFrameNumbers('bloodExplosition', { 
                start: 0, 
                end: 5
            }),
            frameRate: 10,
            repeat: 0
        });
        // scene.bloodExplosition.anims.play('bloodExplosition');

        // Freeze
        // scene.freeze = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y+10,'freeze');
        // scene.freeze.setDepth(1);
        // scene.freeze.setScale(1.25);

        scene.anims.create({
            key: 'freeze',
            frames: scene.anims.generateFrameNumbers('freeze', { 
                start: 0, 
                end: 19
            }),
            frameRate: 10,
            repeat: 0
        });
        // scene.freeze.anims.play('freeze');

        // Seperate
        // scene.seperate = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y+10,'seperate');
        // scene.seperate.setDepth(1);
        // scene.seperate.setScale(0.5);
        scene.anims.create({
            key: 'seperate',
            frames: scene.anims.generateFrameNumbers('seperate', { 
                start: 0, 
                end: 8
            }),
            frameRate: 10,
            repeat: 0
        });
        // scene.seperate.anims.play('seperate');

        // LaserExplode
        // scene.laserExplode = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y,'laserExplode');
        // scene.seperate.setDepth(1);
        // scene.seperate.setScale(0.5);
        scene.anims.create({
            key: 'laserExplode',
            frames: scene.anims.generateFrameNumbers('laserExplode', { 
                start: 0, 
                end: 4
            }),
            frameRate: 7,
            repeat: 0
        });
        // scene.laserExplode.anims.play('laserExplode');

        //Creates fireblastExplosion animation
        scene.anims.create({
        key: 'fireblastExplosion',
        frames: scene.anims.generateFrameNumbers('fireblastExplosion', { 
            start: 0, 
            end: 34
        }),
        frameRate: 10,
        repeat: -1
        });
        // scene.fireblastExplosion.anims.play('fireblastExplosion');

        //Creates fireblastExplosion animation
        scene.anims.create({
        key: 'waterblastExplosion',
        frames: scene.anims.generateFrameNumbers('waterblastExplosion', { 
            start: 0, 
            end: 9
        }),
        frameRate: 10,
        repeat: -1
        });
        // scene.fireblastExplosion.anims.play('fireblastExplosion');

        //Skapar bullet explosion animation
        scene.anims.create({
            key: 'bulletExplosion',
            frames: scene.anims.generateFrameNumbers('bulletExplosion', { 
                start: 7, 
                end: 13
            }),
            frameRate: 10,
            repeat: 0
        });
        //  scene.bulletExplosion.anims.play('bulletExplosion');
}

function createAganjuAndSwordAndShield(scene) {
    //Skapar Aganju
    let config = scene.game.config; // to get width ang height of playground
    
    scene.aganju = scene.physics.add.sprite(config.width / 2, config.height / 2,'aganju');
    scene.aganju.name = 'aganju';
    //Skalar upp Aganju
    scene.aganju.setScale(2);
    //Ger vikt på Aganju
    scene.aganju.body.mass = 2;
    //Begränsar Aganju inom spescenes gränser
    scene.aganju.setCollideWorldBounds(true);
    //Aganjus body size
    scene.aganju.setBodySize(23,30,true);
    scene.aganju.setOffset(5,1.5, true);

    //Aganjus health
    scene.aganju.health = 100;
    //Aganjus start hastighet
    scene.basicSpeed = 100;

    scene.aganjuMoves = false;
    scene.movementSoundActive = true;

    ////////////////////////////////////////////////////////////////////
    //Vapen

    //Skapar svärden
    scene.sword = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y,'sword');
    //Sword Damage 
    scene.sword.name = 'sword';
    scene.sword.damage = 10;
    scene.sword.mass = 2;
    //Makes sword unmovable
    scene.sword.setImmovable(true);

    //Creates shield
    scene.shield = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y,'shield');
    scene.shield.setScale(0.15); 
    scene.shield.setAlpha(0.7);
    // scene.shield.setCircle(375 , 35, 35);
    scene.shield.setBodySize(675,675, true);
    
    scene.shield.name = 'shield';
    scene.shield.mass = 2;
    scene.shield.health = scene.startData.shieldHealth;
    //Makes shield unmovable
    scene.shield.setImmovable(true);
    scene.shield.setDepth(1);
    scene.shieldOnCharge = true;

    //Shield can be used at the beginning of game
    scene.regenerationInUse = false;
    //Enables shield
    scene.keyFPressed = false;
    //Disable fireballs shooting if shield is on use
    scene.shieldActive = false;
    //Shield charging?
    scene.shieldNeedCharging = false;

    scene.freezeSkillActive = true;
    scene.keyQDeactive = false;
    scene.lastPressedButton = 'S';
       
    //All objects in the scene
    scene.allObjectsInScene = scene.scene.scene.add.displayList.list;
}

function createAganjusAnimations (scene) {
    
        //Skapar down animationen för Aganju
        scene.anims.create({
            key: 'down',
            frames: scene.anims.generateFrameNumbers('aganju', { 
                start: 0, 
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });

        //Skapar left animationen för Aganju
        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('aganju', { 
                start: 3, 
                end: 5
            }),
            frameRate: 10,
            repeat: -1
        });
        
        //Skapar right animationen för Aganju
        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('aganju', { start: 6, end: 8}),
            frameRate: 10,
            repeat: -1
        });
        
        //Skapar up animationen för Aganju
        scene.anims.create({
            key: 'up',
            frames: scene.anims.generateFrameNumbers('aganju', { start: 9, end: 11}),
            frameRate: 10,
            repeat: -1
        });
}

function createSwordAnimations(scene) {
       //Skapar down animationen för svärden
       scene.anims.create({
        key: 'sword_down',
        frames: scene.anims.generateFrameNumbers('sword', { start: 0, end: 5}),
        frameRate: 10,
        repeat: 1
    });

    //Skapar up animationen för svärden
    scene.anims.create({
        key: 'sword_up',
        frames: scene.anims.generateFrameNumbers('sword', { start: 6, end: 11}),
        frameRate: 10,
        repeat: 0
    });

    //Skapar left animationen för svärden
    scene.anims.create({
        key: 'sword_left',
        frames: scene.anims.generateFrameNumbers('sword', { start: 12, end: 17}),
        frameRate: 10,
        repeat: 0
    });

    //Skapar right animationen för svärden
    scene.anims.create({
        key: 'sword_right',
        frames: scene.anims.generateFrameNumbers('sword', { start: 18, end: 23}),
        frameRate: 10,
        repeat: 0
    });
}

function createSkillsAnimations(scene) {

        //Regeneration skill
        scene.healing = scene.physics.add.sprite(100, 200,'healing');
        //Hides healing animation
        scene.healing.setVisible(false);
        //healing animation image z-index = 1
        scene.healing.setDepth(1);
        scene.healing.setScale(1.5);
        //Skapar healing animation
        scene.anims.create({
              key: 'heal',
              frames: scene.anims.generateFrameNumbers('healing', { 
                  start: 1, 
                  end: 16
              }),
              frameRate: 10,
              repeat: 0
        });
        
        //Upgrade level of sword that added to sword
        scene.swordFirstUpgradeAdded = false;
        scene.swordSecondUpgradeAdded = false;
        scene.swordThirdUpgradeAdded = false;

        //Upgrade level of strenght that added to sword
        scene.strengthFirstUpgradeAdded = false;
        scene.strengthSecondUpgradeAdded = false;
        scene.strengthThirdUpgradeAdded = false;

     //Lightning drop image
     scene.lightningDrop = scene.add.image(300, 400,'lightningDrop');
     //Hides lightningDrop image
     scene.lightningDrop.setVisible(false);

     //Lightning skill
     scene.lightning = scene.physics.add.sprite(350, 400,'lightning');
     //Hides lightning animation
     scene.lightning.setVisible(false);
     //Lightning animation image z-index = 1
     scene.lightning.setDepth(1);
     //Skapar lightning animation
     scene.anims.create({
         key: 'shock',
         frames: scene.anims.generateFrameNumbers('lightning', { 
             start: 0, 
             end: 5
         }),
         frameRate: 6,
         repeat: 0
     });

     scene.lightningDropPlace = scene.physics.add.sprite(350, 400,'lightning');
     scene.lightningDropPlace.name = 'lightning';
     scene.lightningDropPlace.body.mass = 2;
     //Makes lightning unmovable
     scene.lightningDropPlace.setImmovable(true);
     scene.lightningDropPlace.x = -400;
     scene.lightningDropPlace.y = -400;
     scene.lightningDropPlace.setVisible(false);

     //LightningExplosion
     // scene.lightningExplosion = scene.physics.add.sprite(350, 400,'lightningExplosion');
     // scene.lightningExplosion.setScale(0.5);
     // //Hides lightningExplosition animation
     // scene.lightningExplosion.setVisible(false);
     // //LightningExplosion animation z-index = 1
     // scene.lightningExplosion.setDepth(1);

     //Skapar lightningExplosion animation
     scene.anims.create({
         key: 'explode',
         frames: scene.anims.generateFrameNumbers('lightningExplosion', { 
             start: 0, 
             end: 5
         }),
         frameRate: 10,
         repeat: 0
     });

     //Meteor skill
     scene.meteor = scene.physics.add.sprite(350, 400,'meteor');
     //Hides lightning animation
     scene.meteor.setVisible(false);
     //Lightning animation image z-index = 1
     scene.meteor.setDepth(1);
     //Skapar lightning animation
     scene.anims.create({
         key: 'meteor',
         frames: scene.anims.generateFrameNumbers('meteor', { 
             start: 0, 
             end: 11
         }),
         frameRate: 10,
         repeat: -1
     });

     //MeteorExplosion
     scene.meteorExplosion = scene.physics.add.sprite(scene.meteor.x-18, scene.meteor.y+65,'meteorExplosion');
     scene.meteorExplosion.setScale(1);
     //Hides meteorExplosion animation
     scene.meteorExplosion.setVisible(false);
     //meteorExplosion animation z-index = 1
     scene.meteorExplosion.setDepth(1);

     //Skapar meteorExplosion animation
      scene.anims.create({
         key: 'meteorExplosion',
         frames: scene.anims.generateFrameNumbers('meteorExplosion', { 
             start: 0, 
             end: 4
         }),
         frameRate: 10,
         repeat: 0
     });

     //Meteor drop image
     scene.meteorDrop = scene.add.image(100, 200,'meteorDrop');
     //Hides lightningDrop image
     scene.meteorDrop.setVisible(false);

     scene.meteorDropPlace = scene.physics.add.sprite(350, 400,'meteor');
     scene.meteorDropPlace.name = 'meteor';
     scene.meteorDropPlace.body.mass = 2;
     scene.meteorDropPlace.setImmovable(true);
     scene.meteorDropPlace.x = -400;
     scene.meteorDropPlace.y = -400;
     scene.meteorDropPlace.setVisible(false);
     scene.meteorDropPlace.setBodySize(100,100,true);
     scene.meteorDropPlace.setOffset(35,75,true);

     scene.meteorSkillIcon = scene.add.image(715, 705, 'meteorIcon');
     scene.meteorSkillIcon.setDepth(1);
     scene.meteorSkillIcon.setScale(1.5);
     scene.meteorSkillIcon.rotation -= 0.3;
     scene.meteorSkillIcon.setVisible(false);

     scene.meteorIconLocked = scene.add.image(760, 565, 'locked');
     scene.meteorIconLocked.setScale(0.13);
     scene.meteorIconLocked.setDepth(1);
     scene.meteorIconLocked.setVisible(false);

/////////////////////////////////////////////////////////////////////////////
     //FIREBLAST - SKILL
     scene.fireblast = scene.physics.add.sprite(350, 400,'fireblast');
     //Hides lightning animation
     scene.fireblast.setVisible(false);
     //Lightning animation image z-index = 1
     scene.fireblast.setDepth(1);
     scene.fireblast.setScale(0.5);

     //Skapar lightning animation
     scene.anims.create({
         key: 'fireblast',
         frames: scene.anims.generateFrameNumbers('fireblast', { 
             start: 0, 
             end: 8
         }),
         frameRate: 10,
         repeat: -1
     });
     // scene.fireblast.anims.play('fireblast');

     //Fireblast drop image
     scene.fireblastDrop = scene.physics.add.sprite(350, 400,'fireblastDrop');
     //Hides lightningDrop image
     scene.fireblastDrop.setVisible(false);
     scene.fireblastDrop.setScale(0.4);

     //Skapar fireblastDrop animation
     scene.anims.create({
         key: 'fireblastDrop',
         frames: scene.anims.generateFrameNumbers('fireblastDrop', { 
             start: 0, 
             end: 3
         }),
         frameRate: 10,
         repeat: -1
     });
     scene.fireblastDrop.anims.play('fireblastDrop');

     scene.fireblastDropPlace = scene.physics.add.sprite(350, 400,'fireblast');
     scene.fireblastDropPlace.name = 'fireblast';
     scene.fireblastDropPlace.body.mass = 2;
     scene.fireblastDropPlace.setImmovable(true);
     scene.fireblastDropPlace.x = -1000;
     scene.fireblastDropPlace.y = -1000;
     scene.fireblastDropPlace.setVisible(false);
     scene.fireblastDropPlace.setScale(0.5);

/////////////////////////////////////////////////////////////////////////////
     //Waterblast - SKILL
      scene.waterblast = scene.physics.add.sprite(350, 400,'waterblast');
      //Hides lightning animation
      scene.waterblast.setVisible(false);
      //Lightning animation image z-index = 1
      scene.waterblast.setDepth(1);

      //Skapar waterblast animation
      scene.anims.create({
          key: 'waterblast',
          frames: scene.anims.generateFrameNumbers('waterblast', { 
              start: 0, 
              end: 29
          }),
          frameRate: 10,
          repeat: 0
      });
      // scene.waterblast.anims.play('waterblast');

      //waterblast drop image
      scene.waterblastDrop = scene.physics.add.sprite(350, 400,'waterblastDrop');
      //Hides lightningDrop image
      scene.waterblastDrop.setVisible(false);
      scene.waterblastDrop.setScale(0.4);

      scene.waterblastDropPlace = scene.physics.add.sprite(350, 400,'waterblast');
      scene.waterblastDropPlace.name = 'waterblast';
      scene.waterblastDropPlace.body.mass = 2;
      scene.waterblastDropPlace.setImmovable(true);
      scene.waterblastDropPlace.x = -1000;
      scene.waterblastDropPlace.y = -1000;
      scene.waterblastDropPlace.setVisible(false);
      scene.waterblastDropPlace.setScale(1);

}

function createControllers(scene) {
     //Definierar variabeln cursor = down,left,up,right
     scene.cursors = scene.input.keyboard.createCursorKeys();
     //Definierar variabeln spacebar
     scene.spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
     //Definierar variabeln keyS = "W"
     scene.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
     //Definierar variabeln keyS = "A"
     scene.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
     //Definierar variabeln keyS = "S"
     scene.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
     //Definierar variabeln keyS = "D"
     scene.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
     //Definierar variabeln keyQ = "Q"
     scene.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
     //Definierar variabeln keyE = "E"
     scene.keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
     //Definierar variabeln keyR = "R"
     scene.keyR = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
     //Definierar variabeln keyF = "F"
     scene.keyF = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
     //Definierar variabeln keyESC = "ESC"
     scene.keyESC = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
     //Definierar variabeln keyESC = "SHIFT"
     scene.keyShift = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
}

function createSkillPlaceHoldersAndSkillIcon(scene) {
     //Placeholder for skills
     scene.skillPlaceHolderRegeneration = scene.add.image(700,560, 'skillPlaceHolder');
     scene.skillPlaceHolderRegeneration.setScale(0.5);
     scene.skillPlaceHolderRegeneration.setDepth(2);

     scene.skillPlaceHolderShootingSkill = scene.add.image(700,500, 'skillPlaceHolder');
     scene.skillPlaceHolderShootingSkill.setScale(0.5);
     scene.skillPlaceHolderShootingSkill.setDepth(2);

     scene.skillPlaceHolderPhysicalSkill = scene.add.image(760,500, 'skillPlaceHolder');
     scene.skillPlaceHolderPhysicalSkill.setScale(0.5);
     scene.skillPlaceHolderPhysicalSkill.setDepth(2);

     scene.skillPlaceHolderDropSkill = scene.add.image(760,560, 'skillPlaceHolder');
     scene.skillPlaceHolderDropSkill.setScale(0.5);
     scene.skillPlaceHolderDropSkill.setDepth(2);


     scene.textR = scene.add.text(665,580, 'R', {font: '15px arcade', fill: 'black'});
     scene.textR.setDepth(4);

     //Skapar regeneration skill image
     scene.regenerationIconLearned = scene.add.image(700, 560, 'healthIcon');
     scene.regenerationIconLearned.setScale(0.5);
     scene.regenerationIconLearned.setDepth(1);
     scene.regenerationIconLearned.setVisible(false);

     scene.regenerationIconNotLearned = scene.add.image(700,560,'healthIconNotActive');
     scene.regenerationIconNotLearned.setScale(0.5);
     scene.regenerationIconNotLearned.setDepth(1);
     scene.regenerationIconNotLearned.setVisible(false);

     /////////////////////////////////////////////////////////
     //Creates SHOOTING-SKILLS ICONS
     //SHOOTING-Skill text buttoninfo
     scene.textF = scene.add.text(665,463, 'F', {font: '15px arcade', fill: 'black'});
     scene.textF.setDepth(4);
 
     //Creates fireball - shootingobjects icon
     scene.fireballIconLearned = scene.add.image(700, 500, 'fireballIconLearned');
     scene.fireballIconLearned.setScale(0.5);
     scene.fireballIconLearned.setDepth(1);
     scene.fireballIconLearned.setVisible(false);

     scene.fireballIconNotLearned = scene.add.image(700,500,'fireballIconNotLearned');
     scene.fireballIconNotLearned.setScale(0.5);
     scene.fireballIconNotLearned.setDepth(1);
     scene.fireballIconNotLearned.setVisible(false);

     //Creates bullet - shootingobjects icon
     scene.bulletIconLearned = scene.add.image(700, 500, 'bulletIconLearned');
     scene.bulletIconLearned.setScale(0.5);
     scene.bulletIconLearned.setDepth(1);
     scene.bulletIconLearned.setVisible(false);

     scene.bulletIconNotLearned = scene.add.image(700,500,'bulletIconNotLearned');
     scene.bulletIconNotLearned.setScale(0.5);
     scene.bulletIconNotLearned.setDepth(1);
     scene.bulletIconNotLearned.setVisible(false);

     //Creates dagger - shootingobjects icon
     scene.daggerIconLearned = scene.add.image(700, 500, 'daggerIconLearned');
     scene.daggerIconLearned.setScale(0.5);
     scene.daggerIconLearned.setDepth(1);
     scene.daggerIconLearned.setVisible(false);

     scene.daggerIconNotLearned = scene.add.image(700,500,'daggerIconNotLearned');
     scene.daggerIconNotLearned.setScale(0.5);
     scene.daggerIconNotLearned.setDepth(1);
     scene.daggerIconNotLearned.setVisible(false);

     //Creates laser - shootingobjects icon
     scene.laserIconLearned = scene.add.image(700, 500, 'laserIconLearned');
     scene.laserIconLearned.setScale(0.5);
     scene.laserIconLearned.setDepth(1);
     scene.laserIconLearned.setVisible(false);

     scene.laserIconNotLearned = scene.add.image(700,500,'laserIconNotLearned');
     scene.laserIconNotLearned.setScale(0.5);
     scene.laserIconNotLearned.setDepth(1);
     scene.laserIconNotLearned.setVisible(false);


     /////////////////////////////////////////////////////////
     //Creates PHYSICAL-SKILLS ICONS
     scene.textQ = scene.add.text(785,463, 'Q', {font: '15px arcade', fill: 'black'});
     scene.textQ.setDepth(4);

     //Skapar speedBoost skill image
     scene.flashIconLearned = scene.add.image(760, 500, 'flashIconLearned');
     scene.flashIconLearned.setScale(0.5);
     scene.flashIconLearned.setDepth(1);
     scene.flashIconLearned.setVisible(false);

     scene.flashIconNotLearned = scene.add.image(760, 500,'flashIconNotLearned');
     scene.flashIconNotLearned.setScale(0.5);
     scene.flashIconNotLearned.setDepth(1);
     scene.flashIconNotLearned.setVisible(false);

     //Skapar freeze skill image
     scene.freezeIconLearned = scene.add.image(760, 500, 'freezeIconLearned');
     scene.freezeIconLearned.setScale(0.5);
     scene.freezeIconLearned.setDepth(1);
     scene.freezeIconLearned.setVisible(false);

     scene.freezeIconNotLearned = scene.add.image(760, 500,'freezeIconNotLearned');
     scene.freezeIconNotLearned.setScale(0.5);
     scene.freezeIconNotLearned.setDepth(1);
     scene.freezeIconNotLearned.setVisible(false);

     //Skapar bulletTime skill image
     scene.bulletTimeIconLearned = scene.add.image(760, 500, 'bulletTimeIconLearned');
     scene.bulletTimeIconLearned.setScale(0.5);
     scene.bulletTimeIconLearned.setDepth(1);
     scene.bulletTimeIconLearned.setVisible(false);

     scene.bulletTimeIconNotLearned = scene.add.image(760, 500,'bulletTimeIconNotLearned');
     scene.bulletTimeIconNotLearned.setScale(0.5);
     scene.bulletTimeIconNotLearned.setDepth(1);
     scene.bulletTimeIconNotLearned.setVisible(false);

     //Skapar untouchable skill image
     scene.untouchableIconLearned = scene.add.image(760, 500, 'untouchableIconLearned');
     scene.untouchableIconLearned.setScale(0.5);
     scene.untouchableIconLearned.setDepth(1);
     scene.untouchableIconLearned.setVisible(false);

     scene.untouchableIconNotLearned = scene.add.image(760, 500,'untouchableIconNotLearned');
     scene.untouchableIconNotLearned.setScale(0.5);
     scene.untouchableIconNotLearned.setDepth(1);
     scene.untouchableIconNotLearned.setVisible(false);

     /////////////////////////////////////////////////////////
     //Creates DROP-SKILLS ICONS
     //DROP-Skill text buttoninfo
     scene.textE = scene.add.text(785,580, 'E', {font: '15px arcade', fill: 'black'});
     scene.textE.setDepth(4);
     
     //LightningIconLearned
     scene.lightningIconLearned = scene.add.image(760, 560, 'lightningIconLearned');
     scene.lightningIconLearned.setScale(0.5);
     scene.lightningIconLearned.setDepth(1);
     scene.lightningIconLearned.setVisible(false);
     //LightningIconNotLearned
     scene.lightningIconNotLearned = scene.add.image(760, 560, 'lightningIconNotLearned');
     scene.lightningIconNotLearned.setScale(0.5);
     scene.lightningIconNotLearned.setDepth(1);
     scene.lightningIconNotLearned.setVisible(false);
     
     //WaterblastIconLearned
     scene.waterblastIconLearned = scene.add.image(760, 560, 'waterblastIconLearned');
     scene.waterblastIconLearned.setScale(0.5);
     scene.waterblastIconLearned.setDepth(1);
     scene.waterblastIconLearned.setVisible(false);
     //WaterblastIconNotLearned
     scene.waterblastIconNotLearned = scene.add.image(760, 560, 'waterblastIconNotLearned');
     scene.waterblastIconNotLearned.setScale(0.5);
     scene.waterblastIconNotLearned.setDepth(1);
     scene.waterblastIconNotLearned.setVisible(false);

     //MeterIconLearned
     scene.meteorIconLearned = scene.add.image(760, 560, 'meteorIconA');
     scene.meteorIconLearned.setScale(0.5);
     scene.meteorIconLearned.setDepth(1);
     scene.meteorIconLearned.setVisible(false);
     //meteorIconNotLearned
     scene.meteorIconNotLearned = scene.add.image(760, 560, 'meteorIconNotActive');
     scene.meteorIconNotLearned.setScale(0.5);
     scene.meteorIconNotLearned.setDepth(1);
     scene.meteorIconNotLearned.setVisible(false);

     //FireblastIconLearned
     scene.fireblastIconLearned = scene.add.image(760, 560, 'fireblastIconLearned');
     scene.fireblastIconLearned.setScale(0.5);
     scene.fireblastIconLearned.setDepth(1);
     scene.fireblastIconLearned.setVisible(false);
     //FireblastIconNotLearned
     scene.fireblastIconNotLearned = scene.add.image(760, 560, 'fireblastIconNotLearned');
     scene.fireblastIconNotLearned.setScale(0.5);
     scene.fireblastIconNotLearned.setDepth(1);
     scene.fireblastIconNotLearned.setVisible(false);
    
}

function createSpawnHasturFunction(scene) {
    let config = scene.game.config; 

    // SPAWN HASTURS CODE
    scene.killedAmount = scene.startData.totalKills; // how many hasturs killed
    scene.shouldSpawnMore = false; 

    scene.spawnAnimationActive = false;

    scene.amountHasturOnScene = 0;
    // scene.maxHasturOnScene = 5;
    scene.maxHasturOnScene = scene.startData.amountHasturKillToClearTheRoom;
    
    scene.spawnAHastur = (x ,y) =>{
        //initial vals
        let coordX = Phaser.Math.Between(0,1) == 1 ? 0 : config.width;
        let coordY = Phaser.Math.Between(0,1) == 1 ? 0 : config.height;         

        if( x !== undefined ){ // if no params
            coordX = x;
            coordY = y;
        } else if( Phaser.Math.Between(0,1) == 1 ){ // else cointoss
            coordX = Phaser.Math.Between(0, config.width)
        } else {
            coordY = Phaser.Math.Between(0, config.height)
        }

        scene.newHastur = scene.hasturs.get( coordX, coordY, 'hastur');

        //Activates the spawn animation for new birn hasturs
        if(scene.amountHasturOnScene == 5){
            scene.spawnAnimationActive = true;
        }
        
        if(scene.spawnAnimationActive == true){
              //Hastur spawns animation
              scene.hasturSpawn = scene.physics.add.sprite(scene.newHastur.x, scene.newHastur.y,'respawn');
              scene.hasturSpawn.setScale(2);
              scene.hasturSpawn.setDepth(1);
              scene.hasturSpawn.id = scene.newHastur.id;
              scene.hasturSpawn.name = "hasturSpawn";
              scene.hasturSpawn.setVisible(true);
                          
              setInterval(() => {
                  scene.hasturSpawn.x = scene.newHastur.x;
                  scene.hasturSpawn.y = scene.newHastur.y;
              }, 1);
              scene.hasturSpawn.anims.play('respawn');

              scene.newHastur.setAlpha(0.5);

              setTimeout(() => {
                  scene.hasturSpawn.setVisible(false);
                  scene.newHastur.setAlpha(1);
              }, 800);

              setTimeout(() => {
                scene.hasturSpawn.destroy();
              }, 1000);
        }

        //Finds hasturSpawn animation
        scene.allObjectsInScene.forEach(obj => {
            if(obj.name == "hasturSpawn"){
                setTimeout(() => {
                    obj.destroy();
                }, 1000);

            }
        });

        //Hasturs heartIcon
        scene.hastursHeartIcon = scene.physics.add.sprite(400, 200,'heart');
        scene.hastursHeartIcon.setScale(0.12);
        scene.hastursHeartIcon.setDepth(1);
        scene.hastursHeartIcon.setVisible(false);

        scene.hastursHeartIcon.name = "hastursHeartIcon"+scene.newHastur.id;

        //Hastur healthbar 
        scene.hasturHealthbar = scene.add.text(100, 100, '', { font: '16px arcade', fill: 'red'});
        scene.hasturHealthbar.setDepth(1);
        scene.hasturHealthbar.setVisible(false);
        scene.hasturHealthbar.name = "hasturHealthbar"+scene.newHastur.id;

        //Hastur takenDamage
        scene.hasturTakenDamage = scene.add.text(100, 100, '', { font: '12.5px arcade', fill: 'white'});
        scene.hasturTakenDamage.setShadow(2, 2, 'black', 0);
        scene.hasturTakenDamage.setDepth(1);
        scene.hasturTakenDamage.setVisible(false);
        scene.hasturTakenDamage.name = "hasturTakenDamage"+scene.newHastur.id;

        //Hastur Seperate
        scene.hasturSeperate = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y,'seperate');
        scene.hasturSeperate.setDepth(1);
        scene.hasturSeperate.setScale(0.5);
        scene.hasturSeperate.setVisible(false);

        scene.hasturSeperate.name = "hasturSeperate" + scene.newHastur.id;

        //Hastur smoke 
        scene.hasturDieSmoke = scene.physics.add.sprite(350, 350,'smoke');
        scene.hasturDieSmoke.setVisible(false);
        scene.hasturDieSmoke.setDepth(1);
        scene.hasturDieSmoke.setScale(0.3);
        scene.hasturDieSmoke.name = "hasturDieSmoke" + scene.newHastur.id;

        //Hastur explosion 
        scene.hasturExplosition = scene.physics.add.sprite(350, 350,'explosition');
        scene.hasturExplosition.setVisible(false);
        scene.hasturExplosition.setDepth(1);
        scene.hasturExplosition.name = "hasturExplosition" + scene.newHastur.id;

        //LightningExplosion
        scene.hasturLightningExplosion = scene.physics.add.sprite(350, 400,'lightningExplosion');
        scene.hasturLightningExplosion.setScale(0.5);
        scene.hasturLightningExplosion.setVisible(false);
        scene.hasturLightningExplosion.setDepth(1);
        scene.hasturLightningExplosion.name = "hasturLightningExplosition" + scene.newHastur.id;
        
        //Hastur flame on (fireball shooting)
        scene.hasturDieFlame = scene.physics.add.sprite(350, 350,'flame');
        scene.hasturDieFlame.setDepth(1);
        scene.hasturDieFlame.setScale(0.7);
        scene.hasturDieFlame.setVisible(false);
        scene.hasturDieFlame.name = "hasturDieFlame" + scene.newHastur.id;

        //bullet Explosion
        scene.hasturBulletExplode = scene.physics.add.sprite(300, 360,'bulletExplosion');
        scene.hasturBulletExplode.setScale(1.25);
        scene.hasturBulletExplode.setDepth(1);
        scene.hasturBulletExplode.setVisible(false);
        scene.hasturBulletExplode.name = "hasturBulletExplode" + scene.newHastur.id;

        //Hastur bleeding (bullet shooting)
        scene.hasturBleeding = scene.physics.add.sprite(350, 350,'bleeding');
        scene.hasturBleeding.setDepth(1);
        scene.hasturBleeding.setScale(0.4);
        scene.hasturBleeding.setVisible(false);
        scene.hasturBleeding.name = "hasturBleeding" + scene.newHastur.id;

        //hasturBloodExplosition (dagger shooting)
        scene.hasturBloodExplosition = scene.physics.add.sprite(350, 350,'bloodExplosition');
        scene.hasturBloodExplosition.setDepth(1);
        scene.hasturBloodExplosition.setScale(0.25);
        scene.hasturBloodExplosition.setVisible(false);
        scene.hasturBloodExplosition.name = "hasturBloodExplosition" + scene.newHastur.id;

        //Hasturs freeze animation
        scene.hasturFreeze = scene.physics.add.sprite(scene.newHastur.x, scene.newHastur.y+10,'freeze');
        scene.hasturFreeze.setDepth(1);
        scene.hasturFreeze.setScale(1.25);
        scene.hasturFreeze.setVisible(false);
        scene.hasturFreeze.id = scene.newHastur.id;
        scene.hasturFreeze.name = "hasturFreeze";

        //HasturLasers explode
        scene.hasturLaserExplode = scene.physics.add.sprite(scene.aganju.x, scene.aganju.y,'laserExplode');
        scene.hasturLaserExplode.setDepth(1);
        scene.hasturLaserExplode.setVisible(false);
        scene.hasturLaserExplode.setScale(0.5);
        scene.hasturLaserExplode.name = "hasturLaserExplode" + scene.newHastur.id;

        //fireblastExplosition
        scene.hasturFireblastExplosion = scene.physics.add.sprite(300, 400,'fireblastExplosion');
        scene.hasturFireblastExplosion.setScale(0.9);
        //Hides fireblastExplosition animation
        scene.hasturFireblastExplosion.setVisible(false);
        //fireblastExplosition animation z-index = 1
        scene.hasturFireblastExplosion.setDepth(1);
        scene.hasturFireblastExplosion.name = 'hasturFireblastExplosion' + scene.newHastur.id;

        //waterblastExplosition
        scene.hasturWaterblastExplosion = scene.physics.add.sprite(300, 400,'waterblastExplosion');
        scene.hasturWaterblastExplosion.setScale(0.75);
        //Hides fireblastExplosition animation
        scene.hasturWaterblastExplosion.setVisible(false);
        //fireblastExplosition animation z-index = 1
        scene.hasturWaterblastExplosion.setDepth(1);
        scene.hasturWaterblastExplosion.name = 'hasturWaterblastExplosion' + scene.newHastur.id;

        scene.hasturSpawns.play();

        scene.amountHasturOnScene += 1;
    }

    // Skapar spawn coords for initial hasturs 
    let coords = [ 
        //top
        [(config.width / 3), 0],
        [(config.width / 3) * 2, 0],

        //right
        [config.width, (config.height / 2) ],

        //down
        [(config.width / 3), config.height],
        [(config.width / 3) * 2, config.height],
        
        //left
        [0, (config.height / 2) ],

    ];
    
    for (let i = 0; i < coords.length; i++) {
        scene.spawnAHastur( coords[i][0], coords[i][1] );
    }

    //Hasturs start speed
    scene.hastursBasicSpeed = 100;
    scene.freezeSkillActive = false;

}

//Creates Colliders between aganju, shield and hastur projectiles
function createsCollidersBetweenAganjuAndShieldAndHasturProjectiles(scene) {
    scene.untouchableSkillActive = false;
    //Collider between fireballs, aganju and shield
    scene.physics.world.on('collide', (objOne, objTwo)=>{
   
        if( objTwo.name == 'hasturProjectile' ){
            let sceneAganju = objOne;
            let sceneProjectile = objTwo;
       
            sceneProjectile.destroy();

            if(scene.untouchableSkillActive == false){
                if(scene.shieldActive == false){
                    scene.hasturHurt.play(scene.soundConfigForHasturSpawn);
                    scene.hasturFireballHit.play(scene.soundConfigForHasturSpawn);

                }
                sceneAganju.health -= sceneProjectile.damage;
            }else{
                scene.shieldBlock.play(scene.soundConfigForHasturSpawn);
            }
        }

        if( objOne.name == 'shield' ){
            let sceneShield = objOne;
            let sceneProjectile = objTwo;

            scene.shieldBlock.play(scene.soundConfigForHasturSpawn);
            sceneProjectile.destroy();
            sceneShield.health -= sceneProjectile.damage;

            if(sceneShield.health <= 30){
                sceneShield.setTint(0x990000);
            }else{
                sceneShield.setTint(0x990000);

                setTimeout(() => {
                    sceneShield.clearTint();
                }, 500);
            }

            if(sceneShield.health <= 0){
                scene.keyShift.isDown = false;
                scene.shieldNeedCharging = true;
                sceneShield.clearTint();
            }
        }
    })
}

///UPDATE ()

//Updates the amount of the hastur that can be on screen 
//At the same depending on the score
function createHasturOnSceneDependOnScoreReached(scene) {
    if(scene.startData.score > 1000){
        scene.maxHasturOnScene = 7;

    }else if (scene.startData.score > 2000){
        scene.maxHasturOnScene = 12;

    }else if(scene.startData.score > 4000){
        scene.maxHasturOnScene = 15;

    }else if(scene.startData.score > 8000){
        scene.maxHasturOnScene = 17;

    }else if(scene.startData.score > 10000){
        scene.maxHasturOnScene = 20;

    }else if(scene.startData.score > 15000){
        scene.maxHasturOnScene = 25;

    }else if(scene.startData.score > 20000){
        scene.maxHasturOnScene = 30;

    }else if(scene.startData.score > 30000){
        scene.maxHasturOnScene = 40;
    }

    if(scene.shouldSpawnMore){
        if(scene.amountHasturOnScene < scene.maxHasturOnScene && scene.roomCleared == false){
            for (let i = 0; i < Math.floor(scene.killedAmount * 0.2) ; i++) {
                // let delay = 
                setTimeout(()=>{
                    scene.spawnAHastur();
                }, 500 * i)
            }
            scene.shouldSpawnMore = false;
        }
    }

    //scene can be changed depend on difficulty selection
    scene.hasturProjectiles.maxSize = scene.startData.hasturFireballsAmout;
}

function createPauseNextLevelVictoryAndGameover(scen) {
    //On press to ESC, pausing the game
    if(scen.keyESC.isDown){
        scen.scene.pause();
        scen.scene.launch('PauseScene', scen.startData);
    }

    //Opens the door to next levet
    if(scen.startData.totalKills == scen.startData.amountHasturKillToClearTheRoom){
        scen.door.anims.play('doorOpen');
        // scen.startData.amountHasturKillToClearTheRoom += 10;

        scen.roomCleared = true;
        
        //Creates the overlap between door and aganju to make possible pass between levels
        scen.physics.add.overlap(scen.aganju, scen.door, () => {

            // scen.allHasturs = scen.hasturs.children.entries;

            // scen.allHasturs.forEach(hast => {
            //     hast.destroy();
            // });

            //Stops the game scene
            scen.scene.stop();
            // scen.scene.pause();

            // scen.scene.stop(scen.startData.nameOfThisScene);
            //Starts the next level
            scen.scene.start(scen.startData.nameOfNextScene, scen.startData);
        });

    }

    //Victory scene 
    if(scen.startData.totalKills == scen.startData.amountHasturKillToWinTheGame){
        //Stops the game scene
        scen.scene.stop(scen.startData.nameOfThisScene);
        scen.scene.start('VictoryScene', scen.startData);
    }

    //Gameover scene 
    if(scen.startData.lives == -1){
        //Stops the game scene
        scen.scene.stop(scen.startData.nameOfThisScene);
        scen.scene.start('GameoverScene', scen.startData);
    }
}

//Creates score,livecounter, health, coins, totalkills, positions uppdater
function createUpdaterOfScoreLiveHealhtCoinsKillsAndPositions(scene) {
      //Uppdaterar score
      scene.scoreText.text = 'Score: ' + scene.startData.score;
      //Uppdaterar lives Aganju har
      scene.livescounter.text = 'Lives: ' + scene.startData.lives;
      //Uppdaterar Aganjus health
      scene.health.text = '' + scene.aganju.health;
      //Uppdaterar shields health
      scene.shieldsHealthText.text = scene.shield.health;
      //Uppdaterar total coins
      scene.coins.text = '' + scene.startData.totalCoins;

      //Counts and updates killed hasturs
      scene.startData.totalKills = scene.killedAmount;
      scene.amountKilledHastur.text = scene.startData.totalKills;

      //Aganju's x positon
      scene.aganjuX = scene.aganju.x;
      //Aganju's y positon
      scene.aganjuY = scene.aganju.y;

      // Gömmer svärden
      scene.sword.setVisible(false);
      //Updates sword position to not collide while not on use
      scene.sword.x = -150;
      scene.sword.y = -150;

}

//Player attack and shield
function createBasicAttackAndShield(scene) {

        ///////////////////////////////////////////////////////////////////////////
        //Player attack and shield

        //Restores the basic speed depends on speedBoost ability
        if(scene.keyQisPressed == true && scene.freezeSkillActive == false && scene.regenerationInUse == false){

            scene.basicSpeed = 100 * scene.startData.speedBoostCurrentLevelFactor;
            scene.lastSpeed = scene.basicSpeed;

        }else {
            scene.basicSpeed = 100;
            scene.lastSpeed = scene.basicSpeed;
        }

        //Shieldcharger
        if(scene.shieldNeedCharging == true){
            if(scene.shield.health !== scene.startData.shieldHealth){
                scene.shield.health += 1;
                scene.shieldsHealthText.setAlpha(0.5);
                scene.shieldIcon.setAlpha(0.5);

                scene.playShieldChargingSound = true;

                if(scene.playShieldChargingSound == true && scene.shieldOnCharge == true){
                    scene.shieldOnCharge = false;

                    scene.shieldCharging.play(scene.soundConfigForHasturSpawn);
                    setTimeout(() => {
                        scene.shieldOnCharge = true;
                        scene.playShieldChargingSound = false;
                    }, 10000);
                }

            }else{
                if(scene.startData.shieldSkillLearned == true){
                    setTimeout(() => {
                        scene.shieldNeedCharging = false;
                        scene.shieldsHealthText.setAlpha(1);
                        scene.shieldIcon.setAlpha(1);
    
                        //Display inline "Shield  Charged"
                        scene.info.setVisible(true);
                        scene.info.text = '                     Shield  Charged!';
                        setTimeout(() => {
                            //Display none => "Skill not learned yet"
                            scene.info.setVisible(false);;
                        }, 2000);
                    }, 1000);
                }
            }
        }

        //Updates the power of shield
        if(scene.startData.shieldSkillLearned == true &&  scene.startData.shieldActivated == false){
            scene.shieldsHealthText.setVisible(true);
            scene.shieldIcon.setVisible(true);

            scene.shield.health = scene.startData.shieldHealth;

            scene.startData.shieldActivated = true;
        }
        
        //On press shift - Activates shield
        if(scene.keyShift.isDown){
           if(scene.startData.shieldSkillLearned == true){
                //If fireballs shooting
                if(scene.input.activePointer.isDown && scene.startData.shootingSkillActive == true && scene.keyFPressed == true){
                    //Display inline "Regeneration is active"
                    scene.info.setVisible(true);
                    scene.info.text = 'Can´t  use  shield  while  shooting!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }else{
                    if(scene.regenerationInUse == false){
                        if(scene.shield.health > 0 && scene.shieldNeedCharging == false){

                            scene.shieldActive = true;

                            scene.shield.x = scene.aganjuX;
                            scene.shield.y = scene.aganjuY;
                    
                            scene.shield.setVisible(true);

                            //Aganju can´t move while shield active
                            scene.basicSpeed = 0;               
                            scene.aganju.anims.stop();
                        }else{
                        
                            //Display inline "Shield charging!"
                            scene.skillCoolingDown.setVisible(true);
                            setTimeout(() => {
                                //Display none => "Recharging..."
                                scene.skillCoolingDown.setVisible(false);
                            }, 2000);
                        }

                    }else{
                        //Display inline "Regeneration is active"
                        scene.info.setVisible(true);
                        scene.info.text = 'Can´t  use  shield  while  healing!';
                        setTimeout(() => {
                            //Display none => "Skill not learned yet"
                            scene.info.setVisible(false);;
                        }, 2000);
                    }
                }
           }else{   
                //Display inline "Skill not learned yet"
                scene.info.setVisible(true);
                scene.info.text = '            Skill not learned yet!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
           }
        }else{
            scene.shieldActive = false;
            scene.shield.x = -200;
            scene.shield.y = -200;
            scene.shield.setVisible(false);
            
            scene.basicSpeed = scene.lastSpeed;
        }

        //När spacebar trycks, svärd attack
        if(scene.spacebar.isDown){
            if(scene.shieldActive == false){

                if(scene.lastPressedButton == 'A'){
                    scene.aganju.setDepth(0);
    
                    scene.sword.setBodySize(30,125,true);
                    //Sätter X offset 14 och Y  offset 52 för att kunna skada fienden på x axeln(vänster sida)
                    scene.sword.setOffset(14,55,true);
        
                    //Gör svärden visible
                    scene.sword.setVisible(true);
                    //Uppdaterar svärdens position
                    scene.sword.setPosition(scene.aganjuX,scene.aganjuY-10);
                    //Ger z-index till svärden
                    scene.sword.setDepth(1);
                    //Scalar ner svärden
                    scene.sword.setScale(0.50);
                    //Spelar left animationen av svärd
                    scene.sword.anims.play('sword_left', true);
                }
                
                else if(scene.lastPressedButton == 'D'){
                    scene.aganju.setDepth(1);
    
                    scene.sword.setBodySize(30,125,true);
                    //Sätter X offset 210 och Y offset 52 för att kunna skada fienden på x axeln(höger sida)
                    scene.sword.setOffset(210,55,true);
    
                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX,scene.aganjuY-10);
                    scene.sword.setDepth(0);
                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_right', true);
                }
    
                else if(scene.lastPressedButton == 'S'){
                    scene.aganju.setDepth(0);
    
                    scene.sword.setBodySize(125,30,true);
                    //Sätter X offset 20 och Y offset 200 för att kunna skada fienden på y axeln(ner)
                    scene.sword.setOffset(20,200,true);
    
                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX+23,scene.aganjuY-10);
                    scene.sword.setDepth(1);
    
                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_down', true);
                }
    
                else if(scene.lastPressedButton == 'W'){
                    scene.aganju.setDepth(1);
    
                    scene.sword.setBodySize(125,30,true);
                    //Sätter X offset 105 och Y offset 60 för att kunna skada fienden på y axeln(upp)
                    scene.sword.setOffset(105,60,true);
    
                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX-20,scene.aganjuY-40);
                    scene.sword.setDepth(0);
    
                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_up', true);
                }
            }else{
                //Display inline "Regeneration is active"
                scene.info.setVisible(true);
                scene.info.text = 'Can´t  attack  while  using sheild!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
           }
        }
}

//Aganjus movement
function createAganjuAndSwordMovement(scene) {
 ///////////////////////////////////////////////////////////////////////////
        //Player movement and animations

        if(scene.aganjuMoves == true && scene.movementSoundActive == true){
            
            scene.movementSoundActive = false;

            scene.step.play(scene.stepConfigs);

            setTimeout(() => {
                scene.movementSoundActive = true;
            }, 500);
            
        }
        
        //Om vänster pillen trycks, 
        //left animation spelas
        if (scene.keyA.isDown)
        {
            //Ger Aganju velocity (rörelse) till vänster
            scene.aganju.setVelocity(-scene.basicSpeed,0);
            //Spelar left animationen av Aganju
            scene.aganju.anims.play('left', true);
            
            scene.aganjuMoves = true;
    
            // Ger z-index till eldbollar
            scene.fireballs.setDepth(1);

            //När spacebar trycks
            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    //Ger z-index 0 till Aganju
                    scene.aganju.setDepth(0);

                    scene.sword.setBodySize(30,125,true);
                    //Sätter X offset -10 och Y  offset 55 för att kunna skada fienden på x axeln(vänster sida)
                    scene.sword.setOffset(-10,55,true);

                    //Gör svärden visible
                    scene.sword.setVisible(true);
                    //Uppdaterar svärdens position
                    scene.sword.setPosition(scene.aganjuX,scene.aganjuY-10);
                    //Ger z-index till svärden
                    scene.sword.setDepth(1);
                    //Scalar ner svärden
                    scene.sword.setScale(0.50);
                    //Spelar left animationen av svärd
                    scene.sword.anims.play('sword_left', true);
                }
            }

            scene.lastPressedButton = 'A';
        }

        //Om höger pillen trycks, 
        //right animation spelas
        else if (scene.keyD.isDown)
        {
            scene.aganju.setVelocity(scene.basicSpeed,0);
            scene.aganju.anims.play('right', true);

            //Ger z-index till eldbollar
            scene.fireballs.setDepth(1);
            
            scene.aganjuMoves = true;

            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.aganju.setDepth(1);

                    scene.sword.setBodySize(30,125,true);
                    //Sätter X offset 230 och Y offset 52 för att kunna skada fienden på x axeln(höger sida)
                    scene.sword.setOffset(230,55,true);

                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX,scene.aganjuY-10);
                    scene.sword.setDepth(0);
                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_right', true);
                }
            }
            scene.lastPressedButton = 'D';
        }

        //Om up pillen trycks, 
        //Up animation spelas
        else if(scene.keyS.isDown)
        {
            scene.aganju.setVelocity(0,scene.basicSpeed);
            scene.aganju.anims.play('down', true);
   
            scene.aganjuMoves = true;

            //Ger z-index till eldbollar
            scene.fireballs.setDepth(1);

            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.aganju.setDepth(0);

                    scene.sword.setBodySize(125,30,true);
                    //Sätter X offset 20 och Y offset 220 för att kunna skada fienden på y axeln(ner)
                    scene.sword.setOffset(20,220,true);

                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX+23,scene.aganjuY-10);
                    scene.sword.setDepth(1);

                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_down', true);
                }
            }
            scene.lastPressedButton = 'S';
        }

        //Om up pillen trycks, 
        //Up animation spelas
        else if(scene.keyW.isDown)
        {
            scene.aganju.setVelocity(0,-scene.basicSpeed);
            scene.aganju.anims.play('up', true);

            //Ger z-index till eldbollar
            scene.fireballs.setDepth(0);
   
            scene.aganjuMoves = true;

            //När spacebar trycks
            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.aganju.setDepth(1);

                    scene.sword.setBodySize(125,30,true);
                    //Sätter X offset 105 och Y offset 40 för att kunna skada fienden på y axeln(upp)
                    scene.sword.setOffset(105,40,true);

                    scene.sword.setVisible(true);
                    scene.sword.setPosition(scene.aganjuX-20,scene.aganjuY-40);
                    scene.sword.setDepth(0);

                    scene.sword.setScale(0.50);
                    scene.sword.anims.play('sword_up', true);
                }
            }
            scene.lastPressedButton = 'W';
        }

        //Annars ingen rörelse
        //Ingen animation
        else{
            scene.aganju.setVelocity(0,0);
            scene.aganju.anims.stop();

            scene.aganjuMoves = false;

            if(scene.lastPressedButton == 'S'){
                scene.aganju.setFrame(1);
            }
            else if(scene.lastPressedButton == 'A'){
                scene.aganju.setFrame(4);
            }
            else if(scene.lastPressedButton == 'D'){
                scene.aganju.setFrame(7);
            }
            else if(scene.lastPressedButton == 'W'){
                scene.aganju.setFrame(10);
            }
        }

        //Om left och up pillarna trycks, 
        //Aganju går diagonalt till vänster hörn
        if(scene.keyA.isDown && scene.keyW.isDown){    
            scene.aganju.setVelocityY(-scene.basicSpeed);
            scene.aganju.setVelocityX(-scene.basicSpeed);
            scene.aganju.anims.play('up', true);
            scene.aganju.setDepth(1);

            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.sword.setDepth(0);

                    scene.sword.setBodySize(30,80,true);
                    //Sätter X offset -25 och Y  offset 150 för att kunna skada fienden på x och y axeln(ner och vänster sida)
                    scene.sword.setOffset(3,-20,true);
                }
            }
        }

        //Om höger och up pillarna trycks, 
        //Aganju går diagonalt till höger hörn
        if(scene.keyD.isDown && scene.keyW.isDown){    
            scene.aganju.setVelocityY(-scene.basicSpeed);
            scene.aganju.setVelocityX(scene.basicSpeed);
            scene.aganju.anims.play('up', true);
            
            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.sword.setBodySize(30,80,true);
                    //Sätter X offset 220 och Y  offset -20 för att kunna skada fienden på x och y axeln(upp och höger sida)
                    scene.sword.setOffset(220,-20,true);
                }
            }
        }

        //Om höger och ner pillarna trycks, 
        //Aganju går diagonalt till höger hörn
        if(scene.keyD.isDown && scene.keyS.isDown){    
            scene.aganju.setVelocityY(scene.basicSpeed);
            scene.aganju.setVelocityX(scene.basicSpeed);
            scene.aganju.anims.play('down', true);
            scene.aganju.setDepth(0);

            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.sword.setDepth(1);
                    scene.sword.setPosition(scene.aganjuX+20,scene.aganjuY-10);

                    scene.sword.setBodySize(30,80,true);
                    //Sätter X offset 175 och Y  offset 160 för att kunna skada fienden på x och y axeln(ner och höger sida)
                    scene.sword.setOffset(175,160,true);
                }
            }
    
        }

        //Om vänster och ner pillarna trycks, 
        //Aganju går diagonalt till höger hörn
        if(scene.keyA.isDown && scene.keyS.isDown){    
            scene.aganju.setVelocityY(scene.basicSpeed);
            scene.aganju.setVelocityX(-scene.basicSpeed);
            scene.aganju.anims.play('down', true);

            if(scene.spacebar.isDown){
                if(scene.shieldActive == false){
                    scene.sword.setPosition(scene.aganjuX+17,scene.aganjuY-5);

                    scene.sword.setBodySize(30,80,true);
                    //Sätter X offset -25 och Y  offset 150 för att kunna skada fienden på x och y axeln(ner och vänster sida)
                    scene.sword.setOffset(-25,150,true);
                }
            }
        }

}

//Creates Body Skills
function createsUpdateableBODYSKILLS(scene) {
     //BODY-SKILLS
        //REGENERATION
        if(scene.startData.regenerationLearned == true){
            scene.regenerationIconLearned.setVisible(true);
        }else{
            scene.regenerationIconLearned.setVisible(false);
            scene.regenerationIconNotLearned.setVisible(false);
        }

        //Skill - Regeneration and Cooldown
        if(scene.keyR.isDown){
            if(scene.startData.regenerationLearned == true){
                if(scene.startData.regenerationCoolDown == false){

                    scene.regenerationSound.play();

                    //Ökar Aganjus health + 10
                    scene.aganju.health = scene.aganju.health + scene.startData.regenerationCurrentLevelFactor;

                    //Aganjus last speed innan regeneration-skillen aktiveras
                    scene.lastSpeed = scene.basicSpeed;
                    //Regeneration-skillen påverkar Aganjus speed, den sänks 50%
                    //Aganju kan inte röra sig när han läkar sig själv
                    scene.basicSpeed = 0;

                    //Sätter tint (röd) för att visa att skillen används
                    scene.skillPlaceHolderRegeneration.setTint(0xff0000);

                    setInterval(() => {
                        scene.healing.x = scene.aganju.x;
                        scene.healing.y = scene.aganju.y;
                    }, 1);

                    scene.healing.setVisible(true);
                    scene.healing.anims.play('heal');

                    setTimeout(() => {
                        scene.healing.setVisible(false);
                    }, 1700);

                    if(scene.startData.speedCoolDown == false){
                        //Aganju kan inte aktivera speedBoost-skill när han läkar sig själv
                        scene.startData.speedCoolDown = true;
                        
                        //Deactivates the shield until regeneration skill used
                        scene.keyShift.isDown = false;
                        scene.regenerationInUse = true;

                        setTimeout(() => {
                            scene.startData.speedCoolDown = false;
                            scene.regenerationInUse = false;
                        }, 2000);
                    }
                    
                    //Tar bort tint för att visa att skillen har använts
                    setTimeout(() => {
                        scene.skillPlaceHolderRegeneration.setTint();
                        scene.regenerationIconNotLearned.setVisible(true);

                        ////scene.regenerationSkillloading.setVisible(true);
                        ////scene.regenerationSkillloading.anims.play('loading');

                        //Efter regenerationen, Aganju får sin speed tillbaka
                        scene.basicSpeed = scene.lastSpeed;
                    }, 2000);

                    //Cooldown behövs
                    scene.startData.regenerationCoolDown = true;

                    //Efter 20 sekunder Regeneration-skillen kan användas igen
                    setTimeout(() => {
                        scene.startData.regenerationCoolDown = false;

                        //Opacity = 1
                        scene.regenerationIconNotLearned.setVisible(false);

                        ////scene.regenerationSkillloading.setVisible(false);
                    }, 10000);
                }else{
                 
                    scene.skillCoolingDown.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Recharging..."
                        scene.skillCoolingDown.setVisible(false);
                    }, 2000);
                }
            }else{
                scene.skillUnavaliable.play();
                //Display inline "Skill not learned yet"
                scene.info.setVisible(true);
                scene.info.text = '            Skill not learned yet!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
            }
        }

        //Updates the damage of sword while sword skill upgraded
        if(scene.startData.swordSkillLearned == true && scene.startData.swordUpgraded == true){

            if(scene.startData.powerOfSword == 1){

                scene.sword.damage += 5;
                scene.swordFirstUpgradeAdded = true;
                scene.startData.swordUpgraded = false;

            }
            
            else if(scene.startData.powerOfSword == 10){

                if(scene.swordFirstUpgradeAdded == true){
                    scene.sword.damage += 10;
                    scene.startData.swordUpgraded = false;
                    scene.swordSecondUpgradeAdded = true;             
                }else{
                    scene.sword.damage += 15;
                    scene.startData.swordUpgraded = false;
                    scene.swordSecondUpgradeAdded = true;   
                }
                
            }
            
            else if(scene.startData.powerOfSword == 20){

                if( scene.swordSecondUpgradeAdded == true){
                    scene.sword.damage += 10;
                    scene.startData.swordUpgraded = false;

                    scene.swordThirdUpgradeAdded = true;
                }
                else if(scene.swordFirstUpgradeAdded == true){
                    scene.sword.damage += 15;
                    scene.startData.swordUpgraded = false;
                    scene.swordThirdUpgradeAdded = true;
                }
                else{
                    scene.sword.damage += 25;
                    scene.startData.swordUpgraded = false;
                    scene.swordThirdUpgradeAdded = true;
                }
            }
            
            else if(scene.startData.powerOfSword == 35){

                if( scene.swordThirdUpgradeAdded == true){
                    scene.sword.damage += 15;
                    scene.startData.swordUpgraded = false;
                }

                else if(scene.swordSecondUpgradeAdded == true){
                    scene.sword.damage += 20;
                    scene.startData.swordUpgraded = false;
                }

                else if(scene.swordFirstUpgradeAdded == true){
                    scene.sword.damage += 30;
                    scene.startData.swordUpgraded = false;
                }

                else{
                    scene.sword.damage += 35;
                    scene.startData.swordUpgraded = false;
                }
            }
        }

        //Updates the strenght of sword while strenght skill upgraded
        if(scene.startData.strenghtSkillLearned == true && scene.startData.strenghtUpgraded == true){
            if(scene.startData.powerOfStrenght == 1){

                scene.sword.damage += 5;
                scene.strengthFirstUpgradeAdded = true;
                scene.startData.strenghtUpgraded = false;

            }
            else if(scene.startData.powerOfStrenght == 10){

                if(scene.strengthFirstUpgradeAdded == true){
                    scene.sword.damage += 10;
                    scene.startData.strenghtUpgraded = false;
                    scene.strenghtSecondUpgradeAdded = true;             
                }else{
                    scene.sword.damage += 15;
                    scene.startData.strenghtUpgraded = false;
                    scene.strenghtSecondUpgradeAdded = true;   
                }
                
            }
            
            else if(scene.startData.powerOfStrenght == 20){

                if( scene.strenghtSecondUpgradeAdded == true){
                    scene.sword.damage += 10;
                    scene.startData.strenghtUpgraded = false;

                    scene.strenghtThirdUpgradeAdded = true;
                }
                else if(scene.strenghtFirstUpgradeAdded == true){
                    scene.sword.damage += 15;
                    scene.startData.strenghtUpgraded = false;
                    scene.strenghtThirdUpgradeAdded = true;
                }
                else{
                    scene.sword.damage += 25;
                    scene.startData.strenghtUpgraded = false;
                    scene.strenghtThirdUpgradeAdded = true;
                }
            }
            
            else if(scene.startData.powerOfStrenght == 35){

                if( scene.strenghtThirdUpgradeAdded == true){
                    scene.sword.damage += 15;
                    scene.startData.strenghtUpgraded = false;
                }

                else if(scene.strenghtSecondUpgradeAdded == true){
                    scene.sword.damage += 20;
                    scene.startData.strenghtUpgraded = false;
                }

                else if(scene.strenghtFirstUpgradeAdded == true){
                    scene.sword.damage += 30;
                    scene.startData.strenghtUpgraded = false;
                }

                else{
                    scene.sword.damage += 35;
                    scene.startData.strenghtUpgraded = false;
                }
            
            }
        }
}

//Creates Physical Skills
function createsUpdateablePHYSICALKILLS(scene) {

        //Updates physical skills icon
        if(scene.startData.activePhysicalSkill == 'freeze'){
            scene.freezeIconLearned.setVisible(true);

        }else{
            scene.freezeIconLearned.setVisible(false);
            scene.freezeIconNotLearned.setVisible(false);
        }

        if(scene.startData.activePhysicalSkill == 'speedBoost'){
            scene.flashIconLearned.setVisible(true);

        }else{
            scene.flashIconNotLearned.setVisible(false);
        }

        if(scene.startData.activePhysicalSkill == 'bulletTime'){
            scene.bulletTimeIconLearned.setVisible(true);

        }else{
            scene.bulletTimeIconNotLearned.setVisible(false);
        }
        //BulletTime sound effect
        if(scene.bulletTimeSkillActive == true && scene.keyQForBulletTimeisPressed == true){
            scene.bulletTimeSkillActive = false;
            scene.heartBeat.play(scene.musicConfig);
            setInterval(() => {
                scene.bulletTimeSkillActive = true;
            }, 1500);
        }


        if(scene.startData.activePhysicalSkill == 'untouchable'){

            scene.untouchableIconLearned.setVisible(true);

        }else{
            scene.untouchableIconNotLearned.setVisible(false);
        }


        //Physical Skill and Cooldowns
        if(scene.keyQ.isDown && scene.keyQDeactive == false){  

            //SpeedBoost - Skill
            if(scene.startData.activePhysicalSkill == 'speedBoost'){
                if(scene.startData.speedBoostLearned == true){
                    if(scene.startData.speedCoolDown == false){

                        scene.keyQisPressed = true;
                        scene.keyQDeactive = true;
                        scene.freezeSkillActive = false;

                        scene.speedBoostSound.play();

                        //Höjer Aganju speed till 300
                        scene.basicSpeed = 100 * scene.startData.speedBoostCurrentLevelFactor;
                        //Sätter tint (blå)
                        scene.skillPlaceHolderPhysicalSkill.setTint(0x00FF00);

                        //SpeedBoost skillen påverkar Aganjus health, den sänks 50%
                        scene.discreasedHealth = scene.aganju.health * 0.5;
                        //här deklareras Aganjus dicreasedHealth
                        scene.aganju.health = scene.discreasedHealth;
    
                        //Efter 5 sekunder slutar speedboosten
                        setTimeout(() => {
                            //Back to Aganjus normal hastighet
                            scene.basicSpeed = 100;
    
                            scene.keyQisPressed = false;
                            scene.keyQDeactive = false;
                            scene.freezeSkillActive = true;

                            //Tar bort tint
                            scene.skillPlaceHolderPhysicalSkill.setTint();
                            //Opacity = 0.5 
                            scene.flashIconNotLearned.setVisible(true);

                            ////scene.physicalSkillloading  .setVisible(true);
                            ////scene.physicalSkillloading  .anims.play('loading');
    
                            if( scene.aganju.health !== 100){
                                //Uppdaterar Aganjus health
                                scene.aganju.health = scene.aganju.health * 2;
                            }
                      
                        }, 6500);
    
                        //Cooldown behövs
                        scene.startData.speedCoolDown = true;
    
                        //Efter 20 sekunder SpeedBoost - Skillen kan användas igen
                        setTimeout(() => {
                            scene.startData.speedCoolDown = false;
                            //Opacity = 1
                            scene.flashIconNotLearned.setVisible(false);

                            ////scene.physicalSkillloading  .setVisible(false);
                        }, 15000);
                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                }else{
                    //Display inline "Skill not learned yet"
                    scene.info.setVisible(true);
                    scene.info.text = 'Skill not learned yet!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }
            }
            
            //BulletTime - Skill
            if(scene.startData.activePhysicalSkill == 'bulletTime'){

                if(scene.startData.bulletTimeSkillLearned == true){
                    if(scene.startData.bulletTimeCoolDown == false){

                        scene.keyQForBulletTimeisPressed = true;
                        scene.keyQDeactive = true;
                        scene.bulletTimeSkillActive = true;

                        //Sänks Hasturs speed till 5
                        scene.hastursBasicSpeed = 5;  
                        //Speed of hasturs projectiles
                        scene.hasturProjectilesSpeed = 10;
                        
                        scene.basicSpeed = 100;

                        //Sätter tint (blå)
                        scene.skillPlaceHolderPhysicalSkill.setTint(0x00FF00);

                        //Finds hasturfreeze animation and plays it
                        // scene.allObjectsInScene.forEach(obj => {
                        //     if(obj.name == "hasturFreeze"){
                        //         obj.setVisible(true);
                        //         obj.anims.play("freeze");

                        //         scene.allObjectsInScene.forEach(object => {
                        //             if(object.id == obj.id){
                        //                 obj.x = object.x;
                        //                 obj.y = object.y+10;
                        //                 if(object.health <= 0){
                        //                     obj.destroy();
                        //                 }
                        //             }
                        //         })

                        //         setTimeout(() => {
                        //             obj.setVisible(false);
                        //         }, scene.startData.freezingMiliSeconds);
                        //     }
                        // });
    
                        //Efter freezeLevel sekunder återvänder hasturs hastighet 
                        setTimeout(() => {
                            //Restores hasturs speed
                            scene.hastursBasicSpeed = 100;

                            //Speed of hasturs projectiles
                            scene.hasturProjectilesSpeed = 300;

                            scene.keyQDeactive = false;
                            scene.bulletTimeSkillActive = false;

                            scene.keyQForBulletTimeisPressed = false;

                            scene.basicSpeed = 100;

                            //Tar bort tint
                            scene.skillPlaceHolderPhysicalSkill.setTint();
                            //Opacity = 0.5
                            scene.bulletTimeIconNotLearned.setVisible(true);

                            ////scene.physicalSkillloading  .setVisible(true);
                            ////scene.physicalSkillloading  .anims.play('loading');
    
                        }, scene.startData.bulletTimeMiliSeconds);
    
                        //Cooldown behövs
                        scene.startData.bulletTimeCoolDown = true;
    
                        //Efter 8 sekunder bulletTime - Skillen kan användas igen
                        setTimeout(() => {
                            scene.startData.bulletTimeCoolDown = false;

                            //Opacity = 1
                            scene.bulletTimeIconNotLearned.setVisible(false);

                            //scene.physicalSkillloading .setVisible(false);

                        }, scene.startData.bulletTimeMiliSeconds + 8000);

                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                }
            }

            //Untouchable - Skill
            if(scene.startData.activePhysicalSkill == 'untouchable'){

                if(scene.startData.untouchableSkillLearned == true){
                    if(scene.startData.untouchableCoolDown == false){

                        // scene.keyQisPressed = true;
                        scene.keyQDeactive = true;
                        scene.untouchableSkillActive = true;
                        
                        scene.basicSpeed = 100;

                        //Sätter tint (blå)
                        scene.skillPlaceHolderPhysicalSkill.setTint(0x00FF00);
    
                        //Efter untouchable sekunder återvänder hasturs hastighet 
                        setTimeout(() => {

                            scene.keyQDeactive = false;
                            scene.untouchableSkillActive = false;

                            scene.basicSpeed = 100;

                            //Tar bort tint
                            scene.skillPlaceHolderPhysicalSkill.setTint();
                            //Opacity = 0.5
                            scene.untouchableIconNotLearned.setVisible(true);

                            //scene.physicalSkillloading .setVisible(true);
                            //scene.physicalSkillloading .anims.play('loading');
    
                        }, scene.startData.untouchableMiliSeconds);
    
                        //Cooldown behövs
                        scene.startData.untouchableCoolDown = true;
    
                        //Efter 8 sekunder untouchable - Skillen kan användas igen
                        setTimeout(() => {
                            scene.startData.untouchableCoolDown = false;

                            //Opacity = 1
                            scene.untouchableIconNotLearned.setVisible(false);

                            //scene.physicalSkillloading .setVisible(false);

                        }, scene.startData.untouchableMiliSeconds + 8000);

                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                }
            }

            //Freeze - Skill
            if(scene.startData.activePhysicalSkill == 'freeze'){
                
                if(scene.startData.freezeSkillLearned == true){
                    if(scene.startData.freezeCoolDown == false){

                        // scene.keyQisPressed = true;
                        scene.keyQDeactive = true;
                        scene.freezeSkillActive = true;

                        scene.freezeSound.play();

                        scene.basicSpeed = 100;

                        //Sänks Hasturs speed till 0
                        scene.hastursBasicSpeed = 0;  

                        //Sätter tint (blå)
                        scene.skillPlaceHolderPhysicalSkill.setTint(0x00FF00);

                        //Finds hasturfreeze animation and plays it
                        scene.allObjectsInScene.forEach(obj => {
                            if(obj.name == "hasturFreeze"){
                                obj.setVisible(true);
                                obj.anims.play("freeze");

                                scene.allObjectsInScene.forEach(object => {
                                    if(object.id == obj.id){
                                        obj.x = object.x;
                                        obj.y = object.y+10;
                                        if(object.health <= 0){
                                            obj.destroy();
                                        }
                                    }
                                })

                                setTimeout(() => {
                                    obj.setVisible(false);
                                }, scene.startData.freezingMiliSeconds);
                            }
                        });
    
                        //Efter freezeLevel sekunder återvänder hasturs hastighet 
                        setTimeout(() => {
                            //Restores hasturs speed
                            scene.hastursBasicSpeed = 100;

                            scene.keyQDeactive = false;
                            scene.freezeSkillActive = false;

                            scene.basicSpeed = 100;

                            //Tar bort tint
                            scene.skillPlaceHolderPhysicalSkill.setTint();
                            //Opacity = 0.5
                            scene.freezeIconNotLearned.setVisible(true);

                            //scene.physicalSkillloading .setVisible(true);
                            //scene.physicalSkillloading .anims.play('loading');
    
                        }, scene.startData.freezingMiliSeconds);
    
                        //Cooldown behövs
                        scene.startData.freezeCoolDown = true;
    
                        //Efter 20 sekunder SpeedBoost - Skillen kan användas igen
                        setTimeout(() => {
                            scene.startData.freezeCoolDown = false;

                            //Opacity = 1
                            scene.freezeIconNotLearned.setVisible(false);

                            //scene.physicalSkillloading .setVisible(false);

                        }, scene.startData.freezingMiliSeconds + 15000);

                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                }
            }

            if(scene.startData.activePhysicalSkill == ''){
                scene.skillUnavaliable.play();
                //Display inline "Skill not learned yet"
                scene.info.setVisible(true);
                scene.info.text = '            Skill not learned yet!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
            }

            scene.keyQ.isDown = false;
        }

}

//Creates Shooting Skills
function createsUpdateableSHOOTINGSKILLS(scene) {
        //////////////////////////////////////////////////////////
        //SHOOTING-SKILLS
        //Updates shootingobjects icon
        if(scene.startData.shootingObject == 'fireball'){
            scene.fireballIconLearned.setVisible(true);
            scene.activeShootingObjectNotLearned = scene.fireballIconNotLearned;
        }else{
            scene.fireballIconLearned.setVisible(false);
            scene.fireballIconNotLearned.setVisible(false);
        }

        if(scene.startData.shootingObject == 'bullet'){
            scene.bulletIconLearned.setVisible(true);
            scene.activeShootingObjectNotLearned = scene.bulletIconNotLearned;
        }else{
            scene.bulletIconLearned.setVisible(false);
            scene.bulletIconNotLearned.setVisible(false);
        }

        if(scene.startData.shootingObject == 'dagger'){
            scene.daggerIconLearned.setVisible(true);
            scene.activeShootingObjectNotLearned = scene.daggerIconNotLearned;

        }else{
            scene.daggerIconLearned.setVisible(false);
            scene.daggerIconNotLearned.setVisible(false);
        }

        if(scene.startData.shootingObject == 'laser'){
            scene.laserIconLearned.setVisible(true);
            scene.activeShootingObjectNotLearned = scene.laserIconNotLearned;
        }else{
            scene.laserIconNotLearned.setVisible(false);
        }

        //Updates amount fireballs to shoot
        scene.fireballs.maxSize = scene.startData.amountShootingObjects;
        //Skill - Eldbollar
        if(scene.keyF.isDown){
            if(scene.startData.shootingSkillLearned == true){
                if(scene.startData.shootingSkillActive == true){
                    scene.keyEPressed = true;

                    //To disable shield
                    scene.keyFPressed = true;

                    //Shows skill in use (sets a blue tint)
                    scene.skillPlaceHolderShootingSkill.setTint(0x00FF00);

                    //Starts countdown for fireballs skill
                    setTimeout(() => {
                       //Disable fireball skill for 5 sek
                       scene.startData.shootingSkillActive = false;
                       scene.keyEPressed = false;

                       //Enables shield
                       scene.keyFPressed = false;
                       
                       scene.startData.shootingCoolDown = true;

                       //Clears tint
                       scene.skillPlaceHolderShootingSkill.clearTint();
                       scene.activeShootingObjectNotLearned.setVisible(true);

                       //// scene.shootingSkillloadingisible(true);
                        // scene.shootingSkillloading.anims.play('loading');

                       setTimeout(() => {
                           //Skill is available again
                           scene.startData.shootingSkillActive = true;
                           scene.activeShootingObjectNotLearned.setVisible(false);

                           scene.startData.shootingCoolDown = false;

                          //// scene.shootingSkillloadingisible(false);

                       }, 8000);

                   }, scene.startData.activeShootingMiliSeconds);

                }else{
                    scene.skillCoolingDown.setVisible(true);
                    setTimeout(() => {
                        //Display none => "Recharging..."
                        scene.skillCoolingDown.setVisible(false);
                    }, 2000);
                }
            }else{
                scene.skillUnavaliable.play();
                //Display inline "Skill not learned yet"
                scene.info.setVisible(true);
                scene.info.text = '            Skill not learned yet!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
            }
            scene.keyF.isDown = false;
        }
        //Skill - Eldbollar and Cooldown
        if(scene.input.activePointer.isDown && scene.time.now > scene.lastFired && scene.startData.shootingSkillActive == true && scene.keyEPressed == true && scene.shieldActive == false){
            scene.fireball = scene.fireballs.get();

            //Plays laser sound 
            if(scene.startData.shootingObject == 'laser'){
                scene.laserSound.play(scene.soundConfigForHasturSpawn);
            }
            //Plays fireball sound 
            if(scene.startData.shootingObject == 'fireball'){
                scene.fireballSound.play(scene.soundConfigForHasturSpawn);
            }
            //Plays bullet sound 
            if(scene.startData.shootingObject == 'bullet'){
                scene.bulletSound.play(scene.soundConfigForHasturSpawn);
            }
            //Plays dagger sound 
            if(scene.startData.shootingObject == 'dagger'){
                scene.daggerSound.play(scene.soundConfigForHasturSpawn);
            }


            if (scene.fireball){  
                scene.fireball.setPosition(scene.aganjuX,scene.aganjuY);
                scene.fireball.fire(scene.input.x, scene.input.y);
                scene.lastFired = scene.time.now + 50;
            }
        }
}

//Creates Drop Skills
function createsUpdateableDROPSKILLS(scene) {
//////////////////////////////////////////////////////////
        //DROP-SKILLS
        //Creates lightningSkill icon if activeDropSkill is lightning
        if(scene.startData.activeDropSkill == 'lightning'){

            scene.lightningDropPlace.damage = scene.startData.lightningDamage;
            scene.lightningIconLearned.setVisible(true);

        }else{
            scene.lightningIconLearned.setVisible(false);
            scene.lightningIconNotLearned.setVisible(false);
        }

        //Creates waterblastSkill icon if activeDropSkill is meteor
        if(scene.startData.activeDropSkill == 'waterblast'){
            scene.waterblastDropPlace.damage = scene.startData.waterblastDamage;
            scene.waterblastIconLearned.setVisible(true);
        }else{
            scene.waterblastIconLearned.setVisible(false);
            scene.waterblastIconNotLearned.setVisible(false);
        }

        //Creates meteorSkill icon if activeDropSkill is meteor
        if(scene.startData.activeDropSkill == 'meteor'){
            scene.meteor.damage = scene.startData.meteorDamage;
            scene.meteorIconLearned.setVisible(true);
        }else{
            scene.meteorIconLearned.setVisible(false);
            scene.meteorIconNotLearned.setVisible(false);
        }

        // Creates fireblastSkill icon if activeDropSkill is meteor
        if(scene.startData.activeDropSkill == 'fireblast'){
            scene.fireblastDropPlace.damage = scene.startData.fireblastDamage;
            scene.fireblastIconLearned.setVisible(true);
        }else{
            scene.fireblastIconLearned.setVisible(false);
            scene.fireblastIconNotLearned.setVisible(false);
        }

        //Skill - Drop skills and Cooldowns
        if(scene.keyE.isDown){
            if(scene.startData.activeDropSkill == 'lightning'){
                if(scene.startData.lightningSkillLearned == true){
                    scene.lightning.damage = scene.startData.lightningDamage; 
                    scene.lightningDropPlace.setScale(scene.startData.lightningRange);
                  
                    if(scene.startData.lightningCoolDown == false){
                        scene.startData.lightningSkillActive = true;
                        
                        if(scene.startData.shootingSkillLearned == true){
                            scene.startData.shootingSkillActive = false;

                        }

                        setTimeout(() => {
                            scene.startData.lightningSkillActive = false;
                            scene.lightningDrop.setVisible(false);
                            
                            if(scene.startData.shootingSkillLearned == true){
                                scene.startData.shootingSkillActive = true;

                            }

                            // scene.dropSkillloading.setVisible(true);
                            // scene.dropSkillloading.anims.play('loading');

                            scene.skillPlaceHolderDropSkill.setTint();
                            scene.lightningIconNotLearned.setVisible(true);

                            scene.startData.lightningCoolDown = true;
                            setTimeout(() => {
                                scene.startData.lightningCoolDown = false;
                                //Opacity 1
                                scene.lightningIconNotLearned.setVisible(false);

                                // scene.dropSkillloading.setVisible(false);
                            }, 10000);
        
                        }, 10000);
                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                } else{
                    //Display inline "Skill not learned yet"
                    scene.info.setVisible(true);
                    scene.info.text = '            Skill not learned yet!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }
            }
            if(scene.startData.activeDropSkill == 'waterblast'){
                if(scene.startData.waterblastSkillLearned == true){
                    scene.waterblast.damage = scene.startData.waterblastDamage; 

                    scene.waterblast.setScale(scene.startData.waterblastRange);

                    if(scene.startData.waterblastCoolDown == false){
                        scene.startData.waterblastSkillActive = true;
                        
                        if(scene.startData.shootingSkillLearned == true){
                            scene.startData.shootingSkillActive = false;

                        }

                        setTimeout(() => {
                            scene.startData.waterblastSkillActive = false;
                            scene.waterblastDrop.setVisible(false);
    
                            if(scene.startData.shootingSkillLearned == true){
                                scene.startData.shootingSkillActive = true;

                            }
                            
                            //Opacity 1
                            scene.waterblastIconNotLearned.setVisible(true);
                            scene.skillPlaceHolderDropSkill.setTint();

                            // scene.dropSkillloading.setVisible(true);
                            // scene.dropSkillloading.anims.play('loading');

                            scene.startData.waterblastCoolDown = true;
                            setTimeout(() => {
                                scene.startData.waterblastCoolDown = false;
                                //Opacity 1
                                scene.waterblastIconNotLearned.setVisible(false);

                                // scene.dropSkillloading.setVisible(false);

                            }, 10000);
        
                        }, 10000);
                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                } else{
                    //Display inline "Skill not learned yet"
                    scene.info.setVisible(true);
                    scene.info.text = '            Skill not learned yet!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }
            }
            if(scene.startData.activeDropSkill == 'meteor'){
                if(scene.startData.meteorSkillLearned == true){
                    scene.meteor.damage = scene.startData.meteorDamage; 

                    scene.meteorDropPlace.setScale(scene.startData.meteorRange);

                    if(scene.startData.meteorCoolDown == false){
                        scene.startData.meteorSkillActive = true;
                        
                        if(scene.startData.shootingSkillLearned == true){
                            scene.startData.shootingSkillActive = false;

                        }

                        setTimeout(() => {
                            scene.startData.meteorSkillActive = false;
                            scene.meteorDrop.setVisible(false);
    
                            if(scene.startData.shootingSkillLearned == true){
                                scene.startData.shootingSkillActive = true;

                            }

                            //Tar bort tint
                            scene.skillPlaceHolderDropSkill.setTint();

                            scene.meteorIconNotLearned.setVisible(true);

                            // scene.dropSkillloading.setVisible(true);
                            // scene.dropSkillloading.anims.play('loading');

                            scene.startData.meteorCoolDown = true;
                            setTimeout(() => {
                                scene.startData.meteorCoolDown = false;
                                //Opacity 1
                                scene.meteorIconNotLearned.setVisible(false);

                                // scene.dropSkillloading.setVisible(false);

                            }, 10000);
        
                        }, 10000);
                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                } else{
                    //Display inline "Skill not learned yet"
                    scene.info.setVisible(true);
                    scene.info.text = '            Skill not learned yet!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }
            }
            if(scene.startData.activeDropSkill == 'fireblast'){
                if(scene.startData.fireblastSkillLearned == true){
                    scene.fireblast.damage = scene.startData.fireblastDamage; 

                    scene.fireblast.setScale(scene.startData.fireblastRange);

                    if(scene.startData.fireblastCoolDown == false){
                        scene.startData.fireblastSkillActive = true;
                        
                        if(scene.startData.shootingSkillLearned == true){
                            scene.startData.shootingSkillActive = false;

                        }
    
                        setTimeout(() => {
                            scene.startData.fireblastSkillActive = false;
                            scene.fireblastDrop.setVisible(false);
    
                            if(scene.startData.shootingSkillLearned == true){
                                scene.startData.shootingSkillActive = true;

                            }
                            //Tar bort tint
                            scene.skillPlaceHolderDropSkill.setTint();
                            //Opacity 1
                            scene.fireblastIconNotLearned.setVisible(true);

                            // scene.dropSkillloading.setVisible(true);
                            // scene.dropSkillloading.anims.play('loading');
                            
                            scene.startData.fireblastCoolDown = true;
                            setTimeout(() => {
                                scene.startData.fireblastCoolDown = false;
                                //Opacity 1
                                scene.fireblastIconNotLearned.setVisible(false);

                                // scene.dropSkillloading.setVisible(false);

                            }, 10000);
        
                        }, 10000);
                    }else{
                        scene.skillCoolingDown.setVisible(true);
                        setTimeout(() => {
                            //Display none => "Recharging..."
                            scene.skillCoolingDown.setVisible(false);
                        }, 2000);
                    }
                } else{
                    //Display inline "Skill not learned yet"
                    scene.info.setVisible(true);
                    scene.info.text = '            Skill not learned yet!';
                    setTimeout(() => {
                        //Display none => "Skill not learned yet"
                        scene.info.setVisible(false);;
                    }, 2000);
                }
            }
            if(scene.startData.activeDropSkill == ''){
                scene.skillUnavaliable.play();
                //Display inline "Skill not learned yet"
                scene.info.setVisible(true);
                scene.info.text = '            Skill not learned yet!';
                setTimeout(() => {
                    //Display none => "Skill not learned yet"
                    scene.info.setVisible(false);;
                }, 2000);
            }
        }
        //Skill - Lightning skill and Cooldown
        if(scene.startData.lightningSkillActive == true){

            // if(scene.startData.shootingSkillLearned == true){
            //     scene.fireballIconNotLearned.setAlpha(0.5);

            //     if(scene.startData.shootingSkillActive !== false){
            //         scene.startData.shootingSkillActive = true;
            //     }else{
            //         scene.startData.shootingSkillActive = false;
            //     }
            // }

            scene.startData.shootingSkillActive = false;

            scene.lightningDrop.setVisible(true);

            scene.lightningDrop.x = scene.input.x;
            scene.lightningDrop.y = scene.input.y;
            
            //Sätter tint (blå)
            scene.skillPlaceHolderDropSkill.setTint(0x00FF00);

            if(scene.input.activePointer.isDown && scene.startData.lightningSkillActive == true){

                scene.lightningDrop.setVisible(false);
                scene.lightning.setVisible(true);

                scene.lightning.x = scene.input.x;
                scene.lightning.y = scene.input.y-80;

                //Lightning dropplace
                scene.lightningDropPlace.x = scene.lightningDrop.x;
                scene.lightningDropPlace.y = scene.lightningDrop.y;
                
                scene.lightningSound.play();

                //Plays shock animation
                scene.lightning.anims.play('shock');

                //On click lightning skill will not be active anymore
                scene.startData.lightningSkillActive = false;

                //Lightning skill need to cools down
                scene.startData.lightningCoolDown = true;

                //Opacity 0.5
                scene.lightningIconNotLearned.setVisible(true);
                //Tar bort tint
                scene.skillPlaceHolderDropSkill.setTint();


                // scene.dropSkillloading.setVisible(true);
                // scene.dropSkillloading.anims.play('loading');

                //After animation played hides lightning sprite
                setTimeout(() => {
                    scene.lightning.setVisible(false);
                }, 1000);
                
                //After 20s skill can be used again
                setTimeout(() => {
                    scene.startData.lightningCoolDown = false;
                    //Opacity 1
                    scene.lightningIconNotLearned.setVisible(false);

                    // scene.dropSkillloading.setVisible(false);

                }, 10000);
               
                
                setTimeout(() => {

                    if(scene.startData.shootingSkillLearned == true){
                        if(scene.startData.shootingCoolDown == false){
                            scene.startData.shootingSkillActive = true;
                        }else{
                            scene.startData.shootingSkillActive = false;
                        }
                    }

                }, 1000);
            }
        } 

        //Skill - Waterblast skill and Cooldown
        if(scene.startData.waterblastSkillActive == true){
             
            scene.startData.shootingSkillActive = false;

            scene.waterblastDrop.setVisible(true);

            scene.waterblastDrop.x = scene.input.x;
            scene.waterblastDrop.y = scene.input.y;

            // Sätter tint (blå)
            scene.skillPlaceHolderDropSkill.setTint(0x00FF00);

            if(scene.input.activePointer.isDown && scene.startData.waterblastSkillActive == true){

                scene.waterblastDrop.setVisible(false);

                scene.waterblast.setVisible(true);
                scene.waterblast.x = scene.input.x-5;
                //Fireblast y position depends in its range
                if(scene.startData.waterblastRange == 1.5){
                    scene.waterblast.y = scene.input.y-90;
                }
                else if(scene.startData.fireblastRange == 1.25){
                    scene.waterblast.y = scene.input.y-70;
                }
                else{
                    scene.waterblast.y = scene.input.y-50;
                }
                   
                //waterblast dropplace
                scene.waterblastDropPlace.x = scene.waterblastDrop.x;
                scene.waterblastDropPlace.y = scene.waterblastDrop.y;
                scene.waterblastDropPlace.setScale(scene.startData.waterblastRange);

                scene.waterblastSound.play();

                //Plays shock animation
                scene.waterblast.anims.play('waterblast');


                // setTimeout(() => {
                //     scene.meteorExplosion.x = scene.meteor.x-18; 
                //     scene.meteorExplosion.y = scene.meteor.y+65;

                //     scene.meteorExplosion.setVisible(true);
                //     scene.meteorExplosion.anims.play('meteorExplosion');
                //     setTimeout(() => {
                //         scene.meteorExplosion.setVisible(false);
                //     }, 500);
                // }, 500);

                //On click waterblas skill will not be active anymore
                scene.startData.waterblastSkillActive = false;

                //Lightning skill need to cools down
                scene.startData.waterblastCoolDown = true;

                // Opacity 0.5
                scene.waterblastIconNotLearned.setVisible(true);
                // Tar bort tint
                scene.skillPlaceHolderDropSkill.setTint();


                // scene.dropSkillloading.setVisible(true);
                // scene.dropSkillloading.anims.play('loading');

                //After animation played hides lightning sprite
                setTimeout(() => {
                    scene.waterblast.setVisible(false);
                    scene.waterblastDropPlace.x = -1000;
                    scene.waterblastDropPlace.y = -1000;
                }, 1000);
  
                //After 20s skill can be used again
                setTimeout(() => {
                    scene.startData.waterblastCoolDown = false;
                    // Opacity 1
                    scene.waterblastIconNotLearned.setVisible(false);

                    // scene.dropSkillloading.setVisible(false);
                }, 10000);

                setTimeout(() => {
                    if(scene.startData.shootingSkillLearned == true){
                        if(scene.startData.shootingCoolDown == false){
                            scene.startData.shootingSkillActive = true;
                        }else{
                            scene.startData.shootingSkillActive = false;
                        }
                    }
                }, 1000);
            }
        }

        //Skill - Meteor skill and Cooldown
        if(scene.startData.meteorSkillActive == true){
             
            scene.startData.shootingSkillActive = false;

            scene.meteorDrop.setVisible(true);

            scene.meteorDrop.x = scene.input.x;
            scene.meteorDrop.y = scene.input.y;
        
            //Sätter tint (blå)
            scene.skillPlaceHolderDropSkill.setTint(0x00FF00);

            if(scene.input.activePointer.isDown && scene.startData.meteorSkillActive == true){

                scene.meteorDrop.setVisible(false);
                scene.meteor.setVisible(true);

                scene.meteor.x = scene.input.x;
                scene.meteor.y = scene.input.y-80;

                //Meteor dropplace
                scene.meteorDropPlace.x = scene.meteorDrop.x;
                scene.meteorDropPlace.y = scene.meteorDrop.y;
                
                scene.meteorSound.play();

                //Plays shock animation
                scene.meteor.anims.play('meteor');

                setTimeout(() => {
                    scene.meteorExplosion.x = scene.meteor.x-18; 
                    scene.meteorExplosion.y = scene.meteor.y+65;

                    scene.meteorExplosion.setVisible(true);
                    scene.meteorExplosion.anims.play('meteorExplosion');
                    setTimeout(() => {
                        scene.meteorExplosion.setVisible(false);
                    }, 500);
                }, 500);

                //On click lightning skill will not be active anymore
                scene.startData.meteorSkillActive = false;

                //Lightning skill need to cools down
                scene.startData.meteorCoolDown = true;

                //Opacity 0.5
                scene.meteorIconNotLearned.setVisible(true);
                //Tar bort tint
                scene.skillPlaceHolderDropSkill.setTint();


                // scene.dropSkillloading.setVisible(true);
                // scene.dropSkillloading.anims.play('loading');

                //After animation played hides lightning sprite
                setTimeout(() => {
                    scene.meteor.setVisible(false);
                }, 1000);
  
                //After 20s skill can be used again
                setTimeout(() => {
                    scene.startData.meteorCoolDown = false;
                    //Opacity 1
                    scene.meteorIconNotLearned.setVisible(false);

                    // scene.dropSkillloading.setVisible(false);

                }, 10000);

                 
                setTimeout(() => {
                    if(scene.startData.shootingSkillLearned == true){
                        if(scene.startData.shootingCoolDown == false){
                            scene.startData.shootingSkillActive = true;
                        }else{
                            scene.startData.shootingSkillActive = false;
                        }
                    }
                }, 1000);
            }
        }
        
        //Skill - Fireblast skill and Cooldown
        if(scene.startData.fireblastSkillActive == true){
             
            scene.startData.shootingSkillActive = false;

            scene.fireblastDrop.setVisible(true);

            scene.fireblastDrop.x = scene.input.x;
            scene.fireblastDrop.y = scene.input.y;

            //Sätter tint (blå)
            scene.skillPlaceHolderDropSkill.setTint(0x00FF00);

            if(scene.input.activePointer.isDown && scene.startData.fireblastSkillActive == true){

                scene.fireblastDrop.setVisible(false);

                scene.fireblast.setVisible(true);
                scene.fireblast.x = scene.input.x-5;
                //Fireblast y position depends in its range
                if(scene.startData.fireblastRange == 1){
                    scene.fireblast.y = scene.input.y-90;
                }
                else if(scene.startData.fireblastRange == 0.75){
                    scene.fireblast.y = scene.input.y-70;
                }
                else{
                    scene.fireblast.y = scene.input.y-50;
                }
                   

                scene.fireblastSound.play();

                //Meteor dropplace
                scene.fireblastDropPlace.x = scene.fireblastDrop.x;
                scene.fireblastDropPlace.y = scene.fireblastDrop.y;
                scene.fireblastDropPlace.setScale(scene.startData.fireblastRange);

                //Plays shock animation
                scene.fireblast.anims.play('fireblast');

                // setTimeout(() => {
                //     scene.meteorExplosion.x = scene.meteor.x-18; 
                //     scene.meteorExplosion.y = scene.meteor.y+65;

                //     scene.meteorExplosion.setVisible(true);
                //     scene.meteorExplosion.anims.play('meteorExplosion');
                //     setTimeout(() => {
                //         scene.meteorExplosion.setVisible(false);
                //     }, 500);
                // }, 500);

                //On click lightning skill will not be active anymore
                scene.startData.fireblastSkillActive = false;

                //Lightning skill need to cools down
                scene.startData.fireblastCoolDown = true;

                // Opacity 0.5
                scene.fireblastIconNotLearned.setVisible(true);
                // Tar bort tint
                scene.skillPlaceHolderDropSkill.setTint();

                // scene.dropSkillloading.setVisible(true);
                // scene.dropSkillloading.anims.play('loading');

                //After animation played hides lightning sprite
                setTimeout(() => {
                    scene.fireblast.setVisible(false);
                }, 800);
  
                //After 20s skill can be used again
                setTimeout(() => {
                    scene.startData.fireblastCoolDown = false;
                    //Opacity 1
                    scene.fireblastIconNotLearned.setVisible(false);

                    // scene.dropSkillloading.setVisible(false);
                }, 10000);

                setTimeout(() => {
                    if(scene.startData.shootingSkillLearned == true){
                        if(scene.startData.shootingCoolDown == false){
                            scene.startData.shootingSkillActive = true;
                        }else{
                            scene.startData.shootingSkillActive = false;
                        }
                    }
                }, 1000);
            }
        }
}

export{
    //Load() part of phaser
    loadAllGameObjects,

    //Creates objects for lounge room
    createLoungeRoomObjects,

    //Create() part of phaser
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

    //Update() part of phaser
    createHasturOnSceneDependOnScoreReached,
    createPauseNextLevelVictoryAndGameover,
    createUpdaterOfScoreLiveHealhtCoinsKillsAndPositions,
    createBasicAttackAndShield,
    createAganjuAndSwordMovement,

            //Skills

    //Body skills
    createsUpdateableBODYSKILLS,
    createsUpdateablePHYSICALKILLS,
    createsUpdateableSHOOTINGSKILLS,
    createsUpdateableDROPSKILLS,

}