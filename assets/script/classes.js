
const playerMaxHealth = 100;

class Player {
  constructor() {
    this.health = playerMaxHealth;
    this.maxHealth = playerMaxHealth;
    this.attack = 10;
    this.defense = 10;
    this.gold = 0;
    this.combatPopUp = true;
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