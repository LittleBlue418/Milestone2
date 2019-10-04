//On load function - hide all other screens
function onLoadFunction() {
  var home = document.getElementById("home-screen");
  var fight = document.getElementById("fight-screen");
  var victory = document.getElementById("victory-screen");
  var map = document.getElementById("map-screen");
  var shop = document.getElementById("shop-screen");
  var menu = document.getElementById("menu-screen");

  home.style.display = "none";
  fight.style.display = "none";
  victory.style.display = "none";
  map.style.display = "none";
  shop.style.display = "none";
  menu.style.display = "none";

}

//Button functions
function toHomeButton() {
  var home = document.getElementById("home-screen");
  home.style.display = "block";

  var welcome = document.getElementById("welcome-screen");
  welcome.style.display = "none";
  var shop = document.getElementById("shop-screen");
  shop.style.display = "none";
}

function toShopButton() {
  var shop = document.getElementById("shop-screen");
  shop.style.display = "block";

  var home = document.getElementById("home-screen");
  home.style.display = "none";
}
function toMapButton() {
  var map = document.getElementById("map-screen");
  map.style.display = "block";

  var home = document.getElementById("home-screen");
  home.style.display = "none";
}

function levelUpAttackButton() {

}

function levelUpDefenseButton() {

}



function testFunction() {
  var x = document.getElementById("menu-screen");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
}

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