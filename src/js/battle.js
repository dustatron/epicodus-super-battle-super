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

  runAttack(action) {
    let that = this;

    if (action === "hold") {
      that.character.user1.hp += 10;
      this.character.advanceTurn();
      return "hold";
    } else if (action === "attack") {
      return "attack";
    }
    //advanceTurn()
    //if attack is 'attack' do math.
    //update user totals.
    //check user is still alive.
    //advanceTurn()
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

  hitOrMiss(roll, target) {
    const armor = target.armor;
    if (armor >= roll) {
      return false;
    } else if (armor <= roll) {
      return true;
    }
  }

  isHit(roll) {
    let that = this;
    if (that.character.getUser() === "user1") {
      console.log(that.character.user2.hp);
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
