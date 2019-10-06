//On load function - hide all other screens
$(function () {
  var welcome = $("#welcome-screen");
  var home = $("#home-screen");
  var fight = $("#fight-screen");
  var victory = $("#victory-screen");
  var map = $("#map-screen");
  var shop = $("#shop-screen");
  var menu = $("#menu-screen");

  welcome.show();
  home.hide();
  fight.hide();
  victory.hide();
  map.hide();
  shop.hide();
  menu.hide();

})

//Button functions
function toHomeButton() {
  var home = $("#home-screen");
  home.show();

  var welcome = $("#welcome-screen");
  welcome.hide();
  var shop = $("#shop-screen");
  shop.hide();
  var map = $("#map-screen");
  map.hide();
}

function toShopButton() {
  var shop = $("#shop-screen");
  shop.show();

  var home = $("#home-screen");
  home.hide();
}

function toMapButton() {
  var map = $("#map-screen");
  map.show();

  var home = $("#home-screen");
  home.hide();
}

function levelUpAttackButton() {

}

function levelUpDefenseButton() {

}

function toCombatButton() {
  //changes screen
  var fight = $("#fight-screen");
  fight.show();

  var map = $("#map-screen");
  map.hide();

  //log which enemy button was pressed
  // -> set current enemy graphics
  // -> set current enemy stats
  // -> begin combat round
}

function playerAttackButton() {

}

function playerDefendButton() {

}

function runAwayButton() {
  //are you sure dialogue box
  var fight = $("#fight-screen");
  fight.hide();

  var map = $("#map-screen");
  map.show();
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