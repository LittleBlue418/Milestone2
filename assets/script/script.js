//Global objects and variables
var player = {
  health: 1000,
  attack: 5,
  defense: 5,
  gold: 100
}



//On load function
$(function () {

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
  }

  var statContainer = {
    player: $(".player-stats-container"),
    enemy: $(".enemy-stats-container"),
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
  popups.winFight.hide();
  popups.died.hide();
  popups.potionDrop.hide();
  popups.goldDrop.hide();


  $("#welcome-screen .toHomeButton").click(function () {
    $("#playerHealth").text(player.health);
    $("#playerAttack").text(player.attack);
    $("#playerDefense").text(player.defense);
    $("#playerGold").text(player.gold);
  })

  //Nagivation buttons
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

  })





  //Shop Buttons
  $(".levelUpAttack").click(function () {
    if (player.gold > 9) {
      player.attack += 10;
      player.gold -= 10;
      $("#playerAttack").text(player.attack);
      $("#playerGold").text(player.gold);

    }
  })

  $(".levelUpDefence").click(function () {
    if (player.gold > 9) {
      player.defense += 10;
      player.gold -= 10;
      $("#playerDefense").text(player.defense);
      $("#playerGold").text(player.gold);

    }
  })







  //Combat buttons




  //Enemy object
  class Enemy {
    constructor(health, attack, defense, gold) {
      this.health = health;
      this.attack = attack;
      this.defense = defense;
      this.gold = gold;
    }
  };

  //Enemy patterns
  var enemyPotionDrop;

  var enemy1Attacking = [true, false, true];
  var enemy1PotionDrop = Math.floor((Math.random() * 3 + 0));

  var enemy2Attacking = [true, false, true, false];
  var enemy3Attacking = [true, false, true, true, false];
  var enemy4Attacking = [true, false, true, true, true, false];

  var roundCounter = 0;
  var currentEnemy1;
  //Combat

  $(".mapButton1").click(function () {
    roundCounter = 0;
    enemyPotionDrop = Math.floor((Math.random() * 3 + 0));

    currentEnemy1 = new Enemy(
      Math.floor((Math.random() * (10 - 5) + 5)),
      Math.floor((Math.random() * (10 - 5) + 5)),
      Math.floor((Math.random() * (10 - 5) + 5)),
      Math.floor((Math.random() * (10 - 5) + 5))
    );
    var currentEnemy1MaxHealth = currentEnemy1.health;

    $("#enemyHealth").text(currentEnemy1.health);
    $("#enemyHealthMax").text(currentEnemy1MaxHealth);
    $("#enemyAttack").text(currentEnemy1.attack);
    $("#enemyDefense").text(currentEnemy1.defense);
    $("#enemyGold").text(currentEnemy1.gold);
  })

  $(".fleeButton").click(function () {
    alert("Are you sure?")
    statContainer.enemy.hide();
  })

  $(".attackButton").click(function () {
    resolveCombat(true)
  })

  $('.defenceButton').click(function () {
    resolveCombat(false)
  })

  function resolveCombat(isPlayerAttacking) {


    var isEnemyAttacking = enemy1Attacking[roundCounter % enemy1Attacking.length];
    roundCounter++;

    console.log(roundCounter);
    console.log(isEnemyAttacking);


    if (isPlayerAttacking) {
      if (isEnemyAttacking) {

        currentEnemy1.health -= player.attack
        $("#enemyHealth").text(currentEnemy1.health);

        player.health -= currentEnemy1.attack
        $("#playerHealth").text(player.health);

      } else {
        var damage = player.attack - currentEnemy1.defense
        if (damage > 0) {
          currentEnemy1.health -= damage
          $("#enemyHealth").text(currentEnemy1.health);
        }
      }

    } else {
      if (isEnemyAttacking) {
        var damage = currentEnemy1.attack - player.defense
        if (damage > 0) {
          player.health -= damage
          $("#playerHealth").text(player.health);
        }
      }
    }


    // End battle

    //If you die
    if (player.health < 1) {
      gameScreen.popup.show();
      popups.died.show();
      player.health = 0;
      $('#playerHealth').val(player.health);
    }

    //If you win
    if (currentEnemy1.health < 1) {
      gameScreen.popup.show();
      popups.goldDrop.show();
      currentEnemy1.health = 0;
      player.gold += currentEnemy1.gold;
      $("#playerGold").text(player.gold);
      console.log("potion drop = " + enemyPotionDrop);
    }

    //write combat outcome
    $('#enemyHealth').val(currentEnemy1.health);
  }


  console.log($("#goldDrop"))
  $("#goldDrop").click(function () {

    if (enemyPotionDrop == 1) {
      popups.goldDrop.hide();
      popups.potionDrop.show();
      console.log("potion");
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
  });

  $("#potionDrop").click(function () {
    statContainer.enemy.hide();
    gameScreen.popup.hide();
    popups.potionDrop.hide();
    gameScreen.combat.hide();
    gameScreen.map.show();
  });



})



/*
function menuButton() {
 var menu = $("#menu-screen")
 if (menu === "shown") {
   menu.show();
 } else {
   menu.hide();
 }
}*/




$(function () {

  //Attack


  //Defend


  //Flee
  $('#fleeButton').click(function () {
    console.log(`Run awaaaaaaaaay!`)
  })


  var enemyPattern = [true, false, true]

  var roundCounter = 0;
  var goldCount = 0;


  var currentEnemy = {
    health: 100,
    attack: 9,
    defense: 8,
  }

  //combat logic



})