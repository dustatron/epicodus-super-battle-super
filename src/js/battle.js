export class Battle {
    constructor(character, inventory) {
        this.state = 0;
        this.character = character;
        this.inventory = inventory
        
    }

    updateInventory(action, testItem){
        let that = this;
        if (action === "hold") {
            that.character.user1.hp +=5;
            return "hold"
        } else if (action === "draw"){
            if(testItem){
                that.inventory.items[testItem].id = that.character.getUser();
                return that.inventory.items[testItem].id;
            }
        } else {
            return "Error on draw"
        }
        //check action.
        //if hold do nothing
        //else grab random item and take away old item
        //add user to inventory item and/or remove from item.
    };

    runAttack(action){
        //check action.
        //if is 'hold' add 5 point to HP
        //advanceTurn()

        //if attack is 'attack' do math.
        //update user totals.
        //check user is still alive.
        //advanceTurn()
    }



}