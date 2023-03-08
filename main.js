import { CharacterData } from "./data.js";
import { Character } from "./Character.js";


const wizard = new Character(CharacterData.hero);
const orc = new Character(CharacterData.monster);

function render() {
  document.getElementById('hero').innerHTML =
    wizard.getCharacterHtml();
  document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}
render();


