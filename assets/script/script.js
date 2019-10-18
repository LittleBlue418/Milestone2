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
  }

  class Enemy1 extends EnemyBase {
    constructor() {

      var health = randomInteger(30, 40);
      var attackPattern = [true, false, true];

      super(health, attackPattern);

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
    };

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
    goldDrop: $("#goldDrop"),
    goldDropText: $("#gold-drop-text"),
    potionDrop: $("#potionDrop"),
    potionDropText: $("#potion-drop-text"),
    died: $("#died"),
    winFight: $("#winFight"),
    roundCounter: $(".round-counter-container")
  }

  const gameButton = {
    startGame: $("#startGame"),
    menu: $(".menu-button"),
    toShop: $("#home-to-shop"),
    homeToMap: $("#home-to-map"),
    shopToHome: $("#shop-to-home"),
    mapToHome: $("#map-to-home"),
    closeMenu: $("#close-menu"),
    fleeFight: $("#flee-fight"),
    startCombat: $(".start-combat"),
  }

  const statField = {
    playerHealthText: $(".playerHealth"),
    playerMaxHealthText: $(".playerMaxHealth"),
    playerAttack: $(".playerAttack"),
    playerDefence: $(".playerDefense"),
    playerGold: $(".playerGold"),
    roundCountText: $("#round-counter"),
  }

  function updatePlayerStats () {
    statField.playerHealthText.text(player.health);
    statField.playerMaxHealthText.text(player.maxHealth);
    statField.playerAttack.text(player.attack);
    statField.playerDefence.text(player.defense);
    statField.playerGold.text(player.gold);
  }

  gameScreen.welcome.show();
  gameScreen.home.hide();
  gameScreen.shop.hide();
  gameScreen.map.hide();
  gameScreen.combat.hide();
  gameScreen.victory.hide();
  gameScreen.menu.hide();
  gameScreen.popupBackground.hide();

  popups.goldDrop.hide();
  popups.potionDrop.hide();
  popups.died.hide();
  popups.winFight.hide();
  popups.roundCounter.hide();

  /*
  =================================
    Button Functions
  =================================
  */


  //Nagivation buttons


  gameButton.startGame.click(function () {
    player = new Player();
    updatePlayerStats();

    gameScreen.welcome.hide();
    gameScreen.home.show();
  })

  gameButton.menu.click(function () {
    gameScreen.menu.toggle();
  });

  gameButton.closeMenu.click(function () {
    gameScreen.menu.hide();
  })

  gameButton.toShop.click(function () {
    gameScreen.show.hide();
    gameScreen.shop.show();
  })

  gameButton.homeToMap.click(function () {
    gameScreen.home.hide();
    gameScreen.map.show();
  })

  gameButton.shopToHome.click(function () {
    gameScreen.show.hide();
    gameScreen.home.show();
  })

  gameButton.mapToHome.click(function () {
    gameScreen.map.hide();
    gameScreen.home.show();
  })

  gameButton.fleeFight.click(function () {
    gameScreen.combat.hide();
    gameScreen.home.show();
  })

  gameButton.startCombat.click(function () {
    gameScreen.map.hide();
    gameScreen.combat.show();

    popups.roundCounter.show();
    roundCount = 0;
    statField.roundCountText.text("Round " + (roundCount + 1));

    roundCounterAnimation($(".pop-text"));

  })



  // ----- SHOP

  $(".levelUpAttack").click(function () {
    if (player.gold > 25) {
      if (player.attack < 90) {
        player.attack += 5;
        player.gold -= 10;
        $("#playerAttack").text(player.attack);
        $("#playerGold").text(player.gold);
      } else {
        alert("You have reached manimum attack level")
      }
    } else {
      alert("You do not have enough gold to level up")
    }
  })

  $(".levelUpDefence").click(function () {
    if (player.gold > 25) {
      if (player.defense < 75) {
        player.defense += 5;
        player.gold -= 10;
        $("#playerDefense").text(player.defense);
        $("#playerGold").text(player.gold);
      } else {
        alert("You have reached maximum defense level")
      }
    } else {
      alert("You do not have enough gold to level up")
    }


  })


  //----- COMBAT



  //Enemy variables & objects





  //Enemy generation

  $(".enemy1Button").click(function () {
    currentEnemy = new Enemy1();
    updateEnemyStats(currentEnemy);
  })

  $(".enemy2Button").click(function () {
    currentEnemy = new Enemy2();
    updateEnemyStats(currentEnemy);
  })

  $(".enemy3Button").click(function () {
    currentEnemy = new Enemy3();
    updateEnemyStats(currentEnemy);
  })

  $(".enemy4Button").click(function () {
    currentEnemy = new Enemy4();
    updateEnemyStats(currentEnemy);
  })

  function updateEnemyStats(enemy) {
    $("#enemyHealth").text(enemy.health);
    $("#enemyHealthMax").text(enemy.health);
    $("#enemyAttack").text(enemy.attack);
    $("#enemyDefense").text(enemy.defense);
    $("#enemyGold").text(enemy.gold);
  }





  // Combat buttons

  $(".fleeButton").click(function () {
    alert("Are you sure?")
    statContainer.enemy.hide();
    statContainer.roundCounter.hide();
  })

  $(".attackButton").click(function () {
    resolveCombat(true)
  })

  $('.defenceButton').click(function () {

    resolveCombat(false)

  })



  // Combat function

  function resolveCombat(isPlayerAttacking) {
    //disabling buttons
    $('.defenceButton').attr('disabled', 'disabled');
    $('.attackButton').attr('disabled', 'disabled');
    $('.fleeButton').attr('disabled', 'disabled');

    console.log(currentEnemy.potionDrop)

    // Picking enemy action from pre-set pattern
    const isEnemyAttacking = currentEnemy.isEnemyAttacking(roundCount);

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


    currentEnemy.takeDamage(enemyDamageTaken);
    player.health = Math.max(player.health - playerDamageTaken, 0);



    // Setting action text for enemy and heroine
    if (isPlayerAttacking) {
      $(".heroine-action").text("Attack!")
    } else {
      $(".heroine-action").text("Defend!")
    }
    if (isEnemyAttacking) {
      $(".enemy-action").text("Attack!")
    } else {
      $(".enemy-action").text("Defend!")
    }
    $(".heroine-damage-taken").text("- " + playerDamageTaken)
    $(".enemy-damage-taken").text("- " + enemyDamageTaken)



    // Animate action text for enemy and heroine
    $(".action-text-container")
      .animate({
        'opacity': 1,
      }, 700)
      .delay(300)
      .animate({
        'opacity': 0
      }, function () {
        $("#enemyHealth").text(currentEnemy.health);
        $("#playerHealth").text(player.health);
        $(".action-text-container").removeAttr('style');

        $(".damage-taken-text-container")
          .animate({
            'opacity': 1,
            'top': '20%',
          }, 700)
          .animate({
            'opacity': 0
          }, function () {
            $(".damage-taken-text-container").removeAttr('style')

            //If you die
            if (player.health < 1) {
              statContainer.roundCounter.hide();
              gameScreen.popup.show();
              popups.died.show();
              player.health = 0;
              $('#playerHealth').val(player.health);

            } else if (currentEnemy.health < 1) {
              statContainer.roundCounter.hide();
              gameScreen.popup.show();
              popups.goldDrop.show();
              currentEnemy.health = 0;
              player.gold += currentEnemy.gold;
              $("#playerGold").text(player.gold);
              $(".gold-drop-text").text("+ " + currentEnemy.gold);
              $(".gold-drop-text")
                .animate({
                  'opacity': 1,
                  'top': '30%',
                }, 800)
                .animate({
                  'opacity': 0
                }, 200, function () {
                  $(".gold-drop-text").removeAttr('style')
                })
            } else {
              // Incrementing and updating round counter
              roundCount++;
              $("#round-counter-span").text(roundCount + 1);
              roundCounterAnimation($(".pop-text"));

            };
          })


        //Combat end


      })

    // End battle
    console.log($("#goldDrop"))
  }

  $("#goldDrop").click(function () {
    if (currentEnemy.healthPotionStrength > 0) {
      popups.goldDrop.hide();
      popups.potionDrop.show();

      player.health = Math.min(player.health + currentEnemy.healthPotionStrength, playerMaxHealth);

      $("#playerHealth").text(player.health)
      $("#playerGold").text(player.gold);
      $(".potion-drop-text").text("+ " + currentEnemy.healthPotionStrength);
      $(".potion-drop-text")
        .animate({
          'opacity': 1,
          'top': '30%',
        }, 800)
        .animate({
          'opacity': 0
        }, 200, function () {
          $(".potion-drop-text").removeAttr('style')
        })

    } else {
      popups.goldDrop.hide();
      statContainer.enemy.hide();
      gameScreen.popup.hide();
      popups.goldDrop.hide();
      gameScreen.combat.hide();
      gameScreen.map.show();
    }
  });



  $("#died").click(function () {
    gameScreen.welcome.show();
    gameScreen.combat.hide();
    statContainer.enemy.hide();
    statContainer.player.hide();
    gameScreen.popup.hide();
    popups.died.hide();
    initializePlayer();
  });

  $("#potionDrop").click(function () {
    statContainer.enemy.hide();
    gameScreen.popup.hide();
    popups.potionDrop.hide();
    gameScreen.combat.hide();
    gameScreen.map.show();
  });

  function roundCounterAnimation(targetElement) {
    targetElement.animate({
      'opacity': 0.7,
      'fontSize': 40,
    }, 900).animate({
      'opacity': 0,
    }, 200, function () {
      targetElement.removeAttr('style')

      //eneble buttons
      $('.defenceButton').removeAttr('disabled');
      $('.attackButton').removeAttr('disabled');
      $('.fleeButton').removeAttr('disabled');
    })
  };

  // TEXT POPS








});