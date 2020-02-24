$(() => {

  /*
  =================================
      Global Variables
  =================================
  */

  var roundCount;
  var player;
  var currentEnemy;
  var shop;



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
    stats: $("#stat-screen"),
    menu: $("#menu-screen"),
  }

  const gameButton = {
    startGame: $("#startGame"),
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



  /*
  =================================
      Initializing Classes
  =================================
  */

  const infoScreen = new InfoScreen();
  const combatUI = new CombatUI(gameButton, infoScreen);



  hideAllScreens();
  gameScreen.welcome.show();



  function hideAllScreens() {
    gameScreen.welcome.hide();
    gameScreen.home.hide();
    gameScreen.shop.hide();
    gameScreen.map.hide();
    gameScreen.combat.hide();
    gameScreen.victory.hide();
    gameScreen.stats.hide();
    gameScreen.menu.hide();


    infoScreen.hide();

  }


  /*
  =================================
    Button Functions
  =================================
  */


  // ----- Nagivation buttons


  gameButton.startGame.click(() => {
    player = new Player();
    shop = new Shop(infoScreen, combatUI);
    combatUI.updatePlayerStats(player);
    hideAllScreens();
    gameScreen.home.show();
    gameScreen.stats.show();
    infoScreen.showWelcome();
  })

  gameButton.menu.click(() => {
    gameScreen.menu.toggle();
  });

  gameButton.newGame.click(() => {
    hideAllScreens();
    gameScreen.welcome.show();
  })

  gameButton.closeMenu.click(() => {
    gameScreen.menu.hide();
  })

  gameButton.toShop.click(() => {
    hideAllScreens();
    gameScreen.shop.show();
    gameScreen.stats.show();
    shop.updateShopText();
  })

  gameButton.homeToMap.click(() => {
    hideAllScreens();
    gameScreen.map.show();
    gameScreen.stats.show();

  })

  gameButton.shopToHome.click(() => {
    hideAllScreens();
    gameScreen.home.show();
    gameScreen.stats.show();
  })

  gameButton.mapToHome.click(() => {
    hideAllScreens();
    gameScreen.home.show();
    gameScreen.stats.show();
  })

  gameButton.startCombat.click(() => {
    hideAllScreens();
    shop.updatePlayerImage(player);
    gameScreen.combat.show();
    gameScreen.stats.show();
    combatUI.showEnemyStatContainer();
    combatUI.firstCombatPopup()
      .then(() => {
        roundCount = 0;
        combatUI.roundCounterAnimation(roundCount);
      })
  })


  // ----- Shop Buttons

  gameButton.levelUpAttack.click(() => {
    shop.levelUpAttack(player);
  })

  gameButton.levelUpDefence.click(() => {
    shop.levelUpDefence(player);
  })


  // ----- Enemy Generating Buttons

  gameButton.enemy1Button.click(() => {
    currentEnemy = new Enemy1();
    combatUI.updateEnemyStats(currentEnemy);
    combatUI.updateEnemyImage(currentEnemy);
  })

  gameButton.enemy2Button.click(() => {
    currentEnemy = new Enemy2();
    combatUI.updateEnemyStats(currentEnemy);
    combatUI.updateEnemyImage(currentEnemy);
  })

  gameButton.enemy3Button.click(() => {
    currentEnemy = new Enemy3();
    combatUI.updateEnemyStats(currentEnemy);
    combatUI.updateEnemyImage(currentEnemy);
  })

  gameButton.enemy4Button.click(() => {
    currentEnemy = new Enemy4();
    combatUI.updateEnemyStats(currentEnemy);
    combatUI.updateEnemyImage(currentEnemy);
  })


  //----- COMBAT



  // Combat buttons

  gameButton.attackButton.click(() => {
    resolveCombat(true)
  })

  gameButton.defendButton.click(() => {
    resolveCombat(false)
  })

  gameButton.fleeFight.click(() => {
    hideAllScreens();
    combatUI.hideEnemyStatContainer();
    gameScreen.map.show();
    gameScreen.stats.show();
  })

  // Combat function


  function resolveCombat(isPlayerAttacking) {
    //To inject: combatUI / currentEnemy / player / (roundCount)

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
        enemyDamageTaken = Math.max(player.attack - currentEnemy.defence, 0);
      }
    } else {
      if (isEnemyAttacking) {
        playerDamageTaken = Math.max(currentEnemy.attack - player.defence, 0);
      }
    }

    //Player & Enemy take damage
    currentEnemy.takeDamage(enemyDamageTaken);
    player.takeDamage(playerDamageTaken);

    // Animate action text for enemy and heroine
    combatUI.animateActions(isPlayerAttacking, isEnemyAttacking)

      //Animate damage taken text
      .then(() => {
        return combatUI.animateDamage(playerDamageTaken, enemyDamageTaken)
      })

      .then(() => {

        // Update enemy / player stats after the animation
        combatUI.updateEnemyStats(currentEnemy);
        combatUI.updatePlayerStats(player);

        //If you die
        if (player.isDead()) {
          gameScreen.stats.hide();

          combatUI.hideEnemyStatContainer();
          combatUI.died().then(() => {
            hideAllScreens();
            gameScreen.welcome.show();
          });

          //If your enemy dies
        } else if (currentEnemy.isDead()) {
          if (currentEnemy.level == 4) {
            gameScreen.stats.hide();
            combatUI.hideEnemyStatContainer();

            combatUI.youWin().then(() => {
              hideAllScreens();
              gameScreen.victory.show();
            })
          } else {

            //Gold Drop
            player.gold += currentEnemy.gold;
            combatUI.goldDropAnimation(currentEnemy.gold)
              .then(() => {
                combatUI.updatePlayerStats(player);

                // If potion
                if (currentEnemy.healthPotionStrength > 0) {
                  player.drinkPotion(currentEnemy.healthPotionStrength);
                  return combatUI.potionDropAnimation(currentEnemy.healthPotionStrength)
                }
              })

              //re-setting screens
              .then(() => {
                combatUI.updatePlayerStats(player);
                combatUI.hideEnemyStatContainer();
                hideAllScreens();
                gameScreen.map.show();
                gameScreen.stats.show();
              })
          }

          //If both alive, continue combat
        } else {
          roundCount++;
          combatUI.roundCounterAnimation(roundCount);
        };
      })
  }
  // End Combat

});