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

  //combat logic
  function resolveCombat(isPlayerAttacking) {
    var playerHealth = parseInt($('#playerHealth').val());
    var playerAttack = parseInt($('#playerAttack').val());
    var playerDefense = parseInt($('#playerDefense').val());

    var enemyHealth = parseInt($('#enemyHealth').val());
    var enemyAttack = parseInt($('#enemyAttack').val());
    var enemyDefense = parseInt($('#enemyDefense').val());

    var isEnemyAttacking = enemyPattern[roundCounter % enemyPattern.length];
    roundCounter++;

    if (isPlayerAttacking) {
      if (isEnemyAttacking) {
        enemyHealth -= playerAttack
        playerHealth -= enemyAttack
      } else {
        var damage = playerAttack - enemyDefense
        if (damage > 0) {
          enemyHealth -= damage
        }
      }

    } else {
      if (isEnemyAttacking) {
        var damage = enemyAttack - playerDefense
        if (damage > 0) {
          playerHealth -= damage
        }
      }
    }



    if (playerHealth < 1) {
      console.log("You died!")
      playerHealth = 0;
    }

    if (enemyHealth < 1) {
      console.log("Your enemy died!")
      enemyHealth = 0;
      //gold drop
      //potion drop
    }

    //write combat outcome
    $('#enemyHealth').val(enemyHealth);

    $('#playerHealth').val(playerHealth);

  }


})