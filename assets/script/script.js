$(function () {

  var isEnemyAttacking = true;

  //Attack
  $('#attackButton').click(function () {

    //import variables
    var playerHealth = parseInt($('#playerHealth').val())
    var playerAttack = parseInt($('#playerAttack').val())
    var playerDefense = parseInt($('#playerDefense').val())

    var enemyHealth = parseInt($('#enemyHealth').val())
    var enemyAttack = parseInt($('#enemyAttack').val())
    var enemyDefense = parseInt($('#enemyDefense').val())

    //combat logic
    if (isEnemyAttacking) {
      enemyHealth -= playerAttack
      playerHealth -= enemyAttack
    } else {
      var damage = playerAttack - enemyDefense
      if (damage > 0) {
        enemyHealth -= damage
      }
    }

    //write combat outcome
    $('#enemyHealth').val(enemyHealth);

    $('#playerHealth').val(playerHealth);

    isEnemyAttacking = !isEnemyAttacking
  })

//Defend
  $('#defendButton').click(function () {

    var playerHealth = parseInt($('#playerHealth').val())
    var playerAttack = parseInt($('#playerAttack').val())
    var playerDefense = parseInt($('#playerDefense').val())

    var enemyHealth = parseInt($('#enemyHealth').val())
    var enemyAttack = parseInt($('#enemyAttack').val())
    var enemyDefense = parseInt($('#enemyDefense').val())

    //combat logic
    if (isEnemyAttacking) {
      var damage = enemyAttack - playerDefense
        if (damage > 0) {
          playerHealth -= damage
        }
    }

    //write combat outcome
    $('#enemyHealth').val(enemyHealth);

    $('#playerHealth').val(playerHealth);

    isEnemyAttacking = !isEnemyAttacking
  })





  $('#fleeButton').click(function () {
    console.log(`Run awaaaaaaaaay!`)
  })
})