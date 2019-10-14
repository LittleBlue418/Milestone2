//New level up function

var defenceLevelUpCost = 25;
var attackLevelUpCost = 25;

//true for level up attack, false for level up defence
var levelAttack = true


function levelUp(levelAttack) {}
  //if level up attack
  if (levelAttack == true) {

    //if player has enough gold
    if (player.gold >= attackLevelUpCost) {

      //check current player attack rating
      if (player.attack < 20) {
        player.attack += 5;
        player.gold -= attackLevelUpCost;
        $("#playerAttack").text(player.attack);
        $("#playerGold").text(player.gold);
        levelUpAnimation(red)
        minusGoldAnimation(attackLevelUpCost)
        attackLevelUpCost +5

      } else if (player.attack < 30) {

      } else if (player.attack < 40) {

      } else if (player.attack < 50) {

      } else if (player.attack < 60) {

      } else if (player.attack < 70) {

      } else if (player.attack < 80) {

      } else if (player.attack <= 90) {
        alert("You have reached manimum attack level")
      } else {

      }
    } else {
      alert("You do not have enough gold to level up")
    }
    //if level up defence
  } else if (levelAttack == false) {

  }
}

levelUpAnimation(color) {
  //an animation to have a +5 animation above the player head
  //colour of animation defined by the attack or defend
  // attack red, defend blue. same animation
}

minusGoldAnimation(number) {
  //an animation to have a minus number over the player head
  //shows gold spent in shop
  //takes the gold cost for the level up
}