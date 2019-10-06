//Player Stats
var playerStats = {
  health: 100,
  attack: 10,
  defense: 10,
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
  }

  var statContainer = {
    player: $(".player-stats-container"),
  }

  //Screens
  gameScreen.welcome.show();
  gameScreen.home.hide();
  gameScreen.combat.hide();
  gameScreen.victory.hide();
  gameScreen.map.hide();
  gameScreen.shop.hide();
  gameScreen.menu.hide();
  statContainer.player.hide();

  $("#welcome-screen .toHomeButton").click(function () {
    $("#playerHealth").text(playerStats.health);
    $("#playerAttack").text(playerStats.attack);
    $("#playerDefense").text(playerStats.defense);
    $("#playerGold").text(playerStats.gold);
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
  })

  //Shop Buttons
  $(".levelUpAttack").click(function () {
    if (playerStats.gold > 9) {
      playerStats.attack += 10;
      playerStats.gold -= 10;
      $("#playerAttack").text(playerStats.attack);
      $("#playerGold").text(playerStats.gold);

    }
  })

  $(".levelUpDefence").click(function () {
    if (playerStats.gold > 9) {
      playerStats.defense += 10;
      playerStats.gold -= 10;
      $("#playerDefense").text(playerStats.defense);
      $("#playerGold").text(playerStats.gold);

    }
  })



})





function levelUpAttackButton() {

}

function levelUpDefenseButton() {

}


function playerAttackButton() {

}

function playerDefendButton() {

}

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
  $('#attackButton').click(function () {
    resolveCombat(true)
  })

  //Defend
  $('#defendButton').click(function () {
    resolveCombat(false)
  })

  //Flee
  $('#fleeButton').click(function () {
    console.log(`Run awaaaaaaaaay!`)
  })


  var enemyPattern = [true, false, true]

  var roundCounter = 0;
  var goldCount = 0;

  var player = {
    health: 100,
    attack: 10,
    defense: 10
  }
  var currentEnemy = {
    health: 100,
    attack: 9,
    defense: 8,
  }

  //combat logic
  function resolveCombat(isPlayerAttacking) {
    player.health = parseInt($('#playerHealth').val());
    player.attack = parseInt($('#playerAttack').val());
    player.defense = parseInt($('#playerDefense').val());

    currentEnemy.health = parseInt($('#enemyHealth').val());
    currentEnemy.attack = parseInt($('#enemyAttack').val());
    currentEnemy.defense = parseInt($('#enemyDefense').val());

    var isEnemyAttacking = enemyPattern[roundCounter % enemyPattern.length];
    roundCounter++;

    if (isPlayerAttacking) {
      if (isEnemyAttacking) {
        currentEnemy.health -= player.attack
        player.health -= currentEnemy.attack
      } else {
        var damage = player.attack - currentEnemy.defense
        if (damage > 0) {
          currentEnemy.health -= damage
        }
      }

    } else {
      if (isEnemyAttacking) {
        var damage = currentEnemy.attack - player.defense
        if (damage > 0) {
          player.health -= damage
        }
      }
    }



    if (player.health < 1) {
      console.log("You died!")
      player.health = 0;
    }

    if (currentEnemy.health < 1) {
      console.log("Your enemy died!")
      currentEnemy.health = 0;
      //gold drop
      //potion drop
    }

    //write combat outcome
    $('#enemyHealth').val(currentEnemy.health);

    $('#playerHealth').val(player.health);

  }


})