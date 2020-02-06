import "./scss/main.scss";
import $ from "jquery";
// import { pingPong } from './ping-pong';
import { Battle } from "./js/battle.js";
import { Character } from "./js/character.js";
import { Inventory } from "./js/inventory.js";

var inventory = new Inventory();
var character = new Character();
var battle = new Battle(character, inventory);

$(document).ready(function() {
  $(".pick-golden-girl").on("click", "div", function() {
    // character.pickGoldenGirl(this.id);
    console.log(character.pickGoldenGirl(parseInt(this.id)));
    console.log(battle);
    console.log(character.user1);
    console.log(character.user2);
  });
});
