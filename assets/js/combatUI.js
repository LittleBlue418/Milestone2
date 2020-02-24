class CombatUI {
  constructor(gameButton, infoScreen) {
    this.firstCombat = true

    //Player Stats
    this.playerHealthText = $("#playerHealth")
    this.playerAttack = $("#playerAttack")
    this.playerDefence = $("#playerdefence")
    this.playerGold = $("#playerGold")

    //Enemy Stats
    this.enemyStatContainer = $(".enemy-stats")
    this.enemyHealthText = $("#enemyHealth")
    this.enemyAttack = $("#enemyAttack")
    this.enemyDefence = $("#enemydefence")
    this.enemyGold = $("#enemyGold")

    //Figures
    this.enemyFigure = $("#enemy")
    this.enemyLargeFigure = $("#enemy4")

    //Actions & Damage animations
    this.actionTextContainer = $(".action-text-container")
    this.damageTakenContainer = $(".damage-taken-text-container")

    this.heroineActionText = $(".heroine-action")
    this.heroineDamageTaken = $(".heroine-damage-taken")

    this.enemyActionText = $(".enemy-action")
    this.enemyDamageTaken = $(".enemy-damage-taken")

    //Round Counter
    this.roundCountText = $("#round-counter")

    //Loot drop animations
    this.goldDropText = $("#gold-drop-text")
    this.potionDropText = $("#potion-drop-text")

    this.goldDrop = $("#goldDrop")
    this.potionDrop = $("#potionDrop")
    this.deathScreen = $("#died")
    this.winFight = $("#winFight")

    //Set up
    this.winFight.hide();
    this.deathScreen.hide();
    this.goldDrop.hide();
    this.potionDrop.hide();

    this.gameButton = gameButton;
    this.infoScreen = infoScreen;
  }



  firstCombatPopup() {
    if (!this.firstCombat) {
      //Skip pop-up after first combat
      return Promise.resolve();
    }
    this.firstCombat = false;
    return this.infoScreen.showCombat();
  }

  showEnemyStatContainer() {
    this.enemyStatContainer.css("opacity", 1)
  }

  hideEnemyStatContainer() {
    this.enemyStatContainer.css("opacity", 0)
  }

  updateEnemyStats(currentEnemy) {
    this.enemyHealthText.text(currentEnemy.health + " / " + currentEnemy.maxHealth);
    this.enemyAttack.text(currentEnemy.attack);
    this.enemyDefence.text(currentEnemy.defence);
    this.enemyGold.text(currentEnemy.gold);
  }

  updatePlayerStats(player) {
    this.playerHealthText.text(player.health + " / " + player.maxHealth);
    this.playerAttack.text(player.attack);
    this.playerDefence.text(player.defence);
    this.playerGold.text(player.gold);
  }


  updateEnemyImage(currentEnemy) {
    this.enemyFigure.removeClass()
    this.enemyLargeFigure.removeClass()

    if (currentEnemy.level == 1) {
      this.enemyFigure.addClass("figure level1")
    } else if (currentEnemy.level == 2) {
      this.enemyFigure.addClass("figure level2")
    } else if (currentEnemy.level == 3) {
      this.enemyFigure.addClass("figure level3")
    } else if (currentEnemy.level == 4) {
      this.enemyFigure.addClass("figure")
      this.enemyLargeFigure.addClass("figureL level4")
    }
  }

  // Toggling buttons on the combat screen
  combatButtonsVisible(desiredVisible) {
    if (desiredVisible) {
      this.gameButton.defendButton.removeAttr('disabled');
      this.gameButton.attackButton.removeAttr('disabled');
      this.gameButton.fleeFight.removeAttr('disabled');
    } else {
      this.gameButton.defendButton.attr('disabled', 'disabled');
      this.gameButton.attackButton.attr('disabled', 'disabled');
      this.gameButton.fleeFight.attr('disabled', 'disabled');
    }
  }

  //Function for setting and animating player & enemy actions
  animateActions(isPlayerAttacking, isEnemyAttacking) {

    // Setting action text
    if (isPlayerAttacking) {
      this.heroineActionText.text("Attack!")
    } else {
      this.heroineActionText.text("Defend!")
    }
    this.heroineActionText.toggleClass('defending', !isPlayerAttacking)

    if (isEnemyAttacking) {
      this.enemyActionText.text("Attack!")
    } else {
      this.enemyActionText.text("Defend!")
    }
    this.enemyActionText.toggleClass('defending', !isEnemyAttacking)

    // Animate action text
    return this.actionTextContainer
      .animate({
        'opacity': 1,
      }, 700)
      .delay(300)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.actionTextContainer.removeAttr('style');
      })
      .promise()
  }

  // Function for setting and animating player & enemy damage taken
  animateDamage(playerDamageTaken, enemyDamageTaken) {

    // Setting damage taken text
    this.heroineDamageTaken.text("- " + playerDamageTaken)
    this.enemyDamageTaken.text("- " + enemyDamageTaken)

    // Animate damage taken text
    return this.damageTakenContainer
      .animate({
        'opacity': 1,
        'top': '35%',
      }, 700)
      .animate({
        'opacity': 0
      }, () => {

        // remove attributes
        this.damageTakenContainer.removeAttr('style');
      })
      .promise()
  }

  // Gold drop function if player wins fight
  goldDropAnimation(gold) {

    //change the game screen
    this.goldDrop.show();

    //Sets the gold number for the animation
    this.goldDropText.text("+ " + gold);


    var promise = new Promise((resolve, reject) => {

      //Remove any existing event handlers and then adds one
      this.goldDrop.off("click")
      this.goldDrop.on("click", () => {

        //Animates the gold
        this.goldDropText
          .animate({
            'opacity': 1,
            'top': '20%',
          }, 800)
          .animate({
            'opacity': 0
          }, 200, () => {

            //reset the animation
            this.goldDropText.removeAttr('style')
            this.goldDrop.hide();
            resolve()
          })
      })
    })
    return promise;
  }

  potionDropAnimation(healthPotionStrength) {
    //change the game screen
    this.potionDrop.show();

    //Sets the health number for the animation
    this.potionDropText.text("+ " + healthPotionStrength);

    var promise = new Promise((resolve, reject) => {

      //Remove any existing event handlers and then adds one
      this.potionDrop.off("click")
      this.potionDrop.on("click", () => {

        //Animates the health
        this.potionDropText
          .animate({
            'opacity': 1,
            'top': '20%',
          }, 800)
          .animate({
            'opacity': 0
          }, 200, () => {

            //reset the animation
            this.potionDropText.removeAttr('style')
            this.potionDrop.hide();
            resolve()
          })
      })
    })
    return promise;
  }

  died() {
    this.deathScreen.show();

    var promise = new Promise((resolve, reject) => {
      this.deathScreen.off("click")
      this.deathScreen.on("click", () => {
        this.deathScreen.hide();
        resolve()
      })
    })
    return promise;
  }

  roundCounterAnimation(roundCount) {
    this.roundCountText.text("Round " + (roundCount + 1));

    this.roundCountText.animate({
      'opacity': 0.7,
      'fontSize': 50,
    }, 900).animate({
      'opacity': 0,
    }, 200, () => {
      this.roundCountText.removeAttr('style')

      //eneble buttons
      this.combatButtonsVisible(true);
    })
  };

  youWin() {
    this.winFight.show();

    var promise = new Promise((resolve, reject) => {
      this.winFight.off("click")
      this.winFight.on("click", () => {
        this.winFight.hide();
        resolve()
      })
    })
    return promise;
  }
}
