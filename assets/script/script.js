//On load function - hide all other screens
$(function () {
  var welcome = $("#welcome-screen");
  var home = $("#home-screen");
  var combat = $("#combat-screen");
  var victory = $("#victory-screen");
  var map = $("#map-screen");
  var shop = $("#shop-screen");
  var menu = $("#menu-screen");

  welcome.show();
  home.hide();
  combat.hide();
  victory.hide();
  map.hide();
  shop.hide();
  menu.hide();

  //Nagivation buttons
  $(".toHomeButton").click(function() {
    $(this).parents(".game-screen").hide();
    home.show();
  })

  $(".toShopButton").click(function() {
    $(this).parents(".game-screen").hide();
    shop.show();
  })

  $(".toMapButton").click(function() {
    $(this).parents(".game-screen").hide();
    map.show();
  })

  $(".toCombatButton").click(function() {
    $(this).parents(".game-screen").hide();
    combat.show();
  })

})

//Button functions


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