import { getDicePlaceholderHtml, getDiceRollArray,getPercentage } from "./utils.js";


export function Character(data) {
  Object.assign(this, data);

  this.maxHealth = this.health;

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, num) => total + num
    );
    this.health -= totalAttackScore;
    if (this.health < 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  this.getHealthBarHtml = function () {
    const percent = getPercentage(this.health, this.maxHealth)
    
    return `
    <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
        style="width: ${percent}%;">
        </div>
    </div>`
}

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  this.getCharacterHtml = function () {
    const { elementId, name, avatar, health, diceCount, diceArray } = this;

    const diceHtml = this.getDiceHtml(diceCount);
    const healthBar = this.getHealthBarHtml()

    return `<div class="character-card">
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/>
          <p class="health">health: <b> ${health}</b></p>
          ${healthBar}
          ${diceArray}
              
          
      </div>`;
  };
}
