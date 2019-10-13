//Global objects and variables
var player = {
  health: 1000,
  attack: 10,
  defense: 10,
  gold: 0,
}

var roundCount = 0;
var healthPotionStrength = 0;

//On load function
$(function () {

  //Fetching screens & elements
  var gameScreen = {
    welcome: $("#welcome-screen"),
    home: $("#home-screen"),
    combat: $("#combat-screen"),
    victory: $("#victory-screen"),
    map: $("#map-screen"),
    shop: $("#shop-screen"),
    menu: $("#menu-screen"),
    popup: $("#pop-up-container"),
  }

  var popups = {
    winFight: $("#winFight"),
    died: $("#died"),
    potionDrop: $("#potionDrop"),
    goldDrop: $("#goldDrop"),
    menu: $("#menu-container"),
  }



  var statContainer = {
    player: $(".player-stats-container"),
    enemy: $(".enemy-stats-container"),
    roundCounter: $(".round-counter-container")
  }

  //Hiding / Showing
  gameScreen.welcome.show();
  gameScreen.home.hide();
  gameScreen.combat.hide();
  gameScreen.victory.hide();
  gameScreen.map.hide();
  gameScreen.shop.hide();
  gameScreen.menu.hide();
  gameScreen.popup.hide();

  statContainer.player.hide();
  statContainer.enemy.hide();
  statContainer.roundCounter.hide();

  popups.menu.hide();
  popups.winFight.hide();
  popups.died.hide();
  popups.potionDrop.hide();
  popups.goldDrop.hide();

  //Nagivation buttons

  $("#welcome-screen .toHomeButton").click(function () {
    $("#playerHealth").text(player.health);
    $("#playerAttack").text(player.attack);
    $("#playerDefense").text(player.defense);
    $("#playerGold").text(player.gold);
  })

  $(".toHomeButton").click(function () {
    $(this).parents(".game-screen").hide();
    gameScreen.home.show();
    statContainer.player.show();
  })

  $(".toShopButton").click(function () {
    $(this).parents(".game-screen").hide();
    gameScreen.shop.show();
  })

  $(".toMapButton").click(function () {
    $(this).parents(".game-screen").hide();
    gameScreen.map.show();
  })

  $(".toCombatButton").click(function () {
    $(this).parents(".game-screen").hide();
    gameScreen.combat.show();
    statContainer.enemy.show();
    statContainer.roundCounter.show();
    roundCount = 0;
    $("#round-counter-span").text(roundCount + 1);

    roundCounterAnimation($(".pop-text"));

  })


  $(".menuButton").click(function () {
    console.log("menu button clicked")
    $("#menu-container").toggle();
  });

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
  class Enemy {
    constructor(health, attack, defense, gold) {
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.gold = gold;
    }
  };

  var enemyPotionDrop;
  var enemyAttackState;


  //Enemy generation

  $(".enemy1Button").click(function () {
    enemyPotionDrop = 0;
    healthPotionStrength = 10;

    enemyPotionDrop = Math.floor((Math.random() * 2 + 0));
    enemyAttackState = [true, false, true];

    currentEnemy = new Enemy(
      Math.floor((Math.random() * (40 - 30) + 30)),
      Math.floor((Math.random() * (15 - 10) + 10)),
      Math.floor((Math.random() * (15 - 10) + 10)),
      Math.floor((Math.random() * (10 - 5) + 5))
    );

    $("#enemyHealth").text(currentEnemy.health);
    $("#enemyHealthMax").text(currentEnemy.health);
    $("#enemyAttack").text(currentEnemy.attack);
    $("#enemyDefense").text(currentEnemy.defense);
    $("#enemyGold").text(currentEnemy.gold);


  })

  $(".enemy2Button").click(function () {
    enemyPotionDrop = 0;
    healthPotionStrength = 20;

    enemyPotionDrop = Math.floor((Math.random() * 3 + 0));
    enemyAttackState = [true, false, true, false];

    currentEnemy = new Enemy(
      Math.floor((Math.random() * (50 - 45) + 45)),
      Math.floor((Math.random() * (30 - 25) + 25)),
      Math.floor((Math.random() * (40 - 35) + 35)),
      Math.floor((Math.random() * (30 - 25) + 25))
    );

    $("#enemyHealth").text(currentEnemy.health);
    $("#enemyHealthMax").text(currentEnemy.health);
    $("#enemyAttack").text(currentEnemy.attack);
    $("#enemyDefense").text(currentEnemy.defense);
    $("#enemyGold").text(currentEnemy.gold);
  })

  $(".enemy3Button").click(function () {
    enemyPotionDrop = 0;
    healthPotionStrength = 30;

    enemyPotionDrop = Math.floor((Math.random() * 4 + 0));
    enemyAttackState = [true, false, true, true, false];

    currentEnemy = new Enemy(
      Math.floor((Math.random() * (60 - 55) + 55)),
      Math.floor((Math.random() * (55 - 50) + 50)),
      Math.floor((Math.random() * (45 - 40) + 40)),
      Math.floor((Math.random() * (50 - 45) + 45))
    );

    $("#enemyHealth").text(currentEnemy.health);
    $("#enemyHealthMax").text(currentEnemy.health);
    $("#enemyAttack").text(currentEnemy.attack);
    $("#enemyDefense").text(currentEnemy.defense);
    $("#enemyGold").text(currentEnemy.gold);
  })

  $(".enemy4Button").click(function () {
    enemyPotionDrop = 0;

    enemyPotionDrop = Math.floor((Math.random() * 5 + 0));
    enemyAttackState = [true, false, true, true, true, false];

    currentEnemy = new Enemy(100, 80, 80, 100);



    $("#enemyHealth").text(currentEnemy.health);
    $("#enemyHealthMax").text(currentEnemy.health);
    $("#enemyAttack").text(currentEnemy.attack);
    $("#enemyDefense").text(currentEnemy.defense);
    $("#enemyGold").text(currentEnemy.gold);
  })

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

    console.log(enemyPotionDrop)

    // Picking enemy action from pre-set pattern
    var isEnemyAttacking = enemyAttackState[roundCount % enemyAttackState.length];

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


    currentEnemy.health = Math.max(currentEnemy.health - enemyDamageTaken, 0);
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
    if (enemyPotionDrop == 1) {
      popups.goldDrop.hide();
      popups.potionDrop.show();

      reCalculatePlayerHealth(player.health, healthPotionStrength)

      $("#playerHealth").text(player.health)
      $("#playerGold").text(player.gold);
      $(".potion-drop-text").text("+ " + healthPotionStrength);
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

  function reCalculatePlayerHealth(playerHealth, healthPotion) {
    if (playerHealth < 100) {
      var remainder = 100 - playerHealth;
      if (healthPotion < remainder) {
        player.health += healthPotion
      } else if (healthPotion > remainder) {
        player.health += remainder
      }
    }
  }

  $("#died").click(function () {
    gameScreen.welcome.show();
    gameScreen.combat.hide();
    statContainer.enemy.hide();
    statContainer.player.hide();
    gameScreen.popup.hide();
    popups.died.hide();
    player.health = 100;
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