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

describe("Enemy tests", function () {

  beforeEach(function () {
    enemy = new EnemyBase(10, [true, false]);
  });

  describe("New Enemy instance", function () {
    it("should have health equal to maxHealth", function () {
      expect(enemy.health).toBe(enemy.maxHealth);
    });
  });

  describe("Enemy Death", function () {
    it("Should return false when enemy health is positive", function () {
      expect(enemy.isDead()).toBe(false);
    });
    it("Should return true when enemy health is zero", function () {
      enemy.health = 0;
      expect(enemy.isDead()).toBe(true);
    })
    it("Should return true when enemy health is negative", function () {
      enemy.health = -1;
      expect(enemy.isDead()).toBe(true);
    })
  });

  describe("Enemy damage taken", function () {
    it("Should remove damage ammount from health", function () {
      enemy.takeDamage(enemy.health-1);
      expect(enemy.health).toBe(1);
    })
    it("Enemy health should be set to zero if the damage is greater than the remaining health", function () {
      enemy.takeDamage(enemy.health+1);
      expect(enemy.health).toBe(0);
    })
  })

  describe("Enemy attack function", function () {
    it("Should pick action from pattern according to round", function () {
      var x = enemy.isEnemyAttacking(1);
      expect(x).toBe(enemy.attackPattern[1]);
    })
    it("Attack pattern should wrap around", function () {
      var x = enemy.isEnemyAttacking(enemy.attackPattern.length+1);
      expect(x).toBe(enemy.attackPattern[1]);
    })
  })



});