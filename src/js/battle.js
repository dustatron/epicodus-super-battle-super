export class Battle {
  constructor(character, inventory) {
    this.state = 0;
    this.character = character;
    this.inventory = inventory;
  }

  updateInventory(action, testItem) {
    let that = this;
    let timesByAmount = this.inventory.items.length;
    let newItem;

    if (action === "hold") {
      that.character.user1.hp += 5;
      return "hold";
    } else if (action === "draw") {
      //for testing of random number
      if (testItem) {
        newItem = that.writeToFreeItem(testItem);
        that.dropItems(newItem);
      } else {
        newItem = that.writeToFreeItem(Math.floor(Math.random() * timesByAmount));
        that.dropItems(newItem);
      }
    } else {
      return "Error on draw";
    }
  }

  runAttack(action, testDice20, testDice6) {
    let that = this;

    if (action === "hold") {
      that.character.user1.hp += 10;
      this.character.advanceTurn();
      return "hold";
    } else if (action === "attack") {
      //get armor for the target user
      let armor;
      if (that.character.getUser() === "user1") {
        armor = that.character.user2.armor;
      } else {
        armor = that.character.user1.armor;
      }

      if (testDice20) {
        //run test attack
        if (that.hitOrMiss(testDice20, armor)) {
          that.isHit(testDice6);
          this.character.advanceTurn();
        } else {
          return "miss";
        }
        return "attack";
      }
    } else {
      let armor;
      if (that.character.getUser() === "user1") {
        armor = that.character.user2.armor;
      } else {
        armor = that.character.user1.armor;
      }
      //run attack with random numbers
      if (that.hitOrMiss(that.rollDice(20), armor)) {
        that.isHit(that.rollDice(6));
        this.character.advanceTurn();
      } else {
        return "miss";
      }
      return "attack";
    }
  }

  writeToFreeItem(index) {
    let that = this;
    if (this.inventory.items[index].id === "none") {
      that.inventory.items[index].id = that.character.getUser();
      return that.inventory.items[index].id;
    } else {
      // let newIndex = index + 1;
      // writeToFreeItem(newIndex);

      return "Item has user";
    }
  }

  dropItems(newItem) {
    for (let i = 0; i < this.inventory.items.length; i++) {
      let item = this.inventory.items[i];
      if (item.id === newItem.id && item.name !== newItem.name) {
        item.id = "none";
      }
    }
  }

  rollDice(size) {
    return Math.ceil(Math.random() * size);
  }

  hitOrMiss(roll, armor) {
    if (armor >= roll) {
      return false;
    } else if (armor <= roll) {
      return true;
    } else {
      return "hit or miss error";
    }
  }

  isHit(roll) {
    let that = this;
    if (that.character.getUser() === "user1") {
      that.character.user2.hp -= roll;
      return roll;
    } else if (that.character.getUser() === "user2") {
      that.character.user1.hp -= roll;
      return roll;
    } else {
      return "fail";
    }
  }
}
