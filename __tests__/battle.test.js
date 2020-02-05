import { Battle } from './../src/js/battle.js';
import { exportAllDeclaration } from '@babel/types';
import { Character } from './../src/js/character.js';
import { Inventory } from './../src/js/inventory.js';


describe('Battle Object', () => {
  test('should create a new battle object', () => {
    var battle = new Battle();
    expect(battle).toEqual({ state: 0 })
  });
});

describe('update inventory', () => {
  var inventory = new Inventory();
  var character = new Character();
  var battle = new Battle(character, inventory);
  test('should return hold', () => {
    expect(battle.updateInventory("hold")).toEqual("hold")
  });
  test('should return user1s health increased by 5 hp',() => {
    character.user1 = { id: 1, name: "Sophia Petrillo", hp: 65, armor: 35, magic: 10, img: '' }
    battle.updateInventory("hold");
    expect(character.user1.hp).toEqual(70);
  })
});