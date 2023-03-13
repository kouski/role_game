function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => 
       Math.floor(Math.random() * 6) + 1);
  }

function getDicePlaceholderHtml(diceCount){
  return new Array(diceCount).fill(0).map(()=>
    `<div class="placeholder-dice"></div>`).join('')
};

const getPercentage = (remaining, max) => {
  return ((100 * remaining) / max).toFixed(2);
};

export {getDiceRollArray,getDicePlaceholderHtml,getPercentage}