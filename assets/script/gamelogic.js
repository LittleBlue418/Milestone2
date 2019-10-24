/*
 =================================
    Math Functions
 =================================
 */

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

function randomBool(probability) {
  return Math.random() < probability;
};

/*
=================================
  Player
=================================
*/
const playerMaxHealth = 100;

class Player {
  constructor() {
    this.health = playerMaxHealth;
    this.maxHealth = playerMaxHealth;
    this.attack = 10;
    this.defence = 10;
    this.gold = 0;
  };

  isDead() {
    return (this.health < 1);
  }

  takeDamage(damageTaken) {
    this.health = Math.max(this.health - damageTaken, 0);
  }

  drinkPotion(healthPotionStrength) {
    this.health = Math.min(this.health + healthPotionStrength, this.maxHealth);
  }
}

/*
=================================
  Enemy
=================================
*/

class EnemyBase {
  constructor(health, attackPattern) {
    this.health = health;
    this.maxHealth = health;
    this.attackPattern = attackPattern;
  };

  takeDamage(damageTaken) {
    this.health = Math.max(this.health - damageTaken, 0);
  }

  isEnemyAttacking(roundCount) {
    return this.attackPattern[roundCount % this.attackPattern.length];
  }

  isDead() {
    return (this.health < 1);
  }
}

class Enemy1 extends EnemyBase {
  constructor() {

    var health = randomInteger(30, 40);
    var attackPattern = [true, false, true];

    super(health, attackPattern);

    this.attack = randomInteger(8, 9);
    this.defence = randomInteger(7, 9);
    this.gold = randomInteger(10, 14);
    this.level = 1;


    if (randomBool(0.5)) {
      this.healthPotionStrength = 10;
    } else {
      this.healthPotionStrength = 0;
    }
  }
};

class Enemy2 extends EnemyBase {
  constructor() {
    var health = randomInteger(45, 50);
    var attackPattern = [true, false, true, false];

    super(health, attackPattern);

    this.attack = randomInteger(25, 30);
    this.defence = randomInteger(35, 40);
    this.gold = randomInteger(30, 40);
    this.level = 2;


    if (randomBool(0.333)) {
      this.healthPotionStrength = 25;
    } else {
      this.healthPotionStrength = 0;
    }
  }
}

class Enemy3 extends EnemyBase {
  constructor() {
    var health = randomInteger(55, 60);
    var attackPattern = [true, false, true, true, false];

    super(health, attackPattern);

    this.attack = randomInteger(55, 50);
    this.defence = randomInteger(40, 45);
    this.gold = randomInteger(50, 60);
    this.level = 3;


    if (randomBool(0.25)) {
      this.healthPotionStrength = 35;
    } else {
      this.healthPotionStrength = 0;
    }
  }
}

class Enemy4 extends EnemyBase {
  constructor() {
    var health = 100;
    var attackPattern = [true, false, true, true, true, false];

    super(health, attackPattern);

    this.attack = 95;
    this.defence = 75;
    this.gold = 0;
    this.level = 4;
    this.healthPotionStrength = 0;
  }
}
