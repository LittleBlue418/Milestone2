/*
 =================================
    Math Functions
 =================================
 */

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function randomBool(probability) {
  return Math.random() < probability;
};



/*
=================================
   On Load
=================================
*/

$(function () {



  /*
  =================================
      Global Variables
  =================================
  */

  const playerMaxHealth = 100;
  var roundCount;
  var player;
  var currentEnemy;


  /*
 =================================
     Classes
 =================================
 */

  class EnemyBase {
    constructor(health, attackPattern) {
      this.health = health;
      this.attackPattern = attackPattern;
    };

    takeDamage(damageTaken) {
      this.health = Math.max(this.health - damageTaken, 0);
    }

    isEnemyAttacking(roundCount) {
      return this.attackPattern[roundCount % this.attackPattern.length];
    }

    isDead() {
      return (this.health < 1);
    }
  }

  class Enemy1 extends EnemyBase {
    constructor() {

      var health = randomInteger(30, 40);
      var attackPattern = [true, false, true];

      super(health, attackPattern);

      this.maxHealth = health;
      this.attack = randomInteger(10, 15);
      this.defense = randomInteger(10, 15);
      this.gold = randomInteger(5, 10);


      if (randomBool(0.5)) {
        this.healthPotionStrength = 10;
      } else {
        this.healthPotionStrength = 0;
      }
    }
  };


  class Enemy2 extends EnemyBase {
    constructor() {
      var health = randomInteger(45, 50);
      var attackPattern = [true, false, true, false];

      super(health, attackPattern);

      this.maxHealth = health;
      this.attack = randomInteger(25, 30);
      this.defense = randomInteger(35, 40);
      this.gold = randomInteger(25, 30);


      if (randomBool(0.333)) {
        this.healthPotionStrength = 10;
      } else {
        this.healthPotionStrength = 0;
      }
    }
  }

  class Enemy3 extends EnemyBase {
    constructor() {
      var health = randomInteger(55, 60);
      var attackPattern = [true, false, true, true, false];

      super(health, attackPattern);

      this.maxHealth = health;
      this.attack = randomInteger(55, 50);
      this.defense = randomInteger(40, 45);
      this.gold = randomInteger(45, 50);


      if (randomBool(0.25)) {
        this.healthPotionStrength = 10;
      } else {
        this.healthPotionStrength = 0;
      }
    }
  }

  class Enemy4 extends EnemyBase {
    constructor() {
      var health = 100;
      var attackPattern = [true, false, true, true, true, false];

      super(health, attackPattern);

      this.maxHealth = health;
      this.attack = 80;
      this.defense = 80;
      this.gold = 0;
      this.healthPotionStrength = 0;
    }
  }

  class Player {
    constructor() {
      this.health = playerMaxHealth;
      this.maxHealth = playerMaxHealth;
      this.attack = 10;
      this.defense = 10;
      this.gold = 0;
      this.combatPopUp = true;
    };

    isDead() {
      return (this.health < 1);
    }

    takeDamage(damageTaken) {
      this.health = Math.max(this.health - damageTaken, 0);
    }

    drinkPotion(healthPotionStrength) {
      this.health = Math.min(this.health + healthPotionStrength, this.maxHealth);
    }
  }


  /*
  =================================
     Hooking up pages & buttons
  =================================
  */

  const gameScreen = {
    welcome: $("#welcome-screen"),
    home: $("#home-screen"),
    shop: $("#shop-screen"),
    map: $("#map-screen"),
    combat: $("#combat-screen"),
    victory: $("#victory-screen"),
    menu: $("#menu-screen"),
    popupBackground: $("#pop-up-background"),
  }

  const popups = {
    infoBackground: $("#info-screen"),
    infoWelcome: $(".info-welcome"),
    infoGold: $(".info-gold"),
    infoLevel: $(".info-level"),
    infoCombat: $(".info-combat"),

    goldDrop: $("#goldDrop"),
    goldDropText: $("#gold-drop-text"),
    potionDrop: $("#potionDrop"),
    potionDropText: $("#potion-drop-text"),
    died: $("#died"),
    winFight: $("#winFight"),

    actionTextContainer: $(".action-text-container"),
    damageTakenContainer: $(".damage-taken-text-container"),
  }

  const gameButton = {
    startGame: $("#startGame"),
    infoOk: $(".info-ok"),
    menu: $(".menu-button"),
    newGame: $("#new-game"),
    closeMenu: $("#close-menu"),
    toShop: $("#home-to-shop"),
    levelUpAttack: $("#upgrade-attack"),
    levelUpDefence: $("#upgrade-defence"),
    homeToMap: $("#home-to-map"),
    shopToHome: $("#shop-to-home"),
    mapToHome: $("#map-to-home"),
    startCombat: $(".start-combat"),
    enemy1Button: $("#enemy-1-button"),
    enemy2Button: $("#enemy-2-button"),
    enemy3Button: $("#enemy-3-button"),
    enemy4Button: $("#enemy-4-button"),
    fleeFight: $(".flee-fight"),
    attackButton: $(".attack-button"),
    defendButton: $(".defend-button"),
  }

  const statField = {
    playerHealthText: $(".playerHealth"),
    playerMaxHealthText: $(".playerMaxHealth"),
    playerAttack: $(".playerAttack"),
    playerDefence: $(".playerDefense"),
    playerGold: $(".playerGold"),
    roundCountText: $("#round-counter"),
    enemyHealthText: $(".enemyHealth"),
    enemyMaxHealthText: $(".enemyMaxHealth"),
    enemyAttack: $(".enemyAttack"),
    enemyDefence: $(".enemyDefense"),
    enemyGold: $(".enemyGold"),
    heroineActionText: $(".heroine-action"),
    heroineDamageTaken: $(".heroine-damage-taken"),
    enemyActionText: $(".enemy-action"),
    enemyDamageTaken: $(".enemy-damage-taken"),
  }




  hideAllScreens();
  gameScreen.welcome.show();


  function hideAllScreens() {
    gameScreen.welcome.hide();
    gameScreen.home.hide();
    gameScreen.shop.hide();
    gameScreen.map.hide();
    gameScreen.combat.hide();
    gameScreen.victory.hide();
    gameScreen.menu.hide();
    gameScreen.popupBackground.hide();

    popups.infoBackground.hide();
    popups.infoWelcome.hide();
    popups.infoGold.hide();
    popups.infoLevel.hide();
    popups.infoCombat.hide();

    popups.goldDrop.hide();
    popups.potionDrop.hide();
    popups.died.hide();
    popups.winFight.hide();
  }

  function updatePlayerStats() {
    statField.playerHealthText.text(player.health + " / " + player.maxHealth);
    statField.playerAttack.text(player.attack);
    statField.playerDefence.text(player.defense);
    statField.playerGold.text(player.gold);
  }

  /*
  =================================
    Button Functions
  =================================
  */


  // ----- Nagivation buttons


  gameButton.startGame.click(function () {
    player = new Player();
    updatePlayerStats();
    hideAllScreens();
    gameScreen.home.show();
    popups.infoBackground.show();
    popups.infoWelcome.show();
  })

  gameButton.infoOk.click(function () {
    $(this).parents(".info-box").hide();
    popups.infoBackground.hide();
    popups.infoWelcome.hide();
  })

  gameButton.menu.click(function () {
    gameScreen.menu.toggle();
  });

  gameButton.newGame.click(function () {
    hideAllScreens();
    gameScreen.welcome.show();
  })

  gameButton.closeMenu.click(function () {
    gameScreen.menu.hide();
  })

  gameButton.toShop.click(function () {
    hideAllScreens();
    gameScreen.shop.show();
  })

  gameButton.homeToMap.click(function () {
    hideAllScreens();
    gameScreen.map.show();


  })

  gameButton.shopToHome.click(function () {
    hideAllScreens();
    gameScreen.home.show();
  })

  gameButton.mapToHome.click(function () {
    hideAllScreens();
    gameScreen.home.show();
  })

  gameButton.startCombat.click(function () {
    hideAllScreens();
    gameScreen.combat.show();
    if (player.combatPopUp) {
      popups.infoBackground.show();
      popups.infoCombat.show();
      player.combatPopUp = false;
    }

    roundCount = 0;
    combatUI.roundCounterAnimation(roundCount);

  })


  // ----- Shop Buttons

  gameButton.levelUpAttack.click(function () {
    if (player.gold > 25) {
      if (player.attack < 90) {
        player.attack += 5;
        player.gold -= 10;
        updatePlayerStats();
      } else {
        popups.infoBackground.show();
        popups.infoLevel.show();
      }
    } else {
      popups.infoBackground.show();
      popups.infoGold.show();
    }
  })

  gameButton.levelUpDefence.click(function () {
    if (player.gold > 25) {
      if (player.defense < 75) {
        player.defense += 5;
        player.gold -= 10;
        updatePlayerStats();
      } else {
        popups.infoBackground.show();
        popups.infoLevel.show();
      }
    } else {
      popups.infoBackground.show();
      popups.infoGold.show();
    }


  })


  // ----- Enemy Generating Buttons

  gameButton.enemy1Button.click(function () {
    currentEnemy = new Enemy1();
    updateEnemyStats();
  })

  gameButton.enemy2Button.click(function () {
    currentEnemy = new Enemy2();
    updateEnemyStats();
  })

  gameButton.enemy3Button.click(function () {
    currentEnemy = new Enemy3();
    updateEnemyStats();
  })

  gameButton.enemy4Button.click(function () {
    currentEnemy = new Enemy4();
    updateEnemyStats();
  })

  function updateEnemyStats() {
    statField.enemyHealthText.text(currentEnemy.health + " / " + currentEnemy.maxHealth);
    statField.enemyAttack.text(currentEnemy.attack);
    statField.enemyDefence.text(currentEnemy.defense);
    statField.enemyGold.text(currentEnemy.gold);
  }

  //----- COMBAT



  // Combat buttons

  gameButton.attackButton.click(function () {
    resolveCombat(true)
  })

  gameButton.defendButton.click(function () {
    resolveCombat(false)
  })

  gameButton.fleeFight.click(function () {
    hideAllScreens();
    gameScreen.map.show();
  })

  // Combat function

  //Putting animations into a class separate from the core mechanics
  class CombatUI {
    constructor() {

    }

    // Toggling buttons on the combat screen
    combatButtonsVisible(desiredVisible) {
      if (desiredVisible) {
        gameButton.defendButton.removeAttr('disabled');
        gameButton.attackButton.removeAttr('disabled');
        gameButton.fleeFight.removeAttr('disabled');
      } else {
        gameButton.defendButton.attr('disabled', 'disabled');
        gameButton.attackButton.attr('disabled', 'disabled');
        gameButton.fleeFight.attr('disabled', 'disabled');
      }
    }

    //Function for setting and animating player & enemy actions
    animateActions(isPlayerAttacking, isEnemyAttacking) {

      // Setting action text
      if (isPlayerAttacking) {
        statField.heroineActionText.text("Attack!")
      } else {
        statField.heroineActionText.text("Defend!")
      }

      if (isEnemyAttacking) {
        statField.enemyActionText.text("Attack!")
      } else {
        statField.enemyActionText.text("Defend!")
      }

      // Animate action text
      return popups.actionTextContainer
        .animate({
          'opacity': 1,
        }, 700)
        .delay(300)
        .animate({
          'opacity': 0
        }, function () {

          // remove attributes
          popups.actionTextContainer.removeAttr('style');
        })
        .promise()
    }

    // Function for setting and animating player & enemy damage taken
    animateDamage(playerDamageTaken, enemyDamageTaken) {

      // Setting damage taken text
      statField.heroineDamageTaken.text("- " + playerDamageTaken)
      statField.enemyDamageTaken.text("- " + enemyDamageTaken)

      // Animate damage taken text
      return popups.damageTakenContainer
        .animate({
          'opacity': 1,
          'top': '35%',
        }, 700)
        .animate({
          'opacity': 0
        }, function () {

          // remove attributes
          popups.damageTakenContainer.removeAttr('style');
        })
        .promise()
    }

    // Gold drop function if player wins fight
    goldDropAnimation(gold) {

      //change the game screen
      gameScreen.popupBackground.show();
      popups.goldDrop.show();

      //Sets the gold number for the animation
      popups.goldDropText.text("+ " + gold);


      var promise = new Promise(function (resolve, reject) {

        //Remove any existing event handlers and then adds one
        popups.goldDrop.off("click")
        popups.goldDrop.on("click", function () {

          //Animates the gold
          popups.goldDropText
            .animate({
              'opacity': 1,
              'top': '30%',
            }, 800)
            .animate({
              'opacity': 0
            }, 200, function () {

              //reset the animation
              popups.goldDropText.removeAttr('style')
              popups.goldDrop.hide();
              gameScreen.popupBackground.hide();
              resolve()
            })
        })
      })
      return promise;
    }

    potionDropAnimation(healthPotionStrength) {
      //change the game screen
      gameScreen.popupBackground.show();
      popups.potionDrop.show();

      //Sets the health number for the animation
      popups.potionDropText.text("+ " + healthPotionStrength);

      var promise = new Promise(function (resolve, reject) {

        //Remove any existing event handlers and then adds one
        popups.potionDrop.off("click")
        popups.potionDrop.on("click", function () {

          //Animates the health
          popups.potionDropText
            .animate({
              'opacity': 1,
              'top': '30%',
            }, 800)
            .animate({
              'opacity': 0
            }, 200, function () {

              //reset the animation
              popups.potionDropText.removeAttr('style')
              popups.potionDrop.hide();
              gameScreen.popupBackground.hide();
              resolve()
            })
        })
      })
      return promise;
    }

    died() {
      gameScreen.popupBackground.show();
      popups.died.show();

      var promise = new Promise(function (resolve, reject) {
        popups.died.off("click")
        popups.died.on("click", function () {
          hideAllScreens();
          gameScreen.welcome.show();
          resolve()
        })
      })
      return promise;
    }

    roundCounterAnimation(roundCount) {
      statField.roundCountText.text("Round " + (roundCount + 1));

      statField.roundCountText.animate({
        'opacity': 0.7,
        'fontSize': 40,
      }, 900).animate({
        'opacity': 0,
      }, 200, function () {
        statField.roundCountText.removeAttr('style')

        //eneble buttons
        combatUI.combatButtonsVisible(true);
      })
    };

  }


  var combatUI = new CombatUI();

  function resolveCombat(isPlayerAttacking) {

    //disabling buttons
    combatUI.combatButtonsVisible(false);

    // Using EnemyBase function to define whether enemy is attacking
    var isEnemyAttacking = currentEnemy.isEnemyAttacking(roundCount);

    // Scoped Variables
    var playerDamageTaken = 0;
    var enemyDamageTaken = 0;


    // Resolving the combat effects
    if (isPlayerAttacking) {
      if (isEnemyAttacking) {
        enemyDamageTaken = player.attack
        playerDamageTaken = currentEnemy.attack
      } else {
        enemyDamageTaken = Math.max(player.attack - currentEnemy.defense, 0);
      }
    } else {
      if (isEnemyAttacking) {
        playerDamageTaken = Math.max(currentEnemy.attack - player.defense, 0);
      }
    }

    //Player & Enemy take damage
    currentEnemy.takeDamage(enemyDamageTaken);
    player.takeDamage(playerDamageTaken);

    // Animate action text for enemy and heroine
    combatUI.animateActions(isPlayerAttacking, isEnemyAttacking)

      //Animate damage taken text
      .then(function () {
        return combatUI.animateDamage(playerDamageTaken, enemyDamageTaken)
      })

      .then(function () {

        // Update enemy / player stats after the animation
        updateEnemyStats();
        updatePlayerStats();

        //If you die
        if (player.isDead()) {
          combatUI.died();

          //If your enemy dies
        } else if (currentEnemy.isDead()) {
          gameScreen.popupBackground.show();
          popups.goldDrop.show();

          //Gold Drop
          player.gold += currentEnemy.gold;
          combatUI.goldDropAnimation(currentEnemy.gold)
            .then(function () {
              updatePlayerStats();

              // If potion
              if (currentEnemy.healthPotionStrength > 0) {
                player.drinkPotion(currentEnemy.healthPotionStrength);
                return combatUI.potionDropAnimation(currentEnemy.healthPotionStrength)
              }
            })

            //re-setting screens
            .then(function () {
              updatePlayerStats();
              gameScreen.combat.hide();
              gameScreen.map.show();
            })

          //If both alive, continue combat
        } else {
          roundCount++;
          combatUI.roundCounterAnimation(roundCount);
        };
      })
  }
  // End Combat



  // Clicking on the "you died" popup
  popups.died.click(function () {
    gameScreen.welcome.show();
    gameScreen.combat.hide();
    gameScreen.popupBackground.hide();
    popups.died.hide();
  });



});