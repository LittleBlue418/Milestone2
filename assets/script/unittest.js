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
    it("Should return false when player health is positive", function() {
      expect(player.isDead()).toBe(false);
    });
    it("Should return true when player health is zero", function() {
      player.health = 0;
      expect(player.isDead()).toBe(true);
    })
    it("Should return true when player health is negative", function() {
      player.health = -1;
      expect(player.isDead()).toBe(true);
    })
  });

});
