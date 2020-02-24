// The shop animations and logic

class Shop {
  constructor(infoScreen, combatUI) {
    //Popups
    this.spentAttack = $("#gold-spent-text-attack")
    this.spentDefence = $("#gold-spent-text-defence")
    this.attackLevelUp = $("#attack-level-up-text")
    this.defenceLevelUp = $("#defence-level-up-text")

    //Stat fields
    this.shopAttackCost = $("#upgrade-attack-cost")
    this.shopDefenceCost = $("#upgrade-defence-cost")

    //Heroine sword and shield
    this.heroineSword = $("#heroine-sword")
    this.heroineShield = $("#heroine-shield")

    //cost tracking variables
    this.attackLevelUpCost = 25;
    this.defenceLevelUpCost = 25;

    //Binding the value of 'this'
    this.levelUpAttack = this.levelUpAttack.bind(this);
    this.levelUpDefence = this.levelUpDefence.bind(this);
    this.updateShopText = this.updateShopText.bind(this);
    this.updatePlayerImage = this.updatePlayerImage.bind(this);
    this.animateAttackSpend = this.animateAttackSpend.bind(this);
    this.animateAttackUpgrade = this.animateAttackUpgrade.bind(this);
    this.animateDefenceSpend = this.animateDefenceSpend.bind(this);
    this.animateDefenceUpgrade = this.animateDefenceUpgrade.bind(this);

    // Importing the info screen
    this.infoScreen = infoScreen
    this.combatUI = combatUI
  }

  levelUpAttack(player) {
    //Check player max level
    if (player.attack >= 90) {
      this.infoScreen.showLevel();
      return;
    }

    //check player gold
    if (player.gold < this.attackLevelUpCost) {
      this.infoScreen.showGold();
      return;
    }

    //If player can level up and can afford to level up
    player.attack += 5;
    player.gold -= this.attackLevelUpCost;
    this.combatUI.updatePlayerStats(player);
    this.spentAttack.text("- " + this.attackLevelUpCost);
    this.attackLevelUpCost += 5;
    //update signs
    //update the animation

    this.animateAttackSpend()
      .then(this.animateAttackUpgrade)
      .then(this.updateShopText);
  }

  levelUpDefence(player) {
    //Check player max level
    if (player.defence >= 90) {
      this.infoScreen.showLevel();
      return;
    }

    //check player gold
    if (player.gold < this.defenceLevelUpCost) {
      this.infoScreen.showGold();
      return;
    }

    //If player can level up and can afford to level up
    player.defence += 5;
    player.gold -= this.defenceLevelUpCost;
    this.combatUI.updatePlayerStats(player);
    this.spentDefence.text("- " + this.defenceLevelUpCost);
    this.defenceLevelUpCost += 5;
    //update signs
    //update the animation

    this.animateDefenceSpend()
      .then(this.animateDefenceUpgrade)
      .then(this.updateShopText);
  }

  updateShopText() {
    this.shopAttackCost.text(this.attackLevelUpCost);
    this.shopDefenceCost.text(this.defenceLevelUpCost);
  }


  updatePlayerImage(player) {
    if (player.attack > 29 && player.attack < 59) {
      this.heroineSword.removeClass("sword-wood");
      this.heroineSword.addClass("sword-basic");
    } else if (player.attack > 59 && player.attack < 90) {
      this.heroineSword.removeClass("sword-basic");
      this.heroineSword.addClass("sword-fancy");
    } else if (player.attack == 90) {
      this.heroineSword.removeClass("sword-fancy");
      this.heroineSword.addClass("sword-magic");
    }

    if (player.defence > 29 && player.defence < 59) {
      this.heroineShield.removeClass("shield-wood");
      this.heroineShield.addClass("shield-basic");
    } else if (player.defence > 59 && player.defence < 90) {
      this.heroineShield.removeClass("shield-basic");
      this.heroineShield.addClass("shield-fancy");
    } else if (player.defence == 90) {
      this.heroineShield.removeClass("shield-fancy");
      this.heroineShield.addClass("shield-magic");
    }
  }

  animateAttackSpend() {
    return this.spentAttack
      .animate({
        'opacity': 1,
        'top': '45%',
      }, 700)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.spentAttack.removeAttr('style');
      })
      .promise()
  }

  animateAttackUpgrade() {
    return this.attackLevelUp
      .animate({
        'opacity': 1,
        'top': '45%',
      }, 700)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.attackLevelUp.removeAttr('style');

      })
      .promise()
  }

  animateDefenceSpend() {
    return this.spentDefence
      .animate({
        'opacity': 1,
        'top': '45%',
      }, 700)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.spentDefence.removeAttr('style');

      })
      .promise()
  }

  animateDefenceUpgrade() {
    return this.defenceLevelUp
      .animate({
        'opacity': 1,
        'top': '45%',
      }, 700)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.defenceLevelUp.removeAttr('style');
      })
      .promise()
  }



}