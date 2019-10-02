$(function () {

  var isEnemyAttacking = true;

  $('#attackButton').click(function () {

//import variables
    var playerHealth = parseInt($('#playerHealth').val())
    var playerAttack = parseInt($('#playerAttack').val())
    var playerDefense = parseInt($('#playerDefense').val())

    var enemyHealth = parseInt($('#enemyHealth').val())
    var enemyAttack = parseInt($('#enemyAttack').val())
    var enemyDefense = parseInt($('#enemyDefense').val())

//combat logic
console.log(isEnemyAttacking)

//write combat outcome
    $('#enemyHealth').val(enemyHealth);

    $('#playerHealth').val(playerHealth);

    isEnemyAttacking = !isEnemyAttacking
  })


  $('#defendButton').click(function () {
    console.log(`Defend`)
  })





  $('#fleeButton').click(function () {
    console.log(`Run awaaaaaaaaay!`)
  })
})