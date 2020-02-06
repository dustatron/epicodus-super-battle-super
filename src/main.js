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
    character.pickGoldenGirl(parseInt(this.id));
    $(this).addClass("bg-success");

    console.log(battle);
  });

  $("#start").click(function() {
    if (character.turnCount >= 3) {
      present();
      $(".pick-golden-girl").slideUp();
      $(".battle-board").slideDown();
      $("#start").slideUp();
      $("#turn-name").fadeIn();
    } else {
      alert("Pick a golden girl");
    }
  });

  $(".draw-hold").on("click", "button", function() {
    battle.updateInventory(this.name);
    $(".draw-hold").slideUp();
    $(".attack-hold").slideDown();
    present();
  });

  $(".attack-hold").on("click", "button", function() {
    battle.runAttack(this.name);
    $(".draw-hold").slideDown();
    $(".attack-hold").slideUp();
    console.log("turn", character.turnCount);
    present();
    turnalert();
  });

  function turnalert() {
    $("#active-user").html(character.user1.name);
    $("#inactive-user").html(character.user2.name);
    $("#attack-hp").html(battle.dice6);
    $(".turn-alert").fadeIn();
  }

  function present() {
    if (character.getUser() === "user1") {
      $("#current-user-name").html(character.user1.name);
    } else {
      $("#current-user-name").html(character.user2.name);
    }

    $("#user1-title").html(character.user1.name);
    $("#user1-img").attr("src", character.user1.img);

    $("#user2-title").html(character.user2.name);
    $("#user2-img").attr("src", character.user2.img);

    $("#user1-hp").html(character.user1.hp);
    $("#user2-hp").html(character.user2.hp);

    $("#user1-armor").html(character.user1.armor);
    $("#user2-armor").html(character.user2.armor);
    console.log(inventory.items);

    inventory.items.forEach((item) => {
      if (item.id !== "none") {
        if (item.id === "user1") {
          $("#user1-inventory").html(item.name);
        } else if (item.id === "user2") {
          $("#user2-inventory").html(item.name);
        }
      }
    });
  }
});
