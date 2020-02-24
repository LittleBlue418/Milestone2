// A class for showing and hiding the pop up info screens to give the
// player hints about game play and objectives

class InfoScreen {
  constructor() {
    this.infoScreen = $("#info-screen")
    this.infoCat = $("#info-cat")
    this.allText = $(".speach-bubble p")
    this.welcomeText = $("#info-welcome-text")
    this.goldText = $("#info-gold-text")
    this.levelText = $("#info-level-text")
    this.combatText = $("#info-combat-text")
    this.okButton = $(".info-ok")
  }

  hide() {
    this.infoScreen.hide();
  }

  showWelcome() {
    this.allText.hide()
    this.infoCat.removeClass()
    this.infoCat.addClass("info-cat-sad-image")
    this.welcomeText.show()
    this.infoScreen.show()
    return this.getOkPromise()
  }

  showGold() {
    this.allText.hide()
    this.infoCat.removeClass()
    this.infoCat.addClass("info-cat-sad-image")
    this.goldText.show()
    this.infoScreen.show()
    return this.getOkPromise()
  }

  showLevel() {
    this.allText.hide()
    this.infoCat.removeClass()
    this.infoCat.addClass("info-cat-sad-image")
    this.levelText.show()
    this.infoScreen.show()
    return this.getOkPromise()
  }

  showCombat() {
    this.allText.hide()
    this.infoCat.removeClass()
    this.infoCat.addClass("info-cat-combat-image")
    this.combatText.show()
    this.infoScreen.show()
    return this.getOkPromise()
  }

  getOkPromise() {
    var promise = new Promise((resolve, reject) => {
      this.okButton.off("click")
      this.okButton.on("click", () => {
        this.hide()
        resolve()
      })
    });
    return promise;
  }

}