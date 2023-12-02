const UP = 0; // for random diection
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

let highestID=0;

function enemyMove(obj, type){ // type == sprite name
    obj.direction = randomDirection(obj.direction);
    setAnimation(obj, type);

    function randomDirection(exclude){
        let newDirection = Phaser.Math.Between(0,3);
        while(newDirection == exclude){
            newDirection = Phaser.Math.Between(0,3);
        }
        return newDirection;
    }

    function setAnimation(animObj, spriteName){
        let dirName = ['up', 'down', 'left', 'right']; //index corresponds with directional consts
        // console.log('setting animation for '+ spriteName+ ': '+ animObj.id);
        animObj.anims.play(`${spriteName}-${dirName[animObj.direction]}`);
    };
};

export default class Hastur extends Phaser.Physics.Arcade.Sprite{  

    constructor(scene, x, y, texture){ 

        super(scene, x, y, texture);
        
        let hastur = this; // only for ease of read 

        hastur.id = highestID++;
        hastur.wallCollTime = 0;
        hastur.setScale(2);

        enemyMove(hastur, 'hastur'); // makes objects move

        // Enemey change direction :
        // - on worldbounds collision
        // - on aganju collision
        // - randomly 
        // | | | | | | |
        // v v v v v v v

        this.wallCollide = setInterval( () =>{
            enemyMove(hastur,'hastur');
        },Phaser.Math.Between(hastur.wallCollTime + 3000, hastur.wallCollTime + 16000) )


        this.shoot = setInterval( () =>{

            // amount of hasturs on playground
            let amount = scene.hasturs.children.entries.length;

            let frequency = amount <= 4 ? 1 : 2;
            
            let range = amount <= 5 ? 50 : 150;

            // is hastur within range?
            let withinX = hastur.x < scene.aganju.x + range 
            && hastur.x > scene.aganju.x - range 
            ? true : false; 
    
            let withinY = hastur.y < scene.aganju.y + range
            ? true : false; 
            
            if(withinY && withinY){
                // do not shoot
            } else {

                let shootProjectile = Phaser.Math.Between(0, frequency);
                if(shootProjectile == 0){
                    var projectileOne = scene.hasturProjectiles.get();
                    // var projectileTwo = scene.hasturProjectiles.get();

                    if(projectileOne){
                        let projOneX = scene.aganju.x;
                        let projTwoX = scene.aganju.x;
                        let projOneY = scene.aganju.y;
                        let projTwoY = scene.aganju.y;

                        let inc = 50;
                        let dubInc= inc * 2;

                        // // if hastur is north-west of aganju
                        // if(hastur.x <= scene.aganju.x && hastur.y < scene.aganju.y){
                        //     projOneX += dubInc;
                        //     projOneY -= inc;
                        //     projTwoX -= dubInc;
                        //     projTwoY += inc;
                        // }

                        // // if hastur is north-east of aganju
                        // if(hastur.x >= scene.aganju.x && hastur.y < scene.aganju.y){
                        //     projOneX += dubInc;
                        //     projOneY -= inc;
                        //     projTwoX -= dubInc;
                        //     projTwoY -= inc;
                        // }

                        // //if hastur is south-east of aganju
                        // if(hastur.x > scene.aganju.x && hastur.y >= scene.aganju.y){
                        //     projOneX -= dubInc;
                        //     projOneY += inc;
                        //     projTwoX -= dubInc;
                        //     projTwoY -= inc;
                        // }
                        
                        // // if hastur is south-west of aganju
                        // if(hastur.x < scene.aganju.x && hastur.y >= scene.aganju.y){
                        //     projOneX += dubInc;
                        //     projOneY += inc;
                        //     projTwoX += dubInc;
                        //     projTwoY -= inc;
                        // }


                        // projectile one
                        projectileOne.fire(hastur.x, hastur.y, projOneX, projOneY);
                        // console.log('shot one')
                        // projectile two
                        // projectileTwo.fire(hastur.x, hastur.y, projTwoX, projTwoY);


                    }
                } 
            }

        }, 700);

        
        scene.physics.world.on('worldbounds', (obj) =>{
            //only the hastur that collided will change direction
            if(hastur.id == obj.gameObject.id){ 
                enemyMove(hastur, 'hastur');
                hastur.wallCollTime = scene.time.now; // saves time for randMoveEvent
            }
        });

        scene.physics.world.on('collide', (objOne, objTwo)=>{
            // console.log(objOne.name + ' ' + objTwo.name);

            // if aganju collides with hastur
            if( objOne.name == 'aganju' ){
                let thisAganju = objOne;
                let thisHastur = objTwo;

                // only colliding hastur changes direction
                if(hastur.id == thisHastur.id){

                    enemyMove(hastur, 'hastur');
                    //If skill-untouchable aktive destroy thisHastur
                    if(scene.untouchableSkillActive == true){
                        
                        let allObjectsAdded = scene.add.displayList.list;
                        let hasturBulletExplode = "hasturBulletExplode" + hastur.id;
                        let bulletExplosition;
    
                        allObjectsAdded.forEach(addedObj => {
                             //ThisHasturs bulletExplode animation
                            if(addedObj.name == hasturBulletExplode){
                                bulletExplosition = addedObj;
                            }
                        });

                        //Hastur bulletexplosion (darksmoke)
                        bulletExplosition.x = hastur.x;
                        bulletExplosition.y = hastur.y;
                            
                        scene.bulletExplodeSound.play(scene.soundConfigForHasturSpawn);

                        bulletExplosition.setVisible(true);
                        bulletExplosition.anims.play('bulletExplosion');
        
                        setTimeout(() => {
                            bulletExplosition.destroy();
                        }, 500);

                        //Updates score and coins
                        scene.startData.score = scene.startData.score + 50;
                        scene.startData.totalCoins = scene.startData.totalCoins + 150;
                        //Updates amount hastur on scene
                        scene.amountHasturOnScene -= 1;

                        killHastur();
                    }
                }

                if(thisAganju.health <= 0){
                    scene.respawn.setVisible(true);
                    
                    setInterval(() => {
                        scene.respawn.x = thisAganju.x;
                        scene.respawn.y = thisAganju.y;
                    }, 1);
                  
                    scene.respawn.anims.play('respawn');
                    scene.aganjuReborn.play();
                    
                    setTimeout(() => {
                        scene.respawn.setVisible(false);
                        thisAganju.setAlpha(1);
                    }, 800);

                    thisAganju.setAlpha(0.5);
                    thisAganju.health = 100;
                    scene.startData.lives -= 1;
                }
    
                // makes aganju take damage              |          | 
                //                                       v cooldown v
                if(scene.untouchableSkillActive == false){

                    if(thisHastur.damage > 0){
                        //Gives tint (red)
                        //Red eyes shows that Aganju takes damage
                        thisAganju.setTint(0xff00ff);

                        scene.hasturHurt.play();
                    }
                    
                    setTimeout(() => {
                        //Clear tint
                        thisAganju.clearTint();
                    }, 1000);

                    if( !thisAganju.timeTakenDmgLast || scene.time.now >= thisAganju.timeTakenDmgLast + 1000){

                        thisAganju.health = thisAganju.health - thisHastur.damage;
                        thisAganju.timeTakenDmgLast = scene.time.now;
                    }
                }
            }

            function killHastur(){
                hastur.destroy();
                scene.shouldSpawnMore = true;
                scene.killedAmount++;
                scene.getCoin.play();
            }

            if( objTwo.name == 'shield' ){
           
                let thisShield = objTwo;
                let thisHastur = objOne;

                if( thisHastur.id ==  hastur.id){

                    enemyMove(hastur,'hastur');

                    thisShield.health -= thisHastur.damage;

                    scene.collideShield.play(scene.soundConfigForHasturSpawn);

                    if(thisShield.health <= 75){
                        thisShield.setTint(0x8E8E8E);

                    }else{
                        scene.keyShift.isDown = false;

                        thisShield.setTint(0x8E8E8E);
    
                        setTimeout(() => {
                            thisShield.clearTint();
                        }, 500);
                    }

                    if(thisShield.health <= 0){
                        scene.keyShift.isDown = false;
                        scene.shieldNeedCharging = true;

                        thisShield.clearTint();
                    }
                }
               
            }

            if( objOne.name == 'sword' ){
           
                let thisSword = objOne;
                let thisHastur = objTwo;

                if( thisHastur.id ==  hastur.id){
                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let dieSmokeOfHastur = "hasturDieSmoke" + hastur.id;
                    let seperateHastur = "hasturSeperate" + hastur.id;

                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;
                    let hasturDieSmoke;
                    let hasturFreeze;
                    let hasturSeperate;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }
                        if(addedObj.name == seperateHastur){
                            hasturSeperate = addedObj;
                        }
                        if(addedObj.name == dieSmokeOfHastur){
                            hasturDieSmoke = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                                hasturFreeze = addedObj;
                            }
                        }
                    });

                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisSword.damage;
                    hasturTakenDamage.setVisible(true);
                    hastur.health -= thisSword.damage;

                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;

                    }, 1);

                    thisHastur.damage = 0;

                    enemyMove(hastur, 'hastur');

                    setTimeout(() => {
                        if(scene.startData.score < 1000){
                            thisHastur.damage = 25;
                        }
                        if(scene.startData.score > 1000){
                            thisHastur.damage = 30;
                        }
                       if (scene.startData.score > 2000){
                            thisHastur.damage = 40;
                
                        }else if(scene.startData.score > 4000){
                            thisHastur.damage = 50;
                
                        }else if(scene.startData.score > 8000){
                            thisHastur.damage = 75;
                
                        }else if(scene.startData.score > 10000){
                            thisHastur.damage = 100;
                        }
                        if(scene.startData.score > 15000){
                            thisHastur.damage = 200;
                        }
                        if(scene.startData.score > 20000){
                            thisHastur.damage = 300;
                        }
                        if(scene.startData.score > 30000){
                            thisHastur.damage = 350;
                        }

                    }, 2000);

                    if(hastur.health <= 30){
                        //Sätter tint (black)
                        hastur.setTint(0x8E8E8E);
                    }else{
                          //Sätter tint (black)
                        hastur.setTint(0x8E8E8E);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();

                        }, 500);
                    }

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    //Disables propogation
                    scene.spacebar.isDown = false;

                    scene.swordAttack.play(scene.soundConfigForHasturSpawn);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 50;
                        scene.startData.totalCoins = scene.startData.totalCoins + 150;
                        scene.amountHasturOnScene -= 1;

                        //Hides the showen taked damage
                        hasturTakenDamage.destroy();
                        //Hides hastursHeartIcon
                        hastursHeartIcon.destroy();
                        //Hides hasturs healthbar
                        hasturHealthbar.destroy();

                        hasturSeperate.x = hastur.x;
                        hasturSeperate.y = hastur.y;
                        hasturSeperate.setVisible(true);
                        hasturSeperate.anims.play('seperate');

                        setTimeout(() => {
                            hasturSeperate.destroy();
                        }, 500);

                        hasturDieSmoke.destroy();
                        hasturFreeze.destroy();

                        if(scene.freezeSkillActive == true){
                            scene.freezeKillingSound.play();
                        }

                        scene.swordKilling.play();
                        killHastur();
                    }
                }
                
            }

            if( objTwo.name == 'shootingObject' ){
                let thisShootingObject = objTwo;
                let thisHastur = objOne;
                
                if( thisHastur.id ==  hastur.id){

                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let dieFlameHastur = "hasturDieFlame" + hastur.id;
                    let bleedingHastur = "hasturBleeding" + hastur.id;
                    let bloodExplosition = "hasturBloodExplosition" + hastur.id;
                    let hasturLaserExplode = "hasturLaserExplode" + hastur.id;
                    let dieSmokeOfHastur = "hasturDieSmoke" + hastur.id;

                    
                    
                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;
                    let hasturDieFlame;
                    let hasturBleeding;
                    let hasturBloodExplosition;
                    let hasturFreeze;
                    let laserExplosition;
                    let hasturBulletKillSmoke;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }

                        //ThisHasturs flame animation
                        if(addedObj.name == dieFlameHastur){
                            hasturDieFlame = addedObj;
                        }
                        //ThisHasturs bleeding animation
                        if(addedObj.name == bleedingHastur){
                            hasturBleeding = addedObj;
                        }
                        //ThisHasturs blooedExplosition animation
                        if(addedObj.name == bloodExplosition){
                            hasturBloodExplosition = addedObj;
                        }
                        //ThisHasturs laserExplode animation
                        if(addedObj.name == hasturLaserExplode){
                            laserExplosition = addedObj;
                        }
                        //Hastur bulletKill smoke
                        if(addedObj.name == dieSmokeOfHastur){
                            hasturBulletKillSmoke = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                            hasturFreeze = addedObj;
                        }
                    }

                    });

                    //Red tint
                    let colorOfTint = 0x990000;

                    if(scene.startData.shootingObject == 'laser'){
                        thisShootingObject.damage = 10;
                        
                        //Blue tint
                        colorOfTint = 0x104FF4;
                    }
                    if(scene.startData.shootingObject == 'dagger'){
                        thisShootingObject.damage = 20;
                        
                        //Red tint
                        colorOfTint = 0x990000;
                    }
                    if(scene.startData.shootingObject == 'bullet'){
                        thisShootingObject.damage = 30;

                        //Black tint
                        colorOfTint = 0x8E8E8E;

                        hasturBleeding.setVisible(true);
                        hasturBleeding.anims.play('bleeding');

                        setTimeout(() => {
                            hasturBleeding.setVisible(false);
                        }, 500);
                    }
                    if(scene.startData.shootingObject == 'fireball'){
                        thisShootingObject.damage = 40;

                        //Red tint
                        colorOfTint = 0x990000;

                        hasturDieFlame.setVisible(true);
                        hasturDieFlame.anims.play('flame');
    
                        setTimeout(() => {
                            hasturDieFlame.setVisible(false);
                        }, 1000);
                    }

                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisShootingObject.damage;
                    hasturTakenDamage.setVisible(true);
                   
                    hastur.health -= thisShootingObject.damage;

                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;

                        //Hasturs flame on
                        hasturDieFlame.x = hastur.x;
                        hasturDieFlame.y = hastur.y;

                        //Hasturs bleeding
                        hasturBleeding.x = hastur.x - 20;
                        hasturBleeding.y = hastur.y;

                    }, 1);

                    thisShootingObject.destroy();

                    if(hastur.health <= 40){
                        //Sätter tint 
                        hastur.setTint(colorOfTint);
                    }else{
                        //Sätter tint 
                        hastur.setTint(colorOfTint);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();
                        }, 1000);
                    }

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 25;
                        scene.startData.totalCoins = scene.startData.totalCoins + 100;
                        scene.amountHasturOnScene -= 1;

                        //Hides the showen taked damage
                        hasturTakenDamage.setVisible(false);
                        //Hides hastursHeartIcon
                        hastursHeartIcon.setVisible(false);
                        //Hides hasturs healthbar
                        hasturHealthbar.setVisible(false);

                        //Hastur flame while killed with fireball
                        if(scene.startData.shootingObject == "fireball"){
                            scene.fireballExplodeSound.play(scene.soundConfigForHasturSpawn);
                            setTimeout(() => {
                                hasturDieFlame.destroy();
                            }, 300);
                        }

                        //Hastur flame while killed with bullet
                        if(scene.startData.shootingObject == "bullet"){
                            //Plays hasturs dieSmoke animation
                            hasturBulletKillSmoke.x = hastur.x;
                            hasturBulletKillSmoke.y = hastur.y;
                            hasturBulletKillSmoke.setVisible(true);
                            hasturBulletKillSmoke.anims.play('smoke');

                            scene.smokeSound.play(scene.soundConfigForHasturSpawn);

                            setTimeout(() => {
                                hasturBulletKillSmoke.destroy();
                            }, 500);
                        }

                        //Hastur bloodexplode while killed with dagger
                        if(scene.startData.shootingObject == "dagger"){
                            hasturBloodExplosition.x = hastur.x;
                            hasturBloodExplosition.y = hastur.y;

                            scene.daggerExplodeSound.play(scene.soundConfigForHasturSpawn);

                            hasturBloodExplosition.setVisible(true);
                            hasturBloodExplosition.anims.play('bloodExplosition');
        
                            setTimeout(() => {
                                hasturBloodExplosition.destroy();
                            }, 500);
                        }

                        //Hastur laserexplode while killed with laser
                        if(scene.startData.shootingObject == "laser"){
                            laserExplosition.x = hastur.x;
                            laserExplosition.y = hastur.y;

                            scene.laserExplodeSound.play(scene.soundConfigForHasturSpawn);

                            laserExplosition.setVisible(true);
                            laserExplosition.anims.play('laserExplode');
        
                            setTimeout(() => {
                                laserExplosition.destroy();
                            }, 500);
                        }

                        hasturFreeze.setVisible(false);

                        setTimeout(() => {
                            hasturFreeze.destroy();
                        }, 4000);

                        if(scene.freezeSkillActive == true){
                            scene.freezeKillingSound.play();
                        }

                        killHastur();
                    }
                }
            }

            //DROP SKILLS
            if( objOne.name == 'lightning' ){
           
                let thisLightning = objOne;
                let thisHastur = objTwo;
                if(scene.startData.lightningRange == 1.5){
                    thisLightning.setBodySize(125,125, true);
                }else if(scene.startData.lightningRange == 2){
                    thisLightning.setBodySize(150,150, true);
                }else{
                    thisLightning.setBodySize(90,90, true);
                }

                if( thisHastur.id ==  hastur.id){

                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let dieLightningExplositionOfHastur = "hasturLightningExplosition" + hastur.id;

                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;
                    let hasturLightningExplosition;
                    let hasturFreeze;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }
                        if(addedObj.name == dieLightningExplositionOfHastur){
                            hasturLightningExplosition = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                                hasturFreeze = addedObj;
                            }
                        }
                    });

                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisLightning.damage;
                    hasturTakenDamage.setVisible(true);
                    hastur.health -= thisLightning.damage;
                    
                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;
                    }, 1);

                    if(hastur.health < 50){
                        //Sätter tint (blue)
                        hastur.setTint(0x104FF4);
                    }else{
                        //Sätter tint (blue)
                        hastur.setTint(0x104FF4);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();
                        }, 1500);
                    }
                    
                    thisLightning.x = -400;
                    thisLightning.y = -400;

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 10;
                        scene.startData.totalCoins = scene.startData.totalCoins + 50;
                        scene.amountHasturOnScene -= 1;

                        setTimeout(() => {
                            //Hides the showen taked damage
                            hasturTakenDamage.destroy();
                            //Hides hastursHeartIcon
                            hastursHeartIcon.destroy();
                            //Hides hasturs healthbar
                            hasturHealthbar.destroy();

                            
                            hasturLightningExplosition.x = hastur.x;
                            hasturLightningExplosition.y = hastur.y;
                            hasturLightningExplosition.setVisible(true);
                            hasturLightningExplosition.anims.play('explode');
                            
                            setTimeout(() => {
                                scene.lightningExplosionSound.play();
                                hasturLightningExplosition.destroy();
                            }, 500);
                            
                            if(scene.freezeSkillActive == true){
                                scene.freezeKillingSound.play();
                            }

                            hasturFreeze.destroy();

                            killHastur();
                        }, 700);
                    }
                }
                
            }

            if(objOne.name == 'waterblast'){
           
                let thisWaterblast = objOne;
                let thisHastur = objTwo;

                if( thisHastur.id ==  hastur.id){

                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let hasturWaterblastExplosion = "hasturWaterblastExplosion" + hastur.id;

                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;

                    let hasturFreeze;
                    let waterblastExplosion;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }
                        if(addedObj.name == hasturWaterblastExplosion){
                            waterblastExplosion = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                                hasturFreeze = addedObj;
                            }
                        }
                    });

                    thisWaterblast.damage = scene.startData.waterblastDamage;
                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisWaterblast.damage;
                    hasturTakenDamage.setVisible(true);
                    hastur.health -= scene.startData.waterblastDamage;

                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;

                        //Updates position of waterblastExplosition
                        waterblastExplosion.x = hastur.x;
                        waterblastExplosion.y = hastur.y;
                    }, 1);

                    if(hastur.health < 50){
                        //Sätter tint (blue)
                        hastur.setTint(0x104FF4);
                    }else{
                        //Sätter tint (blue)
                        hastur.setTint(0x104FF4);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();
                        }, 1500);
                    }
                    
                    thisWaterblast.x = -1000;
                    thisWaterblast.y = -1000;

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 10;
                        scene.startData.totalCoins = scene.startData.totalCoins + 50;
                        scene.amountHasturOnScene -= 1;

                        scene.waterblastExplosionSound.play();

                        waterblastExplosion.setVisible(true);
                        waterblastExplosion.anims.play('waterblastExplosion');

                        setTimeout(() => {
                            waterblastExplosion.destroy();
                        }, 1000);

                        setTimeout(() => {
                            //Hides the showen taked damage
                            hasturTakenDamage.destroy();
                            //Hides hastursHeartIcon
                            hastursHeartIcon.destroy();
                            //Hides hasturs healthbar
                            hasturHealthbar.destroy();

                            if(scene.freezeSkillActive == true){
                                scene.freezeKillingSound.play();
                            }
                            hasturFreeze.destroy();
                            killHastur();
                        }, 500);
                       
                    }
                }
                
            }

            if( objOne.name == 'meteor' ){
           
                let thisMeteor = objOne;
                let thisHastur = objTwo;

                if( thisHastur.id ==  hastur.id){

                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let dieExplositionOfHastur = "hasturExplosition" + hastur.id;

                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;
                    let hasturExplosition;
                    let hasturFreeze;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }
                        if(addedObj.name == dieExplositionOfHastur){
                            hasturExplosition = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                                hasturFreeze = addedObj;
                            }
                        }
                    });

                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisMeteor.damage;
                    hasturTakenDamage.setVisible(true);
                    hastur.health -= scene.startData.meteorDamage;

                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;
                    }, 1);

                    if(hastur.health < 50){
                        //Sätter tint (red)
                        hastur.setTint(0x990000);
                    }else{
                        //Sätter tint (red)
                        hastur.setTint(0x990000);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();
                        }, 1500);
                    }
                    
                    thisMeteor.x = -1000;
                    thisMeteor.y = -1000;

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 10;
                        scene.startData.totalCoins = scene.startData.totalCoins + 50;
                        scene.amountHasturOnScene -= 1;

                        setTimeout(() => {
                            //Hides the showen taked damage
                            hasturTakenDamage.destroy();
                            //Hides hastursHeartIcon
                            hastursHeartIcon.destroy();
                            //Hides hasturs healthbar
                            hasturHealthbar.destroy();

                            scene.fireExplosionSound.play();
                            
                            hasturExplosition.x = hastur.x;
                            hasturExplosition.y = hastur.y;
                            hasturExplosition.setVisible(true);
                            hasturExplosition.anims.play('explosition');
                            
                            setTimeout(() => {
                                hasturExplosition.destroy();
                            }, 500);

                            if(scene.freezeSkillActive == true){
                                scene.freezeKillingSound.play();
                            }
                            hasturFreeze.destroy();
                            killHastur();
                        }, 1000);
                    }
                }
                
            }

            if(objOne.name == 'fireblast'){
           
                let thisFireblast = objOne;
                let thisHastur = objTwo;

                if( thisHastur.id ==  hastur.id){

                    let allHeartIcons = scene.add.displayList.list;
                    let nameOfHeart = "hastursHeartIcon"+hastur.id;
                    let nameOfHealth = "hasturHealthbar"+hastur.id;
                    let nameOfTakenDamage = "hasturTakenDamage"+hastur.id;
                    let hasturFireblastExplosion = "hasturFireblastExplosion" + hastur.id;

                    let hastursHeartIcon;
                    let hasturHealthbar;
                    let hasturTakenDamage;

                    let hasturFreeze;
                    let fireblastExplosion;

                    allHeartIcons.forEach(addedObj => {
                        if(addedObj.name == nameOfHeart){
                            hastursHeartIcon = addedObj;
                        }
                        if(addedObj.name == nameOfHealth){
                            hasturHealthbar = addedObj;
                        }
                        if(addedObj.name == nameOfTakenDamage){
                            hasturTakenDamage = addedObj;
                        }
                        if(addedObj.name == hasturFireblastExplosion){
                            fireblastExplosion = addedObj;
                        }
                        //ThisHasturs freeze animation
                        if(addedObj.name == "hasturFreeze"){
                            if(addedObj.id == hastur.id){
                                hasturFreeze = addedObj;
                            }
                        }
                    });

                    thisFireblast.damage = scene.startData.fireblastDamage;
                    //Hastur takenDamage
                    hasturTakenDamage.text = -thisFireblast.damage;
                    hasturTakenDamage.setVisible(true);
                    hastur.health -= scene.startData.fireblastDamage;

                    // //Hasturs heartIcon
                    hastursHeartIcon.setVisible(true);
                    
                    //Hastur healthbar 
                    hasturHealthbar.text = thisHastur.health;
                    hasturHealthbar.setVisible(true);

                    setInterval(() => {
                        //Hasturs heartIcon
                        hastursHeartIcon.x = thisHastur.x-10;
                        hastursHeartIcon.y = thisHastur.y-50;

                        //Hastur healthbar 
                        hasturHealthbar.x = thisHastur.x+5;
                        hasturHealthbar.y = thisHastur.y-59;

                        //Hasturs takenDamage
                        hasturTakenDamage.x = thisHastur.x+25;
                        hasturTakenDamage.y = thisHastur.y-30;

                        //Updates position of fireblastExplosition
                        fireblastExplosion.x = hastur.x;
                        fireblastExplosion.y = hastur.y;

                    }, 1);

                    if(hastur.health < 50){
                        //Sätter tint (red)
                        hastur.setTint(0x990000);
                    }else{
                        //Sätter tint (red)
                        hastur.setTint(0x990000);

                        setTimeout(() => {
                            //Clear tint
                            hastur.clearTint();
                        }, 1500);
                    }
                    
                    thisFireblast.x = -1000;
                    thisFireblast.y = -1000;

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hasturTakenDamage.setVisible(false);
                    },500);

                    //Hides the showen taked damage, hastursHeartIcon  and hasturs healthbar after 5 ms
                    setTimeout(()=>{
                        hastursHeartIcon.setVisible(false);
                        // scene.hastursHeartIcon.setVisible(false);
                        hasturHealthbar.setVisible(false);
                    },2500);

                    if(hastur.health <= 0){
                        scene.startData.score = scene.startData.score + 10;
                        scene.startData.totalCoins = scene.startData.totalCoins + 50;
                        scene.amountHasturOnScene -= 1;

                        scene.fireExplosionSound.play();

                        fireblastExplosion.setVisible(true);
                        fireblastExplosion.anims.play('fireblastExplosion');

                        setTimeout(() => {
                            fireblastExplosion.destroy();
                        }, 1000);

                        setTimeout(() => {
                            //Hides the showen taked damage
                            hasturTakenDamage.destroy();
                            //Hides hastursHeartIcon
                            hastursHeartIcon.destroy();
                            //Hides hasturs healthbar
                            hasturHealthbar.destroy();

                            if(scene.freezeSkillActive == true){
                                scene.freezeKillingSound.play();
                            }
                            hasturFreeze.destroy();
                            killHastur();
                        }, 500);
                       
                    }
                }
                
            }
        })

    }

    destroy(){
        console.log('hastur '+ this.id +' died');
        clearInterval(this.wallCollide);
        clearInterval(this.shoot);
        super.destroy(this);
    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);

        let speed = this.scene.hastursBasicSpeed;

        switch(this.direction){
            case UP:
                this.body.setVelocity(0, -speed)
               break 
            case DOWN:
                this.body.setVelocity(0, speed)
               break 
            case LEFT:
                this.body.setVelocity(-speed, 0)
               break 
            case RIGHT:
                this.body.setVelocity(speed, 0)
               break 
        }
    }


    



    
}
