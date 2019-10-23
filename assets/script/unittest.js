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
      player.takeDamage(10);
      expect(player.health).toBe(90);
    })
    it("Player health should be set to zero if the damage is greater than the remaining health", function () {
      player.takeDamage(101);
      expect(player.health).toBe(0);
    })
  })

  describe("Player drink health potion", function () {
    it("Should restore health if the player has lost health", function () {
      player.takeDamage(20);
      player.drinkPotion(12);
      expect(player.health).toBe(92);
    })
    it("Should only restore up to player max health", function () {
      player.takeDamage(20);
      player.drinkPotion(22);
      expect(player.health).toBe(100);
    })
    it("Should not restore health if the player has max health", function () {
      player.drinkPotion(22);
      expect(player.health).toBe(100);
    })
  })

});
