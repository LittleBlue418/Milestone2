describe("Player tests", function () {

  beforeEach(function () {
    player = new Player;
  });

  describe("New Player instance", function () {
    it("should have maxHealth equal to playerMaxHealth", function () {
      expect(player.maxHealth).toBe(playerMaxHealth);
    });
    it("should have health equal to maxHealth", function () {
      expect(player.health).toBe(player.maxHealth);
    });
  });

  describe("Player Death", function () {
    it("Should return false when player health is positive", function () {
      expect(player.isDead()).toBe(false);
    });
    it("Should return true when player health is zero", function () {
      player.health = 0;
      expect(player.isDead()).toBe(true);
    })
    it("Should return true when player health is negative", function () {
      player.health = -1;
      expect(player.isDead()).toBe(true);
    })
  });

  describe("Player damage taken", function () {
    it("Should remove damage ammount from health", function () {
      player.takeDamage(player.health-1);
      expect(player.health).toBe(1);
    })
    it("Player health should be set to zero if the damage is greater than the remaining health", function () {
      player.takeDamage(player.health+1);
      expect(player.health).toBe(0);
    })
  })

  describe("Player drink health potion", function () {
    it("Should restore health if the player has lost health", function () {
      player.health = 0;
      player.drinkPotion(1);
      expect(player.health).toBe(1);
    })
    it("Should only restore up to player max health", function () {
      player.health = player.maxHealth - 1;
      player.drinkPotion(2);
      expect(player.health).toBe(player.maxHealth);
    })
  })

});
