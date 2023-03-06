const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "imagenes/istockphoto-1329876487-170667a.jpg",
  health: 60,
  diceCount: 3
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar:
    "imagenes/depositphotos_542324844-stock-photo-portrait-savage-orc-brute-wearing.jpg",
  health: 10,
  diceCount: 1
};

function getDiceRollArray(diceCount){
  
  return new Array(diceCount).fill(0).map(()=>{
    return Math.floor(Math.random() * 6)+ 1;
  })
}

function getDiceHtml(diceCount){
  return getDiceRollArray(diceCount).map(num=>{
    return `<div class="dice">${num}</div>`
  }).join('')
  };
  


function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data;
  
  const diceHtml = getDiceHtml(diceCount)

  document.getElementById(elementId).innerHTML = `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health}</b></p>
           
        ${diceHtml}
            
        
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
